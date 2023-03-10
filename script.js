'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollto = document.querySelector(".btn--scroll-to");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollto.addEventListener("click", (e) => {
  const section1 = document.querySelector(".features");

  section1.scrollIntoView({behavior: "smooth"});
})

// page navigation 

//part 1
// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(el.getAttribute("href")).scrollIntoView({behavior: "smooth"});   
//   });
// })

//part 2

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();

  if(e.target.classList.contains("nav__link")) {
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior: "smooth"});
  }
});

// TAB NAVIGATION:

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

console.log(tabs);

tabsContainer.addEventListener("click", (e) => {
 const clicked = e.target.closest(".operations__tab");

//  Guard Clause
 if(!clicked) return;

 tabs.forEach(t => t.classList.remove("operations__tab--active"));
 clicked.classList.add("operations__tab--active");

 document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
 console.log(`operations__content--${clicked.dataset.tab}`);

});




/*

// adding the elements and removing them from the dom 
const header = document.querySelector(".header");
const message = document.createElement("div");

message.classList.add("cookie-message");;
message.innerHTML = `We use cookies for better functionality and analytics <button class="btn btn--close-cookie"> Got it</button>`
// header.prepend(message);
header.append(message);

// header.prepend(message.cloneNode(true));

// header.after(message);
// header.before(message);

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
});

*/