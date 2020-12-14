const app = require("express")();
const http = require("http").createServer(app);
const openai = require("./openai");

app.use(require("express").json());
app.use(require("express").urlencoded());

app.post(
    "/api/completions",
    async (req, res) => await res.send(openai.translate(req.body.plaintext))
);

http.listen(process.env.PORT || 5000, () => console.log("Running."));