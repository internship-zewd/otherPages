// import axios from 'axios'
// export const getAllEmployees=async(props)=>{
        
//         const data=props.data
//         const setData=props.setData

//         const instructor=await axios.get('http://localhost:8081/instructor')
//         const admin=await axios.get('http://localhost:8081/admin')
    
//         await axios.all([instructor,admin])
//         .then( 
//            axios.spread((...allData)=>{
//             const instructor=allData[0].data
//             const admin=allData[1].data
//           console.log(instructor)
         
//           const getEmployees=[instructor,admin]
//           console.log(getEmployees)           
//                 const employees={}
//                 var k =0; 

//                 for(var i=0;i<getEmployees.length;i++){
                    
//                     for(var j=0;j<getEmployees[i].length;j++){
                        
//                             employees[k]=getEmployees[i][j]
//                             k++
              
//             }}
//             console.log(employees)
//              setData(employees); 
        
            
            
        
//          console.log(instructor)
//            }) 
            
//     )
//         .catch((err)=>{
//             if(err){console.log(err)}
//         })
//     return data
// }