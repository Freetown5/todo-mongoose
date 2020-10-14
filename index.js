const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const TodoTask = require("./models/TodoTask");

dotenv.config();
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connect to db");
    if(process.env.NODE_ENV !== 'test'){
        app.listen(3000, () => console.log("Server Up and running"));
    }   
})


// app.use("/static", express.static("public"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");
app.disable('etag'); // causes 304: not modified response, not sure what it's use for. Something related to caching?

app.get('/', (req, res) => {
    res.render('todo.ejs');
});

app.post('/', async (req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
    });

    try {
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
});

module.exports = app;