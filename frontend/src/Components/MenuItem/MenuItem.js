import React, { useState } from 'react'
import "./MenuItem.css"
function MenuItem(props, ) {

     const {name, subMenus, iconClassName} = props;
       const [expand, setExpand] = useState(false);
     
  return (
   <li>
    <a href="#" onClick={() => setExpand(!expand)} >              
        <i className={iconClassName}></i>
         <span className="linkName">{name}</span>
             </a>
             {
                subMenus && subMenus.length > 0 ? ( 
                         <ul className={ expand ? 'expanded submenu' : 'submenu' }>
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