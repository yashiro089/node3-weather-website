const express = require('express');
const app = express();

// route, function
app.get('', (req, res) => {
  res.send('Hello express');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is up on port ' + PORT);
});
