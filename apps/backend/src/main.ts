/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from "express";
import * as path from "path";
import primes from './routes/primes';

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to backend!" });
});

app.use('/primes', primes)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on("error", console.error);
