import "./popup.css";
import {React} from 'react';
import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ViewPopup=(props)=> {
  const studentProp=props.studentProp
  const setTrigger=props.setTrigger
  

  

  return (props.trigger)?(
    
    <div className="popup-overlay">
        <div className="popup-content">
      <h2> Id:</h2> {studentProp.id}
      <h2> Full Name:</h2> {studentProp.username} 
      <h2> Email:</h2> {studentProp.email}
      <h2> Phone Number:</h2> {studentProp.phonenumber}
      <h2> Course:</h2> {studentProp.course}
      <h2> Payment Status:</h2> {studentProp.paymentStatus}
      <h2> Admission Date:</h2> {studentProp.addmitiondate}
      <br/>
    <button className="btn btn-info btn-block" onClick={()=>{setTrigger(false)}}>close</button>
    {props.children}
    </div>
    </div>
    
  ):"";
};