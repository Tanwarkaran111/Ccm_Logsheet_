import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

const DATA_FILE = path.join(process.cwd(), "history.json");

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(bodyParser.json());

  // API Routes
  app.get("/api/history", (req, res) => {
    try {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: "Failed to read history" });
    }
  });

  app.post("/api/history", (req, res) => {
    try {
      const newEntry = req.body;
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      const history = JSON.parse(data);
      history.push(newEntry);
      fs.writeFileSync(DATA_FILE, JSON.stringify(history, null, 2));
      res.json({ success: true, count: history.length });
    } catch (error) {
      res.status(500).json({ error: "Failed to save entry" });
    }
  });

  // Clear history (optional helper)
  app.delete("/api/history", (req, res) => {
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify([]));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to clear history" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
