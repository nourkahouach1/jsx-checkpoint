import React from "react";

import "./App.css";
import Card from "./Profile/Card";
import picture from "./Profile/Images/picture.jpg";
function App() {
  // const  [name,setName]=useState('Your Name');
  // const  [job,setJob]=useState('Job Title');
  // const [about,setAbout]=useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus urna non sodales interdum. Proin vestibulum metus vel aliquam scelerisque. Suspendisse auctor lacinia nulla, ultrices porttitor ante blandit ac. Duis auctor neque ac est consectetur bibendum. Curabitur rutrum odio non fermentum condimentum. Donec id neque molestie, accumsan mi a, fringilla tellus. Nullam iaculis sem vel turpis convallis facilisis. Vivamus blandit ut felis et faucibus. Nam vulputate ligula vel augue laoreet, vel aliquet dui congue. Praesent aliquet dignissim massa in laoreet.");

  const profile = {
    name: "nour KAHOUACH",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Vivamus ut dapibus quam id aliquam",
    profession: "web developer",
  };
  const handleName = (name) => alert(`My Name is ${name}`);

  return (
    <div className="App">
      <Card
        showName={handleName}
        name={profile.name}
        job={profile.profession}
        about={profile.bio}
      >
        <img src={picture} alt="me" height="100px" width="100px" />
      </Card>
    </div>
  );
}

export default App;
