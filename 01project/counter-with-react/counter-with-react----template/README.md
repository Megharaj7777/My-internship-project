# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





11. Building an app with vanilla JS

1. Let us open the React Project folder in VS Code. Then create a folder named 01 Counter to order them. Next create a folder inside this folder named counter-with-vanilla-js.

2. We need to add three files to make the app. First will be the interface page, we call this index.html. Next we need to add styling to style the page, we add styles.css. Next we will add functionality to add or subtract the number logic. We add a page called index.js for this logic.

3. Let us start writing the content into the index.html page. We can start with boiler plate code starting with! (shift+1). Emmet code comes right following the code. Select the code and we get basic boilerplate HTML5 code to start with.

4. Inside the body tag, we add basic code to add text, buttons as
<div>

<h4>The current count is ..</h4>

<h1>0</h1>

<button>-</button>

<button>+</button>

</div>

5. Let us see this code so far on a browser. Goto extensions tab on left and select Live server if not installed already. This is a popular extension with over 50 million installs. Once installed, right click on the html page, right click and select Open with live server. We see the current count is 0 and buttons there. This is not well formatted or styled. Let us get them to center by adding code in styles.css file.

6. We will add the body tag and add styles to the html body and save it inside styles.css
body{

width: 100vw;

height: 100vh;

background-color: aliceblue;

display: flex;

align-items: center;

justify-content: center;

1

}

7. It will not reflect any changes on the page. We need to add a link to the styles.css in the index.html page. In the <head> tag, add the code

<link rel="stylesheet" href="./styles.css">

8. Save all pages and check on the browser. We see the styling is set. We need to center the content on the page, let us add a class in index.html and add style in the styles.css
index.html

<body>

<div class="container">

styles.css

.container {

text-align: center;

}

9. We now need to show the value for the count with logic. We will add following code in index.js

let count = 0;

10. We want to show this count value in the index.html page h1 tag. To query this h1 tag in the JS file, we name this id as count

<h1 id="count">0</h1>

11. We need to navigate to this id in the index.js file and then initialize it with the count variable declared as follows
let count = 0;

Request edit access

Share

M

const countHeader = document.getElementById("count"); countHeader.innerText=count;

12. We need to add the reference of this js file in the index.html file. Let us add the source to the JS file under the body tag at the end. <script src="./index.js"></script>

13. When you look at the page, it looks all the same, but the logic is coming from the JS file and showing value 0 here. Changing the value to 100 in index.html will not change the value. The values changes when changed in the JS file. 1

14. Next we need to listen to the button actions on the page and add logic to the value displayed. Give ids in the index.html pages and fetch them in the index.js file.

index.html

<button id="subtract">-</button> <button id="add">+</button>
index.js

const addBtn = document.getElementById("add");

const subBtn = document.getElementById("subtract");

15. Next we add eventListener to these button clicks and then add a call back function and add logic to conditionally increment below 10 or conditionally decrement above 0 as follows:

addBtn.addEventListener("click", ()=>{

if (count<10){

count++;

countHeader.innerText=count;

I

}

});

subBtn.addEventListener("click", ()=>{

if (count>0){

count--;

countHeader.innerText=count;

}
});

16. We see that the page on the browser works with the addition and subtraction of the numbers.

12. Limitations we faced in implementing a simple app

1. We used three files for a simple implementation.

2. We have no direct reference to the html element we used in the project.

3. Any changes in the app, I need to edit codes in all or some of the three pages. I could not make direct reference to the changes.

4. For instance, in styles.css, we have a container class. How do we know which element has this particular style? We need to goto index.html and see the class named container to get the reference.

5. In index.js, we have eventlisterners for two elements. To which elements are these eventlisteners added? We need to goto index.html and see the button ids named to understand the events.

6. This design will be humongous complexity as we build a medium or large sized project with thousands of lines of code.

13. Implement the same project in React

1. Let us write the same logic app using React in simple method.

