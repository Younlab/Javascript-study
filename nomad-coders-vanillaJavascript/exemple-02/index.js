const title = document.querySelector("#title");
console.dir(title);

title.innerHTML = "Hi From JS";
title.style.color = "red";

// document 로 config 조작
console.dir(document);
document.title = "I own in owner";
