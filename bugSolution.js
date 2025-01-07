const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random error
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong'));
    } else {
      resolve();
    }
  });
} 