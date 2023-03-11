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
  const [profiles, setProfiles] = useState(null);

  const API_URL = "http://localhost:3001/profiles/"

  const getProfiles = useCallback(async () =>{
    try {
      const token = await props.user.getIdToken();
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      const data = await response.json();
      setProfiles(data);
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
        getProfiles();
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  useEffect(()=>{
    if(props.user){
      getProfiles();
    } else {
      setProfiles(null);
    }
  }, [props.user, getProfiles]);


  return (
    <main>
      <Routes>
        <Route path="/" element={<Home user={props.user} createProfile={createProfile} />} />
        <Route path="/profile/new" element={<AddProfile user={props.user} createProfile={createProfile} />}/>
        <Route path="/profile/:id" element={<Profile user={props.user} profiles={profiles} />} />
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
