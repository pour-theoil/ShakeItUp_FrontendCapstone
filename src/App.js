import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import  ApplicationViews  from "./components/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import './Home.css'
import { FirebaseProvider } from "./components/auth/FirebaseProvider"


function App() {

  return (
    <div className="app">
      <Router>
        <FirebaseProvider>
            <h1 className="shakeitup">Shake It Up!</h1>
            <ApplicationViews />
            <NavBar />
        </FirebaseProvider>
      </Router>
    </div>
  )
}

export default App;