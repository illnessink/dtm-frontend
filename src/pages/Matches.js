import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

function Matches (props) {
  // const [quizzes, setQuizzes] = useState(null);

  // const getQuizzes = async () =>{
  //   try {
  //     const token = await props.user.getIdToken();
  //     const response = await fetch("http://localhost:3001/quizzes/", {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': 'Bearer ' + token
  //       }
  //     });
  //     const data = await response.json();
  //     setQuizzes(data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // const userQuiz = quizzes.find(quiz => quiz.uid === props.user.uid)

  // const checkCompatibility = (uid) => {
  //   const matchQuiz = quizzes.find(quiz => quiz.uid === uid);
  //   let compatibilityScore = 0;
  //   console.log("match quiz", matchQuiz);
  //   console.log("user quiz", userQuiz);
  // }

  // useEffect(()=>{
  //     console.log(props.user)
  //     getQuizzes();
    
  // }, [props.user]);

  // loaded function
  const loaded = () => {
    return props.profiles.map((profile) => (
      <div key={profile.uid} className="col-sm-12 col-md-6 col-lg-3" >
        <div className='card'>
        <Link to={`/profile/${profile.uid}`}>
          <h1 className='card-title'>{profile.displayName}</h1>
        </Link>
        <img id="matchImg" src={profile.photo} alt={profile.displayName} />
        <h3>Age: {profile.age}</h3>
        {/* {checkCompatibility(profile.uid)} */}
        </div>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }


  return (
    <div className='container'>
      <h1>Swoon... Check out your Matches</h1>
      <div className='row'>
      {props.profiles ? loaded() : loading}
      </div>
    </div>
  )
  }
  
  export default Matches;