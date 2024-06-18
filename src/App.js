// import logo from './logo.svg';
// import './App.css';
// import List from './List';
// import UserData from './UserData';

// function App() {
//   return (
//     <div>
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <List/> */}
//         {/* <Input/> */}
//         <UserData/>
        
//     </div>
//   );
// }

// export default App;
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
     
  )
}

export default App;
