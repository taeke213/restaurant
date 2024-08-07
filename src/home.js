export function makeHome(){    
    let container = document.getElementById("content");
    let header = document.createElement("h1");
    header.innerHTML = "romeo's pizza";
    container.appendChild(header);
    let text = document.createElement("p");
    text.textContent = "The best place in the world to get your pizza's. Pizza's are always freshly baked";
    container.appendChild(text);
    let timescontainer = document.createElement("div");
    let timesheader = document.createElement("h3");
    timesheader.textContent = "Times";
    timescontainer.appendChild(timesheader);
    let mondayfriday = document.createElement("p");
    mondayfriday.textContent = "monday - friday: 8-22";
    timescontainer.appendChild(mondayfriday);
    let weekend = document.createElement("p");
    weekend.textContent = "saturday - sunday: 8-0";
    timescontainer.appendChild(weekend);
    container.appendChild(timescontainer);
}

export function switchTab(){
    let homebut = document.getElementById("home")
    let menubut = document.getElementById("menu")
    let aboutbut = document.getElementById("about")
    homebut.addEventListener(("click"), makeHome)
    menubut.addEventListener(("click"), () => {
        alert("menu")
    })
    aboutbut.addEventListener(("click"), () => {
        alert("about")
    })
}
