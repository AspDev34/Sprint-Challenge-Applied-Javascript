// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function tabComponent (obj){
    // create tab component
    const tabDiv = document.createElement('div');

    //add class of tab
    tabDiv.classList.add('tab');

    //pass obj data to tab
    tabDiv.textContent = obj.topics;

    return tabDiv;

}

// selected class from html that i'm going to append the new component to
const appendNewTab = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
     const makeNewTab = tabComponent(response.data);
        appendNewTab.appendChild(makeNewTab);

    })
    .catch(error => {
        console.log("An error has occurred", error);
      })

// this forEach now grabs the data from the API via the Axios call and appends to the main HTML
data.forEach(event => {
    axios.get(`https://lambda-times-backend.herokuapp.com/${event}`)
      .then(response => {
        const tabData = newCard(response.data.topics);
        appendNewTab.appendChild(tabData);
      })
      .catch (error => {
          console.log("An error has occurred", error);
      })
  })     
