// import './Popup.css';
import {React} from 'react';
export const ViewPopup=(props)=> {


  const courseProp=props.courseProp
  const setTrigger=props.setTrigger
  // console.log(courseProp)
  // const type=data.course_type

  

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h5>Course's Id:</h5>
        <p> {courseProp.id_tag}</p>
        <h5>Course's Name:</h5>
        <p> {courseProp.course_name} </p>
        <h5>Course's Tuition fee:</h5>
        <p> {courseProp.fee} </p>
        <h5>Course's Duration in days:</h5>
        <p> {courseProp.course_duration} </p>

        <button
          className="close-btn  btn btn-secondary"
          onClick={() => {
            setTrigger(false);
          }}
        >
          close
        </button>
        <button
          className="print-btn btn btn-warning"
          // onClick={() => {
          //   setTrigger(false);
          // }}
        >
          print
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};