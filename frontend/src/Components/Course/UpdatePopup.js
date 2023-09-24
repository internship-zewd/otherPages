import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Popup.css';
import {useState} from "react";
import axios from 'axios';





export const UpdatePopup=(props)=>{

    const setTrigger=props.setTrigger
    const updateProp=props.updateProp
    const id=updateProp.id

    const [courseName, setCoursename]=useState(updateProp.course_name)
    const [fee, setFee]=useState(updateProp.course_fee);
    const [duration, setDuration] =useState(updateProp.course_duration);
    const [errors,setErrors]=useState({})
    
   
// console.log(updateProp.id)


const handleSubmit=async(e)=>{
    //  e.preventDefault()
    await axios.put(`http://localhost:8081/course/${id}`,{courseName,fee,duration} )
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
}
   return(props.trigger)?(

   
           <div className="dashContent">
              <div className="overview">
                 <div className="title">
                   <i className="uil uil-graduation-cap"></i>
                     <span className="text">Course/All Courses</span>
                 </div>
            <div className="container">
                    <div className="content">
                    <div className="popup">
                    <div className="popup-inner">
                       <form onSubmit={handleSubmit}>

                            <div className="user-details">
                                 <div className="input-box">

                                    <span className="details">Course Name</span>
                                    <input type="text"  id='courseName' required defaultValue={updateProp.course_name} onChange={(e) => { setCoursename(e.target.value) }}  name="courseName" placeholder=" Name of course" /><br />
                                    
                                </div>


                               <div className="input-box">
                                    <span className="details">Tuition Fee</span>
                                     <input type='number' id='fee' required defaultValue={updateProp.fee} onChange={(e) => { setFee(e.target.value) }} name='fee' placeholder='Enter tuition fee'  /><br />
                                      
                                     </div>

                                <div className="input-box">
                                    <span className="details">Expected Duration in Days</span>
                                    <input type='number' id='duration' required defaultValue={updateProp.duration} onChange={(e) => { setDuration(e.target.value) }} name='duration' placeholder='Enter duration' /><br />
                                   
                                </div>



                                 
                                                  
  
    
                                                 <button type='submit' className="btn btn-info btn-block" name='submit' onChange={handleSubmit} >Submit</button>
                                                 <button className="btn btn-info btn-block" onClick={ ()=>{setTrigger(false)}}> close </button>  
                                                 </div>
    </form>
                   
        {props.children}
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>


  
    
):"";
};