import React from 'react';
import Cards from './components/Card/Cards';
import Users from './components/User/Users'
import Gallery from './components/Gallery/Gallery'
import TempForm from './components/Temp/TempForm'
import Prikol from './components/Prikol/Prikol'
function App() {
  return (
    <>
      <header>
      </header>
      <main>
      <Cards/>
      <Users/>
      <Gallery/>
      <TempForm/>
      <Prikol/>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
