import React,{useState} from 'react'
// importing useNavigate for dynamic routing from react-router-dom
import { useNavigate,useLocation } from 'react-router-dom';
export default function Login() {
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('');
    // using useLocation for url access
    const location= useLocation();
    // finding data of query params 
    const queryData= new URLSearchParams(location.search)
    // by using get method printing data on the console of age 
    console.log(queryData.get('age'))
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('username',user);
        localStorage.setItem('password',password);
        // when data will submit in localstorage then it will move to home page by using dynamic routing( by using useNavigate)
       navigate('/')
    }
    function handleChange(e){
        let id=e.target.id;
        if(id==='user'){
            setUser(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" id="user" placeholder='username'  onChange={handleChange}/>
        <input type="password" name="pass" id="pass" placeholder='password' onChange={handleChange} />
        <button>login</button>
      </form>
    </div>
  )
}
