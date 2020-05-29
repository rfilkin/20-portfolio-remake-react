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
        Hello! I'm Robert Filkin. I graduated from UC Irvine with a double major in Computer Science and 
        Computer Game Science. I'm currently attending a web design course at UCLA Extension, in hopes of 
        learning some valuable industry skills.
        <br/>
        Computers have always fascinated me. Programming, and by extension web development, 
        often amounts to solving a puzzle of sorts - and when everything clicks into place, 
        you've also got a nice functioning machine! It's great fun.        
      </Paragraph>
      <ClearFix/>
      <div>
          Resume: <a href="./assets/pdf/Robert_Bui_Filkin_Resume.pdf">(PDF)</a><br/>
          GitHub: <a href="https://github.com/rfilkin">https://github.com/rfilkin</a><br/>
          LinkedIn: <a href="https://www.linkedin.com/in/robert-filkin-360430168/">https://www.linkedin.com/in/robert-filkin-360430168/</a><br/>
          Email: <a href="rfilkin17@gmail.com">rfilkin17@gmail.com</a><br/>
          Phone: 818-231-8631 (Cell)
      </div>
    </div>
  );
}

export default About;
