import bodyParser from "body-parser";
import express from "express";

import { userRouter } from "./user/infrastructure/user_routes";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// app.get("/", (_, res) => {
//   console.log("Ping");
//   res.send("Ping");
// });

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`);
});
