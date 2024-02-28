import React, { useState } from "react";
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {

const res = await createUserWithEmailAndPassword(auth, email, password); //user
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
  (error) => {
    setErr(true)
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
    });
  }
);

    }catch(err){
      setErr(true)
    }

}

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className = "logo">Chat App </span>
            <span className = 'title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input style = {{display:"none"}}type="file" id="file"/>
                <label htmlFor="file">
                  <img src={Add} alt=""/>
                  <button type="button">Change Avatar</button>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}