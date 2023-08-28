import React, { useState } from 'react'
import '../DashContent/DashContent.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
function AddEm() {

    const [employeeType, setEmployeeType] = useState('')
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');
    const [course, setCourse] = useState({});
    const [regNum, setRegNum] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault()

        return await axios
            .post("http://localhost:8081/instructor", { employeeType, firstName, middleName, lastName, email, phone, salary, date, course, regNum })
            .then((res) => { console.log(res) })
            .catch((err) => {
                if (err) {
                    console.log(err)
                }
            })


    }
    return (
        <div className="dashContent">
            <div className="overview">
                <div className="title">
                    <i className="uil uil-suitcase"></i>
                    <span className="text">Employee/Add Employee</span>
                </div>
                <div className="container">
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">

                            <div className="input-box">
                                <div className="gender-details">
                                    <span className="details">Employee Type</span>
                                    <select id='employeeType' name='employeeType' value={employeeType} onChange={(e) => { setEmployeeType(e.target.value) }}>
                                        <option value='' selected='selected'>select type</option>
                                        <option value='Admin'>Admin</option>
                                        <option value='Manager'>Manager</option>
                                        <option value='Accountant'>Accountant</option>
                                        <option value='Instructor'>Instructor</option>
                                    </select>
                                </div>
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
                                    </select></div>
                            </div>

                            <div className='input-box'>
                                <span className="details">Registration Number</span>
                                <input type='number' id='regNum' required value={regNum} name='regNum' placeholder='Registration no.' onChange={(e) => { setRegNum(e.target.value) }} autoComplete='off' /><br />
                                </div> 
                              
                                
                                <button type='submit' className="btn btn-info btn-block" name='submit' onChange={handleSubmit} >Submit</button>
                                </div>
                      
                    </form>
                </div>
            </div>

        </div>
        </div>


               
             
  )
}

export default AddEm