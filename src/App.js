import React from 'react'
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { Footer } from './component/footer/Footer';
import { Home_main } from './component/home-main/Home_main';
import Contact from './component/contact/Contact';
import Testimonial from './component/testimonial/Testimonial';
import Home from './component/home/Home';
import Film from './component/film/Film';
import Phimle from './component/home/Phimle';
import Phimbo from './component/home/Phimbo';
import Phimhoathinh from './component/home/Phimhoathinh';
import Phimchieurap from './component/home/Phimchieurap';
import ScrollTop from './component/home/ScrollTop';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import Search from './component/search/Search';
import { createBrowserHistory } from "history";

const history = createBrowserHistory(); 
function App() {
  return (
    <Router history={history}>
      <ScrollTop/>
      <Navbar/>
      <ScrollToTop/>
      <Home_main/>
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/film' component = {({match}) => <Film match={match} /> } />
        <Route path = '/phimle' component = {({match}) => <Phimle match={match} /> }/>
        <Route path = '/phimbo' component = {({match}) => <Phimbo match={match} /> } />
        <Route path = '/phimhoathinh' component = {({match}) => <Phimhoathinh match={match} /> } />
        <Route path = '/phimchieurap' component = {({match}) => <Phimchieurap match={match} /> } />
        <Route path = '/timkiem' component = {({match}) => <Search match={match} /> } />
      </Switch>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
