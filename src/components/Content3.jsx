import img1 from "./assets/img_1.jpg"
import "./Navbar.css"

function Content3(){

    const SAA={
  
        display:'flex',
        justifyContent: 'center',
        marginTop:'170px',
    }
    const BX={
        margin:'30px',
    }
    const Op={
        color:'rgba(0, 0, 0, 0.6)',
    }
    const Hr={
        borderBottom:'1px solid #fd7e14 ',
        width:'30px',
        marginLeft:'15px',

    }
    const Imgg1={
        width: '540px',
        height:'340px' ,
        marginTop:'50px',
        marginLeft:'-30px'
    }





    return(
<div>
    <div style={SAA} >
    
    <a href="#"><img style={Imgg1} src={img1} alt="" /></a>
    <div style={BX} >
    <h4 style={Op}>Outstanding Services</h4>
    <h1>
    Why Choose Us</h1>
    <div style={Hr} >
    </div>
    
    <p style={Op}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
    
         Tenetur beatae quaerat maiores ad sapiente! Repudiandae hic autem ipsa <br />
          deleniti distinctio aspernatur officia facilis, aliquam voluptas <br />
           suscipit ad illum nostrum at.</p>
    
           <a href="#" className="BBtn">Insured Yours Now</a>
    </div>
 
    </div>
</div>
    );

}

export default Content3;