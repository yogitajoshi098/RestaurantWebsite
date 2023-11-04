
import './App.css';
import Category from './Components/Category';
import Home from './Components/Home';
import RecipeId from './Components/RecipeId';
import SearchElement from './Components/SearchElement';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:idMeal' element={<RecipeId/>}/>
          <Route path='/category/:name' element={<Category/>}/>
          <Route path='/search/:searchTerm' element={<SearchElement/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
