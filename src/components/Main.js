import { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AddProfile from '../pages/AddProfile';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Matches from '../pages/Matches';
import MatchProfile from '../pages/MatchProfile';
import Quiz from '../pages/Quiz';
import Chat from '../pages/Chat';

function Main(props){
  const [profile, setProfile] = useState(null);

  const API_URL = "http://localhost:3001/profile/"

  const getProfile = useCallback(async () =>{
    try {
      const token = await props.user.getIdToken();
      const response = await fetch(API_URL + props.user.uid, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.log(error)
    }
  }, [props.user]);

  const createProfile = async (profile) => {
    try {
      if(props.user) {
        const token = await props.user.getIdToken();
        await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify(profile),
        });
        getProfile();
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  useEffect(()=>{
    if(props.user){
      getProfile();
    } else {
      setProfile(null);
    }
  }, [props.user, getProfile]);


  return (
    <main>
      <Routes>
        <Route path="/" element={<Home user={props.user} createProfile={createProfile} />} />
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
