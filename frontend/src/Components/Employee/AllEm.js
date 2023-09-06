import React from 'react'
import '../DashContent/DashContent.css'
import './AddEm.css'
import { Table } from 'react-bootstrap';
import {ViewPopup} from './ViewPopup';
import {UpdatePopup} from './UpdatePopup'
import {useState,useEffect,useCallback,updateState} from 'react';
import {Filter} from "./Filter";
import axios from 'axios'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function AllEm() {

    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const [error,setError]=useState({});
    const[buttonPopup,setButtonPopup]=useState(false);
    const [employeeInfo,setEmployeeInfo]=useState({});
    const [updatePopup,setUpdatePopup]=useState(false);
   
    useEffect(()=>{ 
        getEmployee();
    
       },[])
    
    const getEmployee=async()=>{
    
        await axios.get('http://localhost:8081/instructor')
        .then((res)=>{
            
            setData(res.data)
            
        })
        .catch((err)=>{
            if(err){console.log(err)}
        })
    
    }
    const handleView=async(e,id)=>{
        // e.preventDefault();
        return await axios.get(`http://localhost:8081/instructor/${id}`)
        .then((response)=>{
    
            const viewData=response.data
    
            setEmployeeInfo(viewData)
            // console.log(response.data)
            // console.log(employeeInfo)
            setButtonPopup(true)
        
            
            
        })
        .catch((err)=>{
            if(err){console.log(err)}
        })
    
    
    }
    const handleUpdate=async(e,id)=>{
    
        // e.preventDefault(); 
        await axios.get(`http://localhost:8081/instructor/${id}`)
        .then((response)=>{
            setEmployeeInfo(response.data)
            console.log(response.data)
            console.log(employeeInfo.employee_type)
            setUpdatePopup(true)
        })
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
    
        
    
    }
    const handleDelete=async(e,id)=>{
           
    await axios.delete(`http://localhost:8081/instructor/${id}`)
    .then((res)=>{console.log("deleted"+ res)
    console.log(res)})
    window.location.reload()
    
    }
  return (
    <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-suitcase"></i>
                        <span className="text">Employee/All Employees</span>
                       
                        
                    </div>
                    <div className="content">
   
                   <div className="user-details">
                   <Filter data={data} setData={setData} /> 
                   <form>
                 
                    <div className='input-box'>
                  
                   <br/>
                    <input type="text" placeholder="Search Employees" onChange={(e) => { setSearch(e.target.value) }} name="search" value={search} />
                    </div>
                    </form>
                    
                    </div>
                    </div>

                    <Table striped bordered hover>
                    <thead>

<tr>
    <th>Reg No.</th>
    <th>Employee Name</th>
    <th>Type</th>
    <th>Actions</th>
</tr>
</thead>
<tbody>

{ data.filter((item)=>{
    return search.toLowerCase() === ''? item: 
    item.first_name.toLowerCase().includes(search);

})
.map((item,index)=> (
    

    <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.first_name}  {item.middle_name} {item.last_name}</td>
        <td>{item.employee_type}</td>
        
        <button className="btn btn-primary btn-sm me-2" onClick={(e) => { handleView(e, item.id)}}><VisibilityIcon/></button>
                                    <button className="btn btn-primary btn-sm me-2" onClick={(e) => { handleUpdate(e, item.id)}}><EditIcon/></button>
                                    <UpdatePopup trigger={updatePopup} setTrigger={setUpdatePopup} updateProp={employeeInfo}/>
                                    
                                   <ViewPopup trigger={buttonPopup} setTrigger={setButtonPopup} employeeProp={employeeInfo} />
                                    
                                    <button  className='btn btn-sm btn-danger' onClick={(e) => { handleDelete(e, item.id) }}> <DeleteIcon/></button>   </tr>
                        
))}
</tbody>
                    </Table>

                </div>


               
                </div>
  )
}

export default AllEm