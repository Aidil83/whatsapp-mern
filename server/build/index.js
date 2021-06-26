"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbMessages_1 = __importDefault(require("./dbMessages"));
// App Config
const app = express_1.default();
dotenv_1.default.config();
const port = process.env.PORT;
// Middlewares
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default("common"));
app.use(helmet_1.default());
/* DB config */
mongoose_1.default.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// API routes
app.get("/messages/sync", (_, res) => {
    dbMessages_1.default.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});
// API Endpoints
app.get("/", (_, res) => {
    return res.status(200).send("HELLO EVERYONE");
});
app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;
    dbMessages_1.default.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
});
// Listener
app.listen(port, () => {
    console.log(`Server Running on port ${port}!`);
});
