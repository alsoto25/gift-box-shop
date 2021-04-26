import React, { useState, useEffect } from 'react'
import PageWrapper from '../components/global/PageWrapper'
import styles from '../styles/pages/About.module.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios';
import 'sweetalert2/src/sweetalert2.scss'

export default function AboutMe() {

    useEffect(() => {
        //Fetch/Axios Request API
        axios.get('http://localhost:3001/about/getAboutInfo')
            .then(res => {
                console.log('RES',res);
                if(res.request.statusText==="OK"){
                    setAbout(res.data.aboutResponse)
                }
                else if(res.request.statusText==="INTERNAL_SERVER_ERROR"){
                    console.log('ERROR',res)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [about, setAbout] = useState({});

    const [currentFileName] = useState('')
    let nameSocial = ""

    function saveChanges(e){
      //Llamada al metodo que hace POST
        axios.post('http://localhost:3001/about/setAboutInfo', {about})
            .then(res => {
                console.log('RES',res);
                if(res.request.statusText==="NO_CONTENT"){
                    e.preventDefault();
                    console.log("Enviando cambiooos");
                }
                else if(res.request.statusText==="INTERNAL_SERVER_ERROR"){
                    console.log('ERROR',res)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleForm(e){
      setAbout({...about, [e.target.name]:e.target.value});
    }

    function HandleImages(e){
      Array.from(e.target.files).forEach(file=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
          console.log("Convert " + reader.result);
          var imageBase64 = reader.result;
          setAbout({...about, [e.target.name]:imageBase64});
        }
      })
    }

   function HandleSocialMedia(name){

    nameSocial = name;

    Swal.fire({
			title: `Enter your ${name} url`,
			input: 'text',
			inputAttributes: {
			  autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Save',
			showLoaderOnConfirm: true,
			preConfirm: (social) => {
				setAbout({...about, [nameSocial]:social});
			},
			allowOutsideClick: () => !Swal.isLoading()
		  }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
          title: `${name} account updated`,
          })
        }})
	}

   

  //Bloquea el enter, para que el usuario no pueda dar enter en el text area y provoque espacios vacios
  function enterReview(e) {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      return false;
    }  
}

  return(<PageWrapper>
      <div className={styles['about-container']}>

        <div className={styles['left-column']}>

          <label for="file-upload" className={styles['upload']}>
            <input type="file" id="file-upload" name="imagen" onChange={HandleImages}/>
              <img alt="uploadImage" src="data:image/png;base64,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AIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACACzVEUlekOQ9SS5I8vUkX0ry4SS/neTUJNurXR3QUwCgDdvTnb2/ne4s/lK6s/mCdGf1C9Kd3Zt2bJK/yMY2hR1Jfj3JoVt5QWBLFACYt0PTnbU7srH1+hfpzvIN256uVeza4Ausz1VJHr+F4YDNUwBgvh6f7owdumZ3pTvTD9jXC9wnyV9v4gXW544kL97yqMBQCgDM04vTna1bWbt/ne6M360Dk1y4xRdYn3+7lLGBjVIAYH6eneWt3wvTnfV3c84SX+TOJLcmOXE58wMboADAvJyU7ixd5ho+564vcsqSX6DP55JsW9adAPZKAYD52Jbk8ymzjk/uX2QtyScLvcidSZ6x1FsC7IkCAPPxjJRbx59Md/bnmIIv0r8Q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" />
                  {'Upload Your file'}
                  {currentFileName !== '' ? (null) : null}
          </label>

          <img alt="pageImage" src= {about.imagen}/>
        </div>

        <div className={styles['right-column']}>
            <div className={styles['card']}>
                <h1>About Me</h1>
                <div className={styles['container-input']}>
                    <p> <strong>Name:</strong></p>         
                    <input type="text" name="name" value = {about.name ? about.name : ""} onChange = {handleForm}/>
                </div>
                <div className={styles['container-input']}>
                    <p> <strong>Experience:</strong></p>         
                    <input type="text" name="experience" value = {about.experience ? about.experience : ""} onChange = {handleForm}/>
                </div>
                <div className={styles['container-input']}>
                    <p> <strong>Location:</strong></p>         
                    <input type="text" name="location" value = {about.location ? about.location : ""} onChange = {handleForm}/>
                </div>
                
                    <textarea onKeyDown = {enterReview} rows="24" cols="50" maxlength="400" name="texto" value = {about.texto ? about.texto : ""} onChange = {handleForm}/>
                <div className={styles['social-container']}>
                    <button  onClick = {(e)=>HandleSocialMedia("instagram")}><img src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0xLjk4MiAtMS44NDQgMCAtMTMyLjUyMiAtNTEuMDc3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMzcuMTA2IiB4Mj0iLTI2LjU1NSIgeTE9Ii03Mi43MDUiIHkyPSItODQuMDQ3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZDUiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjZmY1NDNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgzN2FiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtMS41IDEuNjMzYy0xLjg4NiAxLjk1OS0xLjUgNC4wNC0xLjUgMTAuMzYyIDAgNS4yNS0uOTE2IDEwLjUxMyAzLjg3OCAxMS43NTIgMS40OTcuMzg1IDE0Ljc2MS4zODUgMTYuMjU2LS4wMDIgMS45OTYtLjUxNSAzLjYyLTIuMTM0IDMuODQyLTQuOTU3LjAzMS0uMzk0LjAzMS0xMy4xODUtLjAwMS0xMy41ODctLjIzNi0zLjAwNy0yLjA4Ny00Ljc0LTQuNTI2LTUuMDkxLS41NTktLjA4MS0uNjcxLS4xMDUtMy41MzktLjExLTEwLjE3My4wMDUtMTIuNDAzLS40NDgtMTQuNDEgMS42MzN6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjxwYXRoIGQ9Im0xMS45OTggMy4xMzljLTMuNjMxIDAtNy4wNzktLjMyMy04LjM5NiAzLjA1Ny0uNTQ0IDEuMzk2LS40NjUgMy4yMDktLjQ2NSA1LjgwNSAwIDIuMjc4LS4wNzMgNC40MTkuNDY1IDUuODA0IDEuMzE0IDMuMzgyIDQuNzkgMy4wNTggOC4zOTQgMy4wNTggMy40NzcgMCA3LjA2Mi4zNjIgOC4zOTUtMy4wNTguNTQ1LTEuNDEuNDY1LTMuMTk2LjQ2NS01LjgwNCAwLTMuNDYyLjE5MS01LjY5Ny0xLjQ4OC03LjM3NS0xLjctMS43LTMuOTk5LTEuNDg3LTcuMzc0LTEuNDg3em0tLjc5NCAxLjU5N2M3LjU3NC0uMDEyIDguNTM4LS44NTQgOC4wMDYgMTAuODQzLS4xODkgNC4xMzctMy4zMzkgMy42ODMtNy4yMTEgMy42ODMtNy4wNiAwLTcuMjYzLS4yMDItNy4yNjMtNy4yNjUgMC03LjE0NS41Ni03LjI1NyA2LjQ2OC03LjI2M3ptNS41MjQgMS40NzFjLS41ODcgMC0xLjA2My40NzYtMS4wNjMgMS4wNjNzLjQ3NiAxLjA2MyAxLjA2MyAxLjA2MyAxLjA2My0uNDc2IDEuMDYzLTEuMDYzLS40NzYtMS4wNjMtMS4wNjMtMS4wNjN6bS00LjczIDEuMjQzYy0yLjUxMyAwLTQuNTUgMi4wMzgtNC41NSA0LjU1MXMyLjAzNyA0LjU1IDQuNTUgNC41NSA0LjU0OS0yLjAzNyA0LjU0OS00LjU1LTIuMDM2LTQuNTUxLTQuNTQ5LTQuNTUxem0wIDEuNTk3YzMuOTA1IDAgMy45MSA1LjkwOCAwIDUuOTA4LTMuOTA0IDAtMy45MS01LjkwOCAwLTUuOTA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" 
                    alt="Instagram"></img></button>
                    <button onClick = {(e)=>HandleSocialMedia("whatsapp")}><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzRDQUY1MDsiIGQ9Ik0yNTYuMDY0LDBoLTAuMTI4bDAsMEMxMTQuNzg0LDAsMCwxMTQuODE2LDAsMjU2YzAsNTYsMTguMDQ4LDEwNy45MDQsNDguNzM2LDE1MC4wNDhsLTMxLjkwNCw5NS4xMDQNCglsOTguNC0zMS40NTZDMTU1LjcxMiw0OTYuNTEyLDIwNCw1MTIsMjU2LjA2NCw1MTJDMzk3LjIxNiw1MTIsNTEyLDM5Ny4xNTIsNTEyLDI1NlMzOTcuMjE2LDAsMjU2LjA2NCwweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZBRkFGQTsiIGQ9Ik00MDUuMDI0LDM2MS41MDRjLTYuMTc2LDE3LjQ0LTMwLjY4OCwzMS45MDQtNTAuMjQsMzYuMTI4Yy0xMy4zNzYsMi44NDgtMzAuODQ4LDUuMTItODkuNjY0LTE5LjI2NA0KCUMxODkuODg4LDM0Ny4yLDE0MS40NCwyNzAuNzUyLDEzNy42NjQsMjY1Ljc5MmMtMy42MTYtNC45Ni0zMC40LTQwLjQ4LTMwLjQtNzcuMjE2czE4LjY1Ni01NC42MjQsMjYuMTc2LTYyLjMwNA0KCWM2LjE3Ni02LjMwNCwxNi4zODQtOS4xODQsMjYuMTc2LTkuMTg0YzMuMTY4LDAsNi4wMTYsMC4xNiw4LjU3NiwwLjI4OGM3LjUyLDAuMzIsMTEuMjk2LDAuNzY4LDE2LjI1NiwxMi42NA0KCWM2LjE3NiwxNC44OCwyMS4yMTYsNTEuNjE2LDIzLjAwOCw1NS4zOTJjMS44MjQsMy43NzYsMy42NDgsOC44OTYsMS4wODgsMTMuODU2Yy0yLjQsNS4xMi00LjUxMiw3LjM5Mi04LjI4OCwxMS43NDQNCgljLTMuNzc2LDQuMzUyLTcuMzYsNy42OC0xMS4xMzYsMTIuMzUyYy0zLjQ1Niw0LjA2NC03LjM2LDguNDE2LTMuMDA4LDE1LjkzNmM0LjM1Miw3LjM2LDE5LjM5MiwzMS45MDQsNDEuNTM2LDUxLjYxNg0KCWMyOC41NzYsMjUuNDQsNTEuNzQ0LDMzLjU2OCw2MC4wMzIsMzcuMDI0YzYuMTc2LDIuNTYsMTMuNTM2LDEuOTUyLDE4LjA0OC0yLjg0OGM1LjcyOC02LjE3NiwxMi44LTE2LjQxNiwyMC0yNi40OTYNCgljNS4xMi03LjIzMiwxMS41ODQtOC4xMjgsMTguMzY4LTUuNTY4YzYuOTEyLDIuNCw0My40ODgsMjAuNDgsNTEuMDA4LDI0LjIyNGM3LjUyLDMuNzc2LDEyLjQ4LDUuNTY4LDE0LjMwNCw4LjczNg0KCUM0MTEuMiwzMjkuMTUyLDQxMS4yLDM0NC4wMzIsNDA1LjAyNCwzNjEuNTA0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" 
                    alt="WhatsApp"></img></button>
                    <button  onClick = {(e)=>HandleSocialMedia("facebook")}><img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00ODMuNzM4MjgxIDBoLTQ1NS41Yy0xNS41OTc2NTYuMDA3ODEyNS0yOC4yNDIxODcyNSAxMi42NjAxNTYtMjguMjM4MjgxIDI4LjI2MTcxOXY0NTUuNWMuMDA3ODEyNSAxNS41OTc2NTYgMTIuNjYwMTU2IDI4LjI0MjE4NyAyOC4yNjE3MTkgMjguMjM4MjgxaDQ1NS40NzY1NjJjMTUuNjA1NDY5LjAwMzkwNiAyOC4yNTc4MTMtMTIuNjQ0NTMxIDI4LjI2MTcxOS0yOC4yNSAwLS4wMDM5MDYgMC0uMDA3ODEyIDAtLjAxMTcxOXYtNDU1LjVjLS4wMDc4MTItMTUuNTk3NjU2LTEyLjY2MDE1Ni0yOC4yNDIxODcyNS0yOC4yNjE3MTktMjguMjM4Mjgxem0wIDAiIGZpbGw9IiM0MjY3YjIiLz48cGF0aCBkPSJtMzUzLjUgNTEydi0xOThoNjYuNzVsMTAtNzcuNWgtNzYuNzV2LTQ5LjM1OTM3NWMwLTIyLjM4NjcxOSA2LjIxNDg0NC0zNy42NDA2MjUgMzguMzE2NDA2LTM3LjY0MDYyNWg0MC42ODM1OTR2LTY5LjEyODkwNmMtNy4wNzgxMjUtLjk0MTQwNi0zMS4zNjMyODEtMy4wNDY4NzUtNTkuNjIxMDk0LTMuMDQ2ODc1LTU5IDAtOTkuMzc4OTA2IDM2LTk5LjM3ODkwNiAxMDIuMTQwNjI1djU3LjAzNTE1NmgtNjYuNXY3Ny41aDY2LjV2MTk4em0wIDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" 
                    alt="Facebook"></img></button>
                </div>
                <button className={styles['saveBtn']} onClick = {saveChanges}>Save Changes</button>
            </div>
        </div>
      </div>
  </PageWrapper>) 
}
