'use strict';

   var price=0;
   var checkboxprevious= null;
   var previousclassName = ' ';
   var previouscheck = false;
   var KeepThePrice1 = 0;
   var KeepThePrice2 = 0;
   
    function calculatePerchase(inputel,labelel, className)
      {   
          var p = parseFloat(document.getElementsByTagName('label')[labelel].textContent);
            
          if(document.getElementsByClassName(className)[inputel].checked == true)
          {
            if(checkboxprevious!=null){
              if((className == "RoomsCapacity" && previousclassName == "RoomsCapacity"))  {
                if(previouscheck == false){
                  price += p;
                }
                else{
                  price += p - KeepThePrice1;
                }
              }
              else if(className == "RoomsCapacity" && previousclassName != "RoomsCapacity"){
                price += p - KeepThePrice2;
              }
              else{
                price += p;
              }
            }
            else{
              price += p;
            }
          }
          else{
            price -= p;
          }
          
          
          

          
          checkboxprevious = document.getElementsByClassName(className)[inputel];
          previouscheck = checkboxprevious.checked;               
          previousclassName = className;
          KeepThePrice1 = p;
          if(className == "RoomsCapacity"){
            KeepThePrice2 = p;
          }
          return price;


        }


        function imageHover(image)
        {
          
          document.getElementById('HArea').src = image;
        }


        function imageChange( )
        {
          document.getElementById('HArea').removeAttribute('src');
        }

         function calculateTotalPerchase(intexofinput,indexoflabel, className)
         {
          var totalprice;
       
         
           if(indexoflabel != null)
          {
            totalprice = calculatePerchase(intexofinput,indexoflabel, className) * document.getElementById("numberdays").value; 
            
           
          }
          else
          {
            totalprice = price *  document.getElementById("numberdays").value
          }
           document.getElementById('price').innerHTML = 'Ποσό Πληρομής' + totalprice;
         }



         document.getElementById('pushorder').addEventListener('click', function ()  {

          document.getElementById('order').innerHTML = document.getElementById('price').textContent; 
           
         })
       
  function controllCheckbox (n1, n2, className){
    
    document.getElementsByClassName(className)[n1].checked = false;
    document.getElementsByClassName(className)[n2].checked = false;
    
  } 

  function controllCheckboxtrue (n1,n2, n3){
     
    if(document.getElementsByClassName('RoomsServive')[n1].checked == true)
    {
     
      document.getElementsByClassName('RoomsServive')[n2].checked = true;
      document.getElementsByClassName('RoomsServive')[n3].checked = true;
     
    }
    else
    {
      document.getElementsByClassName('RoomsServive')[n2].checked = false;
      document.getElementsByClassName('RoomsServive')[n3].checked = false;
    }

   
   
    
  } 

  function controllCheckboxboth() {
    if(document.getElementsByClassName('RoomsServive')[1].checked == true && document.getElementsByClassName('RoomsServive')[2].checked == true)
    {
      document.getElementsByClassName('RoomsServive')[0].checked = true;
    }
  }

  function controllCheckboxall() {

    if(document.getElementsByClassName('RoomsServive')[1].checked == false || document.getElementsByClassName('RoomsServive')[2].checked == false )
    {
      document.getElementsByClassName('RoomsServive')[0].checked = false;
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

 var sumlikes=0;
 var sumdislikes=0;
 
   
     document.getElementsByClassName('checklike')[0].addEventListener('click', function () {
      sumlikes++;  
  document.getElementsByClassName('checklike')[2].innerHTML = sumlikes + 'likes' + ' ' +  sumdislikes +'dislikes';
 })
   


document.getElementsByClassName('checklike')[1].addEventListener('click', function () {
   sumdislikes++;
   document.getElementsByClassName('checklike')[2].innerHTML = sumlikes + 'likes' + ' ' +  sumdislikes +'dislikes';
})


 

document.getElementById('submit').addEventListener('click', function () {

  var input = true;
  for(var i=0; i<document.getElementsByClassName('inputform').length; i++)
  {
    
    if(document.getElementsByClassName('inputform')[i].type != "checkbox")
    {
     
         if(document.getElementsByClassName('inputform')[i].value == "")
         {
           
          document.getElementById("inputElements").innerHTML = 'Incorrect input' + "<img src='images/incorrectimage.png' width=40>";
            input = false;
            break;
         }
         else if(document.getElementsByClassName('inputform')[i].type == "email" && document.getElementsByClassName('inputform')[i] == document.getElementsByClassName('inputform')[2])
         {
           
           if(document.getElementsByClassName('inputform')[i+1].value != document.getElementsByClassName('inputform')[i].value)
           {
            document.getElementById("inputElements").innerHTML = 'Incorrect input. The email and confirm email is not the same' + "<img src='images/incorrectimage.png' width=40>"; 
            input = false;
            break;
           }
         }
        
      
    }
    else{
      if(document.getElementsByClassName('inputform')[i].checked != true)
      {
        document.getElementById("inputElements").innerHTML = 'You have not checked the privacy policy. You must check' + "<img src='images/incorrectimage.png' width=40>"
        input = false;
      }
     
  }
  }
  if(input)
  {
    document.getElementById("inputElements").innerHTML = 'Correct input' + "<img src='images/correctimage.png' width=40>"
  }
  

})



   document.getElementById('marketbutton').addEventListener('click',  function() {
       document.getElementById('market').classList.add('active');
    document.getElementById('backeffe').classList.add('active');
   })

   

 

  



   document.getElementById('market').addEventListener('click', function (){
  document.getElementById('market').classList.remove('active');
  document.getElementById('backeffe').classList.remove('active')
})


document.getElementById('backeffe').addEventListener('click', function () {
  const modal = document.querySelectorAll('.market .active') ;
  
})








