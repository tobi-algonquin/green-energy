// DATA RESOURCES
let dataResorce = [
    {
        heading: "Development Banks and Risks",
        bodyText: "Development banks can take on the risks that no other actors are willing to take. ... For every $1 [development banks] invest, they can leverage up to $20 in private finance, New Climate Economy said in a release. The markets are working. The cost of renewables are dropping. People are seeing the promise to energy efficiency.",
        imgUrl: "./img/water.jpg"
    },
    {
        heading: "Community Solar ",
        bodyText: " A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy costs.",
        imgUrl: "./img/lightbulb.jpg"
    },
    {
        heading: "Clean Energy Tax Credits",
        bodyText: "We need a fair and stable federal tax policy for renewable energy that will attract new investments and maintain the strong growth that renewables have experienced in recent years.",
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
