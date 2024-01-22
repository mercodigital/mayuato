                                                /* NAVBAR */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("active")) {
      closeMenu(); 
  }
});

                                          /* SLIDER (SECCIÓN 3) */

let carousel = document.querySelector(".carousel");
let btns = document.querySelectorAll(".wrapper i");
let carouselChildren = [...carousel.children];
let wrapper = document.querySelector(".wrapper");

let cardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false,
  startX,
  startScrollLeft,
  isAutoPlay = true,
  timeoutId;

let cardsPerView = Math.round(carousel.offsetWidth / cardWidth);

carouselChildren
  .slice(-cardsPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildren.slice(0, cardsPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -cardWidth : cardWidth;
  });
});

let dragStart = (e) => {
  isDragging = true;

  carousel.classList.add("dragging");

  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

let dragging = (e) => {
  if (!isDragging) return;

  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

let dragStop = () => {
  isDragging = false;

  carousel.classList.remove("dragging");
};

let infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

let autoPlay = () => {
  // if (window.innerWidth < 800 || !isAutoPlay) return; 
  if (!isAutoPlay) return; 

  timeoutId = setTimeout(() => {
    carousel.scrollLeft += cardWidth;
  }, 3000);
};

autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

                                  /* BOTÓN DE ADJUNTAR CV (SECCIÓN 8) */

document.querySelector('.cv-btn').addEventListener('click', function() {
    document.querySelector('.cv').click();
});

                                        /* ACORDEÓN (SECCIÓN 9) */

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
        
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});

                                      /* BOTÓN DE SCROLL & BOTÓN DE WHATSAPP*/

let btnVolverArriba = document.querySelector(".btnVolverArriba");
let btnWhatsApp = document.querySelector(".btnWhatsApp");

window.onscroll = function() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        btnVolverArriba.style.display = "block";
    } else {
        btnVolverArriba.style.display = "none";
    }
};

btnVolverArriba.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};

btnWhatsApp.addEventListener("click", function(){
  open("https://wa.me/+5491169997300");
})

                                                /* CALL TO ACTION */

var cta = document.querySelectorAll('.cta');

cta.forEach(function(boton) {
  boton.addEventListener('click', function() {
    var targetElement = document.getElementById('contacto');
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

                                                /* FORMULARIO 1 */

document.getElementById('formulario1').addEventListener('submit', function(event) {
    event.preventDefault(); 
                                                                                          
    let formData = new FormData(this);
    fetch('https://mkt.partners/mayuato-form_1.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
      if (response.ok) {
          open("https://mayuato.netlify.app/gracias.html");
          this.reset();
      } else {
        console.error('Error en la petición');
    }
})
.catch(error => {
        console.error('Error:', error);
    });
});

                                                /* FORMULARIO 2 */

document.getElementById('formulario2').addEventListener('submit', function(event) {
  event.preventDefault(); 
                                                                                        
  let formData = new FormData(this);
  fetch('https://mkt.partners/mayuato-form_2.php', {
      method: 'POST',
      body: formData
  })
  .then(response => {
    if (response.ok) {
        open("https://mayuato.netlify.app/gracias.html");
        this.reset();
    } else {
      console.error('Error en la petición');
  }
})
.catch(error => {
      console.error('Error:', error);
  });
});

                                              /* FORMULARIO 3 */

document.getElementById('formulario3').addEventListener('submit', function(event) {
  event.preventDefault(); 
                                                                                        
  let formData = new FormData(this);
  fetch('https://mkt.partners/mayuato-form_3.php', {
      method: 'POST',
      body: formData
  })
  .then(response => {
    if (response.ok) {
        open("https://mayuato.netlify.app/gracias.html");
        this.reset();
    } else {
      console.error('Error en la petición');
  }
})
.catch(error => {
      console.error('Error:', error);
  });
});