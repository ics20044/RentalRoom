'use strict';

document.getElementById('submit').addEventListener('click', function () {

      if(document.getElementById("checkboxPolicy").checked == true)
      {
        document.getElementById("inputElements").innerHTML = 'correct input' + "<img src='correctimage.png' width=40>"
      }
      else
      {
        document.getElementById("inputElements").innerHTML = 'incorrect input' + "<img src='incorrectimage.png' width=40>"
      }
    
   })
var price=0;
var checkboxprevious= null;
var previousbooleanCBP = false
var KeepThePrice = 0;




   function calculatePerchase(inputel,labelel)
   {
           console.log(inputel.checked);
           var p = parseFloat(labelel.textContent);
           
           if(inputel.checked == true)
           {
              if( checkboxprevious!=null && inputel.className == 'RoomsCapacity' )
              {
                if(checkboxprevious != inputel && previousbooleanCBP == true){
                  console.log("CORRECT1");
                  price += p - KeepThePrice;
                }
                else if(checkboxprevious == inputel || checkboxprevious.checked == false){
                  console.log("CORRECT2");
                  price += p;
                }
                else{
                  console.log("x");
                  price += p - KeepThePrice;
                }
              }
              else
              {
                console.log("y");
                 //p  = parseFloat(labelel.textContent);
                 price += p;
              }
           }
           else
           {
            console.log("z");
            //var p = parseFloat(labelel.textContent);
            price -= p;
           }
           
    
          
        
         
           console.log(price);

             document.getElementById('price').innerHTML = price;
             checkboxprevious = inputel;
             previousbooleanCBP = checkboxprevious.checked;
             KeepThePrice = p;

         }
       
  function controllCheckbox (c1, c2){
    
    c1.checked = false;
    c2.checked = false;
    
  } 

  function controllCheckboxtrue (c1,c2, c3){
     console.log(c2.checked);
    if(c1.checked == true)
    {
     
       c2.checked = true;
       c3.checked = true;
     
    }
    else
    {
      c2.checked = false;
      c3.checked = false;
    }
   
    
  } 
  
 
  window.onscroll = function() {scrollnav()};

function scrollnav() {
  
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav").style.top = "0"; 
    } else {
      document.getElementById("nav").style.top = "-50px";
    }
  }
