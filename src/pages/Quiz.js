/*
import React from "react";
import { Model } from "quiz-core";
import { Quiz } from "quiz-react-ui";
import "quiz-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

//function Quiz() {
  const quiz = new Model(json);
  quiz.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
      return (<Quiz model={quiz} />);
  });
  return (<Quiz model={quiz} />);
//}
  
  export default Quiz;
  */


import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
//import "./index.css";
import { json } from "./json";

function Quiz(props) {
    const quiz = new Model(json);
    const API_URL = "https://down-to-match-backend.herokuapp.com/quizzes/";
    quiz.onComplete.add( async (sender, options) => {
        if (props.user){
          const token = await props.user.getIdToken();
          // sender.data.uid = props.user.uid;
          await fetch(API_URL + props.user.uid, {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/json',
              'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(sender.data),
          });    
      }
      });
    return (<Survey model={quiz} />);
}

export default Quiz;