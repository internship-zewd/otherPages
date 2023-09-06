import {useState,useEffect } from 'react';
import axios from 'axios'
import './AddEm.css'
export const Filter=(props)=>{

    const [filterDropdown,setFilterDropdown]=useState(false);
    const data=props.data;
    const setData=props.setData

    useEffect(()=>{
        getEmployee();
    },[])
    
    const getEmployee=async(employeeType)=>{
       

        await axios.get('http://localhost:8081/instructor')
        .then((res)=>{
            
            setData(res.data) 
            console.log(res.data) 
       
            setData(
                    res.data.filter((item)=>{
                      return employeeType===""?item:
                      item.employee_type.includes(employeeType)
            }))
                
            
        })
        .catch((err)=>{
            if(err){console.log(err)}
        })
    
    }
    

   


    
    
return(
   
    <div className="content">
   
    <div className="user-details">
  
        <form>
        <div className = 'input-box'>
        <div className="gender-details">
                <select onChange={(e)=>{getEmployee(e.target.value) }} disabled={filterDropdown}>
                    <option value="" selected="selected">All employees</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Accountant">Accountant</option>

                </select> 
                    
                     </div>
                     
                     </div>
              
                </form>
               

               
                
               
                </div>
                </div>
             
)
}