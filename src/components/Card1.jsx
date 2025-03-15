import "./Navbar.css"
import img1 from "./assets/img_1.jpg"
import img2 from "./assets/img_2.jpg"
import img3 from "./assets/img_3.jpg"

function Card1(){


const Img={
    width:'349px',
    height: '222px'
}
const Card ={
marginTop:'100px',
display:'flex',
justifyContent: 'center',

}
const Pb={
    margin:'10px',
    textAlign:'center' ,
    
}


const Op={
    color:'rgba(0, 0, 0, 0.6)',
}




    return(

   <div>



<div style={Card}>
<div style={Pb}>
<a href="#"><img style={Img} src={img1} alt="" /></a>

<h5>
Home Insurance
</h5>

<p style={Op}>By James — Jan. 20, 2019</p>
<p style={Op}>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Fuga, <br /> voluptate.</p>
<a href="#" className="bv">READ MORE</a>
</div>

<div style={Pb}>
<a href="#"><img style={Img} src={img2} alt="" /></a>

<h5>
Home Insurance
</h5>

<p style={Op}>By James — Jan. 20, 2019</p>
<p style={Op}>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Fuga, <br /> voluptate.</p>
<a href="#"  className="bv">READ MORE</a>
</div>
<div style={Pb}>
<a href="#"><img style={Img} src={img3} alt="" /></a>

<h5>
Home Insurance
</h5>

<p style={Op}>By James — Jan. 20, 2019</p>
<p style={Op}>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Fuga, <br /> voluptate.</p>
<a href="#"  className="bv">READ MORE</a>
</div>


       </div>
           <div style={Card}>
<div style={Pb}>
<a href="#"><img style={Img} src={img1} alt="" /></a>

<h5>
Home Insurance
</h5>

<p style={Op}>By James — Jan. 20, 2019</p>
<p style={Op}>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Fuga, <br /> voluptate.</p>
<a href="#"  className="bv">READ MORE</a>
</div>

<div style={Pb}>
<a href="#"><img style={Img} src={img2} alt="" /></a>

<h5>
Home Insurance
</h5>

<p style={Op}>By James — Jan. 20, 2019</p>
<p style={Op}>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Fuga, <br /> voluptate.</p>
<a href="#"  className="bv">READ MORE</a>
</div>
<div style={Pb}>
<a href="#"><img style={Img} src={img3} alt="" /></a>

<h5>
Home Insurance
</h5>

<p style={Op}>By James — Jan. 20, 2019</p>
<p style={Op}>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Fuga, <br /> voluptate.</p>
<a href="#"  className="bv">READ MORE</a>
</div>


       </div>


   </div>






    );
}
export default Card1;