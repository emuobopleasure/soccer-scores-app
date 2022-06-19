import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LeagueTable from './components/LeagueTable';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="app relative">
      <BrowserRouter>
        <HeroSection/>
        <Routes>
          <Route path='/' element={<MainSection/>} />
          <Route path='/league-table' element={<LeagueTable/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
