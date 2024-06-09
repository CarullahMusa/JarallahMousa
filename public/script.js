
const sideBar = document.querySelector('#sideNav');

function hiddenBar() {
    if (window.innerWidth > 768) {
        sideBar.classList.add("hidden");
    } else {
        sideBar.classList.remove("hidden");
    }
}

window.addEventListener('resize', hiddenBar);

hiddenBar();


function openNav() {
    document.body.classList.toggle("overflow-hidden");
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "60%";
}

/*Close navigation*/
function exitNavB() {
    document.body.classList.toggle("overflow-hidden");
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sideNav").style.width = "0";
}

const liElements = document.querySelectorAll('.m-li');

liElements.forEach((li) => {
    li.addEventListener('click', (event) => {
        // Diğer tüm <li> elemanlarının arka plan rengini sıfırla
        liElements.forEach((otherLi) => {
            otherLi.classList.remove("bg-green-100");
        });

        // Tıklanan elemanın arka plan rengini değiştir
        event.currentTarget.classList.toggle("bg-green-100");
    });
});

const navliElements = document.querySelectorAll('.nav-li');

navliElements.forEach((li) => {
    li.addEventListener('click', (event) => {
        // Diğer tüm <li> elemanlarının arka plan rengini sıfırla
        navliElements.forEach((otherLi) => {
            otherLi.classList.replace("text-green-500", "text-green-900");
        });

        // Tıklanan elemanın arka plan rengini değiştir
        event.currentTarget.classList.replace("text-green-900", "text-green-500");
    });
});

// const navLinks = document.querySelectorAll('.nav-li');

// navLinks.forEach((link) => {
//   const sectionId = link.getAttribute('href').replace('#', '');
//   const section = document.getElementById(sectionId);

//   window.addEventListener('scroll', () => {
//     if (isElementInViewport(section)) {
//       link.classList.replace("text-green-900", "text-green-500");
//     } else {
//       link.classList.replace("text-green-500", "text-green-900");
//     }
//   });
// });

// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }