require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend running');
});

app.post('/generate', async (req, res) => {
  try {
    const { style } = req.body;

    console.log("Style:", style);

    // Simulated AI outputs (fast + stable)
    const images = {
      Cartoon: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      Anime: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      Pixel: "https://images.unsplash.com/photo-1612832021026-0c0a7e4f6f2c",
      Sketch: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      Flat: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    };

    res.json({
      output: images[style] || images["Cartoon"]
    });

  } catch (error) {
    res.status(500).json({ error: "Failed" });
  }
});

app.listen(5000, '0.0.0.0', () => {
  console.log("Server running on port 5000");
});  