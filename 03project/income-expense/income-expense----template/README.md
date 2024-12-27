# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





1 Welcome to a brand new section and thus a brand new project This is another very practical project that you can utilize in your day to day So let us see the demo of this project. You should be building an income and expense tracker. Say I just received my job salary payment today of 100000 today. As this is income, I choose income and press button. This displays +100000 in green with details and date. I went out for dinner with my friends Maybe I had a nice dinner and I spent 1500. I will add this, I choose as expense from dropdown and enter the amount. It displays-15000 in red color. We see total changed to +8500, as I spent 15000 for dinner. Now say I bought a bike of 200000. Let us enter an expense of 20000 It now displays-115000 in red This will help you track your expenses over a period of time.

2. Even though it is different than the other project, you now have the skill sets to build this yourself. There's nothing different about this project. Here you are just changing the logic as per the project, and code your React application. It is a bunch of states, event handlers and a some listeners with useEffect. So instead of me just building out this project for you, you're going to do it yourself. Let us list out all of the features that you have to code out and list them out in an order, that you would go code and build. Let us try to list out the requirements that you need follow in order to build this application See the application steps and build the steps for the project

1 Create a React app: First point is we need to create this React app

2. Define the JSX elements: We have bunch of JSX elemments like the sum on left top corner and others.

3 Two way binding of inputs: Next we need to have the two way binding of the input elements so that we can have those variables stored in memory. We need 2 way binding for the income or expense input and Amount

4 Input validations: We have to do input validation. If a user has not put in an value for Income or expense, and click on plus, we should not add a brand new record We should make some input validation and as we do here in the demo If I click on the + it shows red line indicating, you do not have any value here. You have to add some input value. This is an input validation

5. Storing report statements: We need to store the report statement here We call an expense and an income statement We have to report, we will be going to store this in an array state

6. Rendering card for each report: Render the cards for each report statement. We have an array of three statements on the page We have 1 income and 2 expense cards here We have an array of three different statements. Thus we have to render out three different cards and conditionally add the logic in there

7 Computing the sum: We have to compute the sum We compute the sum of all of the reports, all of the expenses, as well as all of the incomes in order to generate the value and then render the value

3. Let us work on first two points. Let us first create the project with create vite command in the VS Code terminal npm create vite@latest 03 expense income

template react
4 Let us follow the next three steps, goto the project directory and run npm install. Ned npm run dev to see the page ready with the new project

5. Let us clean the codes. I remove everything in App.jsx and enter the base code like import "/App.css function App() { return ( <div> </div>

}

export default App;

6. I am adding the styling code here as this is no CSS course and you already have hands on CSS. Let us not waste time and start the coding:

main {

max-width: 500px; }

margin: 0 auto

.total-text { font-size: 50px; margin: 10px 0; }

.input-container {

margin-bottom: 20px; display: flex; justify-content: space-between; }

input {

border: none; outline: none; border-bottom: 1px solid rgba(128, 128, 128, 0.32); width: 100%; margin-right: 10px; padding: 5px 0; }

