import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// class MyComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       num: 0,
//     };
//   }

//   bir = () =>{
//     this.setState((number) =>({
//       num: number.num +1
//     }))
//   }
//   ikki = () =>{
//     this.setState((number) =>({
//       num: number.num +2
//     }))
//   }
//   uch = () =>{
//     this.setState((number) =>({
//       num: number.num +3
//     }))
//   }

//   uch = () =>{
//     this.setState((number) =>({
//       num: number.num +3
//     }))
//   }
//   tort = () =>{
//     this.setState((number) =>({
//       num: number.num +4
//     }))
//   }
//   besh = () =>{
//     this.setState((number) =>({
//       num: number.num +5
//     }))
//   }
//   olti = () =>{
//     this.setState((number) =>({
//       num: number.num +6
//     }))
//   }
//   yetti = () =>{
//     this.setState((number) =>({
//       num: number.num +7
//     }))
//   }
//   sakkiz = () =>{
//     this.setState((number) =>({
//       num: number.num +8
//     }))
//   }
//   toqqiz = () =>{
//     this.setState((number) =>({
//       num: number.num +9
//     }))
//   }
//   clear =() =>{
//     this.setState((clear) =>({
//       num: clear.num = 0
//     }))
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.num}</h1>
//         <button onClick={this.bir}>1</button>
//         <button onClick={this.ikki}>2</button>
//         <button onClick={this.uch}>3</button>
//         <button onClick={this.tort}>4</button>
//         <button onClick={this.besh}>5</button>
//         <button onClick={this.olti}>6</button>
//         <button onClick={this.yetti}>7</button>
//         <button onClick={this.sakkiz}>8</button>
//         <button onClick={this.toqqiz}>9</button>
//         <button onClick={this.clear}>Clear</button>
//       </div>
//     );
//   }

// }

// const Cals = ReactDOM.createRoot(document.getElementById("root"));
// Cals.render(<MyComponent />);
// class Soat extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       soat:new Date().toLocaleString(),
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.updateClock();
//     }, 1000);
//   }

