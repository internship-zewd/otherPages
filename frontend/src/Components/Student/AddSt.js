import React, { useState } from 'react'
import '../DashContent/DashContent.css'
import './Addst.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function AddSt () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [addmitiondate, setAddmitiondate] = useState('');
    const [course, setCourse] = useState('');
    const [classs, setClasss] = useState('');
    const [dob, setDob] = useState('');
    const [registno, setRegistno] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const validationErrors = {}
      
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert('Registerd Successfully!')
        }
        
        return await axios
        .post("http://localhost:8081/student",{username,email,phonenumber,gender,paymentStatus,addmitiondate,course,classs,dob,registno})
        .then((res)=>{console.log(res)})
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
        

    }

    return (
        <div className="dashContent">
            <div className="overview">
                <div className="title">
                    <i className="uil uil-graduation-cap"></i>
                    <span className="text">Student/Add Student</span>
                </div>
                <div className="container">

                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" name="username" placeholder="Enter your name"  required minLength={6} onChange={(e)=>{setUsername(e.target.value )}} />
                                </div>

                                <div className="input-box">
                                    <span className="details">Email </span>
                                    <input type="email" placeholder="Enter your Email " name="email" required onChange={(e)=>{setEmail(e.target.value )}} />

                                </div>

                                <div className="input-box">
                                    <span className="details">Mobile Number</span>
                                    <input type="text" placeholder="09--------" name="phonenumber"  required maxlength="10" onChange={(e)=>{setPhonenumber(e.target.value )}} />

                                </div>

                                <div className="input-box">
                                    <span className="details">Gender</span>
                                    <select required onChange={(e)=>{setGender(e.target.value )}} name="gender">
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>

                                </div>

                                <div className="input-box">

                                    <span className="details">Course</span>
                                    <select required onChange={(e)=>{setCourse(e.target.value )}} name="course">
                                        <option value="">Select Course</option>
                                        <option value="graphics">Graphics Design</option>
                                        <option value="motiong">Motion Graphics</option>
                                    </select>

                                </div>

                                <div className="input-box">

                                    <span className="details">Class</span>
                                    <select required onChange={(e)=>{setClasss(e.target.value )}} name="classs">
                                        <option value="">Select Class</option>
                                        <option value="a">A</option>
                                        <option value="b">B</option>
                                        <option value="b">C</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <span className="details">Picture</span>
                                    <input type="file" accept="image/*" required  />
                                </div>

                                <div className="input-box">
                                    <div className="gender-details">
                                        <span className="details">Payment Status</span>
                                        <select required onChange={(e)=>{setPaymentStatus(e.target.value )}} name="paymentStatus">
                                            <option value=""></option>
                                            <option value="half">Half_Paid</option>
                                            <option value="full">Full_Paid</option>
                                            <option value="unpaid">Unpaid</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="input-box">
                                    <span className="details">Date of Birth</span>
                                    <input type="date" placeholder="" id="Date" name="dob"  requiredonChange={(e)=>{setDob(e.target.value )}} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Admission Date</span>
                                    <input type="date" placeholder="" id="Date" name="addmitiondate"  required onChange={(e)=>{setAddmitiondate(e.target.value )}} />
                                </div>

                                <div className="input-box">
                                    <span className="details">Registration Number</span>
                                    <input type="text" placeholder="Registration Number" name="registno"  required maxlength="10" onChange={(e)=>{setRegistno(e.target.value )}} />

                                </div>


                                <button className="btn btn-info btn-block"
                                    type="submit" onChange={handleSubmit}

                                >Register</button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>


           
        </div>
    )
}
export default AddSt