button {

width: 100px; margin-left: 10px;

.card {

box-shadow: 0.1px 1px 3px rgba(0,0,0,0.27); padding: 10px;

display: flex; justify-content: space-between;

align-items: center;

margin-bottom: 10px;
card info h4 { font-weight: 500; font-size: 12px; }

.card info p { font-weight: 500; font-size: 9px; color: grey }

amount-text { font-size: 12px; }

success { color: rgb(81,190,81) }

.danger { color: rgb(206,76,76) }

7 we need to add styling to index css. Let us replace the index css after root class tag styling as below

{ margin: 0; padding: 0; box-sizing: border-box; }

8. Next we shall add the content on the page. We will create a className as input-container and add a text input, number input and a select with option values income and expense Next we add the button

import 'JApp.css'

function App() {

return ( <main>

<div>

<div className="input-container">

<input type="text" placeholder="Income or expense" />

<input type="number" />

<<select>

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button>+</button>

</div>

</div>

</main>

export default App:

9. Next we will add cards to display We first create a className card
Inside this class, create a card card-info. Lets add some values as Salary and date values to load the page Next we create a className amount-text success' as green and danger as red as I have already defined in the App.css. We also need to add a total sum on left top comer, let us add that as class total-text success to show in green initially

import /App.css'

function App() {

return (

<main>

<div>

<h1 className='total-text '>0</h1>

<div className="input-container">

<input type="text" placeholder="Income or expense" />

<input type="number" />

<select>

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button>+</button>

</div>

<div>

<div className="card">

<div className="card-info">

<h4>Salary</h4>

<p>July 27th, 2024</p>

</div>

<p className="amount-text success">+ ₹5000</p>

</div>

</div>

</div>

</main>

)

export default App.

10. Next we add the two way binding task. Next task is two way binding of the inputs as well as the select element The values of the select as well as the inputs should be associated to some state For example if we change the value of the input on left, say I type groceries for example, then that should be linked to some state And if I were to change the value here, that should change the value of the state. And if I were to change the value of the state, that should change the value here That is two way binding We already worked on it in previous session Try this on your own as we implemented in the previous session in some time Try to learn on your own

11 When implementing, we first import useState from react I will declare a variable as statement that can be changed by function set Statement which will be equal to useState initialized to empty string useState() Similarly another variable amount with function setAmount, equal to useState hook with an empty string Next
variable statement Type, with function setStatementType, equal to useState hook with an string "income" as we start with income and then start expense. Whenever we change any values in the page, it should update these values. We will capture the onChange handler and add an arrow function defined for "income or expense" input We will send e event argument to this function and call setStatement with e target value as argument. We finished one way binding. We will add a button to call setStatement function and sel value to empty string To eable 2 way binding, we will set value = (statement) at the end of the onChange handler arrow function. Let us display the value of statement on top of page. Let us test it

on the page. import { use State } from 'react';

import /App.css'

function App() {

const [statement, setStatement] = use State("")

const [amount, setAmount] = use State("") seState("")

const [statementType, setStatementType] =

use State("income")

return (

<main>

<div>

{statement)

<button onClick={()->setStatement("")}>Clear</button>

<h1 className='total-text '>0</h1>

<div className="input-container">

<input type="text" placeholder="Income or expense"

onChange={(e) => {

setStatement(e.target.value);

}} value = (statement) //two way binding </

<input type="number" />

<select>

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button>+</button>

</div>

<div>

<div className="card">

<div className="card-info">

<h4>Salary</h4>

<p>July 27th, 2024</p>

</div>

<p className="amount-text success">+ ₹5000</p>

</div>

</div>

</div>

</main>
export default App

12 Samilarly you can add two way binding for input type number import (useState) from 'reacť, Import/App css'

function App() {

const [statement, setStatement = useState()

const [amount, setAmount] = useState("")

const [statement Type, setStatement Type] = useState("income")

retum (

<main>

<div>

("statement)

<button onClick=(()=>setStatement("")}>Clear</button>*/)

(amount)

<button onClick-(()->setAmount("")}>Clear</button>

<h1 className='total-text">0</h1>

<div className="input-container">

<input type="text" placeholder="Income or expense"

onChange={(e) => {

setStatement(e.target value);

}} value (statement) //two way binding

<input type="number" placeholder='₹1000

onChange-((e){

setAmount(e.target.value);

}}

value (amount) //two way binding

<select>

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button>+</button>

</div>

<div>

<div className="card">

<div className="card-info">

<h4>Salary</h4>

<p>July 27th, 2024</p>

</div>

<p className="amount-text success">+ ₹5000</p>

</div>

</div>

</div>

</main>
export default App.

13 Next let us do two way binding for select element. It also has the same onChange handle and the value ends up whatever values we have initialized in the code.

import {useState } from 'react',

import /App.css'

function App() {

const [statement, setStatement] = useState()

const [amount, setAmount] = useState()

const [statement Type, setStatement Type] = useState("income")

return (

<main>

<div>

{"statement)

{<button onClick={()->setStatement("""")}>Clear</button>}

{amount*/}

{statementType}

<button

onClick={()=>setStatement Type("expense"))>Clear</button>

<h1 className='total-text '>0</h1>

<div className="input-container">

<input type="text" placeholder="Income or expense"

onChange={(e) => {

setStatement(e.target.value).

}} value (statement) //two way binding

<input type="number" placeholder= 1000' onChange={(e)

=> {

</

setAmount(e.target.value);

}}

value (armount) //two way binding

<select onChange={(e)->{

setStatementType(e.target.value);

}} value = (statementType}

>

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button>+</button>

</div>

<div>

<div className="card">

<div className="card-info">

<h4>Salary</h4>

<p>July 27th, 2024</p>
</div>

<p className="amount-text success">+ <5000</p>

</div>

</div> )

</div>

</main>

export default App.

14. Cleaner way of two way binding As we see we have three onChange functions that is doing the two way binding. It will be good if we can encapsulate all this into one piece of code. We can call a handleUpdateInput handler to manage all thiese to keep code clean and dry. Instead of using three values for three elements on the page, we can initialize all these three elements into single value called input define function setInput to change its value and initialize into useState object with properties statement, amount, and statement Type, all initialized to empty string "" We can remove the three variables we created and use this object with all these three properties. Next for each of three elements on page, we set its values to input object properties as we defined. Let us initialize each element with the name attribute with the object named we defined. We will get the name of these elements in the handleUpdatelnput function argument e value e target value to know which element to udpate. We added the console.log, which displays the values on dev tools console.

import { useState) from "react"

import "/App.css";

function App() { const [input, setInput] = use State({ statement: "" amount: "", statementType: "", }); const handleUpdatelnput = (e) => {

console.log(e.target.name); }; return ( <main> <div> <h1 className="total-text">0</h1> <div className="input-container">

<input type="text" placeholder="Income or expense" onChange={handleUpdateInput) value-(input.statement) name "statement" 12

<input
type="number"

placeholder=" ₹5000"

onChange (handleUpdateinput)

value (input.amount}

name="amount"

<select

onChange={handleUpdateInput)

value-{input.statementType)}

name="statementType"

>

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button>+</button>

</div>

<div>

<div className="card">

<div className="card-info">

<h4>Salary</h4>

<p>July 27th, 2024</p>

</div>

<p className="amount-text success">+ ₹5000</p>

</div>

</div>

</div>

</main>

</

I

}

export default App:

15. now we know which element to update the value using e.target.name With this information, we know which element to update. We next update the element with value on the page, which is stored on e.target, value. Hence we set e target name to e target value. For instance, we are adding value into amount element on page we enter as 10000 This will destructure the input and set amount = 10000

const handleUpdatelnput (e) => { console.log(e.target.name+"="+e.target.value); setInput({ ...input. [e.target.name]: e.target.value, )); };

16 we can see the values we are adding into our onChange handlers all encasulated into one object and input updated in one function enabling a cleaner two way binding. This is a clean way of handling a lot of input elements and their states in a nice, clean way

17 Next you work on input validation. First we want the ensure all values are entered to add a value into the list. If you do not add value to Income or expanse and click + button, you get a red line under the first input text. Next, after adding value to the first text and
you click + button without entering any value into second field, it should show red line under second input. Go ahead an give it a try I will give a little hint, we are going to store another piece of state and then use conditional logic to change the border color to red. I will give you some time. Give it a try.

18. We will be changing how our interface looks, based on the value our variable store value in them. We need to store the state in a variable, I declare as showError. I use setShowError function to udpate, initialized to useState of object with properties statement and amount initialized to false. We will next change the values depending on the values of the inputs. We will use onClick handler for + button and call a function named handleAdd New Statement. We will define this function above the return statement. We define handleAddNew Statement with an arrow function where we do the validation. Only after the validation is done, we will update our new state that is yet to be created. We check if statement is empty, retum setShowError statement true and amount false. Else if amount is not defined, return setShowError statement false and amount: true. We add only else statement to return setShowErroг statement false and amount: false. We will add logic to add statement later. We will goto second input type number, and add conditionally add a style within {}, as we are utilizing conditional logic to check javascript code. Within {}, I check ternary operator if showError.amount = true, set bordercolor to rgb (206, 76, 76) dark red, else null.

import {useState } from "react";

import "/App.css";

function App() { const [input, setinput] = useState({ statement: "" amount "" statementType"", });

const [showError, setShowError] = use State({ statement: false, amount: false, });

const handleUpdatelnput = (e) => { setInput(( input [e target name) e target value. }) }

const handleAddNewStatement() => { const { statement, amount) input; if (!statement) { return set ShowError({ statement: true, amount: false,

else if (tamount) {

return setShowError({

statement: false, amount: true,

});

} else {

setShowError({

statement: false,

amount: false,

});

// ADD LOGIC TO ADD STATEMENT

} };

return (

<main>

<div>

<h1 className="total-text">0</h1>

<div className="input-container">

<input

type="text"

placeholder="Income or expense"

onChange={handleUpdateInput}

value=[input statement}

name="statement"

style={

showError.statement? { borderColor: "rgb(206, 76,

76)"}: null

} />

<input

type="number"

placeholder=" ₹5000"

onChange=[handleUpdateInput)

value=[input amount)

name="amount"

style={

showError.amount? {borderColor: "rgb(206, 76, 76)"}

}

: null

<select

onChange=[handle Updateinput)

value=(input statement Type)

name="statementType"

>

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button onClick=[handleAddNewStatement)>+</button>

<div>

Adiya

<div classNamecard

<div className cand info

<h4>Salary/h4>

July 27th 3024-
</div>

<p className="amount-text success">+ ₹5000</p>

</div>

</div> );

</div>

</main>

}

export default App:

19. After finishing the input validations, we should store the values into a statement array. It should have all information to render the card below in the page like the name, amount, type, date. Next we want to iterate this array and render all those elements them below the page. We also conditionally display the color for success and danger in the p tag. If income, we want to show success style with +, if expense, show danger style with - Work on this and try to tackle on your own for some time. We will work on it together after sometime.

20. Let us add login to add new statement. Let us declare statements variable with function setStatements and initialize to useState of an empty array. Let us add logic to handleAddNewStatement function by calling setStatements function destructuring statements array and adding a new record with properties name coming from statement, amount parsed to float fixed to 2 decimals, type equal to statement Type, date equal to system date function Date(), formatted to toDateString(). Let us dispay the values of statements on top of the page calling JSON stringify function import { useState } from "react", import "./App.css"

function App() {

const [statements, setStatements] = useState([]). const [input, setInput] = use State({ statement: "", amount: statementType: "income", });

const [showError, setShowError] = useState({ statement false. amount false. });

const handleUpdatelnput = (e) => { setinput(( input [e target name] e target value }); }

const handleAddNewStatement = () => { const (statement, amount statement Type) = input
if (hstatement) (

retum setShowError({

statement true, amount, false, 1).

} else if (lamount) {

return setShowError({ statement. false, amount true, });

} else { else

setShowError(( statement: false, amount: false, });

// ADD LOGIC TO ADD STATEMENT

setStatements([ ...statements, { name: statement, type: statementType, date: new Date().toDate String(), }, ]);

amount: parseFloat(amount).toFixed(2),

}

};

return (

<main>

(JSON.stringify(statements)}

<div>

<h1 className="total-text">0</h1>

<div className="input-container">

<input

type="text"

placeholder="Income or expense"

onChange= (handleUpdateInput)

value=(input statement)

name="statement

showError statement? (borderColor "rgb(206, 76.76)")

style=

null

<input

type="number"

placeholder ₹5000

onChange (handle Updateinpul)

value input amount)

name="amount

style=
showError amount ? | borderColor "rgb(206, 76, 767)

null

<

<select

onChange (handleUpdateInput) value (input statementType)

name="statementType"

<option value="income">Income</option>

<option value="expense">Expense</option>

</select>

<button onClick=[handleAddNewStatement}>+</button>

</div>

<div>

[statements.map(({ name, type, amount, date }) => (

<div className="card">

<div className="card-info">

<h4>{name}</h4>

<p>{date}</p>

</div>

I

<p

className=[amount-text {

type === "income"? "success" "danger"

}}

>

{type === "income"? "+" "-") {amount}

</p>

</div>

))}

</div>

</div>

</main>

export default App.

21 displays lays well and finished the 1 way binding We should do it we 2 way binding after pressing the button, where the values should be initialized to default values Let us add function setinput() after setStatements function where we set statement, amount to empty string statement Type to default "income" value

// ADD LOGIC TO ADD STATMENT

setStatements([

statements.

name statement.

amount parseFloat(amount) toFixed(2),

type statementType.

date new Date() toDateString()

D

Setiaput
statement:

amount:

statement Type: "income", });

22 now the most part is done. Next let us utilize the state and render the cards. We will write in JS curly braces and call statements and call map function over send properties name, type, amount and date as arguments. For each statement, we want to render the statements properties in cards here. To show conditionally for amount based on success or danger style, we show class name 'amount-text followed by ternary operator on if income?success style else danger style. Similarly for amount we add + or based on same temary operator logic.

import { useState } from "react";

import "/App.css",

function App() {

const [statements, setStatements] = use State([]);

const [input, setInput] = useState(( statement:""

amount:""

statement Type: "Income",//initialiazed to default select value });

const [showError, setShowError] = useState({ statement false, amount false });

setInput({

}

const handle UpdateInput = (e) => { input. [e target name] e target value,

const handleAddNewStatement = () => {

const (statement, amount, statement Type) input;
if (Istatement) [ retum setShowError({ statement, true, amount: false, });

} else if (lamount) { return setShowError({ statement: false, amount: true, });

} else { setShowError({ statement: false, amount: false, });

// ADD LOGIC TO ADD STATMENT setStatements([ ...statements, { name: statement, amount: parseFloat(amount).toFixed(2). type: statementType, date: new Date().toDate String().

]);

setinput({

statement:"

amount:""

statement Type: "Income",
rehum (

<main>

(JSON.stringify(statements))

<div>

<h1 className="total-text">0</h1>

<div className="input-container"

<input

type="text"

placeholder="Income or expense"

onChange={handleUpdateInput)

value=(input.statement)

name="statement"

style={

showError statement? {borderColor "rgb(206, 76, 76)"}: null

}

<input

type="number"

placeholder=" ₹5000"

onChange={handleUpdateInput)

value=[input amount)

name="amount"

style={

showError amount? (borderColor "rgb(206, 76, 76)"} null

<<

</

<select

onChange={handleUpdateInput)

value=[input statement Type)

name="statementType"

<option value="income">Income</option>
<option value="expense"> Expense</option>

</select>

<button onClick=[handleAddNewStatement)>+</button>

</div>

<div>

(statements.map(({ name, type, amount, date }) => (

<div className="card">

<div className="card-info">

<h4>{name}</h4>

<p>{date}</p>

</div>

<p

className={amount-text {

type === "income"? "success": "danger"

}}

{type === "income"? "+":""} {amount}

</p>

</div>

))}

</div>

</div>

</main>

I

<

}

export default App,

23 we need to make sure all the records are unique and we don't get warnings for duplicate keys. Many a times we have same names for many transactions like buying groceries multiple times having dinner etc to overcome this duplicate entries we use a library called uuid which is very popular if you check on internet It generated random string and we can be assured to use this string make each record unique. To accomplish this we goto terminal and run command npm install uuid In the
app jx, import this library and in the setStatements() function add id property and initialize it to uuidv4(), which will be a string We can goto div tag in HTML render and add id to the statements map() function. In the first line of this function, we can code div tag as className-"card and key [id) This should be good.

import {useState, use Effect) from "react", import {v4 as uuidv4) from "uuid",

import "./App.css";

function App() {

const [statements, setStatements] = useState([]);

const [input, setInput] = useState({ statement amount: "",

statementType: "income", });

const [showError, setShowError] = useState({ statement: false, amount false, }).

const handleUpdateInput = (e) => { setInput({ input. [e target name] e target value });

const handleAddNewStatement = () => {

const statement amount statementType = input

if (Istatement) ( return setShowError(
statement true, amount: false, });

} else if (lamount) { return setShowError({ statement false, amount: true, });

} else { setShowError({ statement false, amount: false, });

// ADD LOGIC TO ADD STATEMENT setStatements([ statements,

{ id: uuidv4(), name statement, amount parseFloat(amount) toFixed(2), type: statement Type, date new Date() toDateString(). 3.

]):

setInput({ statement amount statement Type: "income", }):

}
return (

<main>

<div>

<h1 className="total-text">0</h1>

<div className="input-container">

<input

type="text"

placeholder="Income or expense"

onChange={handleUpdateInput)

value={input.statement}

name="statement"

style={

showError.statement? {borderColor "rgb(206, 76, 76)"}: null

}

/>

<input

type="number"

placeholder=" ₹5000"

onChange={handleUpdateInput)

value=(input.amount)

name="amount"

style=(

showError amount? {borderColor: "rgb(206, 76, 76)"} null

<select

onChange=[handleUpdateInput)

value=(input statement Type)

name="statementType"

>

<option value="income">Income</option>

<option value="expense"> Expense</option>

</select>

<button onClick={handleAddNewStatement)>+</button>

</div>

<div>

{statements.map(({ name, type, amount, date, id }) => (

<div className="card" key={id}>

<div className="card-info">

<h4>{name}</h4>

<p>{date}</p>

</div>

<p

className={amount-text {

type === "income"? "success":

"danger"

}}

>

{type === "income"? "+" : "-"} {amount)

</p>

</div>

))}

</div>

</div>

</main>

).

}

export default App: