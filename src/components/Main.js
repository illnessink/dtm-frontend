import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import AddProfile from '../pages/AddProfile'
import EditProfile from "../pages/EditProfile";
import Matches from "../pages/Matches";
import MatchProfile from "../pages/MatchProfile";
import Quiz from "../pages/Quiz";
import Chat from "../pages/Chat";

function Main(props) {
  const [profile, setProfile] = useState(null)

  const API_URL = 'http://localhost:3001/profiles/'

  const getProfile = async () => {
    try {
        if(props.user) {
            const token = await props.user.getIdToken();
            // console.log(token);
            const response = await fetch(API_URL + props.user.uid, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();
            setProfile(data);
        }
    } catch (error){
        // add a task in case of error
    }
}

  const createProfile = async (profile) => {
    try {
      if (props.user) {
        const token = await props.user.getIdToken();
        await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(profile),
        });
      }
      console.log(profile);
    } catch (error) {
      // add a task in case of error
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/new" element={<AddProfile user={props.user} createProfile={createProfile} />}/>
        <Route path="/profile/:id" element={<Profile user={props.user} profile={profile} />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:id" element={<MatchProfile />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile/:id/edit" element={<EditProfile />} />
        <Route path="/chats/:id" element={<Chat />} />
      </Routes>
    </main>
  );
}

export default Main;
