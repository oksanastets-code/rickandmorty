import { Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CharacterDetailsView from './views/CharacterDetailsView'
function App() {
  return (
    <div >
      <Routes>
        
     <Route path="/" element={<HomeView />}></Route>
       <Route path="/:id" element={<CharacterDetailsView />}></Route> 
      </Routes>
    </div>
  );
}

export default App;
