const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors(
    {
        origin:['https://raksha-frontend.vercel.app'],
        methods:["POST","GET"],
        credentials:true
    }
))
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});

app.get("/check",(req,res)=>{
    res.json({message:"connection established"})
})
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
