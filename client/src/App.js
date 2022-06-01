import { useState, useEffect } from "react";
import "./App.css";

import Lobby from "./components/Lobby/Lobby";
import { io } from "socket.io-client";

function App() {
  const [id, setId] = useState(0);
  const [socket, setSocket] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:5000");
    setSocket(socket);
    socket.on("connect", () => {
      "connected! ~ socket";
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Lobby socket={socket} />
      <p>{id !== 0 ? id : "No id"}</p>
    </div>
  );
}

export default App;
