import { Email, Facebook, GitHub, Language, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useWindupString } from "windups";
import emailjs from 'emailjs-com'

function Contact() {
  const [msg,setmsg] = useState('');
  const [err,seterr] = useState('')

  function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm("service_w5y5nyi","template_cxg9prq",e.target,"hDGzehktfnxj6v6-b")
    .then
    (res =>{
      setmsg('Message send succesfully' );
    }).catch(err => {
      seterr('Message not send or You are offline');
    })
  }

  const [head] = useWindupString("Contact Me",{
    pace: (char) => (char === " " ? 50 : 80)
   })

  return (
    <div className="contact">
      <div className="contact-left">{/* this is for empty space */}</div>
      <div className="contact-right">
        <center>
          <form onSubmit={sendEmail}>
            <Stack spacing={3}>
              <center>
                <h1 className="contacthead">{head}</h1>
              </center>
              <TextField
                id="filled-basic"
                label="Username"
                variant="outlined"
                name="username"
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                name="useremail"
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Message"
                variant="outlined"
                name="message"
                fullWidth
              />
              <Button variant="outlined" type="submit">Submit</Button>
            </Stack>
          </form>
        </center>
        <div className="sum">
           <center>
           <ul>
            
            <li>
              <label htmlFor="icon-button-file">
                <a href="https://github.com/NickAtumJunior">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <GitHub fontSize="large"/>
                  </IconButton>
                </a>
              </label>
            </li>

            <li>
              <label htmlFor="icon-button-file">
                <a href="https://github.com/NickAtumJunior">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Facebook fontSize="large"/>
                  </IconButton>
                </a>
              </label>
            </li>

            
            <li>
              <label htmlFor="icon-button-file">
                <a href="linkedin.com/in/fullstackdevnithishatum">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <LinkedIn fontSize="large"/>
                  </IconButton>
                </a>
              </label>
            </li>

            
            <li>
              <label htmlFor="icon-button-file">
                <a href="https://wa.me/9344150665">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <WhatsApp fontSize="large"/>
                  </IconButton>
                </a>
              </label>
            </li>

            
            <li>
              <label htmlFor="icon-button-file">
                <a href="mailto:nithishthirucelvam007@gmail.com">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Email fontSize="large"/>
                  </IconButton>
                </a>
              </label>
            </li>

            <li>
              <label htmlFor="icon-button-file">
                <a href="https://nickatumjunior.github.io/oldOne/">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Language fontSize="large"/>
                  </IconButton>
                </a>
              </label>
            </li>
          </ul>
          <center><h1 style={{color:'green'}}>{msg}</h1></center>
        <center><h1 style={{color:'red'}}>{err}</h1></center>
           </center>
        </div>
      </div>
    </div>
  );
}

export default Contact;
