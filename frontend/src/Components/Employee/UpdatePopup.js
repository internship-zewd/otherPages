import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Popup.css';
import {useState} from "react";
import axios from 'axios';





export const UpdatePopup=(props)=>{

    const setTrigger=props.setTrigger
    const updateProp=props.updateProp
    const id=updateProp.id

    const[employeeType,setEmployeeType]=useState(updateProp.employee_type)
    const [firstName,setFirstName]=useState(updateProp.first_name);
    const [middleName,setMiddleName]=useState(updateProp.middle_name);
    const [lastName,setLastName]=useState(updateProp.last_name);
    const [email,setEmail]=useState(updateProp.email);
    const [phone,setPhone]=useState(updateProp.phone);
    const [salary,setSalary]=useState(updateProp.salary);
    const [date,setDate]=useState(updateProp.employment_date);
    const [course,setCourse]=useState(updateProp.course);
    const [regNum,setRegNum]=useState(updateProp.registration_number);
    const [errors,setErrors]=useState({})
    
   
// console.log(updateProp.id)


const handleSubmit=async(e)=>{
    //  e.preventDefault()
    await axios.put(`http://localhost:8081/instructor/${id}`,{employeeType,firstName,middleName,lastName,email,phone,salary,date,course,regNum} )
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
                    <span className="text">Employee/Add Employee</span>
                 </div>
            <div className="container">
                    <div className="content">
                    <div className="popup">
                    <div className="popup-inner">
                       <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                 <div className="input-box">
                                     <span className="details">Employee Type</span>
                                      <select id='employeeType' name='employeeType' value={employeeType} onChange={(e) => { setEmployeeType(e.target.value) }}>
                                        <option value='' selected='selected'>select type</option>
                                        <option value='Admin'>Admin</option>
                                        <option value='Manager'>Manager</option>
                                        <option value='Accountant'>Accountant</option>
                                        <option value='Instructor'>Instructor</option>
                                      </select>
                                 </div>


                                  <div className="input-box">
                                      <span className="details">First Name:</span>
                                      <input type='text' id='firstName' required value={firstName} onChange={(e) => { setFirstName(e.target.value) }} name='firstName' placeholder='First Name of employee' autoComplete='off' /><br />
                                  </div>


                                  <div className="input-box">
                                      <span className="details">Middle Name:</span>
                                      <input type='text' id='middleName' required value={middleName} onChange={(e) => { setMiddleName(e.target.value) }} name='middleName' placeholder='Middle Name of employee' autoComplete='off' /><br />
                                  </div>

                                   <div className="input-box">
                                       <span className="details">Last Name:</span>
                                       <input type='text' id='lastName' required value={lastName} onChange={(e) => { setLastName(e.target.value) }} name='lastName' placeholder='Last Name of employee' autoComplete='off' /><br />
                                  </div>

                                     <div className="input-box">
                                          <span className="details">Email:</span>
                                          <input type='email' id='email' required value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='Email' autoComplete='off' /><br />
                                     </div>

                                       <div className="input-box">
                                            <span className="details">Phone:</span>
                                            <input type='tel' id='phone' required value={phone} onChange={(e) => { setPhone(e.target.value) }} name='phone' placeholder='Phone Number' autoComplete='off' /><br />
                                       </div>


                                       <div className="input-box">
                                           <span className="details">Salary:</span>
                                           <input type='number' id='salary' required value={salary} onChange={(e) => { setSalary(e.target.value) }} name='salary' placeholder='Enter Salary' autoComplete='off' /><br />
                                       </div>

                                          <div className="input-box">
                                            <span className="details">Date:</span>
                                            <input type='date' id='date' required value={date} onChange={(e) => { setDate(e.target.value) }} name='date' placeholder='09--------' autoComplete='off' /><br />
                                         </div>

                                          <div className="input-box">
                                                   <div className="gender-details">
                                                         <span className="details">Course</span>
                                                                <select id='course' name='course' onChange={(e) => { setCourse(e.target.value) }} multiple={true}>
                                                                      <option value='' selected='selected'>select course</option>
                                                                      <option value='graphic-design'>Graphic design</option>
                                                                      <option value='digital-marketing'>Digital marketing</option>
                                                                      <option value='photography'>Photography</option>
                                                                      <option value='animation'>Animation and motion design</option>
                                                                  </select>
                                                    </div>
                                             </div>


                                                   <div className='input-box'>
                                                         <span className="details">Registration Number</span>
                                                         <input type='number' id='regNum' required value={regNum} name='regNum' placeholder='Registration no.' onChange={(e) => { setRegNum(e.target.value) }} autoComplete='off' /><br />
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