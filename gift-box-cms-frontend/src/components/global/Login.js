import Footer from "./Footer";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import CryptoJS from "crypto-js"

import styles from "../../styles/components/global/Header.module.scss";
import stylesCard from '../../styles/pages/Login.module.scss'

export default function Login(props) {

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  function handleForm(e){
    setUser({...user, [e.target.name]:e.target.value})
  }

  function startLogin(){
    const {username, password} = user;
    const encryptPassword = "boxgift#2021";

    const userEncrypted = {
      username:CryptoJS.AES.encrypt(username,encryptPassword).toString(),
      password:CryptoJS.AES.encrypt(password,encryptPassword).toString()
  }
     //Fetch/Axios Request API
     axios.post('http://localhost:3001/login/getAccess', userEncrypted)
     .then(res => {
         console.log('RES',res);
         if(res.request.statusText==="OK"){
             if(res.data.LOGIN){
                 props.history.push("/home")
             }
             else{
                 return Swal.fire('Error', 'Usuario o Contraseña invalida', 'error');
             }
         }
         else if(res.request.statusText==="INTERNAL_SERVER_ERROR"){
             console.log('ERROR',res)     
         }
     })
     .catch(err => {
         console.log(err)
     })
  }

  return (
    <div className="root">

      <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          Repasa
          <span className={styles["logo-secondary"]}>giftbox</span>
        </Link>
      </nav>
    </header>

        <main>
          <div className={stylesCard['login-container']}>
            <div className={stylesCard['card']}>
              <h1>Dashboard</h1>
              <div className={stylesCard['inputs']}>
                <div className={stylesCard['container-input']}>
                    <p> <strong>Username:</strong></p>         
                    <input type="text" name="username"  onChange = {handleForm}/>
                </div>
                <div className={stylesCard['container-input']}>
                    <p> <strong>Password:</strong></p>         
                    <input type="password" name="password" onChange = {handleForm}/>
                </div>
              </div>
              <div className={stylesCard['buttons']}>
                  <button className={stylesCard['saveBtn']} onClick = {startLogin}>Submit</button>
              </div>
            </div>
          </div>
        </main>

      <Footer />

    </div>
  );
}
