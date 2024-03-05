import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import useParams to access the value of useParams
import {Link,useParams} from 'react-router-dom';
import NavBar from './NavBar';
export default function Home() {
    const [user,setUser]=useState('');
    const [pass,setPass]=useState('');
   useEffect(()=>{
   setUser(localStorage.getItem('username'));
   setPass(localStorage.getItem('password'))
   },[])
   // distructure the values of path params 
  const {user1,id}=useParams();
//   printing value on console
  console.log(user1)
  console.log(id)
  return (
    <div>
     <NavBar/>
     {/* if we find user adnan and passord 123 then show 'i am home' otherwise show login option */}
     {user==='adnan'&&pass==='123'?'i am home':<Link to="/signin">login</Link>}
    </div>
  )
}
