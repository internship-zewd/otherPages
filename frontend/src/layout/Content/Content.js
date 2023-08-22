import React from 'react'
import './Content.css'

import DashContent from '../../Components/DashContent/DashContent'

import {
  
  Switch,
  Route,
 
} from "react-router-dom";


import AddSt from '../../Components/Student/AddSt';
import AllSt from '../../Components/Student/AllSt';
import AddEm from '../../Components/Employee/AddEm';
import AllEm from '../../Components/Employee/AllEm';
import AddCo from '../../Components/Course/AddCo';
import AllCo from '../../Components/Course/AllCo';
import AddCl from '../../Components/Class/AddCl';
import AllCl from '../../Components/Class/AllCl';
import AddPr from '../../Components/Project/AddPr';
import AllPr from '../../Components/Project/AllPr';
import Financial from '../../Components/Report/Financial';
import Attendance from '../../Components/Report/Attendance';
import ReportCard from '../../Components/Report/ReportCard';
import NewM from '../../Components/Message/NewM';
import Archive from '../../Components/Message/Archive';


function Content({click}) {
  return (
   
  
             
                  <Switch>
          
                   <Route exact path={'/'}>
                <DashContent/>
              </Route>
              <Route  exact path={'/Student/Add Student'}>
                <AddSt/>
              </Route>
              
              <Route path={'/Student/All Students'}>
                <AllSt/>
              </Route>
  

             <Route path={'/Employee/Add Employee'}>
                <AddEm/>
              </Route>

              <Route path={'/Employee/All Employees'}>
                <AllEm/>
              </Route>

              <Route path={'/Course/Add Course'}>
                <AddCo/>
              </Route>

              <Route path={'/Course/All Courses'}>
               <AllCo/>
              </Route>

              <Route path={'/Class/Add Class'}>
                <AddCl/>
              </Route>

              <Route path={'/Class/All Classes'}>
                <AllCl/>
              </Route>

              <Route path={'/Project/Add Project'}>
                <AddPr/>
              </Route>

              <Route path={'/Project/All Projects'}>
                <AllPr/>
              </Route>

              <Route path={'/Report/Financial Report'}>
                <Financial/>
              </Route>

              <Route path={'/Report/Attendance Report'}>
                <Attendance/>
              </Route>

              <Route path={'/Report/Student Report Card'}>
                <ReportCard/>
              </Route>

              <Route path={'/Message/New Message'}>
                <NewM/>
              </Route>
              <Route path={'/Message/Archives'}>
                <Archive/>
              </Route>

            </Switch> 
            
               
           
                
            
        
  )
}

export default Content