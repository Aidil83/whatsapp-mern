import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 3001;
const connection_url =
  "mongodb+srv://admin:CoRrtKEm0AY60fbn@cluster0.cqopk.mongodb.net/whatsappdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());

/* DB config */
mongoose.connect(connection_url, {
  useNewUrlParser: true,
});

// API Endpoints
app.get("/", (req, res) => {
  return res.status(200).send("HELLO EVERYONE");
});
// Listener
app.listen(port, () => {
  console.log(`Server Running on port ${port}!`);
});
