import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Matches from '../pages/Matches';
import MatchProfile from '../pages/MatchProfile';
import Quiz from '../pages/Quiz';
import Chat from '../pages/Chat';

function Main(props) {
    return (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
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