2. Open the terminal and check the directory using Is command. Move into the 01 Counter folder issuing command CD 01 counter.

3. When in this folder, we will execute commands to create our app. We use npm(node package manager) and vite. Check the version of node issuing command node -v. Check the version of npm issuing command npm -v. Make sure npm version is above 7.

4. We run the command to create our app with following command: npm create vite@latest counter-with-react -- --template react. vite allows us to create multiple different applications, we chose react. Let us execute.

5. We see that the folder counter-with-react has many folders. We will look into these later. To run this app, we do not need live server, we need to follow steps as given in the terminal:

cd counter-with-react

npm install

npm run dev

6. As we see the app on the page, we see the counter logic already

7. Let us get into the project folder and understand. We see a lot of folders added. We will only focus on the src folder and files App.css and App.jsx. Let us open App.jsx.

8. We see it has a lot of code already added with html tags and js commands in the code. Let us start from scratch and write the app ourselves. Delete everything and write the JSX code as follows:

function App(){

return(

<div>

<h4>The current count is...</h4>

<h1>0</h1>

<button>-</button>

<button>+</button>

</div>

);

}

export default App;

9. We see the page without any styling. We can use the App.css
already installed in the project that has styling to center and flex as we saw sometime back. Let us import the App.css file into App.JSX file:

import "./App.css"

10. We now need to add the logic to add and subtract. Where do we write this logic, we are already in the JS enabled file. JSX stands for JavsScript XML where you can write JavaScript like code inside HTML code.

11. We will add a variable count and initialize it to some default value. To display this value, we put this variable inside {} in the HTML code. We will edit the JSX code as follows:

import "./App.css" function App(){ let count = 10;

return(

<div> <h4>The current count is...</h4>
<h1>{count}</h1>

<button>-</button>

<button>+</button>

</div>

);

}

export default App;

12. We will not be initializing the value like in the above example. We will use hooks to initialize the values. Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don't work inside classes, they let you use React without classes.

13. You must import Hooks from react.

Hook Rules

There are 3 rules for hooks:

Hooks can only be called inside React function components. Hooks can only be called at the top level of a component.

Hooks cannot be conditional
14. We will use the useState hook in the present app. useState is a React Hook that lets you add a state variable to your component. We import the useState hook in the App.jsx as:

import {useState) from "react"

15. We will next change the in the App() function and replace let

count=0 to

