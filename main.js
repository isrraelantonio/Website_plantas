/** -------------------TOGLE BUTTON -------- */

const navMenu = document.querySelector("#nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.querySelector("#hamburguer")

 /**Estou adicionando a o redurso em questão o assventlistener nesse caso do mesmo ativamos o clic e chamamos a função para troca de classe  */

hamburger.addEventListener("click", () => { /**O nome click é o brigatório não é como se estiversemos nomeando uma  função o click diz realmente a ação de clicar no item  */
   navMenu.classList.toggle("left-[0]")
   hamburger.classList.toggle("ri-close-large-line")
})

/** Agora estamos usando para  o nosso item selecionado o forEach, acho que o mesmo quer dizer as acções para interação com o link nesse caso o o que vai acontecer  ao interagir como um link desse elemento. o mesmo vai chamar a mesma função anterior. eu percebi que se chamamos a troca de classe e os valores são os mesmos, a classe que foi inserida sai dando  lugar a classe que havia anteriormente*/
navLink.forEach(link => {
    link.addEventListener("click", () => {
   navMenu.classList.toggle("left-[0]")
   hamburger.classList.toggle("ri-close-large-line")
}

    )
})

/** -------------------SHOW SCROLL UP  -------- */
const scrollUp = () =>{

    const scrollUpBtn = document.getElementById("scroll-up")
    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll", scrollUp)

/** -------------------CHANGE BACKGROUND HEADER  -------- */

const scrollHeader = () =>{

    const header = document.getElementById("navbar")
    if(this.scrollY >= 50){
        header.classList.add("border-b", "border-white", "md:border-yellow-500")
    }else{
        header.classList.remove("border-b", "border-yellow-500", "md:border-yellow-500")
    }
}
window.addEventListener("scroll", scrollHeader)


/** -------------------SWIPER -------- */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    grabCursor:true,

    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });



/** -------------------SCROLL SECTIONS ACTIVE LINK -------- */


const activeLink = () => {
    const sections = document.querySelectorAll("section")
    const navLinks =  document.querySelectorAll(".nav-link")



    let current = 'home'

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })
    navLinks.forEach(item => {
        item.classList.remove("active")

        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeLink)


/** -------------------SCROLL REVEAL ANIMATION  -------- */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal(".home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content")
sr.reveal(".home__image",{delay: 500, scale: 0.5})
sr.reveal(".service__card, .popular_card",{interval: 100})

sr.reveal(".about-leaf, .copyright",{delay: 300, origin: "right"})
sr.reveal(".about-leaf2",{delay: 300, origin: "left"})

sr.reveal(".abut__item__1-content, .abut__item__2-img",{delay: 300, origin: "right"})
sr.reveal(".abut__item__2-content, .abut__item__1-img",{delay: 300, origin: "left"})