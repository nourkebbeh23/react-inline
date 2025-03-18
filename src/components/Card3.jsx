import img5 from "./assets/person_2.jpg"
import img6 from "./assets/person_3.jpg"
import img7 from "./assets/person_4.jpg"
import img8 from "./assets/person_1.jpg"
function Card3(){
    const Img50={
        borderRadius:  '50%',
        width:'135px',
        heigth:'135px',
    }
    const Hrr={
        borderBottom:'1px solid #fd7e14 ',
        width:'70px',
       marginLeft:'670px'
    }

    const Qcard={
        display:'flex',
        justifyContent: 'center',
        marginTop:'70px',
    }
    const Call={
        textAlign:'center' ,
        margin:'5px',
      
    
    }
    
        const Op={
            color:'rgba(0, 0, 0, 0.6)',
            margin:'10px'
        }
        const ED={
            textAlign:'center',
            marginTop:'150px'
        }

    return(
<div>
<div style={ED}>
    <h1>Our Founders</h1>
    <div style={Hrr}></div>
</div>
<div style={Qcard}>

<div style={Call}>
<a href="#"><img style={Img50} src={img7} alt="" /></a>
<h3>24/7 Support</h3>
<p style={Op}>Lorem ipsum dolor sit amet consectetur <br />
 adipisicing elit. Veniam aspernatur  <br /> voluptatem velit ex? Doloremque, quasi.</p>

</div>

<div style={Call}>
<a href="#"><img style={Img50} src={img6} alt="" /></a>
<h3>Trusted People</h3>
<p style={Op}>Lorem ipsum dolor sit amet consectetur <br />
 adipisicing elit. Veniam aspernatur  <br /> voluptatem  velit ex? Doloremque, quasi.</p>

</div>
<div style={Call}>
    <a href="#"><img style={Img50} src={img5} alt="" /></a>
<h3>Trusted People</h3>
<p style={Op}>Lorem ipsum dolor sit amet consectetur <br />
 adipisicing elit. Veniam aspernatur  <br /> voluptatem  velit ex? Doloremque, quasi.</p>

</div>
<div style={Call}>
    <a href="#"><img style={Img50} src={img8} alt="" /></a>
<h3>Trusted People</h3>
<p style={Op}>Lorem ipsum dolor sit amet consectetur <br />
 adipisicing elit. Veniam aspernatur  <br /> voluptatem  velit ex? Doloremque, quasi.</p>

</div>

</div>
</div>
    );


}

export default Card3;