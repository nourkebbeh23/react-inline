import "./Navbar.css"
function Form(){
    const Input={
        padding:'10px'
    }
    const Forms={
        display:'flex',
        justifyContent: 'space-around',
        marginTop:'150px',
    }
    const MK={
        color:'#fd7e14 ',
    }
    return(
<div style={Forms}>

<div>
<form action="">
<p>FULL NAME</p>
<input style={Input} type="text" placeholder="FULL NAME" />

<p>EMAIL</p>
<input  style={Input} type="email" placeholder="EMAIL" />

<p>PHONE</p>
<input  style={Input} type="text" placeholder="PHONE" />

<p>MESSAGE</p>
<textarea  style={Input} placeholder="MESSAGE" name="" id="" cols={30} rows={7}></textarea>



</form>


<a href="#"  className="bvv">READ MORE</a>
</div>

<div>
<h3>Contact Info</h3>
<p>Address</p>
<address style={MK}>203 Fake St. Mountain View, <br /> San Francisco, California, USA</address>
<p>PHONE</p>
<p style={MK}>+1 232 3235 324</p>
<p>Email Address</p>
<p style={MK}>youremail@domain.com</p>
</div>

</div>
    );
}
export default Form;