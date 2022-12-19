import React ,{useState} from "react";

import "./App.css";
import Card from "./Components/Card";
function App() {
  const  [name,setName]=useState('Your Name');
  const  [job,setJob]=useState('Job Title');
  const [about,setAbout]=useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus urna non sodales interdum. Proin vestibulum metus vel aliquam scelerisque. Suspendisse auctor lacinia nulla, ultrices porttitor ante blandit ac. Duis auctor neque ac est consectetur bibendum. Curabitur rutrum odio non fermentum condimentum. Donec id neque molestie, accumsan mi a, fringilla tellus. Nullam iaculis sem vel turpis convallis facilisis. Vivamus blandit ut felis et faucibus. Nam vulputate ligula vel augue laoreet, vel aliquet dui congue. Praesent aliquet dignissim massa in laoreet.");
  

  return (
    <div className="App">
      <Card name={'Nour Kahouach'} job={'Web Developer'} about={about}/>
     
    </div>
  );
}

export default App;
