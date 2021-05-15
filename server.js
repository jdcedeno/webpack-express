const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const path = require("path");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get("/api/test", function test(req, res, next) {
    console.log("it hit me!");
    try {
        res.send("test");
        next();
    } catch (err) {
        console.log("error", err);
        next();
    }
});

app.get("*", function defaultPage(req, res, next) {
    app.use(express.static(path.join(__dirname, "dist")));
});

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log("Example app listening on port 3000!\n");
});
