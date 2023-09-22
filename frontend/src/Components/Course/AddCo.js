import React from 'react'
import '../DashContent/DashContent.css'
function AddCo() {
  return (
    <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-books"></i>
                        <span className="text">Course/Add Course</span>
                    </div>

                </div>


                <div className="container">

                    <div className="content">
                        <form >
                            <div className="user-details">
                               {/* <div className="input-box">
                                    <span className="details">Course Name</span>
                                    <input type="text" name="coursename" placeholder="Enter course name"   />
                                </div>

                                
                                 <div className="input-box">
                                    <span className="details">Course ID</span>
                                    <input type="text" name="courseid"  required maxlength="10"  />

                                </div> */}
                                 <div className="input-box">

                                    <span className="details">Course Name</span>
                                    <select required  name="course">
                                    <option value={null} selected='selected'>Select Course</option>
                                    <option value='graphic-design'>Graphic design</option>
                                        <option value='digital-marketing'>Digital marketing</option>
                                        <option value='photography'>Photography</option>
                                        <option value='animation'>Animation and motion design</option>
                                    </select>
                                    

                                </div>


                               <div className="input-box">
                                    <span className="details">Tuition Fee</span>
                                    <input type="text" name="tuitionfee"  required  />

                                </div>

                                <div className="input-box">
                                    <span className="details">Expected Duration in Days</span>
                                    <input type="text" name="duration"  required maxlength="10"  />

                                </div>


                               <button type="button" class="btn btn-warning ">Submit</button> 

                                

                            </div>
                        </form>
                    </div>
                </div>

            </div>


           
        
  )
}

export default AddCo