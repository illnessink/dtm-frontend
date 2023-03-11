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

function Quiz() {
    const quiz = new Model(json);
    quiz.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={quiz} />);
}

export default Quiz;