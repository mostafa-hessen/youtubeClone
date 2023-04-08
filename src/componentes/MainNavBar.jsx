import React, { useState } from "react";
import { categories } from "../global/generalImports";

function MainNavBar(props) {
  const sendCateogryAndChangActiveclass=(target)=>{
    props.setSelectedCategory(target)
     
  }
  // const [targetCateogry,setTargetCateogry]= useState("Quran")
  return (
    <nav className="MainNav">
      <ul className=" mt-3  ul postiob-fixed p-3 list-unstyled h-100">
        {categories?.map((ele,index) => {
          return (
            <li key={index} className={props.selectedCategory==ele.name?'active':""} onClick={()=>sendCateogryAndChangActiveclass(ele.name)}>
              <lord-icon
                src={ele.icon}
                trigger="loop"
                colors="primary:#e83a30,secondary:#ee6d66"
                style={{width:'35px',height:'35px'}}
                className="loardIcon"
              ></lord-icon>
              <strong className="ms-2">{ele.name}</strong>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNavBar;
