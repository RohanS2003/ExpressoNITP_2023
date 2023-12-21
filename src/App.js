// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Team from './Components/Team/Team';
import Loader from './Components/Loader/Loader';
import HomeGallery from './Components/HomeGallery/HomeGallery';
import Home from './Components/Home/Home';
import Art from './Components/Art/Art';
import Literature from './Components/Literature/Literature';
import Footer from './Components/Footer/Footer';
import Events from './Components/Events/Event';
import Blog from './Components/Blog/Blog';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';

  return (
    <>
      {loading === false ? (
        <div className="App">
        <NavBar />
        <Home />
        <Footer />
          {/* <Router>
            <NavBar showLoginRegisterLinks={isBlogPage} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/gallery">
                <HomeGallery />
              </Route>
              <Route exact path="/team">
                <Team />
              </Route>
              <Route exact path="/art">
                <Art />
              </Route>
              <Route exact path="/literature">
                <Literature />
              </Route>
              <Route exact path="/events">
                <Events />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
            </Switch>
            <Footer />
          </Router> */}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
