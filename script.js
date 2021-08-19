const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){ // Close Hamburger Menu  
      header.classList.remove('open');
      mobileMenu.classList.remove('open');
      mobileMenu.classList.remove('fade-in');
      body.classList.remove('noscroll');
    }
    else { // Open Hamburger Menu
      header.classList.add('open');
      mobileMenu.classList.add('open');
      mobileMenu.classList.add('fade-in');
      body.classList.add('noscroll');
    }  
  });

  function myFunction(myDropdown) {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown1").classList.toggle("show");
       
    var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          openDropdown.classList.remove('show');
      } 
      document.getElementById(myDropdown).classList.toggle("show");
  }

  function myFunction1(myDropdown1) {
    document.getElementById("myDropdown").classList.toggle("show");
       
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove('show');
    } 
    document.getElementById(myDropdown1).classList.toggle("show");
}

function myFunction2(myDropdown2) {
    document.getElementById("myDropdown").classList.toggle("show");
       
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove('show');
    } 
    document.getElementById(myDropdown2).classList.toggle("show");
}
    
  // Close the dropdown menu if the user clicks outside of it
    
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  function newFunction(testing) {
    document.getElementById("testing2").classList.toggle("show");
    document.getElementById("testing1").classList.toggle("show");
       
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove('show');
    } 
    document.getElementById(testing).classList.toggle("show");
}
    
  
  // Close the dropdown menu if the user clicks outside of it
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  function newFunction1(testing1) {
    document.getElementById("testing").classList.toggle("show");
       
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove('show');
    } 
    document.getElementById(testing1).classList.toggle("show");
}
    
  
  // Close the dropdown menu if the user clicks outside of it
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  function newFunction2(testing2) {
    document.getElementById("testing").classList.toggle("show");
       
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove('show');
    } 
    document.getElementById(testing2).classList.toggle("show");
}
    
  
  // Close the dropdown menu if the user clicks outside of it
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };