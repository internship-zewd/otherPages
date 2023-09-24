import {useState,useEffect } from 'react';
import axios from 'axios'
import './AddEm.css'
export const Filter=(props)=>{

    const data=props.data;
    const setData=props.setData
    
   
 
    const filterEmployeeType=(employeeType)=>{
        // props.getAllEmployees()

            
                const filteredData=data.filter((item)=>{
                      return employeeType===""?item:
                      item.employee_type.includes(employeeType)
            })
        setData(filteredData)
        }

       
    
return(
   
    <div className="content">
   
    <div className="user-details">
  
        <form>
        
        <div className = 'input-box'>
        <div className="gender-details">
                <select onChange={(e)=>{filterEmployeeType(e.target.value) }} >
                    <option value="" selected="selected">All employees</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="instructor">Instructor</option>
                    <option value="accountant">Accountant</option>

                </select> 
                    
                     </div>
                     
                     </div>
              
                </form>
               

               
                
          {props.children}     
                </div>
                </div>
             
)
}