function App(){

const [count, setCount] = useState(0);

we can change the value of 0 to say 10 and check on the browser.

16. Next we add function to add and subtract count as follow:

function App(){

const [count, setCount] = useState(0);

const addToCount = () => {

if(count < 10){

setCount(count+1)

}

}
const subtractf romCount()-> (

count > 0)

setCount(count-1)

17. Next we catch the click event on buttons and call the above functions to implement the logic

return

<div>

<h4>The current count is </h4>

<h1>(count)</h1>

<button onClick-(subtractFromCount)>-</button>

<button onClick-(addToCount]>+</button>

18. We finished the same app using React. Let us compare the two projects Open the vanilla JS and check the lines of code for html and in We need not check for CSS as it is the same for both apps The html and is together sums upto 35 to 40 lines of code in different pages that we must relate. In the react project the lines of code of jsx is about 25 lines of code and integrated. We see that in Index html we have the button declared, inititalized as another variable in index is and then capturing onClick event calling function to add or subtract In the same way, we can not set value to hi tag in the index.html file it is again initialized in the index js file and its inner Text is updated

19. In the react jsx file we have the value ht showing count value initialized with hook and then updated with click events of-and buttons below All that we can do in vanilla JS can be done in React and vice versa React makes the coding compact and significantly easier to develop, maintain and update medium to large sized applications

20. React makes large project implementation efficient and well integrated and easier to update

14. Fundamentals of React

1. Let us first follow the steps to built a simpis React app. We goto treminal and issos commands. We used following commands in prenous sessio

npm create vite latest counter with react template react
cd counter-with-react

npm install

npm run dev

2. Let us understand what happens here. First command creates a vite application. Let us understand what is vite? Let us google and search for vite

3. We see, Vite is a local development server written by Evan You, the creator of Vue Is, and used by default by Vue and for React project templates. It has support for TypeScript and JSX

4. Vite not only helps us create react and vue applications, it helps us run them very efficiently and fast. Let us goto vite website

5. We see that we can create vainilla JS, vanilla TS, vue, react, svelle and other projects. We see below that we can use npm create along with template specifying the type of project we create, we created react above. If we need to create a react ts project, we say react-ts, or as applicable. It mentions in the comment above that we need to have npm 7 and above Let us use this command and create a folder

6. Go to 01-Counter folder in the terminal Let us paste the above command change it to npm create vite@latest my-counter-template react

7. This instantly creates the new react project folder. It is next asking us to follow steps to advance. Let us follow the steps in the prompt

8. Change to project directory Let us open our project folder src in vs code and open App jsx and main jsx in vs code.

9. In these files, we see that it looks like js and html and it has imports, all which don't belong to either html or is in app jsx, we seo we have use State hook imported from react. When you hover over the react it is located in the local machine We see that these are developed by someone else and hosted, which we will import locally and use inside our project

10. Next is npm install. What is npm? Node package manager Let us google npm and goto npm website Let us search for react and click the first dropdown in search We see that react is a JS library used for building user interfaces Its downloaded over 20 million times this week. React is a package available in npm and we download and install the package in our project folder. Similarly we can install any package like anime that can be used for animation in react. It is available in npm and can be downloaded and Installed Nom install helps us install locally the modules we need te nin react applications as we need When we see in the my counter folder we do not have the modules installed
11 We run npm install to install the packages for the application. We generally get a question as how does the npm install know the packages we need to install in the project? This is a genuine question every developer gets to understand and react. The answer lies in package.json file. This file has all the packages we need for the project. We see that dependencies have react, react-dom. We also see devDependencies, which mean we need these packages for development purpose and not for production purposes. The devdependencies make the life of a developer easier. We have eslint that ensures the quality of our code, which is not needed in a production environment. We have vite at the bottom, which is a development package to develop apps and will not be used in production

12. All the packages defined in package json will be installed as dependencies for the react app. Let us run npm install to install all the packages for the app. All these packages will be requested on the internet and downloaded and then installed. Internet connection is mandatory for npm install to install packages.

13. Next step is npm run dev We need a server to render our content on the browser. Npm run dev creates a local server and runs our app on a specific port, generally starts with port 5173 and keeps adding over that for each app. Let us run the command npm run dev and see We have vite running as it shows. With vite, we can get a hot reload on our app For instance, if I goto App jsx file and change h1 tag to Vite React MyApp and save Check on the browser, it will update instantly without us having to rerun the application. This is hot reloading.

15. Exploring the files and folders

1 Let us open our folder my-counter We see several files and folders in the project. Let us open the first folder, node_modules This is created after executing the command npm install All the dependencies from package json file are downloaded and loaded into this folder. We see several files here. when we see only react and react-dom as dependencies Each package here has several libraries that will be made available for building apps Each dependency has several dependencies, hence we have so many fles in the node modules folder Developers need not worry about these files, they are made available for development whenever needed

2. Next we see the public folder Here we can store our assets ike images documents. We will not be working much on that

3 Src directory le where we focus on as developers. We have an assets folder hare too, its here that we call store our emages and files. We have several files available in this folder that we develop

the app into Let us open App.jsx

4. App jsx looks like JS embedded with html Here we have an App() function, which appears to be returning some himi Well, when we observe the code, it is not himi. It has JS code too in it. For instance, il we button code, we have onclick and we are passing in a function. Can we do this in html code, we can not! We can add a JS expression here For instance, under the button tag, I can add the JS expression (5+5) and we see that result on the browser. This is JS. It has both html and JS together. This is called JSX, hence the extension App jsx. Here, we can inject JS code inside html Once it is rendered on the browser, it transpiled into standard html code. JSX integrates html and JS and makes developer life easy nad fast developing web apps

5. At the bottom, we are exporting this function. We need to export the App() function to import into main jsx. If not exported, it gives an errar on the browser console If we observe in the main jsx file, we are calling createRoot function and rendering the <App/> there Here, we are rendering all the html from <App/> into an element with id as root

6. Let us open index.html It seems like a simple boilerplate and it has the root clement there. The main jsx is rendering all the code inside the root element in the index.html In App jsx we have retum What is here? The App() function return can have only 1 root jsx element if we remove it shows an error that JSX expressions must have one parent element I can name a div tag with id root1 with a closing tag and save. When we check in the browser, it works well now It shows <div id= "root" React is smart to add one empty parent id and add all your div tags inside it. The html and ja generated by app jsx will be loaded into main.jsx which renders this data into index html's root id I hope its clear how the react framework works so far

16. State and Event handling

1 Let us goto App jsx and remove all auto-generated code inside Appi) and rewrite the function code as follows

import App cs5

function App(){

let count-0

return(

<div

<h4>The current count is «4»

<h1>(count)</h1>

<button>-</ button>
button> <button>

Aliv

export default App

2. To this code, let us include the add and subtract logic. Let us code the hunctions as below

function App()

let count 0

const addToCount()->(

if(count < 10)

count+-1;

I

const subtractfromCount()->[

if(count > 0){

count-1

1

return(

3. We need to add an id to the button and add eventListener to the button. We can see the separate eventlistener code we did in separate JS files Here we are coding in jax, so we add onClick handler and send the above functions onClick event. Let us add the code below to the buttons

return

<div>

<h4> The current count is </h4>

<h1>(count)</h1>

<button onClick(subtractFromCount)> </button>

<button onClick-(addToCount)></button>

</div>

4. It is exactly the same logic we added in the first hint JS file implementation but the whole code is written in one line in a jsx file Now that we added the logic let us check in the broser. We see that it does not update when we click buttons is the logic working
on the browser?

5. We see that the button clicks are not updating the value is the count value getting added and subtracted? Let us check by logging the value into the console by adding below code in the function

const addToCount = 0 => [

if(count < 10)( count+=1; console.log(count);

6 we see on clicking the button, the console log shows the added value. But the value is not getting displayed on the browser. The reason is the React nature of being efficient React re-renders the whole return() function whenever any change in the state. This was proven to be inefficient to load the whole page when updating a value.

7. To overcome this drawback in the model, in 2018 React Introduced Hooks and became available from React 16 8 version in Feb 2019 So we need to tell React that our variable count is going to change and will trigger a re-render. We need to import the useState in App jsx and change the code for count to use useSate hook and call a function to update its value. The function we declare with the count variable will be called in the addToCount() function to update the variable count as setCount(count+1) Similarly, we will add code to subtract in subtractFromCount() function as setCount(count-1) as follows

function App()

const [count, setCount] useState(0);

const addToCount = () => if(count < 10) setCount(count+1);

const subtractFromCount()>( (count > 0) setCount(count-1);
}

}

I

8. when we check on the interface, we see that the button clicks change the values. We coded to add a count variable in useState(0) hook, which triggers state change whenever the value of count changes from initial value 0. it updates the value with the function declared with the variable, here setCount(). This is dissecting the react application and getting into the details of how the react interface works, values triggers a state change and page rendering Hope this was clear so far. Any questions?

17. Deep into React

1. We will next be building a project that is practically useful for everyone. You can build this app and use it for your own purpose This is a shopping list app that lets you add products you want to buy back when. When we goto grocery store, we tend to write everything in a list and strike out after buying each item. Its annoying to take a paper, write all the items and strike each and every item on adding into a cart. What if we can build an app that can do the task on a small webpage? You can build it and use it for free yourself That is the task we will be doing next.