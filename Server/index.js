const express = require('express');

const cors = require('cors');
const connection = require("./db");
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.use(cors(
    {
        origin:['http://localhost:5173'],
        methods:["POST","GET","PUT"],
        credentials:true
    }
))

// database connection
connection();

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
console.log("1")
app.use("/", require("./routes/authRouts"));
console.log("2")
app.get("/hello", (req, res) => {
  res.json({ message: "Hello From Express App" });
});
console.log("3")
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
