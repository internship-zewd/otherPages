import './Popup.css';
import {React} from 'react';
export const ViewPopup=(props)=> {


  const employeeProp=props.employeeProp
  const setTrigger=props.setTrigger
  // console.log(employeeProp)
  // const type=data.employee_type

  

  return (props.trigger)?(
    <div className='popup'>
    <div className="popup-inner">
      <h3>{employeeProp.employee_type}'s Id:</h3><p> {employeeProp.id}</p>
      <h3>{employeeProp.employee_type}'s name:</h3><p> {employeeProp.first_name} {employeeProp.middle_name} {employeeProp.last_name}</p>
      <h3>{employeeProp.employee_type}'s email:</h3><p> {employeeProp.email}</p>
      <h3>{employeeProp.employee_type}'s phone:</h3><p> {employeeProp.phone}</p>
      <h3>{employeeProp.employee_type}'s salary:</h3><p> {employeeProp.salary}</p>
      <h3>{employeeProp.employee_type}'s employment date:</h3><p> {employeeProp.employment_date}</p>
      <h3>{employeeProp.employee_type}'s course:</h3><p> {employeeProp.course}</p>
    <button className="close-btn" onClick={()=>{setTrigger(false)}}>close</button>
    {props.children}
    </div>
    </div>
    
  ):"";
};