// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log("this is the response for tabs: ")
    console.log(response)
})
.catch(err => {
    console.log(`The data was not returned ${err}`);
})


// Function to iterate over topics creating new Tab components

function Tab (){

    //define elements
    const tab = document.createElement('div');

    
    //set up the structure of the elements

    

    //add classes to the elements


    //set content of the elements

}