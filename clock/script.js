// let a=new Date();
// let h=a.getHours();
// let m=a.getMinutes();
// let s=a.getSeconds();
// let d=a.getDate();

setInterval(()=> {
 let d=new Date();
  hour.innerHTML=d.getHours();
  min.innerHTML=d.getMinutes();
  sec.innerHTML=d.getSeconds();
  date.innerHTML=d.toDateString();
  
},1000)

console.log(s);