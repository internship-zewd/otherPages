import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ReactDOM from "react-dom/client";
import Img from './resource/image.png';

function Pages() {
    const body = useRef('');
    const sidebarToggle = useRef('');
    const sidebar = useRef('');
// ref={sidebar} ref={sidebarToggle}

    // sidebarToggle.addEventListener("click", () => {
    //      sidebar.classList.toggle("close");
// })

  return (
    <div>
      <div className="full_content">
        <section>
            <nav ref={sidebar}>
            <div className="logo">
                <div className="logoImage"> 
                <img src={Img} alt="" />
                </div>

                <span className="logoName">ZEWD ACADEMY</span>
            </div>

            <div className="menuItems">
                <ul className="navLinks">
                    <li><a href="#">
                        <i className="uil uil-estate"></i>
                        <span className="linkName">Dashboard</span>
                     
                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-graduation-cap"></i>
                        <span className="linkName">Student</span>
                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-suitcase"></i>
                        <span className="linkName">Employee</span>
                    </a></li>

                    <li><a href="#">
                       
                        <i className="uil uil-books"></i>
                        <span className="linkName">Course</span>
                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-presentation"></i>
                        <span className="linkName">Class</span>

                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-rocket"></i>
                        <span className="linkName">Project</span>
                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-receipt-alt"></i>
                        <span className="linkName">Report</span>
                    </a></li>

                    <li><a href="#">
                        
                        <i className="uil uil-message"></i>
                        <span className="linkName">Message</span>
                    </a></li>
                </ul>
            </div>

        </nav>

        <section className="dashboard">
            <div className="top">
                <i className="uil uil-bars sidebarToggle" ref={sidebarToggle} ></i>

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
              
            <div className="dashContent">
                <div className="overview">
                    <div className="title">
                        <i className="uil uil-estate"></i>
                        <span className="text">Dashboard</span>
                    </div>

                    <div className="boxes">
                        <div className="box box1">
                            <i className="uil uil-graduation-cap"></i>
                            <span className="text">Total Students</span>
                            <span className="number">400</span>
                        </div>

                        <div className="box box2">
                            <i className="uil uil-books"></i>
                            <span className="text">Total Courses</span>
                            <span className="number">23</span>
                        </div>

                        <div className="box box3">
                            <i className="uil uil-suitcase"></i>
                            <span className="text">Total Employees</span>
                            <span className="number">35</span>
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="title">
                        <span className="textActivities">Recent Activities</span>
                    </div>

                    <div className="activityData">
                        
                    </div>
                </div>
            </div>
                
            
        </section>
        </section>
    </div>
</div>
  )
}

export default Pages


