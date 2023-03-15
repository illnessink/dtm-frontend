import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function Chat (props) {
    return (
    <div className="chat-feature" >
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" placeholder="Message..."/><button onClick={sendMessage}>Send</button>
      </form>
    </div> 
    );
  }
  
  export default Chat;