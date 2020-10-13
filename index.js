const express = require("express");
const app = express();

// app.use("/static", express.static("public"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.disable('etag'); // causes 304: not modified response, not sure what it's use for. Something related to caching?

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('todo.ejs');
    console.log(res.statusCode);
});

app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => console.log("Server Up and running"));