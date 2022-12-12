//program to calculate age 

let mul,add,mul2,add2,ans;
           let guess_number=parseInt(prompt("Enter a whole number between 2 and 9:")); //1.guess number
           mul=guess_number*2;   //2.multiply guess number by 2
           add=mul+5;            //3.add 5
           mul2=add*50;          //4.multiply by 50

              //enter 1772 if celebrated your birthday else enter 1771
let birth=parseInt(prompt("If you alraedy celebrated your birthday enter 1772 and if not enter 1771:"));

          add2=mul2+birth; //5.add 1772 or 1771               
       let yearbirth=parseInt(prompt("Enter year of birth:"));
      ans=(add2-yearbirth);  //6.subtract your year of birth
       let answ=ans.toString();  //convert to string

      console.log(`your age is:`,answ[1]+answ[2]);
    