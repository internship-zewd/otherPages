import React, { useState } from 'react'
import '../DashContent/DashContent.css'
import axios from 'axios';

function AddCl() {
     const [className, setClassname] = useState('');
    const [course, setCourse] = useState('');
    const [instructor, setInstructor] = useState('');
    const [errors,setErrors]=useState({});

   let handleSubmit=async(e)=>{
        e.preventDefault()
        let validationErrors={}
        let regclassName=/^[a-zA-Z0-9]+(([',. -][a-zA-Z0-9])?[a-zA-Z0-9]*)*$/ ;

        if(!regclassName.test(className)){
            validationErrors.className="Class name";
        }else if(className.length<3){
            validationErrors.className="Class name is supposed to be atleast 3 characters"
        }else if(className.length>15){
            validationErrors.className="Class name should be less than 16 characters"
        }

        if(!course.trim()){
            validationErrors.course="Fill in Course"
        }else if(course.length>26){
            validationErrors.course="course must not exceed 26 characters."
        }

        // if(!instructor.trim()){
        //     validationErrors.instructor="Fill in Course instructor ";
        // }else if(instructor.length>34){
        //     validationErrors.instructor="The instructor in days should be less than 4 characters";

        // }
        

        setErrors(validationErrors)
        if(Object.keys(validationErrors).length===0){
            alert('Class Added successfully!')
        }
        if(Object.keys(validationErrors).length===0){

        return await axios
        .post("http://localhost:8081/course",{className,course,instructor})
        .then((res)=>{console.log(res)})
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })}
        else{
            alert('try again')

            console.log(validationErrors)
           
        }

    }
  return (
   <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-presentation"></i>
                        <span className="text">Class/Add Class</span>
                    </div>

                </div>

                <div className="container">

                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                              
                               
                                 <div className="input-box">

                                    <span className="details">Class Name</span>
                                    <input type="text"  id='className' required value={className} onChange={(e) =>{ setClassname
                                (e.target.value) }} name="className" placeholder="Enter Name of class" /><br />
                                    <div className="errors">{errors.className}<br/></div>

                                </div>


                               <div className="input-box">

                                    <span className="details">Course</span>
                                    <select required onChange={(e)=>{setCourse(e.target.value )}} name="course">
                                    <option value={null} selected='selected'>Select Course</option>
                                    <option value='graphic-design'>Graphic design</option>
                                        <option value='digital-marketing'>Digital marketing</option>
                                        <option value='photography'>Photography</option>
                                        <option value='animation'>Animation and motion design</option>
                                    </select>
                                    <div className="errors">{errors.course}<br/></div>

                                </div>

                                <div className="input-box">

                                    <span className="details">Instructor</span>
                                    <select required onChange={(e)=>{setCourse(e.target.value )}} name="course">
                                    <option value={null} selected='selected'>Select Course</option>
                                    <option value='graphic-design'>Graphic design</option>
                                        <option value='digital-marketing'>Digital marketing</option>
                                        <option value='photography'>Photography</option>
                                        <option value='animation'>Animation and motion design</option>
                                    </select>
                                    <div className="errors">{errors.course}<br/></div>

                                </div>


                              <button type='submit' className="btn btn-warning" name='submit' onChange={handleSubmit} >Submit</button>
                                
                                

                            </div>
                        </form>
                    </div>
                </div>
                </div>
  )
}

export default AddCl