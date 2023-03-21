import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import io from 'socket.io-client';


// const socket = io.connect("https://down-to-match-backend.herokuapp.com");

function Chat({ id1, id2, name1, name2, pic1, pic2, user }) {
    const socket = useRef();
    const [currentMessage, setCurrentMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null)
     const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    const getMessage = async () => {
        try {
            const token = await user.getIdToken();
            const response = await fetch(`https://down-to-match-backend.herokuapp.com/msg/${id1}/${id2}`, {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer ' + token,
              }
            });
            const data = await response.json();
            setMessages(data)
            
        } catch (error) {

        }
    }
    getMessage();
  }, [user, id1, id2])

  useEffect(() => {
    if(id2 !== ''){
        socket.current = io("https://down-to-match-backend.herokuapp.com");
        socket.current.emit("addUser", id1)
    }
  }, [id1, id2])

  console.log(user.uid);
  console.log(socket); 

  const sendMessage = async () => {
    const msg = {
        myself: true,
        message: currentMessage,
    }
    socket.current.emit("send-msg", {
        to: id2,
        from: id1,
        message: currentMessage
    })
    try {
        const token = await user.getIdToken();
        await fetch(`https://down-to-match-backend.herokuapp.com/msg/`, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'Application/json',
          },
          body: JSON.stringify({
            from: id1,
            to: id2,
            message: currentMessage,
          })
        });
        setMessages(messages.concat(msg));
        setCurrentMessage("");
    } catch (error) {
        console.group("something went wrong")
    }
  }

  useEffect(() => {
    if (socket.current){
        socket.current.on("msg-receive", (msg) => {
            console.log(msg);
            setArrivalMessage({myself:false, message:msg})
        })
    }
  }, [arrivalMessage]);

  useEffect(() => {
    arrivalMessage && setMessages((prevState) => [...prevState, arrivalMessage])
  }, [arrivalMessage])

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ":" +
//           new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage("");
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messages.map((messageContent) => {
            return (
              <div
                className="message"
                id={messageContent.myself ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="author">{ messageContent.myself ? `${name1}` : `${name2}`}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button type="submit" onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;