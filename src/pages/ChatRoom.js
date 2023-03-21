// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import Chat from "../components/Chat";
import { useParams } from 'react-router-dom'
// const socket = io.connect("http://localhost:3001");
// const socket = io.connect("https://down-to-match-backend.herokuapp.com");

function ChatRoom (props) {
// const [users, setUsers] = useState();
// const [room, setRoom] = useState("");
// const [showChat, setShowChat] = useState(false);

// const joinRoom = () => {
//   if (username !== "" && room !== "") {
//     socket.emit("join_room", room);
//     setShowChat(true);
//   }
// };

const { id1 , id2} = useParams();
const profiles = props.profiles;
const profile1 = profiles ? profiles.find((p) => p.uid === id1) : null;
const profile2 = profiles ? profiles.find((p) => p.uid === id2) : null;

// console.log("id1", id1);
// console.log("id2", id2);
// console.log("profile1", profile1);
// console.log("profile2", profile2);


const loaded = () => {
  return (
    <div className="chatroom">
        <div className='chat-header'>
          <h1>Go on, get to know {profile2.displayName}</h1>
          
        </div>
        <Chat id1={id1} id2={id2} name1={profile1.displayName} name2={profile2.displayName} pic1={profile1.photo} pic2={profile2.photo} user={props.user} />
      
    </div>
  );
}

const loading = () => {
  return <h1>Loading...</h1>
}

return (
        <>
            {profile1 && profile2 && props.profiles ? loaded() : loading()}
        </>
    )

  }
  
  export default ChatRoom;