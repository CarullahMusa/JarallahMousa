// const hide = document.querySelector("#navbar-cta");

// const clickBtn = document.querySelector("button").addEventListener("click", function(){
//     hide.remove("hidden");
// });

// Initialization for ES Users
// import {
//     Collapse,
//     Ripple,
//     initTWE,
//   } from "tw-elements";

//   initTWE({ Collapse, Ripple });

//   let div = document.querySelector('#content');
// div.classList.replace('info','block');

// let div = document.querySelector('#content');
// div.classList.toggle('visible');

// ﻿let div = document.querySelector('#content');
// div.classList.contains('warning');  
const div = document.querySelector('#navbar-sticky');
const btnn = document.querySelector('#btn');
btnn.addEventListener("click", function () {
    if (div.classList.contains('hidden')) {
        div.classList.remove('hidden');
    }
    else {
        div.classList.add('hidden');
    }
});