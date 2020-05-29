import React from "react";
import "./style.css";

function ContactForm(props) {
  return (
    <form>
      Name:<br/>
      <input type="text" name="name" placeholder="John Smith"/><br/>
      Email:<br/>
      <input type="text" name="email" placeholder="example@gmail.com"/><br/>
      Message:<br/>  
      <textarea name="" id="" cols="30" rows="10"></textarea><br/>  
      <input type="submit" value="Submit" class="submitBtn"/>            
    </form>
  );
}

export default ContactForm;
