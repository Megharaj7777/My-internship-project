# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




Project 2: Deep into React

1. We will next be building a project, that is practically useful for everyone. You can build this app and use it for your own purpose. This is a shopping list app, that lets to add products you want to buy back when. When we goto grocery store, we tend to write everything in a list and strike out after buying each item. Its annoying to take a paper, write all the items and strike each and every item on adding into a cart What if we can build an app that can do the task on a small webpage? You can build it and use it for free yourself. That is the task we will be doing next

2. Let me run the demo for the app we will build. We have our header saying shopping list. We have this cool image and we will how to add. Next we have the input and this is where the logic happens We add all of the different items that we want If I want a banana, enter banana and then enter. We see that a new record is added. If we enter something like milk, and enter, another record is added. that is the point. Now if we add cereal and let's say we don't want cereal I can press X and delete it. It deleted the selected record, but the others are untouched in this application we make it smart. If you type in banana again, even though you already have a banana record, it's going to know that and increment the quantity to 2. If we check everything in the app, it shows "You're Done But if you uncheck something, it's gone We have this little conditional logic in this app. Let us get into the coding of this project

3 let us goto our Programs folder and enter the command in vs code terminal

npm create vite@latest 02-grocery list

template react

4 let us follow the commands it asks us to execute After executing npm run dev note the port on which the app is running and open the app in the browser

5. Next we will remove everything from App jsx App css and design it to look like the interface we have seen in the project Let us ass following code we generally in regular JS projects.

App jsx

Import /App.css

function App[] L

return(

<div class="App">

<h1>Hellos/ht

<div>
)
}
export default App

App.css

App (

height: 100vh;

width: 100vw;

display: flex;

justify-content: center;

align-items: center;

6. When we run the app on the browser, how does it look? It looks alright from the preview. When we open the dev tools and get into console, we see the warning it generates. It shows warning hook.js: 603 Warning: Invalid DOM property 'class'. Did you mean className'? Error Component Stack

7 As we discussed in the previous session, there is a conflict of name class here with JS and html. Hence to alleviate this confusion, in JSX file we need to rename class to className The code for App jsx would look like

import "JApp.css' function App() ( return ( <div className-"App"> <h1>Hello</h1> </div>

8 when we look at this html code in the dev tools, it shows up as class and not className as we coded. We need to remember this important point when programming in React

9. Next we will make the App jsx look like the demo we see. As it requires lot of styling arid as this is not CSS course and you all are mrare of CSS, Jet us copy the App.css code to save our time App

height: 100vh; width 100vw; display: flex;
justify-content: center;

align-self: center;

background-color: aqua;

align-items: center;

}

.header {

text-align: center;

display: flex;

flex-direction: column;

align-items: center;

}

input {

border: none;

background-color: transparent;

outline: none;

padding: 5px 0;

border-bottom: 1px solid rgba(74, 28, 28, 0.25);

}