//   updateClock = () => {
//     this.setState({
//       soat: new Date().toLocaleTimeString()
//     });
//   };
//   render(){
//     return (
//       <div>
//         <span>{this.state.soat}</span>
//       </div>
//     );
//   }
// }
// const Cals = ReactDOM.createRoot(document.getElementById("root"));
// Cals.render(<Soat />);
// const vehicles = ['mustang', 'matiz', 'tico'];
// const [a, , c] = vehicles;
// console.log(a, c);
// const car = ['Matiz', "Cobalt", 'Spark', 'Maluba'];
// const  [x, y, , z] = car;
// console.log(x, y ,z);
// const user = {
//   ism: 'Eshmat',
//   familiya: 'Toshmatov',
//   yosh: 20,
//   address: 'Chorsu',
//   email: 'eshmat@gmail.com'
// }
// myFun(user);
// function myFun({ism, familya, yosh, address, email}){
//   console.log(
//     "My name is" + " " + ism + " "+ "My surename" + " " + familya + " "+ " " + "My  age" + " " + yosh + " "+ " " + "My address" + " " + address + " "+ " " + "My email" + " " + email
//   );
// }
/*Mashq: ['Eshmat', 'Toshmat', 'Amir', 'Anora', 'Temur'] - ushbu arrayning 
birinchi, ikkinchi va uchinchi elementlarini yangi o'zgaruvchilarga olib oling.
qolganlarini esa "qolganlar" arrayida qolsin*/
// const ism = ['Eshmat', 'Toshmat', 'Amir', 'Anora', 'Temur'];
// const [x, y, z, ...boshqa] = ism;
// console.log(x, y, z, boshqa);
// const obj2 = {
//   col: "red",
//   brend: "apple",
//   yil: "2022",
//   ram: 8,
// };
// const obj1 = {
//   ram: 160,
//   col: "blue",
// };
// const obj3 = { ...obj2, ...obj1 };
// console.log(obj3);
// function Car(){
//   const [mashina, setMashina] = useState('Malibu');
//   const yangilash = (mashina) =>{
//     setMashina(mashina);
//   }
//   return (
//   <>
//     <h1>Mening mashinam {mashina}</h1>
//     <input type='text' onInput={(event)=>yangilash(event.target.value)}></input>
//     {/* <button onClick={() => setMashina('Tico')}>Bos</button> */}
//   </>
//   )
// }
// const car = ReactDOM.createRoot(document.getElementById('root'));
// car.render(<Car />);
function MyComponent(){
  // const [laptop, setLaptop] = useState({
  //   brand: 'Acer',
  //   ram:8,
  //   storage:'HDD',
  //   narx:1000,
  //   nom:'Kittent'
  // })

// const changeLaptop = () =>{
//   setLaptop((prevState) =>({...prevState, brand: 'Dell'}))
// }

// return (
//   <>
//   <h1>{laptop.brand}</h1>
//   <h1>{laptop.ram}</h1>
//   <h1>{laptop.storage}</h1>
//   <h1>{laptop.narx}</h1>
//   <button onClick={changeLaptop}>bos</button>
//   </>)
// const changeLaptop = (nomParam) =>{
//   setLaptop((prevState) =>({...prevState, nom: nomParam}))
// }
// return(
//   <>
//   <h1>{laptop.brand}</h1>
//   <h1>{laptop.ram}</h1>
//   <h1>{laptop.storage}</h1>
//   <h1>{laptop.narx}</h1>
//   <h1>{laptop.nom}</h1>
//   <input type='text' onInput ={(event) =>changeLaptop(event.target.value)}></input>
//   </>
// )
// const [user, setUser] = useState({
//   ism: 'Eshmat',
//   familiya: 'Toshmatov',
//   baho: 90,
//   menHaqimda: ''
// })
// const ozgartir = (menya) =>{
//   setUser((prevState) =>({...prevState, menHaqimda:menya}))
// }
// return(
//   <>
//   <h1>{user.ism}</h1>
//   <h1>{user.familiya}</h1>
//   <h1>{user.baho}</h1>
//   <h1>{user.menHaqimda}</h1>
//   <input type="text" onInput ={(event) =>ozgartir(event.target.value)}></input>
//   </>
// )

}

// const divStyle ={
//   height:"100px",
//   width:"100px",
//   backgroundColor:"red",
//   borderRadius:"50%",
//   position:"absolute",
//   right:0,
//   bottom:0
// };
// function Bola(props) {
//   return (
//     <>
//       <h1>Bola component</h1>
//       <button onClick={()=>props.kub(2)}>Bos</button>
//     </>
//   );
// }

// function Ota() {
//   function kubHisoblash(a) {
//     alert(a**3);
//   }

//   return <Bola kub={kubHisoblash} />;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Ota />);

// function fun(){
//   for(let i=1; i<=200; i++){
//     if(i%11 === 0){
//       console.log(i);
//     }
//   }
// }

// function icyHot(temp1, temp2){
//   if(temp1 > 100 && temp2<0){
//     return true;
// }else if(temp1<0 && temp1>100){
//   return true
// }
// else{
//   return false;
// }
// }
// icyHot(120,-1);

// function Ota(){
//   const  [isLoggedIn, setIsloggenIn] = useState(false);
//   if(!isLoggedIn){
//     return(
//       <>
//       <h1>Salom, notanish inson</h1>
//       <button onClick={()=>setIsloggenIn(!isLoggedIn)}>Bos</button>
//       </>
//     )
//   }
//   else{
//     return(
//       <>
//       <h1>Hi bro</h1>
//       <button onClick={()=>setIsloggenIn(!isLoggedIn)}>Bos</button>
//       </>
//     )
//   }
// }
function Sidebar(props) {
  return (
    <>
      <div className={props.isNow ? "sidebar" : "open"}></div>
    </>
  );
}

function Ota() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Sidebar isNow = {setIsOpen}/>
      <button className="button" onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Ota/>)
