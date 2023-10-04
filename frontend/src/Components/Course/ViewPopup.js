// import './Popup.css';
import {React} from 'react';
export const ViewPopup=(props)=> {


  const courseProp=props.courseProp
  const setTrigger=props.setTrigger
  // console.log(courseProp)
  // const type=data.course_type

  

  return (props.trigger)?(
    <div className='popup'>
    <div className="popup-inner">
      <h3>{courseProp.course_name} Id:</h3><p> {courseProp.id}</p>
      <h3>{courseProp.course_name}</h3><p> {courseProp.course_name} </p>
      <h3>{courseProp.course_name} Tuition fee</h3><p> {courseProp.fee} </p>
      <h3>{courseProp.course_name} Duration in days</h3><p> {courseProp.course_duration} </p>
      
    <button className="close-btn" onClick={()=>{setTrigger(false)}}>close</button>
    {props.children}
    </div>
    </div>
    
  ):"";
};