// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerClass = document.querySelector(".header-container");
// headerClass.addpendChild(Header());

function header() {
const headerDiv = document.createElement("div");
const date = document.createElement("span");
const title = document.createElement("h1");
const temperature = document.createElement("span");

headerDiv.appendChild(date);
headerDiv.appendChild(title);
headerDiv.appendChild(temperature;

headerDiv.classList.add("header");
headerSpan1.classList.add("date");
headerSpan2.classList.add("temp");

headerSpan1.textContent = "March 28, 2019";
headerH1.textContent = "Lambda Times";
headerSpan2.textContent = "98deg";

entryPointHeader.prepend(headerDiv);

return headerDiv;
}
