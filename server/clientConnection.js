const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET"],
  },
});

io.on("connection", (socket) => {
  console.log("Connection live");
});

io.listen("5000");

module.exports = io;
