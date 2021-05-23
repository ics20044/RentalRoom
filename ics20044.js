'use strict';


   var price=0;
   var checkboxprevious= null;
   var previousclassName = ' ';
   var previouscheck = false;
   var KeepThePrice1 = 0;
   var KeepThePrice2 = 0;
   var c1 = false;
   var c2 = false;
   var c3 = false;
   //This method calculate the perchase of reservation without take account if costumer wants the bedroom for more days. 
     function calculatePerchase(inputel,labelel, className)
      {   
          var p = parseFloat(document.getElementsByTagName('label')[labelel].textContent);
            
          if(document.getElementsByClassName(className)[inputel].checked == true)
          {
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
                if(c1 == false && c2 == false && c3 == false){
                  price += p;
                }
                else{
                  price += p - KeepThePrice2;
                }
             }
              else if((document.getElementsByClassName(className)[inputel] == document.getElementById("allService"))  && previousclassName == "RoomsService" && checkboxprevious!=document.getElementById("allService"))
              {
                var p1=parseFloat(document.getElementsByTagName('label')[16].textContent);
                var p2=parseFloat(document.getElementsByTagName('label')[19].textContent);;
                  if(document.getElementsByClassName(className)[1].checked == true && document.getElementsByClassName(className)[2].checked ==true) 
                 { 
                       price = price - p1 -p2;    
                 }
                 else{
                  if( document.getElementsByClassName(className)[1].checked == true)
                  {
                    
                     price = price -p1
                     
                  }
                  else if(document.getElementsByClassName(className)[2].checked == true)
                  {
                    price = price -p2
                  }
                
                  price += p ;
                
                }
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
          c1 = document.getElementsByClassName("RoomsCapacity")[0].checked;
          c2 = document.getElementsByClassName("RoomsCapacity")[1].checked;
          c3 = document.getElementsByClassName("RoomsCapacity")[2].checked;
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

       //This method show the notification image in the website.
        function imageNotification(image) {
           document.getElementById('notification').src = image;
        }

         //This method calculate the perchase of reservation if costumer wants the bedroom more than one day.
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
           document.getElementById('price').innerHTML = 'Ποσό Πληρομής: ' + totalprice + " &euro;";
         }

         //This method modify the checkbox of Area and Capacity in false.    
        function controllCheckbox (n1, n2, className){
    
          document.getElementsByClassName(className)[n1].checked = false;
       document.getElementsByClassName(className)[n2].checked = false;
    
     } 

  //This method modify the checkbox of room service depending on the situation.
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
   //This method checks the ckeckboxes of class RoomsService if costumer checks the ckecbox of all services and if costumer ckecks all the checkboxes ignoring the checkbox of all services .  
  function controllCheckboxAll() {
    if(document.getElementsByClassName('RoomsService')[1].checked == true && document.getElementsByClassName('RoomsService')[2].checked == true)
    {
      document.getElementsByClassName('RoomsService')[0].checked = true;
    }
    if(document.getElementsByClassName('RoomsService')[1].checked == false || document.getElementsByClassName('RoomsService')[2].checked == false )
    {
      document.getElementsByClassName('RoomsService')[0].checked = false;
    }
  }

window.onscroll = function() {scrollnav()};
//This method scrolls the navigation bar.
function scrollnav() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav").style.top = "0"; 
    } else {
      document.getElementById("nav").style.top = "-50px";
    }
  }

 var sumlikes=0;
 var sumdislikes=0;
 
 //This code executes when user of the page likes the page.
     document.getElementsByClassName('checklike')[0].addEventListener('click', function () {
      sumlikes++;  
  document.getElementsByClassName('checklike')[2].innerHTML = sumlikes + 'likes' + ' ' +  sumdislikes +'dislikes';
 })
   
//This code executes when user of the page dislikes the page.
document.getElementsByClassName('checklike')[1].addEventListener('click', function () {
   sumdislikes++;
   document.getElementsByClassName('checklike')[2].innerHTML = sumlikes + 'likes' + ' ' +  sumdislikes +'dislikes';
})

//This code executes when the user of the page press submit button for the form of communication.
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


   //This code exucutes when the costumer of the page want to see his reservation.
   document.getElementById('marketbutton').addEventListener('click',  function() {
       document.getElementById('market').classList.add('active');
    document.getElementById('backeffe').classList.add('active');
    var roomservice = true;
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
              order = order + "Περιοχή:" ;
           }
           else if(i<=5)
           {
            order = order + "Χωτητικότητα Δωματίου:";
           }
           else if(i!=6 && i<=8) 
           {
             if(roomservice == true)
             {
               order = order + "Υπηρεσίες Δωματίου:"
               roomservice = false;
             }
            
           }
         if(i != 6)
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
         if(document.getElementsByTagName('input')[11].value.length != 0)
         {
           order += "Ημερομηνία:" +   document.getElementsByTagName('input')[11].value + '<br>' ;
         }
          order += document.getElementById('price').textContent ;  
         document.getElementById("order").innerHTML = order;
    }
    else
    {
      document.getElementById("order").innerHTML = "Δεν έχετε κάνει κράτηση ακόμα"
    }
  }
 )

 //This code executes when the costumer wants to close the pop up with his reservation. 
   document.getElementById('market').addEventListener('click', function (){
  document.getElementById('market').classList.remove('active');
  document.getElementById('backeffe').classList.remove('active')
})

//This code is for pop up frame of reservation.
document.getElementById('backeffe').addEventListener('click', function () {
  const modal = document.querySelectorAll('.market .active') ;
})