// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header"> created with class
//    <span class="date">SMARCH 28, 2019</span> created
//    <h1>Lambda Times</h1> created
//    <span class="temp">98°</span> created
//  </div >
// And add it to the DOM in the .header-container component

const staticData = [
    {
        Date: `March 28, 2019`,
        Temp: `98°`
    }
]

function Header(Date, Temp) {
    // create components
    const parentDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1Element = document.createElement('h1');
    const tempSpan = document.createElement('span');

        
    // Add classes for created elements
    parentDiv.classList.add('header')
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    // Append created elements to the containing parentDiv
    parentDiv.append(dateSpan);
    parentDiv.append(h1Element); 
    parentDiv.append(tempSpan);

    //Add text to requisite elements
    dateSpan.textContent = Date;
    h1Element.textContent = `Lambda Times`;
    tempSpan.textContent = Temp;

    return parentDiv;
}

// selected class from html that i'm going to append the new component to
const mainHTMLAppend = document.querySelector('.header-container');

//map through static data and insert into component
staticData.map((newComp) => {
    mainHTMLAppend.append(Header(newComp.Date, newComp.Temp));
})

//append completed component to the .header-container class in the main HTML
// mainHTMLAppend.append(parentDiv);
