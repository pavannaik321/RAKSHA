const express = require('express');
const http = require('http');
const cors = require('cors');
const connection = require("./db");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const socketIo = require('socket.io');

const app = express();
const port = 8000;

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ["POST", "GET", "PUT"],
  credentials: true
}));

// database connection
connection();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRouts"));

// Create a single HTTP server for both Express and socket.io
const server = http.createServer(app);

// Initialize socket.io with the server
const io = socketIo(server);

// Socket.io logic goes here


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

