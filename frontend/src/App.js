import React from 'react';
import { useState } from 'react';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import ContentTop from './Components/ContentTop/ContentTop';
import { SpecificMessage } from './Components/Message/SpecificMessage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [sidebarClose, setSidebarClose] = useState(false);
  const handleClick= () => {
    setSidebarClose(!sidebarClose);
  }
  return (
       <div className="full_content">
        <section>
                              
          
             <Sidebar sidebarClose={sidebarClose}  click={handleClick}/>
             <section className="dashboard">
                <ContentTop click={handleClick}/>
                 <Content />
              </section>
             
        </section>
    </div>
    
  )
}

export default App