// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            newTab(response);
        })

const tabs = document.querySelector("topics");

function newTab(tabData) {
    let arr = tabData.data.topics;

    arr.forEach(element => {

        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = element;
        const entryPoint = document.querySelector('.topics');
        entryPoint.appendChild(tab);
    });
        
    return tabs;
    }

