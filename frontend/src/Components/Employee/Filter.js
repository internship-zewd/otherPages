import {useState,useEffect } from 'react';
import axios from 'axios'
import './AddEm.css'
export const Filter=(props)=>{

    const data=props.data;
    const setData=props.setData
    
 
    const filterEmployeeType=async(employeeType)=>{
        props.getAllEmployees()
        
            setData(
                data.filter((item)=>{
                      return employeeType===""?item:
                      item.employee_type.includes(employeeType)
            }))}

    
    
return(
   
    <div className="content">
   
    <div className="user-details">
  
        <form>
        
        <div className = 'input-box'>
        <div className="gender-details">
                <select onChange={(e)=>{filterEmployeeType(e.target.value) }} >
                    <option value="" selected="selected">All employees</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Accountant">Accountant</option>

                </select> 
                    
                     </div>
                     
                     </div>
              
                </form>
               

               
                
          {props.children}     
                </div>
                </div>
             
)
}