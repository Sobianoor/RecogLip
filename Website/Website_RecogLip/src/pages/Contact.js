
import React from 'react'

import { useState } from 'react';

import PizzaLeft from '../assets/facemesh.jpg'
import '../styles/Contact.css'

function Contact() {

  const [user,setUser]=useState({

    name:"",email:"",message:""



  });

  let name,value;
  const handleInputs=(e)=>{

    name=e.target.name;
    value=e.target.value;

    

    setUser({...user,[name]:value});
  }

  const Postdata=async(e)=>{

    

    e.preventDefault();

    
    

  
    const{name,email,message}=user;



   const res =await fetch("/contactpage",{

    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({

      name,email,message


    })

   });

   const data=await res.json();
   if(!data)
   {

    window.alert("Message sent Successfully");
   }
   else{
    window.alert("Message sent Successfully");
   }




  }





  return (
    <div className='contact'
    >
        <div className='leftSide'
        
    style={{backgroundImage:`url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>

            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input type='text' name="name" id="name" autoComplete='off' 
                
                value={user.name}
                onChange={handleInputs}
                
                placeholder='Enter full name' 
                />
                
                <label htmlFor="email">Email</label>
                <input name="email" placeholder='Enter email address' type="email " value={user.email}
                onChange={handleInputs}
                />
                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder="Enter a message" name="message" value={user.message}
                onChange={handleInputs}
                required></textarea>
                <button type="submit" name="sendMessage" id="sendMessage" onClick={Postdata}
                >Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
