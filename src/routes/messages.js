const { Router } = require("express")
const router = Router()
const server = require("http").createServer(router)

// const jwt = require("jsonwebtoken")
// const { hashSync, compareSync } = require("bcryptjs") // bcrypt will encrypt passwords to be saved in db
// const { JWT_SECRET } = require("../config.js")

const io = (module.exports.io = require("socket.io")(server, {
    cors: {
        origin: "http:localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: false
    }
}))

const SocketManager = require("./SocketManager")

io.on("connection", SocketManager)

module.exports = router