import React from "react";
import ArticleHeader from "../components/ArticleHeader";
import Project from "../components/Project";
import Row from "../components/Row";

import JustJokesImg from '../assets/images/JustJokes.PNG';
import PasswordGeneratorImg from "../assets/images/PasswordGenerator.PNG";
import CodeQuizImg from "../assets/images/CodeQuiz.PNG"
import DayPlannerImg from "../assets/images/DayPlanner.PNG"
import WeatherDashboardImg from "../assets/images/WeatherDashboard.PNG"
import Covid19TrackerImg from "../assets/images/Covid19_Tracker_Img.PNG"

function Portfolio () {
  return (
    <div>
      <ArticleHeader>Portfolio</ArticleHeader>
      
      <Row>
        <Project
          name='"Just Jokes" website'
          image={JustJokesImg}
          deployed="https://rfilkin.github.io/UCLA_group_proect_1/"
          github="https://github.com/rfilkin/UCLA_group_proect_1"
        />
        <Project
          name="Password Generator"
          image={PasswordGeneratorImg}
          deployed="https://rfilkin.github.io/03-PasswordGenerator/"
          github="https://github.com/rfilkin/03-PasswordGenerator"
        />
      </Row>

      <Row>
        <Project
          name="Code Quiz"
          image={CodeQuizImg}
          deployed="https://rfilkin.github.io/04-codequiz/"
          github="https://github.com/rfilkin/04-codequiz"
        />
        <Project
          name="Day Planner"
          image={DayPlannerImg}
          deployed="https://rfilkin.github.io/05-DayPlanner/"
          github="https://github.com/rfilkin/05-DayPlanner"
        />
      </Row>
      
      <Row>
        <Project
          name="Weather Dashboard"
          image={WeatherDashboardImg}
          deployed="https://rfilkin.github.io/06-WeatherDashboard/"
          github="https://github.com/rfilkin/06-WeatherDashboard"
        />
        <Project
          name="Covid-19 Tracker"
          image={Covid19TrackerImg}
          deployed="http://plague.site/"
          github="https://github.com/yankidank/covid-19-tracker"
        />
      </Row>

    </div>
    
  );
}

export default Portfolio;
