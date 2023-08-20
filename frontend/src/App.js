import React from 'react';
import { useState } from 'react';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import ContentTop from './Components/ContentTop/ContentTop';

function App() {
  const [sidebarClose, setSidebarClose] = useState(false);
  const handleClick= () => {
    setSidebarClose(!sidebarClose);
  }
  return (
    <div>
     
      
       <div className="full_content">
        <section>
             <Sidebar sidebarClose={sidebarClose}/>
             <section className="dashboard">
             <ContentTop click={handleClick}/>
              <Content />
              </section>
             
        </section>
    </div>
    </div>
  )
}

export default App