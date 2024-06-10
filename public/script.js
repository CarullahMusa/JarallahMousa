
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
        // Reset background color of all other <li> elements
        liElements.forEach((otherLi) => {
            otherLi.classList.remove("bg-green-100");
        });

        // Change the background color of the clicked element
        event.currentTarget.classList.toggle("bg-green-100");
    });
});

const navliElements = document.querySelectorAll('.nav-li');

navliElements.forEach((li) => {
    li.addEventListener('click', (event) => {
        // Reset text color of all other <li> elements
        navliElements.forEach((otherLi) => {
            otherLi.classList.replace("text-green-500", "text-green-900");
        });

        // Change the text color of the clicked element
        event.currentTarget.classList.replace("text-green-900", "text-green-500");
    });
});


function openURL() {
    var url = "src/pdf/Vinod Jangid Resume.pdf";

    window.open(url, "_blank");
  }