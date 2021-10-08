// Add express to project
const express = require("express");

// Initialise instance of app
const app = express();
app.use(express.static("website"));

// Middleware (body-parser has been deprecated as at Express 4.16+)
app.use(express.json());
app.use(express.urlencoded());

const cors = require("cors");
app.use(cors());
const { RSA_NO_PADDING } = require("constants");

// setup callback and server
const port = process.env.PORT || 3000;
const server = app.listen(port, listening);
//callback to make sure it works

function listening() {
    console.log(`Server is running on port ${port}`);
}

//stores data

// const projectData = [];
let projectData = {};

// POST method route
app.post("/create", (req, res) => {
    projectData = req.body;
    console.log(projectData);
});

app.get("/all", (req, res) => {
    res.send(projectData);
});
