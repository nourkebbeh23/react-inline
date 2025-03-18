import "./Navbar.css"


function Footer(){


const Footerr={
    backgroundColor:'#1e1e1c',

height:'500px',
}
const Foterr={
    display:'flex',
    justifyContent: 'space-around',
}
const Titlee={
    color:'white'
}
const Op={
    color:'rgba(255, 255, 255, 0.5)',
}
const YY={
    marginTop:'70px',
    margin:'30px'
}
const JK ={
    marginTop:'100px',
    display:'flex',
    justifyContent:'center',
}
    return(


<div style={Footerr}>



<div style={Foterr}>



<div style={YY}>
 <h4 style={Titlee}>
    ABOUT
 </h4>
<p style={Op}>Lorem ipsum dolor sit amet, consectetur <br />
 adipisicing elit. Repellat quos <br />
  rem ullam, placeat amet.</p>
  <a href="#" className="bv">READ MORE</a>

</div>


<div style={YY}>
    <h4 style={Titlee}>Quick Menu</h4>
<div>
    <a className="ttag" href="#">HOME</a>
    <a className="ttag" href="#">BLOG</a>
    <a className="ttag" href="#">SERVICE</a>
    <a className="ttag" href="#">CONTACT</a>
    <a className="ttag" href="#">ABOUT</a>
    <a className="ttag" href="#">INSURANCE</a>
</div>
</div>

<div style={YY}>
    <h4 style={Titlee}>Insurance</h4>
<div>
    <a className="ttag" href="#">Home Insurance</a>
    <a className="ttag" href="#">Auto Insurance</a>
    <a className="ttag" href="#">Travel Insurance</a>
    <a className="ttag" href="#">CONTACT</a>
    <a className="ttag" href="#">Business Insurance</a>

</div>
</div>


<div style={YY}>
    <h4 style={Titlee}>Social Icons</h4>
<div>
    <a href="#"><svg  xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"><path fill="rgba(255, 255, 255, 0.5)" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></a>
    <a href="#"><svg  xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="rgba(255, 255, 255, 0.5)" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></a>
    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="rgba(255, 255, 255, 0.5)"  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="rgba(255, 255, 255, 0.5)" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg></a>


</div>
</div>
</div>


<div style={JK}>


<p style={Op}>Copyright © 2025 All Rights Reserved | This template is made with  by Colorlib</p>

</div>




</div>     
    );
}
export default Footer;