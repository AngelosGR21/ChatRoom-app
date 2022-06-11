import Header from "./Header"
import Form from "./Form"

import "../../styles/Lobby.css"

const Lobby = ({socket, setIsLobbyVisible, roomName, setRoomName, username, setUsername}) => {
    return (<main className="lobby">  
        <Header/>
        <Form 
        socket={socket} 
        setIsLobbyVisible={setIsLobbyVisible} 
        roomName={roomName} 
        setRoomName={setRoomName} 
        username={username}
        setUsername={setUsername}  
        />
    </main>)
}


export default Lobby;