// A simple Express server with intentional vulnerabilities
const express = require('express');
const app = express();
const port = 8080;

// VULNERABILITY: Cross-Site Scripting (XSS)
// This endpoint insecurely renders user-provided input.
// Demo: Visit /?name=<script>alert('XSS')</script>
app.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  
  // INSECURE: Directly embedding user input into the HTML.
  res.send(`
    <div style="font-family: sans-serif; padding: 20px;">
      <h1>Welcome, ${name}</h1>
      <p>Enter your name in the URL with ?name=YourName</p>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Vulnerable app listening on port ${port}`);
});