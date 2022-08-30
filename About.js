import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import "./App.css"

export default function About() {
  const [isChecked, setIsChecked] = useState(false);
  //const [recuiter_count,setRecuiter_count] = useState(0)
  const [good,setGood] = useState(0)
  const [bad,setBad] = useState(0)

  const send_data = (e) => {
      e.preventDefault();   
    emailjs.sendForm('service_h1rhz7k', 'template_rlg92lf', e.target, 'UIBvnDZI0IRGqrX_X')
      .then((result) => {
      }, (error) => {
          console.log(error.text);
      });
  }
    

  return (
    <div id='about' style={{border:'2px solid white',marginTop:'3rem'}}>
        <h1 style={{textAlign:'center'}}>About</h1>
        <p style={{paddingInline:'3rem'}}>Hey glad you are reading the About section. I made this Android Tv clone as a
           resume project, I did'nt wanted to copy other projects with which youtube is 
           filled so in search of some unique and catchy project I decided to go ahead with this.
           If you are wondering why would anyone make Android Tv clone ? :) </p>

        <p style={{paddingInline:'3rem'}}>Since this website is not popular being posted via Netlify or github link I assume if you are here it might
          be after looking at my resume and you are a recuiter if yes please consider sharing your 
          thought's , suggestion's and feedback with me . By this I can come to know if my resume 
          has cleared the ATS or not and am I doing relevant projects to get a intership.
        </p>

        <div style={{textAlign:'center',marginBottom:'3rem',marginTop:'3rem'}}>

          <label ><input type='checkbox' disabled={isChecked} onChange={()=>{
            setIsChecked(true);//setRecuiter_count(recuiter_count+1)
            document.getElementById('ats').style.display = "block"
          }}/>I am a recuiter</label>

          <label><input type='checkbox' disabled={isChecked} onChange={()=>{
            setIsChecked(true);
            document.getElementById('ats').style.display = "none"
            let sug = document.getElementById('sug')
            sug.style.display = "block"
          }}/>I am not a recuiter</label>

        </div>

        <div id='ats' style={{textAlign:'center',marginBottom:'3rem',marginTop:'3rem',display:'none'}}>

          <form onSubmit={send_data}>
              <input type='text' placeholder='Company Name ..' name='com_name'/>

              <h1><span style={{marginInline:'2rem',cursor:'pointer'}} onClick={()=>{setGood(good+1)}}>Good :) </span>
              <span  style={{marginInline:'2rem',cursor:'pointer'}} onClick={()=>{setBad(bad+1)}}>Bad :( </span></h1>
              
              <h3>Any Suggestion</h3>
              
              <input type='text' style={{width:'50%',height:'6rem'}} name='suggetion'/>
              
              <h3>Will I get an Interview chance LOL !! </h3>
              <input type='text' name='ans' placeholder='Yess | No | Maybe 🤞'/>
              <input type="submit" value="Send" />
          </form>

        </div>

       
        <input id='sug' type='text' style={{width:'50%',height:'6rem',display:'none',marginLeft:'25%',marginBlock:'3rem'}} placeholder="Any Suggestion ? "/>

       
    </div>
  )
}
