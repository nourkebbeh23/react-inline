
import img2 from "./assets/img_2.jpg"
import img3 from "./assets/img_3.jpg"

function Content2(){
const Imgg1={
    width: '675px',
    height:'484px' ,
}
const SA={
    marginTop:'200px',
    display:'flex',
    justifyContent: 'center',
}
const SAA={
  
    display:'flex',
    justifyContent: 'center',
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

    return(
       
<div>

<div style={SA} >

    <a href="#"><img style={Imgg1} src={img2} alt="" /></a>
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

       <p style={Op}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />

Tenetur beatae quaerat maiores ad sapiente! Repudiandae hic autem ipsa <br />
 deleniti distinctio aspernatur officia facilis, aliquam voluptas <br />
  suscipit ad illum nostrum at.</p>
</div>

</div>



<div style={SAA} >

  
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

       <p style={Op}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />

Tenetur beatae quaerat maiores ad sapiente! Repudiandae hic autem ipsa <br />
 deleniti distinctio aspernatur officia facilis, aliquam voluptas <br />
  suscipit ad illum nostrum at.</p>
</div>
<a href="#"><img style={Imgg1} src={img3} alt="" /></a>
</div>





</div>


     

    );
}
export default Content2;