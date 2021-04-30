import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import  ApplicationViews  from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import './Home.css'
import { FirebaseProvider } from "./auth/FirebaseProvider"

function App() {

  return (
    <div className="App">
      <Router>
        <FirebaseProvider>
          <NavBar />
          <ApplicationViews />
        </FirebaseProvider>
      </Router>
    </div>
  )
}

export default App;