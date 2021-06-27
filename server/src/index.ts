import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";
import Messages, { IUser } from "./dbMessages";
import Pusher from "pusher";

// App Config
const app = express();
const PORT = process.env.PORT;

// pusher Config
const pusher = new Pusher({
  appId: process.env.PUSHER_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.CLUSTER!,
  useTLS: true,
});

// Middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

/* DB config */
mongoose.connect(process.env.DATABASE_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      (async () => {
        const messageDetails = change.fullDocument;
        await pusher.trigger("messages", "inserted", {
          name: messageDetails.name,
          message: messageDetails.message,
        });
      })();
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

// API routes
app.get("/messages/sync", (_, res: Response) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// API Endpoints
app.get("/", (_, res: Response) => {
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
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}!`);
});
