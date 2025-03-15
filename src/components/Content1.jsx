import "./Navbar.css"
import img4 from "./assets/about_1.jpg"


function Content1 (){

    const Op={
        color:'rgba(0, 0, 0, 0.6)',
        margin:'10px'
    }
    const Content={
        marginTop:'170px'
    }

const Images={
    
    width:'1110px',
    height:'848px',

}
const Div={
    textAlign:'center' ,
}

const Pra ={
    display:'flex',
    justifyContent: 'center',
}
const FF={
    fontSize: '3rem',
}

    return(
<div style={Content}>

<div style={Div}>

<h4 style={FF}>We Are Trusted Agency Company
</h4>

<a href="#"><img style={Images} src={img4} alt="" /></a>

<div style={Pra}>

<p style={Op}>
Lorem ipsum dolor sit amet consectetur <br />
 adipisicing elit. Necessitatibus aliquid <br />
  eius facilis voluptatem eligendi magnam <br />
   accusamus vel commodi asperiores sint rem <br />
    reprehenderit nobis nesciunt veniam qui <br />
     fugit doloremque numquam quod.
</p>
<p style={Op}>
Lorem ipsum dolor sit amet consectetur <br />
 adipisicing elit. Necessitatibus aliquid <br />
  eius facilis voluptatem eligendi magnam <br />
   accusamus vel commodi asperiores sint rem <br />
    reprehenderit nobis nesciunt veniam qui <br />
     fugit doloremque numquam quod.
</p>

</div>

</div>

</div>
    );
}
export default Content1;