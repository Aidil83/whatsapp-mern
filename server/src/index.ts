import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import Messages, { IUser } from "./dbMessages";

// App Config
const app = express();
const port = process.env.PORT || 9000;
const uri =
  "mongodb+srv://admin:CoRrtKEm0AY60fbn@cluster0.cqopk.mongodb.net/whatsappdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

/* DB config */
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API routes
app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// API Endpoints
app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("HELLO EVERYONE");
});
app.post("/messages/new", (req: Request, res: Response) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err: Error, data: IUser) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// Listener
app.listen(port, () => {
  console.log(`Server Running on port ${port}!`);
});
