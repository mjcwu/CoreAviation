import React from "react";
import WelcomeImage from './images/WelcomeImage.JPG';


const WelcomePage = props => (
  
  <main className="WelcomePage">
    <h1>✈️ Core Aviation ✈️</h1>
    <div>
      <img src={WelcomeImage} alt="WelcomeImage" style = {{
        width: '80%',
        height: '700px'
      }}/> 
    </div>
  </main>
);

export default WelcomePage;
