import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import JoinUs from "./components/JoinUs";
import Tesseramento from "./components/Tesseramento";
import Subscription from "./components/Subscription";
import Comuni from "./components/Comuni";
import Rifugi from "./components/Rifugi";
import PetPark from "./components/PetPark";
import Pizzerie from "./components/Pizzerie";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <Router>
      <div>
      <main className="text-slate-100 bg-gray-900 body-font">
        <Navbar />
        <Switch>
        <Route path="/Comuni" component={Comuni}/>
        <Route path="/Rifugi" component={Rifugi}/>
          <Route path="/PetPark">
              <PetPark/>
              <Contact />
          </Route>
          <Route path="/Contacts">
            
            <JoinUs />
            <Subscription />
            <Tesseramento />
            
          </Route>
          <Route path="/">
            
              <About />
              <Projects />

              <Pizzerie />
              <Testimonials />
            
          </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}
