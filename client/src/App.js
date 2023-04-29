import './App.css';

import Home from './Components/Home';
import BlogList from './Components/BlogList';

function App() {
  return (
    <div className="App">
      <div className='app-head'>
        <h1 className='app-title'> Blog Crud </h1>
        <p> </p>

      </div>
      <Home/>
      {/* <BlogList /> */}
    </div>
  );
}

export default App;
