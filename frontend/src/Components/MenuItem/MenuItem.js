import React from 'react'

function MenuItem(props) {

     const {name, subMenus} = props;
  return (
   <li>
    <a href="#">              
        <i className="uil uil-books"></i>
         <span className="linkName">{name}</span>
             </a>
             {
                subMenus && subMenus.length > 0 ? ( 
                         <ul className="submenu">
                            {subMenus.map((menu,index) => 
                                 <li key={index}>
                                    <a href="#">
                                    <span className="sublinkName">{menu.name}</span>
                                    </a>
                                 </li>)}
                                
                                
                             </ul>) : null
             }
                
                    </li>
  )
}

export default MenuItem