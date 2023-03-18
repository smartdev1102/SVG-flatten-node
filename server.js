const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload.array());

app.use(express.static(__dirname + "/views/"));

app.get("/", function (req, res) {
    res.sendFile("index.html");
});

require("./router.js")(app);
// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
