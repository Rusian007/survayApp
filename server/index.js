
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
if (process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));

  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build", "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
