import React from 'react';
import { useEffect, useState } from 'react';
import Logo from '../../resource/images/logo.png';
import './Sidebar.css';

import MenuItem from '../../Components/MenuItem/MenuItem';
// import { useContext } from 'react';


function Sidebar({sidebarClose}) {
const menuItems =[
    {
        name:"Dashboard", to:"/"
    },
    {
        name:"Student", 
        to:"/student", 
        subMenus:[
            {
              name:"Add Student", to:"/student/Add Student"
            },
            {
             name:"All Students", to:"/student/Add Student"
            }
        ]
    },
    {
        name:"Employee", 
        to:"/Employee", 
        subMenus:[
            {
              name:"Add Student", to:"/student/Add Student"
            },
            {
             name:"Dashboard", to:"/student/Add Student"
            }
        ]
    },
    {
        name:"Course", 
        to:"/Employee", 
        subMenus:[
            {
              name:"Add Student", to:"/student/Add Student"
            },
            {
             name:"Dashboard", to:"/"
            }
        ]
    },
    {
        name:"Class", 
        to:"/Employee", 
        subMenus:[
            {
              name:"Add Student", to:"/student/Add Student"
            },
            {
             name:"Dashboard", to:"/"
            }
        ]
    },
    {
        name:"Project", 
        to:"/Employee", 
        subMenus:[
            {
              name:"Add Student", to:"/student/Add Student"
            },
            {
             name:"Dashboard", to:"/"
            }
        ]
    },
    {
        name:"Report", 
        to:"/Employee", 
        subMenus:[
            {
              name:"Add Student", to:"/student/Add Student"
            },
            {
             name:"Dashboard", to:"/"
            }
        ]
    },
    {
        name:"Message", 
        to:"/Employee", 
        subMenus:[
            {
              name:"Add Student", to:"/student/Add Student"
            },
            {
             name:"Dashboard", to:"/"
            }
        ]
    },
]

  return (
   <nav className= {sidebarClose ? " sideBar close" : "sideBar" }>
            <div className="logo">
                <div className="logoImage"> 
                <img src={Logo} alt="" />
                </div>

                <span className="logoName">ZEWD ACADEMY</span>
            </div>

            <div className="menuItems" >
                <ul className="navLinks"  >
                   <MenuItem
                   />
                    {/* <li>
                        <a href="#"  className="navLink">
                        <i className="uil uil-estate"></i>
                        <span className="linkName">Dashboard</span>
                     
                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-graduation-cap"></i>
                        <span className="linkName">Student</span>
                    </a>
                             <ul className="submenu">
                                <li>
                                    <a href="#">
                                    <span className="sublinkName">Add Student</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                    <span className="sublinkName">All Students</span>
                                    </a>
                                 </li>
                             </ul>
                    </li>

                    <li><a href="#">
                        
                        <i className="uil uil-suitcase"></i>
                        <span className="linkName">Employee</span>
                    </a>
                            <ul className="submenu">
                                <li>
                                    <a href="#">
                                    <span className="sublinkName">Add Employee</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                    <span className="sublinkName">All Employees</span>
                                    </a>
                                 </li>
                             </ul>
                    </li>

                    <MenuItem
                      name={"Course"}
                      subMenus={[
                        {name: "Add Course"},
                        {name: "All Course"}
                      ]}
                     />

                    <li><a href="#">
                        
                        <i className="uil uil-presentation"></i>
                        <span className="linkName">Class</span>

                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-rocket"></i>
                        <span className="linkName">Project</span>
                    </a>
                             <ul className="submenu">
                                <li>
                                    <a href="#">
                                    <span className="sublinkName">Add Student</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                    <span className="sublinkName">All Students</span>
                                    </a>
                                 </li>
                             </ul>
                    </li>

                    <li><a href="#">
                        
                        <i className="uil uil-receipt-alt"></i>
                        <span className="linkName">Report</span>
                    </a>
                     <ul className="submenu">
                                <li>
                                    <a href="#">
                                    <span className="sublinkName">Add Student</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                    <span className="sublinkName">All Students</span>
                                    </a>
                                 </li>
                             </ul>
                    </li>

                    <li><a href="#">
                        
                        <i className="uil uil-message"></i>
                        <span className="linkName">Message</span>
                    </a></li> */}
                </ul>
            </div>

        </nav>
  )
}

export default Sidebar