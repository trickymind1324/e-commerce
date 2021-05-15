import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import firebase from "firebase"; 
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {auth} from "./firebase";
import Welcome from "../src/components/Welcome";


function App() {
  const [uid, setUID] = useState(null);

  var provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(`User has signed in: ${user.uid}`);
        setUID(user.uid);
      } else {
        console.log(`User has signed out.`);
      }
    });
  });

  function signIn() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        window.location = "/welcome";
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  function signOut() {
    firebase.auth().signOut()
    .then(() => {
      window.location = "/";
      console.log('Signed out successfuly.')
      setUID(null)
    })
    .catch((err) => {
      console.log(`Sign out has failed: ${err}`)
    })
  }
  return (<React.Fragment>
    <Navbar uid={uid} signIn={() => {signIn()}} signOut={() => {signOut()}}/>
    <Switch>
      <Route exact path="/" component={ProductList}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/welcome" component={Welcome}></Route>
      <Route component={Default}/>
    </Switch>
    
  </React.Fragment>
  );
}

export default App;
