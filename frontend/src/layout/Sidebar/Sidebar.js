import React from 'react';
import { useState } from 'react';
import Logo from '../../resource/images/logo.png';
import './Sidebar.css';

import MenuItem from '../../Components/MenuItem/MenuItem';
// import { useContext } from 'react';


function Sidebar({sidebarClose}) {
    const [expand, setExpand] = useState(false);
   

const menuItems =[
    {
        name:"Dashboard", 
        iconClassName:"uil uil-estate",
        to:"/"
    },
    {
        name:"Student", 
        to:"/Student", 
        iconClassName:"uil uil-graduation-cap", 
        subMenus:[
            {
              name:"Add Student", to:"/Student/Add Student"
            },
            {
             name:"All Students", to:"/Student/Add Student"
            }
        ]
    },
    {
        name:"Employee", 
        to:"/Employee", 
        iconClassName:"uil uil-suitcase",
        subMenus:[
            {
              name:"Add Employee", to:"/Employee/Add Employee"
            },
            {
             name:"All Employees", to:"/Employee/All Employees"
            }
        ]
    },
    {
        name:"Course", 
        to:"/Course", 
        iconClassName:"uil uil-books",
        subMenus:[
            {
              name:"Add Course", to:"/Course/Add Course"
            },
            {
              name:"All Courses", to:"/Course/All Courses"
            }
        ]
    },
    {
        name:"Class", 
        to:"/Class", 
        iconClassName:"uil uil-presentation",
        subMenus:[
            {
              name:"Add Class", to:"/Class/Add Class"
            },
            {
             name:"All Classes", to:"/Class/All Classes"
            }
        ]
    },
    {
        name:"Project", 
        to:"/Project", 
        iconClassName:"uil uil-rocket",
        subMenus:[
            {
              name:"Add Project", to:"/Project/Add Project"
            },
            {
              name:"All Projects", to:"/Project/All Projects"
            }
        ]
    },
    {
        name:"Report", 
        to:"/Report", 
        iconClassName:"uil uil-receipt-alt",
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
        iconClassName:"uil uil-message",
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
                   {
                    menuItems.map((menuItem, index) => (
                        <MenuItem 
                        expand={expand}
                        key={index}
                        name={menuItem.name}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        iconClassName={menuItem.iconClassName}
                        />
                    ))
                   }
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
                    </a></li>  */}
                </ul>
            </div>

        </nav>
  )
}

export default Sidebar