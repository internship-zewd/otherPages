import React from 'react'
import './ContentTop.css'



function ContentTop({click}) {
  
  return (
    <div className="top">
                {/* <button type="button" className="toggler" onClick={() => toggleSidebar() }> */}
                <i className="uil uil-bars sidebarToggle"  onClick={click} ></i>
            {/* </button> */}
            

                <div className="searchBox">
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Search here..."/>
                </div>

                
                <i className="uil uil-schedule toDo"></i>
                <i className="uil uil-bell notify"></i>

               <div className="dropdown">
                 <button  className="dropbtn">
                    <i className="uil uil-user profile"></i></button>
                       <div id="dropDownP" className="dropDownPContent">
                           <a href="#"><i className="uil uil-user-square"></i>Profile</a>
                           <a href="#"><i className="uil uil-setting"></i>Setting</a>
                           <a href="#"><i className="uil uil-signout"></i>Logout</a>
                        </div>
                </div>
            </div>
  )
}

export default ContentTop