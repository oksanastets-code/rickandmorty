import { Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
function App() {
  return (
    <div >
      <Routes>
        
     <Route path="/" element={<HomeView />}></Route>
       </Routes>
    </div>
  );
}

export default App;
