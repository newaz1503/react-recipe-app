import { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './styles/Global.css'
function App() {
  const APP_ID = 'cf7c8d60';
  const APP_KEY = 'aafea9b281710d5875f0fbfa52e1f0fc';
  //state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  //useEffect
  useEffect(() => {
    async function getRecipes(){
      let res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      let data = await res.json();
      setRecipes(data.hits);
    }
    getRecipes()
  }, [query])

  //functions
  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
  const submitQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <h2 className='title'>Search your Recipe item</h2>
        <form className="form-box" onSubmit={submitQuery}>
            <input type="text" placeholder="Search" className="search-field" value={search} onChange={updateSearch} required />
            <button type="submit" className="btn">Search</button> 
        </form>
        <div className='recipes'>
            {recipes.map((recipe) => {
              return (
                <Recipe key={recipe.recipe.calories} recipe={recipe} />
              )
            })}
          </div>
    </div>
  );
}

export default App;
