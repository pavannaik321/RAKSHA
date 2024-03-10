const express = require('express');
const cors = require('cors');
const connection = require("./db");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

const app = express();
const port = 8000;
const port2 = 8001;
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ["POST", "GET", "PUT"],
    credentials: true
  }
});

// database connection
connection();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// routing
app.use("/", require("./routes/authRouts"));

// signaling code
io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the socket server
io.listen(port2);
