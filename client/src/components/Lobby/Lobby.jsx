import Header from "./Header"
import Form from "./Form"

const Lobby = ({socket}) => {
    return (<>  
        <Header/>
        <Form socket={socket}/>
    </>)
}


export default Lobby;