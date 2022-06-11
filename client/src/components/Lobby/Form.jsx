const Form = ({socket, setIsLobbyVisible, roomName, setRoomName, username, setUsername}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        setRoomName(roomName);
        setUsername(username);
        socket.emit("send-join-message", roomName, username, setIsLobbyVisible)
    }

    return (
    <form onSubmit={handleSubmit} className="lobby-form">
        <div className="inputbox">
            <input type="text" id="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <span>Username</span>
        </div>
        <div className="inputbox">
            <input type="text" id="Room" value={roomName} onChange={(event) => setRoomName(event.target.value) }/>
            <span>Room</span>
        </div>
        <button type="submit" className="join-room-button">Join Room</button>
    </form>
    )
}

export default Form;