document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthItems = items.length - 1;

    function toggleMenu() {
        navbar.classList.toggle('active'); // Tambah atau hapus kelas 'active'
    }

    next.onclick = function(){
        if(active + 1 > lengthItems){
            active = 0;
        } else {
            active = active + 1;
        }
        reloadSlider();
    }

    prev.onclick = function(){
        if(active - 1 < 0){
            active = lengthItems;
        }else{
            active = active - 1;
        }
        reloadSlider();
    }
    let refreshSlider = setInterval(()=> {next.click()}, 5000)
    function reloadSlider(){
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.slider .dots li.active')
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
        clearInterval(refreshSlider);
        refreshSlider = setInterval(()=> {next.click()}, 5000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', function(){
            active = key;
            reloadSlider();
        })
    })

    menuIcon.addEventListener('click', toggleMenu);

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});