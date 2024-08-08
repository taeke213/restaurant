export function makeHome(){ 
    let container = document.getElementById("content");   
    container.innerHTML = ""
    let header = document.createElement("h1");
    header.innerHTML = "romeo's pizza";
    container.appendChild(header);
    let text = document.createElement("p");
    text.textContent = "The best place in the world to get your pizza's. Pizza's are always freshly baked";
    container.appendChild(text);
    let timescontainer = document.createElement("div")
    timescontainer.classList.add("times");
    let timesheader = document.createElement("h3");
    timesheader.textContent = "Times";
    timescontainer.appendChild(timesheader);
    let monday = document.createElement("p");
    monday.textContent = "monday: 8-22";
    timescontainer.appendChild(monday);
    let tuesday = document.createElement("p")
    tuesday.textContent = "tuesday: 8-22"
    timescontainer.appendChild(tuesday)
    let wednesday = document.createElement("p")
    wednesday.textContent = "wednesday: 10-22"
    timescontainer.appendChild(wednesday)
    let thursday = document.createElement("p")
    thursday.textContent = "thursday: 8-22"
    timescontainer.appendChild(thursday)
    let friday = document.createElement("p")
    friday.textContent = "friday: 8-0"
    timescontainer.appendChild(friday)
    let saturday = document.createElement("p");
    saturday.textContent = "saturday: 8-0";
    timescontainer.appendChild(saturday);
    let sunday = document.createElement("p")
    sunday.textContent = "sunday: 10-0"
    timescontainer.appendChild(sunday)
    container.appendChild(timescontainer);
}

export function switchTab(){
    let homebut = document.getElementById("home")
    let menubut = document.getElementById("menu")
    let aboutbut = document.getElementById("about")
    homebut.addEventListener(("click"), makeHome)
    menubut.addEventListener(("click"), makeMenu)
    aboutbut.addEventListener(("click"), makeAbout)
}

export function makeMenu(){
    let content = document.getElementById("content")
    let container = document.createElement("div")
    content.textContent = ""
    container.classList.add("contmenu")
    let food1 = document.createElement("p")
    food1.textContent = "pizza margerita"
    container.appendChild(food1)
    let food1p = document.createElement("p")
    food1p.textContent = "$10"
    container.appendChild(food1p)
    let food2 = document.createElement("p")
    food2.textContent = "pizza tuna"
    container.appendChild(food2)
    let food2p = document.createElement("p")
    food2p.textContent = "$16"
    container.appendChild(food2p)
    let food3 = document.createElement("p")
    food3.textContent = "pizza calcone"
    container.appendChild(food3)
    let food3p = document.createElement("p")
    food3p.textContent = "$13"
    container.appendChild(food3p)
    let food4 = document.createElement("p")
    food4.textContent = "pizza salami"
    container.appendChild(food4)
    let food4p = document.createElement("p")
    food4p.textContent = "$15"
    container.appendChild(food4p)
    let food5 = document.createElement("p")
    food5.textContent = "pizza kebab"
    container.appendChild(food5)
    let food5p = document.createElement("p")
    food5p.textContent = "$18"
    container.appendChild(food5p)
    let food6 = document.createElement("p")
    food6.textContent = "pizza vega"
    container.appendChild(food6)
    let food6p = document.createElement("p")
    food6p.textContent = "$20"
    container.appendChild(food6p)
    let food7 = document.createElement("p")
    food7.textContent = "pizza bolongese"
    container.appendChild(food7)
    let food7p = document.createElement("p")
    food7p.textContent = "$15"
    container.appendChild(food7p)
    content.appendChild(container)
}

export function makeAbout(){
    let container = document.getElementById("content")
    container.textContent = ""
    let description = document.createElement("p")
    description.textContent = "Romeo's pizza was founded by Romeo in 1978. The pizzeria is now owned by the third generation. all ingredients of the pizza are always freshly bought by local farmers and the pizza is baked by our two amazing chef's."
    container.appendChild(description)
    let blank = document.createElement("br")
    container.appendChild(blank)
    let text2 = document.createElement("p")
    text2.textContent = "Romeo's pizza has also won some prices such as the best pizza award in 2022, and the golden pizza in 2020. We've also come up second in some award in the last couple of years."
    container.appendChild(text2)
    container.appendChild(blank)
    let text3 = document.createElement("p")
    text3.textContent = "So with all the knowledge you have now about our pizzeria, why don't you just come by and grab on of our amazing pizza's. You can find our menu in the menu tab."
    container.appendChild(text3)
}
