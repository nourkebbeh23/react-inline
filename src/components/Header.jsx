import "./Navbar.css"

function Header (){
 const Title1={
    color:'white',
    paddingTop: '300px',
    marginLeft:'100px',
 }
    const Hh1={
        fontSize: '2.5rem',
    }

    return(


<div className="back">
<div style={Title1}>

<h2 style={Hh1}>
SMALL BUSINESS INSURANCE  <br />
AGENCY

</h2>
<p>AN INSURANCE COMPANY</p>

</div>


</div>
    );
}

export default Header;