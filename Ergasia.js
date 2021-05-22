'use strict';


   var price=0;
   var checkboxprevious= null;
   var previousclassName = ' ';
   var previouscheck = false;
   var KeepThePrice1 = 0;
   var KeepThePrice2 = 0;
   //This method calculate the perchase of reservation without take account if costumer wants the bedroom for more days. 
     function calculatePerchase(inputel,labelel, className)
      {   
          var p = parseFloat(document.getElementsByTagName('label')[labelel].textContent);
            
          if(document.getElementsByClassName(className)[inputel].checked == true)
          {
            console.log((document.getElementsByClassName(className)[inputel] == document.getElementById("allService")));
          
            if(checkboxprevious!=null){
  
              if((className == "RoomsCapacity" && previousclassName == "RoomsCapacity"))    {
               
                if(previouscheck == false ){
                  price += p;   
                }
                else{
                  price += p - KeepThePrice1;
                  }
              }
              else if(className == "RoomsCapacity" && previousclassName != "RoomsCapacity" ){
                price += p - KeepThePrice2;
             }
              else if((document.getElementsByClassName(className)[inputel] == document.getElementById("allService"))  && previousclassName == "RoomsService" && checkboxprevious!=document.getElementById("allService"))
              {
                var po;
                 if(document.getElementsByClassName(className)[1].checked == true && checkboxprevious == document.getElementsByClassName(className)[2]) 
                 {
                       po = parseFloat(document.getElementsByTagName('label')[16].textContent);
                 }
                else if(document.getElementsByClassName(className)[2].checked == true && checkboxprevious == document.getElementsByClassName(className)[1]){
                        po = parseFloat(document.getElementsByTagName('label')[19].textContent);
                 }
                     price += p -po;
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

        //This method change the photo of the destination of hotels.
        function imageHover(image)
        {
          
          document.getElementById('city').src = image;
           
        }

        function imageNotification(image) {
           document.getElementById('notification').src = image;
        }


        function imageChange(image )
        {
          document.getElementById('city').src = image;
         
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



     
       
  function controllCheckbox (n1, n2, className){
    
    document.getElementsByClassName(className)[n1].checked = false;
    document.getElementsByClassName(className)[n2].checked = false;
    
  } 

  function controllCheckboxtrue (n1,n2, n3){
     
    if(document.getElementsByClassName('RoomsService')[n1].checked == true)
    {
     
      document.getElementsByClassName('RoomsService')[n2].checked = true;
      document.getElementsByClassName('RoomsService')[n3].checked = true;
     
    }
    else
    {
      document.getElementsByClassName('RoomsService')[n2].checked = false;
      document.getElementsByClassName('RoomsService')[n3].checked = false;
    }

   
   
    
  } 

  function controllCheckboxboth() {
    if(document.getElementsByClassName('RoomsService')[1].checked == true && document.getElementsByClassName('RoomsService')[2].checked == true)
    {
      document.getElementsByClassName('RoomsService')[0].checked = true;
    }
  }

  function controllCheckboxall() {

    if(document.getElementsByClassName('RoomsService')[1].checked == false || document.getElementsByClassName('RoomsService')[2].checked == false )
    {
      document.getElementsByClassName('RoomsService')[0].checked = false;
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
    if(document.getElementById('notification').src != "")
    {
      var l=0;
      var order = " ";
      for(var i=0; i<=9; i++)
      {   
      
        if(document.getElementsByTagName('input')[i].checked == true)
         {
           if(i>=0 && i<=2)
           {
              order = order + "Περιοχή:" + document.getElementsByTagName('label')[l].textContent + '<br>';
           }
           else if(i<=5)
           {
            order = order + "Χωτητικότητα Δωματίου:" + document.getElementsByTagName('label')[l].textContent + '<br>';
           }
           else if(i<8)
           {
             order = order + document.getElementsByTagName('label')[l].textContent + '<br>';
           }
           else
           {
            order = order + document.getElementsByTagName('label')[l].textContent + '<br>';
           }
         
        
        
         }
         if(l<3)
        {
           l++;
        }
        else
        {
           l = l + 3;
       }
      
       
       
     
      
       
     }
      order += "Μέρες Διαμονής:" +   document.getElementsByTagName('input')[10].value + '<br>';
         order += "Ημερομηνία:" +   document.getElementsByTagName('input')[11].value + '<br>' ;
         order += document.getElementById('price').textContent ;  
             document.getElementById("order").innerHTML = order;
    }
    else
    {
      document.getElementById("order").innerHTML = "You have not an order yet"
  }
   
   }
   )

   

 

  



   document.getElementById('market').addEventListener('click', function (){
  document.getElementById('market').classList.remove('active');
  document.getElementById('backeffe').classList.remove('active')
})


document.getElementById('backeffe').addEventListener('click', function () {
  const modal = document.querySelectorAll('.market .active') ;
  
})












