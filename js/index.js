// DATA RESOURCES
let dataResorce = [
    {
        heading: "Water",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "./img/water.jpg"
    },
    {
        heading: "Power",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "./img/lightbulb.jpg"
    },
    {
        heading: "Clean Air",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "./img/power.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");
$content.innerHTML = `<h3 class="heading">${dataResorce[0].heading}</h3>
                              <img class="cover-img" src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev) {



    // fetch the clicked button
    let clickedBtn = ev.target;

    // read the text inside the button
    let btnText = clickedBtn.innerText;

    // print the text of the clicked button
    //console.log(btnText);

    if (btnText === "PAGE 1") {
        $content.innerHTML = `<h3 class="heading">${dataResorce[0].heading}</h3>
                              <img class="cover-img" src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "PAGE 2") {
        $content.innerHTML = `<h3 class="heading">${dataResorce[1].heading}</h3>
                              <img class="cover-img" src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3 class="heading">${dataResorce[2].heading}</h3>
                              <img class="cover-img" src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }



}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", eventHandler);
}


const links = document.querySelectorAll("button");

function handleEvent(ev) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
        }
    }

    let currentItem = ev.target;
    currentItem.setAttribute("id", "active-button");
}

for (let link of links) {
    link.addEventListener("click", handleEvent);
}