item-input {

width: 300px;

img {

width: 150px;

margin: 20px;

}

container (

display: flex;

align-items: center;
}
li{

padding: 5px 0;

border-bottom: 1px solid rgba(74, 28, 28, 0.25);

list-style: none; display: flex; justify-content: space-between; width: 300px; }

lip {

text-transform: capitalize; font-size: 12px; margin-left: 10px; }

lip span {

font-size: 8px;

font-weight: bold;

}

.remove-button {

color: rgb(230, 85, 85); background-color: transparent; border: none; cursor: pointer;

}

success {

text-align: center;

color: rgb(100,180,100); font-weight: 700; }

ul {

margin: 0; }
10. in the index.css, we need to make some changes. After the body tag styling, remove everything and add following code

*{

margin: 0;

padding: 0;

box-sizing: border-box;

}

11. with these, we should be done with the styling. Next let us get into the App.jsx file.

12. We need to first add the header Shopping list and then add the image. Image can be downloaded from here. Place it under the assets folder in the project. We will import it as groceryCartimg variable and load inside the img tag under h1 tag. We add a text input along with a placeholder to add text as follows:

import "./App.css";

import groceryCartlmg from "./assets/grocery-cart.png";

function App() {

return (

<main className="App">

<div>

<h4 className="success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartlmg) alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

/>

</div>

</div>

</main>

);

I

}

export default App:
13. next let us add an unordered list and then add list items to show the items above </main>. We will next add a button X to remove.

<ul>

<div className="container">

<input type="checkbox" />

<p>Carrots</p>

</div>

<div>

<button className="remove-button">X</button>

</div>

</li>

</ul>

14. it looks out of alignment as it shows as separate locations items. We add all code between <div> tags upto </main> into another div tag. Let cut all the code between opening and closing main and paste the above code inside main as follows

import "./App.css";

import groceryCartimg from "./assets/grocery-cart.png";

function App() {

return (

<main className="App">

<div>

<div>

<h4 className="success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartlmg) alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"/>

</div>

</div>

<ul>
<>

<div className="container">

<input type="checkbox" />

<p>Carrots</p>

</div>

<div>

<button className="remove-button">X</button>

</div>

<!/>

</ul>

</div>

</main>

);

}

export default App;

15. if the page looks dark, you can add background color to white in index.css

16. Let us put all the logic we want to implement and complete the tasks one by one as follows and check with the demo

Type into the input element

Press enter to add an item and conditionally check if there is an item already and add numbers

Delete an item

Mark an item as done in the list. I should be able to toggle between check and uncheck

Show success message conditionally only when all items checked

17 To be able to input a value and load into list, we first need to load that into a variable. We need to enable two way binding in react We should have ability to store and control the value Control here is to not add into the list again, but add number on the existing list item. As we type value banana, the state of the app changes when you type each character This is one way binding We are binding the value of input to the value of the state We will be able to change the value of the state whenever we need Let us add code to implement 2 way binding

18 Let us first import useState from react and initialize a value inputValue with a changing functionsetInputValue to useState hook. To access the change event, we use onChange event and
call an arrow function. We will access the event within the papameter as e argument. We will add a function called handleChangeInputValue that takes event e as parameter. We will now test the two way binding:

import"./App.css";

import groceryCartlmg from "/assets/grocery-cart.png",

import {useState) from "react";

function App() {

const [inputValue, setInputValue] = use State("");

const handleChangelnputValue = (e) => { setInputValue(e.target.value); };

return (

<main className="App">

<div>

<div>

<h4 className="success"> You're Done</h4>

<div className="header">

{inputValue}

<button

onClick ={()->{

setInputValue("");

}}

>

Clear input

</button>

<h1>Shopping List</h1>

<img src={groceryCartimg) alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange (handleChangeInputValue)

value (inputValue) //enable two way binding
/>
</div>

</div>

<ul>

<li>

<div className="container">

<input type="checkbox" />

<p>Carrots</p>

</div>

<div>

<button className="remove-button">X</button>

</div>

</li>

</ul>

</div>

</main>

(

}

19. We now do the second task, press enter to add a new item. We will add handleChangeInputValue function with the event e argument. Next we add another variable groceryltems and function setGroceryltems to load value into this variable and set it to useState hook with empty array. We next add the function handle Groceryltem when entered after adding an item. We also add another even listener for text input onKeyDown and equal to handle Groceryltem function to update. We need to check if the keydown is only equal to enter, hence we add condition e.key = "Enter" in the handle Groceryltem function. We now need to load the array groceryltems with properties quantity, name and completed as false by default We update all these values using the function setGroceryltems. We destructure the groceryltems array and load inside setGroceryltems which will be called inside handle Groceryltem function We add an if condition to make sure this array is not loaded when inputValue in the text field is empty import "./App.css";

import groceryCartlmg from "./assets/grocery-cart.png";

import {useState } from "react";

function App() {
const [inputValue, setInputValue] = use State();

const [groceryltems, setGroceryltems] = use State([]);

const handleChangeInputValue = (e) => { };

setInputValue(e.target.value);

const handleAddGroceryltem = (e) => {

if (e.key = "Enter") {

if (inputValue) {

setGroceryltems([

...groceryltems,

{

quantity: 1,

name: inputValue,

completed: false,

},

]);

setInputValue("");

}

}

};

return (

<main className="App">

<div>

<div>

<h4 className="success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartimg) alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange=(handleChangeInputValue)

onKeyDown (handleAddGroceryltem)
value (inputValue)
/>
</div>

</div>

<ul>

<li>

<div className="container">

<input type="checkbox" />

<p>Carrots</p>

</div>

<div>

<button className="remove-button">X</button>

</div>

</li>

</ul>

</div>

</main>

);

}

export default App;

20. Next we need to load the elements from the text field into the list below. We define a function renderGroceryList() and we map each item of groceryltems to load the list inside this function. We call this function inside the <ul> tag to dynamically map groceryltems and load the list.

import "./App.css";

import groceryCartlmg from "./assets/grocery-cart.png";

import { use State } from "react";

function App() {

const [inputValue, setInputValue] = useState("");

const [groceryltems, setGroceryltems] = use State([]);

const handleChangelnputValue = (e) => {

setinputValue(e.target.value):

};

const handleAddGroceryltem (e)-> (

if (e.key "Enter") {

if (inputValue) {

setGroceryltems([

...groceryltems,

{

quantity: 1,

name: inputValue,

completed: false,

},

]);

setInputValue("");

}

}

};

const renderGroceryList = () => {

return groceryltems.map((item)-> ( <!!> </li> ));

<div className="container">

<input type="checkbox" />

<p>{item.name)</p>

</div>

<div>

<button className="remove-button">X</button>

</div>

return (

<main className="App">

<div>

<div>
<h4 className "success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartlmg} alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange={handleChangeInputValue}

onKeyDown (handleAddGroceryltem}

value={inputValue}

/>

</div>

</div>

<ul>{renderGroceryList()}</ul>

</div>

</main>

);

}

export default App;

21 we see that we get a warning when we add an item in to the list. It says that App.jsx:63 Warning: Each child in a list should have a unique "key" prop. When we see this error, it says that for each <li> that is generated after adding an item, it has to have an unique id. This is because React is efficient. It does not want to render all the items when you are adding one item. It is not rendering all list in the ul. It wants to know which item to update when added We know that we don't have the same item names more than once. If more than once, we will add a number after that item name as per our logic. We add <li key = (item.name}> as the names are unique import"/App.css"

import grocery Cartimg from"/assets/grocery-cart.png",

import (useState) from "react"

function App() (

const [inputValue setinputValue) = useState("")

const (groceryltems setGroceryltems] = useState([])

const handleChangeInputValue = (e) => {
console.log(i was called"), setinputValue(e target.value),

const handleAddGroceryltem (e) => { if (e.key "Enter") {

if (inputValue) { setGrocerylterms([ groceryltems, { J):

quantity 1, name: inputValue, completed: false, ).

setInputValue("");

}

}

};

const renderGroceryList = () => { return groceryltems.map((item) => ( <li key={item.name}> <div className="container"> <input type="checkbox" /> <p>{item.name}</p> <button className="remove-button">X</button> </div> </li> )):

</div>

<div>

return (

<main className="App">

<div>

<div>
<h4 className="success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartimg) alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange={handleChangeInputValue)

onKeyDown (handleAddGroceryltem}

value={inputValue}

</div>

</div>

<ul>{renderGroceryList()]</ul>

</div>

</main>

);

}

export default App.

22 when we add items into the list, the Key prop error has stopped, but when we add the same item again, we get the error, as we have set the item name to be unique. We have to look into the logic while adding the items into the array. We do not want to add items if it already exists. We will remove the logic in the if(inputValue) block and change the logic. We will create a new variable updatedGroceryList and initialize it with destructured groceryltems We need to see if the element already exists in the list, then update it by 1 We can achieve this by finding the index of an item in the list and loading it into a new variable itemIndex We need to check the array item name with the inputValue and if matched, return the index When an item is not found in the list, it returns-1 When itemIndex ===-1 then we push the inputValue into the list. If an item is found in the list, then we say quantity++ At the bottom we set the grocery items to updatedGroceryList

import "./App.css";

import groceryCartlmg from "/assets/grocery-cart.png";

import (useState) from "react";
function App() {

const [inputValue, setinputValue]-use State();

const [groceryltems, setGroceryltoms] use State([]);

console.log(groceryltems);

const handleChangelnputValue(0) ->{ console.log("i was called"); setinputValue(e.target.value); };

const handleAddGroceryltem (e)-> ( if (e.key "Enter") ( if (inputValue) {

const updatedGrocery List - [...groceryltems]; const itemindex updatedGroceryList.findIndex( (item) -> item.name inputValue );

if (itemindex-1) { updatedGroceryList.push({ name: inputValue, quantity: 1, completed: false, });

} else { updatedGroceryList[itemIndex].quantity++;

setGroceryltems(updatedGroceryList); setinputValue("");

const renderGroceryList()-> (
return groceryltems.map((item)->(

<li key (item.name)>

<div className-"container">

<input type="checkbox" />

<p>{item.name}</p>

</div>

<div>

<button className "remove-button">X</button>

</div>

</li>

));

};

return (

<main className="App">

<div>

<div>

<h4 className="success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartlmg} alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange={handleChangeInputValue)

onKeyDown (handleAddGroceryltem}

value={inputValue}

</div>

</div>

<ul>{renderGroceryList()}</ul>

</div>

</main>

);

/>

export default App;

23. So far, we have calculated the quantity. We need to show the quantity in the list only if it is more than 1. we will conditionally render the application based on the state. In the <li> tag, after the item.name, we want to show x+item.quantity. We use the && operator after item.quatity>1 and only after that condition is true, display x{item.quaituty), if flase, do not render anything beyond this import "/App.css";

import groceryCartlmg from "Jassets/grocery-cart.png";

import {use State } from "react";

function App() {

const [inputValue, setinputValue] = use State("");

const [groceryltems, setGroceryltems] = use State([]);

const handleChangelnputValue(e) => { setInputValue(e.target.value); };

const handleAddGroceryltem = (e) => {

if (e.key=== "Enter") {

if (inputValue) { const updatedGroceryList = [...groceryltems]; const itemindex = updatedGroceryList.findIndex( (item) => item.name = inputValue );

if (itemIndex ===-1){ updatedGroceryList.push({ name: inputValue, quantity: 1, completed: false, });

} else {

updatedGroceryList[itemIndex].quantity++; } setGroceryltems(updatedGroceryList); setInputValue(""); }
}

};

const renderGroceryList() => {

return groceryltems.map((item)-> (

<li key (item.name}>

<div className-"container">

<input type="checkbox" />

<p>

(item.name} {item.quantity > 1 &&

<span>x{item.quantity}</span>}

</p>

</div>

<div>

<button className="remove-button">X</button>

</div>

</li>

));

};

return (

<main className="App">

<div>

<div>

<h4 className="success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartlmg} alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange (handleChangeInputValue)

onKeyDown (handleAddGroceryltem)

value=(inputValue)

/>

</div>
</div>

<ul>{renderGroceryList()}</ul>

</div>

</main>

);

}

export default App;

24. Our next step is Delete an item. When we press the X button, we want the item to be deleted from the list. We will create a handler here, handleRemoveltem and call an arrow function. On the X button, we will add an onClick event and call this handler. We need the information about the item we clicked upon. We have the item we added in the groceryltems.map function, we can return this item.name information to this function. We will implement an arrow function/call back function and send this parameter. In this function again, we need to find the index of the element in the list and remove the element from the list. We add a filter on the list groceryltems to get all names that are not equal to the name parameter into the updatedGroceryList variable. Next we call setGroceryltems function with this updatedGroceryList

import "/App.css";

import groceryCartlmg from "/assets/grocery-cart.png";

import {useState } from "react",

function App() {

const [inputValue, setinputValue] = useState("");

const [groceryltems, setGroceryltems] = useState([]).

const handleChangeInputValue = (e) => {

setInputValue(e target value);

const handleAddGroceryltem = (e) => {

if (e key === "Enter") (

if (inputValue) (

const updatedGroceryList = [ groceryltems]

const itemIndex updatedGroceryList findindex/ (item)> item name === inputValue
)

if (itemIndex-1) {

updatedGroceryl.ist.push({ name: inputValue, quantity: 1, completed: false, });

} else {

updatedGroceryList[itemIndex].quantity++;

} setGroceryltems(updatedGroceryList); setInputValue(""):

}

}:

const handleRemoveltem = (name) => {

setGroceryltems([...groceryltems].filter((item) => item.name !== name)); };

const renderGroceryList = () => { return groceryltems.map((item) => (

<li key=[item.name}>

<div className="container">

<input type="checkbox" />

<p>

(item name) (item quantity > 1 && <span>x(item.quantity)</span>)

</p>

</div>

<div>

<button

className="remove-button"

onClick=(() => handleRemoveltem(item.name))

>

X
</button>

</div>

<>

)),

relum (

<main className "App">

<div>

<div>

<h4 className="success">You're Done</h4>

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartimg) alt=""/>

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange (handleChangeInputValue)

onKeyDown (handleAddGroceryltem)

value=(inputValue)

</div>

</div>

<ul>{renderGroceryList()]</ul>

</div>

</main>

)

export default App.

25 Next feature we work is on Mark an item as done or not done check or uncheck an item and if we are all done with the app. If we have to implement this, we need to do two way binding. We shall add a new function handle UpdateComplete Status where we send two arguments the status and the item We update the updatedGroceryList by destructuring groceryltems list, set the status to updatedGroceryList[index] completed and call setGrocertitems function with updatedGroceryList as parameters

We should call this handleUpdateComplete Status for the checkbox onChange event handler. We will call this function with the arrow function and send status as true and the index to update upon. We need to check if it is checked or unchecked. We need to do two way binding. We will initialize value = (item.completed) and checked = {item.completed).

26. We will look into whether we are done with the list. We will create a variable isCompleted and function setlScompleted and set it to useState hook, initialized to false. To display if done, we will do conditional rendering at the start of the page. To check if done, we need to check if all items in the list are checked. Let us write a function handleChangeInputValue, e event as argument. We will make the function determineCompleted Status arrow function to check the grocery list length is zero, then return false. We will set isAllCompleted = true first. We will next run a forEach loop on groceryltems and check if the item not completed Even if 1 item is not completed, it sets isAllCompleted to false. Last we call the function setlsCompleted(isAllCompleted). Based on this value, we will display the result.

27. We need to analyze when all we need to call determineCompleted Status function. We should call this when I add an item like a banana in the list, I check it, I need to call the function, when unchecked, we need to call to hide the message, we need to call when deleting an incomplete item and other tasks may be complete Logically we need to call whenever we update the groceryltems list. To be able to complete this task we must use the useEffect hook. We will import the use Effect hook from react In the function App(), we will call use Effect hook with the first argument the function that is to get called, next is the dependency list. Here we add items we want to listen to Here we need to listen to the groceryltem list whenever it is added, deleted, checked or unchecked. We will be using these two hooks consistently throughout the React journey In this arrow function, we will call determineCompleted Status function import "./App.css";

import groceryCartlmg from "./assets/grocery-cart.png";

import {use State, useEffect) from "react";

function App() (

const [inputValue, setInputValue] = useState("");

const [groceryltems, setGroceryltems] = use State(0);

const [is Completed, setis Completed] use State(false):

useEffect(() => (
determineCompleted Status(); }, [groceryltems]);

const handleChangeInputValue = (e) => { setInputValue(e.target.value); };

//console.log(groceryltems);

const determineCompleted Status - (0)=> { if (!groceryltems.length) { return setlsCompleted(false); } let isAllCompleted = true;

groceryltems.forEach((item) => { if (!item.completed) isAllCompleted = false; });

setlsCompleted(isAllCompleted); };

const handleAddGroceryltem = (e) => { if (e.key === "Enter") { if (inputValue) { const updatedGroceryList = [...groceryltems]; const itemindex = updated GroceryList.findIndex( (item) => item.name === inputValue );

if (itemIndex ===-1){ updatedGroceryList.push({ name: inputValue, quantity: 1. completed: false, });

} else {

updatedGroceryList[itemIndex].quantity++;

}
setGroceryltems(updatedGroceryl.ist); setinputValue(); 1

const handleRemoveltem (name) {

setGroceryltems([...groceryltems].filter((item) item.name 1-name));

};

const handleUpdateComplete Status(status, indez) ( const updatedGroceryList[...groceryltems); setGroceryltems(updatedGroceryList);

updatedGroceryList[index].completed - status;

const renderGroceryList() => {

return groceryltems.map((item, index)-> (

<li key-(item.name}>

<div className-"container">

<input

type="checkbox"

onChange-((e){

handleUpdateComplete Status(e.target.checked,

index);

}}

value(item.completed)

checked-(item.completed)

<p>

(item.name) (item.quantity > 1 && <span>x(item.quantity)</span>)

</p>

</div>

<div>

<button

className "remove button"

onClick-(0)-> handleRemoveltem(item.name))
>

X

</button>

</div>

</li>

));

};

return (

<main className="App">

<div>

<div>

{isCompleted && <h4 className="success">You're

Done</h4>}

<div className="header">

<h1>Shopping List</h1>

<img src={groceryCartlmg) alt="" />

<input

type="text"

placeholder="Add an Item"

className="item-input"

onChange (handleChangeInputValue}

onKeyDown (handleAddGroceryltem}

value-(inputValue}

/>

</div>

</div>

<ul>(renderGroceryList()}</ul>

</div>

</main>

);

export default App:

You should have completed this shopping list application now and can use it for your daily day to day activities.