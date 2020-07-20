import React from "react";
import ClearFix from "../components/ClearFix";
import ArticleHeader from "../components/ArticleHeader";
import IndexImage from "../components/IndexImage";
import Paragraph from "../components/Paragraph";

import RobertPhoto from '../assets/images/Robert_Filkin_Photo.png';

function About() {
  return (
    <div>
      <ArticleHeader>About Me</ArticleHeader>
      <IndexImage name="picture of Robert" image={RobertPhoto}/>
      <Paragraph>
        Hello! I'm Robert Filkin.
        <br/>
        Back-end web developer with a Bachelor’s of Computer Science and Computer Game Science from UC Irvine.
        Also received additional backend training at UCLA Extension’s coding boot camp.
        Has extensive knowledge of JavaScript and C++.
        Has shown persistence in problem-solving code for hours on end.
        My passion is in creating the structures through which data can flow, and in using those structures to organize complex sets of data.
        I have worked in small-to-medium sized teams, and often take the role of the “do-er”, executing the tasks assigned to me, and sometimes the “taskmaster”, ensuring that the rest of the team stays on schedule.
        I hope to work in a coding-centric field where I can use my technical and organizational skills to make our customers lives easier.
        <br/>
        Computers have always fascinated me. Programming, and by extension web development, 
        often amounts to solving a puzzle of sorts - and when everything clicks into place, 
        you've also got a nice functioning machine! It's great fun.        
      </Paragraph>
      <ClearFix/>
      <div>
     
          Phone: 818-231-8631 (Cell)<br/>
          Email: <a href="rfilkin17@gmail.com">rfilkin17@gmail.com</a><br/>
          Resume: <a href="./assets/pdf/Robert_Bui_Filkin_Resume.pdf">(PDF)</a><br/>
          GitHub: <a href="https://github.com/rfilkin">https://github.com/rfilkin</a><br/>
          LinkedIn: <a href="https://www.linkedin.com/in/robert-filkin-360430168/">https://www.linkedin.com/in/robert-filkin-360430168/</a><br/>
          Proficiencies: Javascript, C++, SQL databases, Microsoft Office, C#
      </div>
    </div>
  );
}

export default About;
