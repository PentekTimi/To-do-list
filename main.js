// create an array assign it to the variable grocerieItems
let grocerieItems = [];
// get hold of the ul tag using its id, and save it in the variable ul
let ul = document.getElementById("itemList");
// get hold of the input field using its id
let input = document.getElementById("input");


// create a function that displays the items in the array as list elements in the ul tag
function addItems(item) {
    // create an li element for the item that is passed in as argument
    // the item is retrieved from the input value that the user types in
    // set the li elements HTML content to the item and additionally
    // add the span with class and x symbol   
    // finally, append/add this li element to the ul tag
    let li = document.createElement("li");
    li.innerHTML = `${item} <span class=\"close\">\u00D7</span>`
    ul.append(li);
        
    // add click event listener to the created list item with the deleteItem function, passing in the event as argument
    li.addEventListener("click", function(e) {
        deleteItem(e);
    })
}

// create a function that will update the list
function updateList() {
    // get the value of the input text
    let inputValue = input.value;
    // if input value is empty alert message
    if(inputValue === "") { 
        alert("please input an item");
    } else {
        // else add it to the array, set the input field back to empty
        // and call the function to display the list with the item value passed in
        grocerieItems.push(inputValue);
        input.value = "";
        addItems(inputValue);
    }
}

// add the event listener on the full ul to see if the item is being checked, get the li with e.target
// if the event´s tag name is a list tag, toggle the checked class
ul.addEventListener("click", function(e){
    if (e.target.nodeName === "LI") {
        // toggle checked class on list item
        e.target.classList.toggle("checked");
    }
})


// add eventlistener to the x symbols to delete an item
function deleteItem(e){
    // if the events class name is "close", set the display style to none
    if (e.target.className === "close") {
        e.target.parentElement.style.display = "none";

        // get the index of the specific value that was clicked, and remove it from the array
        let index = grocerieItems.indexOf(e.target.previousSibling.nodeValue.trim());
        grocerieItems.splice(index, 1);
    }
}

// add the keyup event listener
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        // trigger a click function 
        updateList();
    }
})

    




