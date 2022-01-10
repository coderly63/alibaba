const express = require("express")

const app = express()

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 10000);
    })
}

app.get("/api", async (req, res) => {
    console.log("===============");
    res.send("OKKKK")
})

app.post("/api", async (req, res) => {
    console.log("===============");
    await wait()
    res.send("OK")
})
app.listen(3000, () => {
    console.log("服务器已经启动 http://localhost:3000");
})