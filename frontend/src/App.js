import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from './Pages/Example';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MealPlanner from './Pages/MealPlanner';
import Onboarding from './Pages/Onboarding';
import Account from './Pages/Account';
import Plans from './Pages/Plans';

function App() {
  return (
    <Router>
      <div className='main-app'>
        <Header/>
        <div className='main-content'>
            <div style={{padding: '40px 0'}}>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/meal-planner" element={<MealPlanner />}></Route>
                <Route exact path="/onboarding" element={<Onboarding />}></Route>
                <Route exact path="/account" element={<Account />}></Route>
                <Route exact path="/plans" element={<Plans />}></Route>
                <Route exact path="/example" element={<Example />}></Route>
              </Routes>        
            </div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
