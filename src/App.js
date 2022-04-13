import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import image from './assets/images/user4.jfif';

const Header = styled.div`
  background-color: #06517B;
  // height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
    h1 {
      margin: 5% 0 10% 0;    
    }
    @media only screen and (min-width: 768px) {
      h1 {
        font-size: 3rem;
        margin: 3% 0 7% 0; 
      }
    }  
    .userImage {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
    .image {
      width: 35%;
    }
    @media only screen and (min-width: 768px) {
      .image {
        width: 20%;
      }
    } 
    .container {
      background-color: #ffffff;
      width: 70%;
      margin-bottom: 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 10px;
      padding: 5%;
      gap: 6.5%;
    }
    @media only screen and (min-width: 768px) {
      .container {
        background-color: #ffffff;
        width: 80%;
        margin-bottom: 1.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 15px;
        padding: 3%;
        gap: 4%;
      }
    } 
    h3 {
      color: #000000;
      font-size: 0.8rem;
      margin-bottom: 1.5%;
    }
    @media only screen and (min-width: 768px) {
      h3 {
        color: #000000;
        font-size: 2rem;
        margin-bottom: 1%;
      }
    } 
    .details {
      display: flex;
      flex-direction: column;
    }
`;

function App() {
  const [users, setUsers] = useState([]);

useEffect(function(){
  (function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setUsers(data)
    });
  }())
}, []);

  
    return (
        <Header>
          <h1>STAFF DETAILS</h1>
          {users.map((user) => (
            <div className='container'>
              <div className='image'>
                <img className='userImage' src={image} />
              </div>
              <div className='details'>
                <h3 key={user.name}>Name : {user.name}</h3>
                <h3 key={user.username}>Username : {user.username}</h3>
                <h3 key={user.email}>Email : {user.email}</h3>
                <h3 key={user.phone}>Phone : {user.phone}</h3>
              </div>
            </div>
          ))}
        </Header>
    )

}



export default App;
