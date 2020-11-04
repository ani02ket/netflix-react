import React,{useState,useEffect} from 'react'
import './Nav.css';

function Nav(){
	
	const [show,handleShow] = useState(false);
	
	useEffect( ()=>{
		window.addEventListener("scroll",()=>{
		  if(window.scrollY>100){
			  handleShow(true);
		  }else{
			  handleShow(false);
		  }
		});
	  return ()=>{
		  window.removeEventListener("scroll");
	  };
	},[] );
	return(
	  <div className={`nav ${show && "nav_black"}`}>
		<img
		 className="nav_logo"	
		 src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
		 alt='netflix-logo'/>
		<img
		 className="nav_avatar"	
		 src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
		 alt='netflix-logo'/>	
	  </div>
	)
	
}

export default Nav