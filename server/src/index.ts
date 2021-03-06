import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";
import Messages, { IUser } from "./dbMessages";
import Rooms, { IRoom } from "./dbRooms";
import Contact, { IContact } from "./dbContact";
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
app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

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
          timestamp: messageDetails.timestamp,
          received: messageDetails.received,
        });
      })();
    } else {
      console.log("Error triggering Pusher");
    }
  });

  const roomCollection = db.collection("roomContents");
});

/* ------------------------------- API routes ------------------------------- */
// messages
app.get("/messages/sync", (_, res: Response) => {
  Messages.find((err, data: IUser[]) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/latest_message/sync", (_, res: Response) => {
  Messages.find({})
    .sort({ _id: -1 })
    .limit(1)
    .then((message: IUser[]) => {
      res.status(200).send(message[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
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

// Rooms
app.get("/rooms/sync", (_, res: Response) => {
  Rooms.find((err, data: IRoom[]) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/rooms/new", async (req: Request, res: Response) => {
  const dbRoom = req.body;

  await Rooms.create(dbRoom, (err: Error, data: IUser) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Contact
app.get("/contact/sync", (_, res: Response) => {
  Contact.find((err, data: IContact[]) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/contact/new", (req: Request, res: Response) => {
  const dbContact = req.body;

  Contact.create(dbContact, (err: Error, data: IContact) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

/* ------------------------------ API Endpoints ----------------------------- */
app.get("/", (_, res: Response) => {
  return res.status(200).send("HELLO EVERYONE");
});

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
