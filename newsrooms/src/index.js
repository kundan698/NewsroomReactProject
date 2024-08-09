import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './HeaderCSS/Header.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Demandhub from './HeaderPartPages/Demandhub';
import MetaIOlogo from './Pages/Component/MetaIOlogo';
import Metamatch from './HeaderPartPages/Metamatch';
import Spotlight from './HeaderPartPages/Spotlight';
import Revenue from './Pages/Component/Revenue';
import AudienceTargeting from './Pages/AudienceTargeting';
import MarketingAutomation from './Pages/Component/MarketingAutomation';
import Contest from './Context/Contest';
import BookAnIntro from './Pages/Component/BookAnIntro';


let routing = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Demand-hub',
    element:<Demandhub/>
  },
  {
    path:'/Meta-iologo',
    element:<MetaIOlogo/>
  },
  {
    path:'/metamatch',
    element:<Metamatch/>
  },
  {
    path:'/Spotlight',
    element:<Spotlight/>


  },
  {
    path:'/Revenue-optimization',
    element:<Revenue/>
  },
  {
    path:'/Audience-Targeting',
    element:<AudienceTargeting/>
  },
  {
    path:'/Marketing-automation',
    element:<MarketingAutomation/>
  },
  {
    path:'/Book-an-intro',
    element:<BookAnIntro/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Contest>
  <RouterProvider router={routing}/>
  </Contest>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
