import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar () {

const InlineStyle ={
 
  padding: '10px',
  display: 'flex',
  gap: '15px',
}



const Bb={
  backgroundColor:'white' ,
  display:'flex',
  justifyContent: 'space-around',
  width: '1400px',
  alignItems: 'center',
}

const Tag ={
  marginTop: '8px',
    color:'black',
    fontWeight: 'bold',
}
const Btn={
color:'white',
backgroundColor:'#fd7e14' ,
width:'100px',
height:'25px',
padding:'10px',
marginTop:'-10px',
borderRadius: '5px',

}
  return (
   <div style={Bb}>

<a href="#"> <h2  style={Tag}>FUNDER</h2>
</a>


 <nav style={InlineStyle}>
      <Link className="Navv" to="/">Home</Link>
      <Link className="Navv" to="/about">About</Link>
      <Link className="Navv" to="/services">Services</Link>
      <Link className="Navv" to="/contact">Contact</Link>
      <Link className="Navv" to="/blog">Blog</Link>
      <Link className="Navv" to="/Insurance ">Insurance </Link>
    
      <a href="#" style={Btn}>Get A Quote</a>
    </nav>







   </div>
  );
};

export default Navbar;
