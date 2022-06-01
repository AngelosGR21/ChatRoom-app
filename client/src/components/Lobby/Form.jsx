import {useState} from "react"; 

const Form = ({socket}) => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const handleSubmit = () => {
        socket.emit("send-username", username);
        socket.emit("send-room", room);
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <label htmlFor="Room">Room</label>
        <input type="text" id="Room" value={room} onChange={(event) => setRoom(event.target.value) }/>
        <button type="submit">Join Room</button>
    </form>
}

export default Form;