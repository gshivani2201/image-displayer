import Header from './mycomponents/Header';
import MainBody from './mycomponents/MainBody';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <MainBody />
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
