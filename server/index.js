const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.arguments(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('*', (req, res) =>{
  res.sendfile(path.resolve(__dirname, '../client/build', 'índex.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




