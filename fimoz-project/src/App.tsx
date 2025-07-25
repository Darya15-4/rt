import React from 'react';
import Cards from './components/Card/Cards';
import Users from './components/User/Users'
import Gallery from './components/Gallery/Gallery'
import TempForm from './components/Temp/TempForm'
function App() {
  return (
    <>
      <header className="App-header">
      </header>
      <main>
      <Cards/>
      <Users/>
      <Gallery/>
      <TempForm/>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
