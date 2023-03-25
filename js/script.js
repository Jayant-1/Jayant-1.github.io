

burger = document.querySelector('.burger')
home = document.querySelector('.home')
about = document.querySelector('.About')
Services = document.querySelector('.Services')
contact = document.querySelector('.Contact')
navlist = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-re');
    navlist.classList.toggle('v-class-re');
    navbar.classList.toggle('h-nav-re');
})
home.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-re');
    navlist.classList.toggle('v-class-re');
    navbar.classList.toggle('h-nav-re');
})

about.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-re');
    navlist.classList.toggle('v-class-re');
    navbar.classList.toggle('h-nav-re');
})
Services.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-re');
    navlist.classList.toggle('v-class-re');
    navbar.classList.toggle('h-nav-re');
})
contact.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-re');
    navlist.classList.toggle('v-class-re');
    navbar.classList.toggle('h-nav-re');
})