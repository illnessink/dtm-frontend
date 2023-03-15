import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function Chat (props) {
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const sendMessage = () => {
      socket.emit("send_message", { message })    
    }

    useEffect(() => {
      socket.on("received_message", (data) => {
        setMessageReceived(data.message);
      })
    }, [socket])

    return (
    <div className="chat-feature" >
      <ul id="messages">
        <li>{messageReceived}</li>
      </ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" placeholder="Message..." onChange={(event) => {
          setMessage(event.target.value);
        }} /><button onClick={sendMessage}>Send</button>
      </form>
    </div> 
    );
  }
  
  export default Chat;