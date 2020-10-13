import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <h1>The blue-haired Simpsons characters!</h1>
      <Avatar firstName='Marge' lastName='Simpson' image='http://www.anvari.org/db/cols/The_Simpsons_Characters_Picture_Gallery/Marge_Simpson.png' />
      <Avatar firstName='Luann' lastName='Van Houten' image='http://www.anvari.org/db/cols/The_Simpsons_Characters_Picture_Gallery/Luann_van_Houten.png' />
      <Avatar firstName='Agnes' lastName='Skinner' image='http://www.anvari.org/db/cols/The_Simpsons_Characters_Picture_Gallery/Agnes_Skinner.png' />
      <Avatar firstName='Clancy' lastName='Wiggum' image='http://www.anvari.org/db/cols/The_Simpsons_Characters_Picture_Gallery/Clancy_Wiggum.png' />
    </div>
  );
}

export default App;
