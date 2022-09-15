import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import TwNavbar from "./components/TwNavbar";

const WrapedCounter = React.lazy(()=> import('./components/WrapedCounter'));
import Dog from 'react_q2_dogs/Dog'

const App = () => (
  <>
    <TwNavbar />
    <div className="container mt-5 mx-auto bg-gray-700 text-2xl px-12 pt-5 pb-5">
    <div className="mb-5">
      <div>Name: react_host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    
    <hr/>
    <Suspense fallback={<div>Ładowanie...</div>}>
      <WrapedCounter />
    </Suspense>
      
    
    <hr/>
    <div className="mb-2 mt-2 text-xs content-center">
      <Dog />
    </div>
      
    </div >
    
  </>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
