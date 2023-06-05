import '../App.css';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/home' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

fetch('https://jsonplaceholder.typicode.com/posts')

  .then(response => response.json())

  .then(data => {

    // Process the received data

    console.log(data);

  })

  .catch(error => {

    // Handle error if any

    console.error(error);

  });