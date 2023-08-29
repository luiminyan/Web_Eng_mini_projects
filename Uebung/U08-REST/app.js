const express = require("express");
const fs = require('fs');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());



app.listen(8080, () => {
    console.log("Server running on port 8080");
});
