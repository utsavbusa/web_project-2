// scrollbar navigation 
window.addEventListener("scroll",() => {

    let a = document.getElementsByClassName("header")[0];
    a.classList.toggle("header-scroll-active",window.scrollY > 5);

});

const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
    // alert("utsav busa");
nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click",() => toggleNavbar());

let slides=document.querySelectorAll('.slide-container');
        let index=0;

        // next function

        function next(){
            slides[index].classList.remove('active');
            document.getElementsByClassName("btn-12")[index].style.backgroundColor = "white";
            index = (index + 1 ) % slides.length;
            slides[index].classList.add('active');
            document.getElementsByClassName("btn-12")[index].style.backgroundColor = "black";

        }

        // prev function

        function prev(){
            slides[index].classList.remove('active');
            index = (index - 1 + slides.length ) % slides.length;
            slides[index].classList.add('active');
        }

         //  gallery section swiper js 
        slides[0].addEventListener("swiped-right",next());
        slides[0].addEventListener("swiped-left",prev());

        // autoplay

        setInterval(next,4000);
        
       
       


        let testimonial=document.querySelectorAll('.testimonials-content');
        let index1=0;

        // next function

        function next1(){
            testimonial[index1].classList.remove('on');
            document.getElementsByClassName("btn-1")[index1].style.backgroundColor = "white";
            index1 = (index1 + 1 ) % testimonial.length;
            testimonial[index1].classList.add('on');
            document.getElementsByClassName("btn-1")[index1].style.backgroundColor = "black";

        }

        setInterval(next1,3000);