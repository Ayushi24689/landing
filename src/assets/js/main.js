import "../scss/style.scss";

// import "preline";



    document.addEventListener('DOMContentLoaded', function () {
        const pagesToggle = document.querySelector('.pages-toggle');
        const shopToggle = document.querySelector('.shop-toggle');
        const pagesMenu = document.querySelector('.pages-menu');
        const shopMenu = document.querySelector('.shop-menu');
        const electronicsLink = document.querySelector('.electronics-link');
        const electronicsSubmenu = document.querySelector('.electronics-submenu');

        // Toggle Pages Menu
        pagesToggle.addEventListener('click', function (event) {
            event.preventDefault();
            pagesMenu.classList.toggle('hidden');
            shopMenu.classList.add('hidden'); // Close shop menu if open
            electronicsSubmenu.classList.add('hidden'); // Close electronics submenu if open
        });

        // Toggle Shop Menu
        shopToggle.addEventListener('click', function (event) {
            event.preventDefault();
            shopMenu.classList.toggle('hidden');
            pagesMenu.classList.add('hidden'); // Close pages menu if open
            electronicsSubmenu.classList.add('hidden'); // Close electronics submenu if open
        });

        // Toggle Electronics Submenu
        electronicsLink.addEventListener('click', function (event) {
            event.preventDefault();
            electronicsSubmenu.classList.toggle('hidden');
            pagesMenu.classList.add('hidden'); // Close pages menu if open
            shopMenu.classList.add('hidden'); // Close shop menu if open
        });

        // Click outside to close menus
        document.addEventListener('click', function (event) {
            const isClickInsidePages = pagesMenu.contains(event.target) || pagesToggle.contains(event.target);
            const isClickInsideShop = shopMenu.contains(event.target) || shopToggle.contains(event.target);
            const isClickInsideElectronics = electronicsSubmenu.contains(event.target) || electronicsLink.contains(event.target);

            if (!isClickInsidePages) {
                pagesMenu.classList.add('hidden');
            }

            if (!isClickInsideShop) {
                shopMenu.classList.add('hidden');
            }

            if (!isClickInsideElectronics) {
                electronicsSubmenu.classList.add('hidden');
            }
        });
    });



        document.addEventListener('DOMContentLoaded', function () {
            const slider = document.getElementById('slider');
            const slides = slider.children;
            const totalSlides = slides.length;
            let currentSlide = 0;

            function updateSlider() {
                const offset = -currentSlide * 100;
                slider.style.transform = `translateX(${offset}%)`;
            }

            document.getElementById('prev').addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            });

            document.getElementById('next').addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            });

            // Initialize the slider position
            updateSlider();
        });

        document.addEventListener("DOMContentLoaded", () => {
            function counter(id, start, end, duration) {
                let obj = document.getElementById(id),
                    current = start,
                    range = end - start,
                    increment = end > start ? 1 : -1,
                    step = Math.abs(Math.floor(duration / range)),
                    timer = setInterval(() => {
                        current += increment;
                        obj.textContent = current;
                        if (current == end) {
                            clearInterval(timer);
                        }
                    }, step);
            }
            counter("count1", 0, 10, 3000);
            counter("count2", 0, 50, 2500);
            counter("count3", 0, 100, 3000);
        });
    
