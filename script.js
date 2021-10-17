const links = document.querySelector('#links');
const links1 = document.querySelector('#links1');
const links2 = document.querySelector('#links2');
const nav = document.querySelector('.nav');
const arrow = document.querySelector('#arrow');
const arrow1 = document.querySelector('#arrow1');
const arrow2= document.querySelector('#arrow2');
const dropdownContent = document.querySelector('#dropdown');
const dropdownContent1 = document.querySelector('#dropdown1');
const dropdownContent2 = document.querySelector('#dropdown2');
const overallLinks = document.querySelectorAll('.overallLinks');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mobileArrow = document.querySelector('#mobile-arrow');
const mobileArrow1 = document.querySelector('#mobile-arrow1');
const mobileArrow2 = document.querySelector('#mobile-arrow2');
const mobileLinks = document.querySelector('#mobileLinks');
const mobileLinks1 = document.querySelector('#mobileLinks1');
const mobileLinks2 = document.querySelector('#mobileLinks2');
const mobileContent = document.querySelector('#mobile-content');
const mobileContent1 = document.querySelector('#mobile-content1');
const mobileContent2 = document.querySelector('#mobile-content2');
const container = document.querySelector('.container');

links.addEventListener('click', function(){
    if(!arrow.classList.contains('rotate')) {
        arrow.classList.add('rotate');
        dropdownContent.classList.add('show');
        arrow1.classList.remove('rotate');
        dropdownContent1.classList.remove('show');
        dropdownContent2.classList.remove('show');
        arrow2.classList.remove('rotate');
    }
    else {
        arrow.classList.remove('rotate');
        dropdownContent.classList.remove('show');
    }
});

links1.addEventListener('click', function(){
    if(!arrow1.classList.contains('rotate')) {
        arrow1.classList.add('rotate');
        dropdownContent1.classList.add('show');
        arrow.classList.remove('rotate');
        dropdownContent.classList.remove('show');
        dropdownContent2.classList.remove('show');
        arrow2.classList.remove('rotate');
    }
    else {
        arrow1.classList.remove('rotate');
        dropdownContent1.classList.remove('show');
    }
});

links2.addEventListener('click', function(){
    if(!arrow2.classList.contains('rotate')) {
        arrow2.classList.add('rotate');
        dropdownContent2.classList.add('show');
        dropdownContent.classList.remove('show');
        arrow.classList.remove('rotate');
        dropdownContent1.classList.remove('show');
        arrow1.classList.remove('rotate');
    }
    else {
        arrow2.classList.remove('rotate');
        dropdownContent2.classList.remove('show');
    }
});

hamburger.addEventListener('click', function(){
    if(close.classList.contains('hidden')) {
        hamburger.classList.add('hidden');
        close.classList.remove('hidden');
        container.classList.add('show');
    }
    else {
        close.classList.add('hidden');
    }
});

close.addEventListener('click', function() {
    if(hamburger.classList.contains('hidden')) {
        hamburger.classList.remove('hidden');
        close.classList.add('hidden');
        container.classList.remove('show');
    }
    else {
        hamburger.classList.add('hidden');
    }
});

mobileLinks.addEventListener('click', function() {
    if(!mobileArrow.classList.contains('rotate')) {
        mobileArrow.classList.add('rotate');
        mobileContent.classList.add('show');
        mobileLinks.style.color = 'hsl(207, 13%, 34%)';
        mobileArrow1.classList.remove('rotate');
        mobileContent1.classList.remove('show');
        mobileLinks1.style.color = 'hsl(208, 49%, 24%)';
        mobileArrow2.classList.remove('rotate');
        mobileContent2.classList.remove('show');
        mobileLinks2.style.color = 'hsl(208, 49%, 24%)';
    }
    else {
        mobileArrow.classList.remove('rotate');
        mobileContent.classList.remove('show');
        mobileLinks.style.color = 'hsl(208, 49%, 24%)';
    }
});

mobileLinks1.addEventListener('click', function() {
    if(!mobileArrow1.classList.contains('rotate')) {
        mobileArrow1.classList.add('rotate');
        mobileContent1.classList.add('show');
        mobileLinks1.style.color = 'hsl(207, 13%, 34%)';
        mobileArrow.classList.remove('rotate');
        mobileContent.classList.remove('show');
        mobileLinks.style.color = 'hsl(208, 49%, 24%)';
        mobileArrow2.classList.remove('rotate');
        mobileContent2.classList.remove('show');
        mobileLinks2.style.color = 'hsl(208, 49%, 24%)';
    }
    else {
        mobileArrow1.classList.remove('rotate');
        mobileContent1.classList.remove('show');
        mobileLinks1.style.color = 'hsl(208, 49%, 24%)';
    }
});

mobileLinks2.addEventListener('click', function() {
    if(!mobileArrow2.classList.contains('rotate')) {
        mobileArrow2.classList.add('rotate');
        mobileContent2.classList.add('show');
        mobileLinks2.style.color = 'hsl(207, 13%, 34%)';
        mobileArrow1.classList.remove('rotate');
        mobileContent1.classList.remove('show');
        mobileLinks1.style.color = 'hsl(208, 49%, 24%)';
        mobileArrow.classList.remove('rotate');
        mobileContent.classList.remove('show');
        mobileLinks.style.color = 'hsl(208, 49%, 24%)';
    }
    else {
        mobileArrow2.classList.remove('rotate');
        mobileContent2.classList.remove('show');
        mobileLinks2.style.color = 'hsl(208, 49%, 24%)';
    }
});



window.onclick = function(event) {
    if (!event.target.matches('.overallLinks')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          mobileArrow.classList.remove('rotate');
          arrow.classList.remove('rotate');
          arrow1.classList.remove('rotate');
          arrow2.classList.remove('rotate');
          mobileArrow1.classList.remove('rotate');
          mobileLinks.style.color = 'hsl(208, 49%, 24%)';
          mobileLinks1.style.color = 'hsl(208, 49%, 24%)';
          mobileArrow2.classList.remove('rotate');
          mobileLinks2.style.color = 'hsl(208, 49%, 24%)';
        }
      }
    }
  } 

