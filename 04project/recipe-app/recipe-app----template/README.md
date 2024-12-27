# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





Od project Recipe.

Welcome to a new course and a new course project. In this project that we are going to be working on, not only in this section but across to be multiple different sections, because this project is going much larger than the three other projects that we have built thus far and is going to introduce a lot of brand new but important react concepts.

2

Let me introduce the project. This is going to be a very simple recipe application. We see our home page. We got this nice little header here, and over here we have a bunch of different cards that are showing you different meals that you can potentially cook for yourself. As you can see here, let's say you're not interested in any one of these meals. Not a problem. What you can do is you can go ahead and you can try to find a recipe by a keyword. So let's say I'm interested in making something that involves chocolate. So I would just say here, anything I would just say chocolate like, so I would search for this. And then now we have a bunch of recipes that involve chocolate. And what's really interesting about our application is, it's going to understand that we want chocolate. And if I were to refresh this, as you can see, we still have all of the recipes that involve chocolate. And what's nice about this project is, again, I can search for anything it is that I want. There is absolutely no restrictions. Maybe I want something that going to go do a are getting all of So that is just this involves coconut. So I'm going to go here. I'm quick little search. And now, as you can see, we these wonderful recipes that involve coconut. page over here. This is going to contain multiple pages. Let's say we are interested in one of them. Maybe I want to cook something for myself like coconut cookies. And that's exactly what I want to see. click on this card. So once I click on a brand new page. We have this nice So I'm going to go ahead and this card, I get redirected to little loading state. So now you can see here that we have this brand new page and it gives us significantly more information about see here, we have some nutritional fats, proteins, and sugar. And so interested in that based on the this recipe. So as you can information on calories, carbs, now, you know, if we're not nutritional information, we can go back. But if we are interested in it, we can just take a look at the instructions. So over here you have these nice little instructions. But maybe we also want not only the instructions, but maybe we want the ingredients. Let us think about ingredients later.
.

So this is the application that we are going to build. Now, let's talk about this application, comparing that to the applications that we have built and how it is different. So the first thing is that it contains multiple different pages. So as you can see, it contains this home page and also contains an about page that I didn't really add content. But we have this home page, we have an about page, and then we also have the page for the actual recipe itself. So we have the recipe page. So we have multiple different pages, that have to handle with. So far when we were building our applications, we just had one page. The other point that we have to consider is that this it is interacting with a web API. Now you might not be familiar with APIs, especially if you're a beginner in industry to dive into, you know front end.

4.

I'm going to explain exactly what an API is, you can see here, all this data, it doesn't come from thin air, right? So it comes from somewhere. And what our application is doing is it's making a network request to a server that is hosting that is hosted somewhere, and that server is connected to a database that has all of this information. So we're making network requests to an API in order to get this data and that's why we can literally type anything in here and we can get the data back. May be you're only interested in front end development. You don't care about back end development, but still front end developments have to interact with the API to grab the data. So this is something that's very important to understand. This is a much larger project. Can we realistically put everything inside of our App.jsx file? No, this is a much larger project that we have to think about we can design a bit better. Let us start the project. how

5.

To start with the project, the first thing that we do is to build this landing page. Are we going to build it out inside the app.jsx like we have done throughout all of the other projects that we have worked on? So let's go ahead and do that. We're just going to build out the layout in this session, just the JSX structure as well as the CSS for layout, nothing is going to be functional I will be sharing the CSS like in our other projects. Let us first create the react project and run it. Add CSS that I will share.

Let us first create the react project using the following command on terminal. npm create vite@latest 04-Recipe --template react. Next go into the folder and run npm Let us go into app.css file and replace with the project code I give below
App.css

*{

margin: 0;

padding: 0;

box-sizing: border-box;

}

App {

/* background-color: rgb(240,248,246); */

margin: 0 auto;

min-height: 100vh;

}

main_container {

max-width: 1200px;

margin: 0 auto;

padding: 75px 0

}

main_header {

display: flex;

}

.header-title {

color: rgb(56,77,68);

font-weight: 800;

font-size: 60px

}

header-title span {

color: rgb(228,199,134),

text-transform: uppercase;

}

header-description {

margin-top: 30px,

line-height: 30px
loading-container {

display: flex;

justify-content: center;

padding: 80px 0;

}

.text-container {

margin-right: 30px;

}

.main_img {

border-radius: 20px;

width: 600px;

}

header-input-container {

margin-top: 40px;

}

header-input-container input {

padding: 10px 15px;

border-radius: 30px;

border: none;

font-size: 20px;

box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.072),

}

header-input-container button {

padding: 10px 15px;

border-radius: 30px,

background-color: rgb(35, 104, 35),

border: none;

color white,

font-weight bold,

margin-left: 10px
cursor: pointer;

width: 150px;

font-size: 20px;

}

.cards {

margin-top: 100px;

display: flex;

flex-wrap: wrap;

justify-content: space-between;

}

.card {

width: 275px;

border-radius: 20px;

overflow: hidden;

background-color: white;

box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);

margin-bottom: 50px;

cursor: pointer;

}

card img (

width: 100%;

height: 350px

}

card-content (

padding: 10px

card-content h3 (

height: 30px,

)

card-content h3 (

font-size: 15mx
.card.tag {

background-color: rgb(35, 104, 35);

padding: 4px 6px;

color: white;

font-weight: bold;

border-radius: 30px;

font-size: 13px;

}

.card-info {

display: flex;

margin-top: 15px;

justify-content: space-between;

}

.time-text {

color: rgb(6, 82, 89)

}

not-found-container {

display: flex;

flex-direction: column;

align-items: center;

width: 100%

}

not-found-image (

width: 250px

}

not-found-header {

color rgb(56,77,68),

padding: 10px 0;

font-size: 50px,
/* RECIPE PAGE */

.recipe-header {

width: 600px;

margin: 0 auto;

text-align: center;

}

.recipe-header {

color: grey

}

recipe-header h1 {

font-size: 40px;

color: black

}

.recipe-facts-container {

display: flex;

justify-content: center;

margin: 20px 0

}

recipe-fact-container {

display: flex;

margin: 0 20px;

align-items: center,

font-size: 25px;

}

recipe-fact-container h3 {

color: rgb(27, 65, 27),

margin-left: 7px;

margin-right: 4px;
font size: 18px;

recipe fact container p (

font-size: 16px;

recipe-info (

display: flex;

justify-content: center;

align-items: center,

margin-top: 75px;

recipe-info-container (

width: 600px;

height: 700px;

min-height: 650px;

background-color: rgb(232, 228, 228);

box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.218);

padding: 20px;

overflow: scroll

}

recipe-info h3 {

margin-bottom: 10px;

recipe-img {

width: 600px,

height: 600px;

margin-left:-10px;

box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.218),

border-radius: 3px,
recipe-info-content container (

display: flex;

padding: 15px 0;

border-bottom: 1px dashed rgba(128, 128, 128, 0.355);

align-items: center,

ingredients {

align-items: center,

}

.recipe-info-header {

display: flex;

justify-content: space-between;

align-items: center;

}

recipe-info-header h3 {

padding: 0;

margin: 0

}

recipe-info-link {

background-color: beige;

padding: 8px 15px;

color: black,

text-decoration: none;

border-radius: 5px,

box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);

}

recipe-step (

font-size: 30px;
font-weight: bold,

margin-right: 20px;

)

recipe-text span (

font-style: italic;

}

.error-page {

padding: 50px 0

}

nav {

background-color: rgb(35, 104, 35);

box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.32);

padding: 20px

}

nav a {

text-decoration: none;

color: white;

font-weight: bold;

margin-right: 15px;

}

nutritional-facts-container {

display: flex;

justify-content: space-between;

margin-top: 10px,

}

lets change the index.css for this project. Let us replace the file with this code:

body (

margin: 0;

font-family-apple-system, BlinkMacSystemFont, 'Segoe UI, Robotel Osmanl

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',

'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',

sans-serif;

-webkit-font-smoothing: antialiased;

-moz-osx-font-smoothing: grayscale;

}

code {

font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',

monospace;

}

8.

let us run npm run dev command in the terminal. We see the default page running with content in app.jsx file. Let us reset the code for app.jsx file like in our previous projects.

import/App.css'

function App() {

return (

<div> </div>

)

export default App:

now let us go ahead and build the structure of the application Let US work on the content below the top navbar and above the cards add main and header tags and add the hi as in the page. Add some lorem of 20 words by typing lorem20 and select emmet We add an input type text and add placeholder to "find a recipe.and then add a search button. Next we add the image as I added in the project Copy the image URL from here Preview the page and it should look well

import /App.css

function App() (

return (

<div className="App">
<main className="main_container">

<header className="main_header">

<div>

<h1 className="header-title">

Look for <span>Favorite</span> Food

</h1>

<p className="header-description">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio ex assumenda voluptas nam labore itaque perspiciatis incidunt sequi harum.

</p>

<div className="header-input-container">

<input type="text" placeholder='Find a recipe...'/>

<button>Search</button>

</div>

</div>

<img

src="https://hips.hearstapps.com/hmg-prod/images/how-to-m ake-french-toast-1589827448.jpg?crop=0.734xw:0.490xh:0.08 97xw,0.323xh&resize=1200:** alt="" className="main_img"/>

</header>

</main>

</div>

)

}

export default App:

10 we now shall build a card. I will create a section and give a

className

as "cards"

import /App.css'

function App() {

return (

<div className="App">
<main className="main container">

<header className="main_header">

<div>

<h1 className="header-title">

Look for <span>Favorite</span> Food

</h1>

<p className="header-description">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio ex assumenda voluptas nam labore itaque perspiciatis incidunt sequi harum.

</p>

<div className="header-input-container">

<input type="text" placeholder='Find a recipe...'/>

<button>Search</button>

</div>

</div>

<img

src="https://hips.hearstapps.com/hmg-prod/images/how-to-m ake-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.08 97xw,0.323xh&resize=1200:*" alt="" className="main_img"/>

</header>

<section className='cards'>

<div className="card">

<img

src="https://th.bing.com/th/id/OIP.36afoZp3rNU5YJiYZwZmJ gHaHa?rs=1&pid=ImgDetMain" alt="" />

<div className="card-content">

<h3>Masala Dosa</h3>

<div className="card-info">

<div className="tag">

<p>Tasty breakfast</p>

</div>
<p className="time-text">60 mins</p>

</div>

</div>

</div>

</section>

</main>

</div>

)

}

export default App;

11. We built the structure of our home page, we will discuss a new React concept, components. In order to understand components, let's take a look at our code in this project, as well as all of the other projects we've always worked inside of the App.jsx file. It is was okay when we were working on smaller projects. this project is going to be significantly larger and it's going to contain more code. Coding all in one file is chaotic, and difficult to maintain. React has this concept known as components, where we can take related JSX structures and put them in another file and then reference them in other JSX files when needed.

12. What we can do with our project is, we have the header on top we coded. We can put this header in a separate file and reference that in the App.jsx. To do that, I goto to my sre folder and create another folder called Components. In side this folder, I create a file called Header.jsx file. Here we define a simple JS function Header() and at last we export default Header to call this in other files. We shall cut the <header> section from the App.jsx and paste it inside the Header(). Now the page does not have header portion in the page, it is empty. As we exported Header() function, we need to import that into App.jsx. We write import Header from specifying the path components where the file is stored. We removed <header> after the <main> tag, we call this header just like a HTML tag <Header/> This component will be called exactly the Header code was here. This process is called Function based component. As this is a component, React shows it in green color. Let us check the page, and we see the same code we wrote sometime back. The App jsx looks significantly clean and compact. The Header is called
a component, a reusable component that I emphasized in previous sessions. We can simply call the <Header/> and use the component wherever needed, we can add this component below </section> and get the component there too. This can be removed. Component helps up put all logic in one module avoiding putting all logic in one file. This is power of components and is a very fundamental topic in React.

Header.jsx

function Header(){

return(

<header className="main_header">

<div>

<h1 className="header-title">

Look for <span>Favorite</span> Food

</h1>

<p className="header-description">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio ex assumenda voluptas nam labore itaque perspiciatis incidunt sequi harum.

</p>

<div className="header-input-container">

<input type="text" placeholder='Find a recipe.../>

<button>Search</button>

</div>

</div>

<img

src="https://hips.hearstapps.com/hmg-prod/images/how-to-m ake-french-toast-1589827448.jpg?crop=0.734xw:0.490xh,0.08 97xw,0.323xh&resize=1200*" alt="" className="main_img"/>

</header>

).

export default Header:

App..JSX

import/App.css)

import Header from "./Components/Header";

function App() {

return (

<div className="App">

<main className="main_container">

<Header/>

<section className='cards'>

<div className="card">

<img

src="https://th.bing.com/th/id/OIP.36afoZp3rNU5YJiYZwZmJg HaHa?rs=1&pid=ImgDetMain" alt="" />

<div className="card-content">

<h3>Masala Dosa</h3>

<div className="card-info">

<div className="tag">

<p>Tasty breakfast</p>

</div>

<p className="time-text">60 mins</p>

</div>

</div>

</div>

</section>

</main>

</div>
export default App;

13. we see we can add even the cart list into the component. I will leave from this to you to try. Make a component cart and export it Components folder. In App.jsx file, import and display the component. Let us modulate the components into two, cardlist and card.

14.1 would make CardList.jsx and Card.jsx components in components folder first. Write the CardList function exporting it while defining it. paste it inside the I will cut the div Cut the section named cards from App.jsx and return of this function. Again in this component, className-card portion. We move to Card.jsx and define the JS function Card(), exporting it. We include the copied code in the return statement of this function. We defined the Card.jsx component. Now we need to import this Card component into the CardList component. We first need to import Card <section> and include from './Card' and include <Card/> below the code. We now need to import CardList in App.jsx <CardList/> under <Header/>.

Card.jsx

export default function Card(){

return(

<div className="card">

<img

src="https://th.bing.com/th/id/OIP.36afoZp3rNU5YJiYZwZmJg HaHa?rs=1&pid=ImgDetMain" alt="" />

<div className="card-content">

<h3>Masala Dosa</h3>

<div className="card-info">

<div className="tag">

<p>Tasty breakfast</p>

</div>

<p className="time-text">60 mins</p>

</div>

</div>

</div>

);
CardList.jsx

import Card from/Card";

export default function CardList(){

return(

<section className='cards'>

<Card/>

</section>

);

}

App.JSX

import'./App.css';

import Header from "./Components/Header";

import CardList from "./Components/CardList";

function App() {

return (

<div className="App">

<main className="main_container">

<Header/>

<CardList/>

</main>

</div>

)

}

export default App,

15 when code looks

we look at the page in browser, it looks the same and magnificent This is component based programming in React. Now a days, 99% of time times, we use function based
components. This is the new way and recommended way of defining components in industry standard. This is known as function based component. You may see some codes using class based components in older project upgrade, which is a legacy now.

16. Next we will render a few more cards on the page.

CardList.jsx, will hardcode a list that I'm going to create and we're

17. Next what we do is just render a few more cards. Inside going to iterate over that list. And for each list we're going to render a card component. Let us create recipes array with members id, name, image, tag and duration. we will copy this few more times to show cards. We will create 4 different records here by copy pasting this and changing data.

import Card from './Card';

const recipes = [

{

id:1,

name: "Masala Dosa",

image:

"https://th.bing.com/th/id/OIP.36afoZp3rNU5YJiYZwZmJgHaHa?rs

=1&pid=ImgDetMain",

tag: "Tasty breakfast",

duration: 50

},

{

id:2,

name: "Banana Walnut Cake",

image:

"https://evergreenkitchen.ca/wp-content/uploads/2022/07/Banana- Walnut-Cake-with-Cream-Cheese-Icing-Evergreen-Kitchen-1.jpg",

tag: "Different breakfast",

duration: 150

}
idl

name: "Raagi Rotti",

image:

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5L.sou pTsOnSWEFB3EBIMN2SNW_fZBCJF320&s",

tag: "Healthy breakfast",

duration: 30

),

{

id:4,

name:"Chole bathure",

image:

"https://cookingfromheart.com/wp-content/uploads/2019/07/Pres sure-Cooker-Chole-3.jpg",

tag: "Fried breakfast",

duration: 120

}

1

export default function CardList(){

return(

<section className='cards'>

<Card/>

</section>

);

18 we loaded this list. We should be able to load all these values into the Card.jsx code. What we shall do next step is, copy the code within the return argument from Card. jsx. We want to paste that in place of <card/> in CardList.jsx. Before we paste the code, we want to use map function of the recipe array and for each recipe, we will render the JSX code copied from Card jsx. We will render array members with recipe id at first div, next load
recipe image, recipe.name and recipe tag, recipe duration

import Card from './Card";

const recipes = 1

{

id:1,

name: "Masala Dosa",

image:

"https://th.bing.com/th/id/OIP.36afoZp3rNU5YJiYZwZm.JgHaHa?rs =1&pid=ImgDetMain",

tag: "Tasty breakfast",

duration: 50

},

{

id:2,

name: "Banana Walnut Cake",

image:

"https://evergreenkitchen.ca/wp-content/uploads/2022/07/Banana- Walnut-Cake-with-Cream-Cheese-Icing-Evergreen-Kitchen-1.jpg".

tag: "Different breakfast",

duration: 150

},

{

id:1,

name: "Raagi Rotti",

image:

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Lsou PTsOnSWEF83EBfMN2SNW_fZBCJF32Q&s",

tag: "Healthy breakfast",

duration: 30

(
id:1,

name: Chole bathure",

image:

"https://cookingfromheart.com/wp-content/uploads/2019/07/Pres

sure Cooker-Chole-3.jpg",

tag: 'Fried breakfast",

duration: 120

}

1

export default function CardList()(

return(

<section className='cards'>

{recipes.map((recipes) => (

<div className="card">

<img src={recipes.image) alt="" />

<div className="card-content">

<h3>(recipes.name}</h3>

<div className="card-info">

<div className="tag">

<p>(recipes.tag}</p>

</div>

<p className="time-text">(recipes.duration) mins</p>

</div>

</div>

</div>

)))

</section>

}
19 when we check on the browser, we will be able to load all the values we have entered in the array above. But we are not using the component Card here. We should be able to load into the card component. If we just replace the above code with </Card>, what does it display? It displays only the Masala Dosa information as I have hard coded and stored in the component. Now the challenge is to communicate the recipe array information to the Card component. We will display four cards below and each card should display all four members of the array as we loaded with information above. The JSX should be one and same, only the data has to be different. We can send the information from parent component cardList to child component Card using props. We can call child component sending props, here <Card key=(recipe.id)/>. Inside the child component, inside Card.jsx, we can get the props as argument to the function as Card((recipe)), destructuring the recipe. We can create a const (image, name, tag, duration) and initialize into props recipe. We can change the hard coded values in the Card component to corresponding props values. When you render the content on the page, we see the header and also the cards below as per the list we coded.

CardList.jsx

import Card from './Card";

export const recipes = [

{

id:1,

name: "Masala Dose",

image:

"https://th.bing.com/th/id/OIP.36afoZp3rNU5YJiYZwZmJgHaHa?rs

=1&pid=ImgDetMain",

tag: "Tasty breakfast",

duration: 50

},

(

Id 2,

name: "Banana Walnut Cake",
image:

"https://evergreenkitchen.ca/wp-content/uploads/2022/07/Banana- Walnut Cake-with-Cream-Cheese-Icing-Evergreen-Kitchen-1.jpg",

tag: "Different breakfast",

duration: 150

},

{

id:3,

name: "Raagi Rotti",

image:

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Lsou pTsOnSWEF83EBfMN2SNW_fZBCJF32Q&s",

tag: "Healthy breakfast",

duration: 30

),

{

id:4,

name: "Chole bathure",

image:

"https://cookingfromheart.com/wp-content/uploads/2019/07/Pres sure-Cooker-Chole-3.jpg",

tag: 'Fried breakfast",

duration: 120

export default function CardList(){

return(

<section className="cards">

(recipes.map((recipe)=>(

<Card key (recipe.id) recipe (recipe)/>
)))

</section>

);

Card.jsx:

export default function Card((recipe)){

const (image, name, tag, duration) = recipe

return(

<div className="card">

<img src=(image) alt="" />

<div className="card-content">

<h3>(name)</h3>

<div className="card-info">

<div className="tag">

<p>{tag}</p>

</div>

<p className="time-text">(duration} mins</p>

</div>

</div>

</div>

);

20 Page

Routing and Navigation: when we click any of the cards, it takes us to another page. In this section, we will add multiple pages within the React project. We need to understand what is Routing. Let us look at one of the popular websites that use React, airbnb.co.in. We see lot of categories on top and I can browse below and book anywhere I want When we see the URL, we see
the website name, airbnb.co.in. This is the base URL, which will be consistent across the whole website. If I click on right top comer Airbnb your home, it takes us to a different page with different path, now it is https://www.airbnb.co.in/host/homes. React now knows that it has to load the above path for the link clicked. This is the new route to point to and render different content. This is routing always be same. The in React. These are static path, which will paths can be dynamic, we go back to home on airbnb website and click first two card images. When you observe the two pages loaded, the concept same for the pages. But the data is different for What we understand from the URL is that the https://www.airbnb.co.in/rooms/54102967 is layout is all the different pages. loaded for first page and https://www.airbnb.co.in/rooms/700565836765485535 loaded for second page. It is the number after last slash that differs and that it is the path here, on pages. Next parameters. We on one of the links will take us to the we see it as defines what has to be loaded into the page. So that can be dynamic to load different content important concept with routing is query go back on homepage of airbnb.com and click below search like Lake, Icons, Farms etc. This selected category content. If we see the URL, https://www.airbnb.co.in/?tab_id=home_tab&refinement_path...We see ?tab_id=, which takes varying values to the links we click for tab_id. We can extract this to utilize within our server queries and get the data we want to display. These are query parameters in a nutshell. We will be using these in our project to implement routing.

21. The website airbnb.com is click a link on the webiste, it HTML, CSS and JS on the page. hosted in AWS and whenever we changes the content and renders the When you click any link again a new set of HTML, CSS and JS will be rendered. JS will get rendered when we interact with the site. This form of rendering is known as Server side rendering (SSR) and any application that takes part of SSR is known as multi-page application. Bur react is known as client side rendered application (CSR) or single page application (SPA). Arbnb works on CSR model where the HTML and HTML only have boilerplate code, and react app. Check our index.html page on CSS are loaded first. The nothing in it like in our react app. It has nothing. The html and css are rendered, then the JS file is loaded It is in this JS files that we have all the instructions for each page and also how the HTML and CSS is designed and laid out. The browser loads the JS on browsing through the JS and generates the page content. This is CSR. Server send the html css and js,

22 React is CSR be default. We next.JS, which is beyond the scope of this

23

can enable SSR using course.

We discussed about routing and rendering on React, let us create our first page component and render on the root path. We check our app on browser, we have only one page and we copy the JSX code that is generating the code. We copy the code inside return() of App.jsx, goto sre directory and create a page called HomePage.jsx export default function HomePage() and and create a folder pages there. There we do then in return(), paste the components. One name and the JSX code we copied. We need to import way is to write import and mention the component the path. My easier way to do is, goto <CardList/> and remove the last letter and write again, it pops whether to import the file from its path. Select that and the import gets auto imported.

HomePage.jsx

import CardList from "../Components/CardList";

import Header from "../Components/Header";

export default function HomePage(){

return(

<div className="App">

<main className="main_container">

<Header/>

<CardList/>

</main>

</div>

)

}

24 next we need to render this on to the project default page. Now we need to replace the return() parameter to include HomePage, enabling auto import and remove all irrelevant component imports

import /App.css';

import Header from/Components/Header",
import CardList from/Components/CardList",

import HomePage from './pages/HomePage

function App() {

return (

<HomePage/>

)

}

export default App;

25. when we check the app on browser, we get the content loaded well. We need to add routing now, we need to import routing library. We can search on google for react router dom. We see that in npm, it is downloaded more than 10 million within a week, it is very popular and reliable. Let us install this library in the project npm install react-router-dom. After installing the rourter, let us utilize the library in the project. To start working with routing, we need to work on main.jsx file. We have ReactDOM.CreateRoot() function, which is finding the html element that has the id as root and render the component App in it.

We can remove <React.StrictMode> for the development environment. We are only rendering the <App/> now. We need to import RouterProvider, Route, create BrowserRouter and createRoutesFromElements from react-router-dom. We next create const router= createBrowserRouter(). In the parameter list, we call function and send parameters for path and element createRoutes FromElements( <Route path="/" element =(<App/>)/>) and then in the render function, we send router a prop, <Router Provider router (router)/> as argument. Let US check the app on the browser and check.

Main.jsx

import React from "react",

import ReactDOM from "react-dom/client";

import (Router Provider, Route, createBrowserRouter, createRoutes FromElements) from "react-router-dom";

import /index.css

import App from /App jsx
const router createBrowserRouter(

createRoutesfromElements(<Route path="/" element = (<App/>)/>) );

ReactDOM.createRoot(document.getElementById('root'")).rend er(

<RouterProvider router (router)/>);

26. So what do we just do here? We created RouterProvider below and provided it with the router prop that is specifying the rules for our application. And then within our const router defined on top, we say that whenever we go to path="/", render the App component. If you think you are on the same page where you were before adding Routing, you are wrong. If I go to URL and enter /abc at the end, which we have not specified within our path, we get a 404 error.

27. Right now, our application supports only one page. What I want to do in this module is, add another About page. When I enter the address localhost:5173/about, I donot want to see 404 error. I want to see About page. To do so, let us goto Pages directory, create a page called AboutPage.jsx. Copy the whole content from HomePage.jsx and paste that into the AboutPage.jsx. Rewrite the code to write function AboutPage() and describe the h1 and p tags about this page.

export default function AboutPage()(

return(

<div className="App">

<main className="main_container">

<h1>About Page</h1>

<p> This App gives you, your favorite recipes</p>

</main>

</div>

)

28. now when I goto/about un the URL, I want to see above AboutPage content. To see this page, we need to define the rules in the main.jsx. Now to add new router path in createRoutesFromElements() function, we will cut the code for App path and add a fragment <></> and within the fragment, we will paste it twice. First one is the/path that renders App component. Second one will have a path of /about, that renders the

AboutUs page in the fragment

import React from "react";

import ReactDOM from 'react-dom/client";

import (RouterProvider, Route, createBrowserRouter, createRoutesFromElements) from 'react-router-dom";

import./index.css'

import App from './App.jsx'

import AboutPage from "./pages/AboutPage"

const router = createBrowserRouter(

createRoutesFromElements(<><>

<Route path="/" element = (<App/>}/>

<Route path="/about" element = {<AboutPage/>}/>

</>)

);

ReactDOM.createRoot(document.getElementById('root')).rend er(

<RouterProvider router=(router)/>);

29. Nested Routes for Common elements. We added routing in different paths within our application. If we observe the about page as well as the home page, we see similarities between these two components. We notice that each one of these page components have the div element with a class name of App and also has the main tag that has a class name of main_container It's only the content inside the main tag that is different. This is going to be consistent across all of the pages. All our pages will have a <div with a class name of App and <main tag that has a className of main_container. This may seem okay with two pages. It could get problematic when we have multiple pages within our application. The reason is, our code is not dry, means does not repeat same code again. Our present design will consistently repeat our code throughout all different pages. And why do we want to keep our code dry, let's say in the future we another class to <main, main_container tag I need to another class. Similarly for other class as we go on. For have to add define this would class to apply to every single page of our application, we have to flip to the other page and recode. First with about page, then add the same class and to next one or the next one and the
next one and the next one as we add pages. This is time consuming and error prone and can lead to errors. This is not a good approach and we have to think of doing this with the routing configuration. Let us move to Main.jsx, import HomePage, and goto first <Route path, change from element = <App/> to <HomePage/> and check. It works like it was working before from home page to /about and back. Let us edit the

App.jsx to to remove the return <HomePage/> and change to retum empty <div>.

Main.jsx

import React from "react";

import ReactDOM from "react-dom/client";

import { RouterProvider, Route, createBrowser Router, createRoutes FromElements } from 'react-router-dom";

import'./index.css'

import App from './App.jsx'

import AboutPage from "./pages/AboutPage"

import HomePage from "./pages/HomePage.jsx";

const router = createBrowser Router(

createRoutes FromElements(<>

<Route path="/" element = (<HomePage/>)/>

<Route path="/about" element = (<AboutPage/>)/>

</>)

);

ReactDOM.createRoot(document.getElementById('root')).rend er(

<RouterProvider router=(router)/>);

App.jsx

import/App.css',

function App() {

return <div>App</div>,

export default App.
30. in order to alleviate the repeating <div> and <main>> tags across all pages, we will use nested routes. In main.jsx, instead of fragments, we will define <Route to element App inside the fragments.

import React from "react";

import ReactDOM from "react-dom/client";

import (RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom";

import'./index.css'

import App from './App.jsx'

import AboutPage from "./pages/AboutPage"

import HomePage from "./pages/HomePage";

const router = createBrowser Router(

createRoutesFromElements(

<Route path="/" element = (<App/>)> {/*parnet route*/}

<Route path="/" element = (<HomePage/>}/>(/*child routes*/}

<Route path="/about" element = (<AboutPage/>)/>

</Route>

(

ReactDOM.createRoot(document.getElementById('root')).rend er(

<RouterProvider router=(router)/>);

when we check the app on browser, it shows App for both the home page and about page. This is because the parent controls where the children routes are to be rendered. Let us goto App.jsx and import Outlet from react-router-dom and return both <App/> and <Outlet/>. Check the app on browser. We get App and then the content of page for both about and home pages

import/App.css',

import (Outlet) from 'react-router-dom",

function App() (

return (

<div>

<h1>App</h1>

<Outlet/>

</div>

);

export default App;

31. What is going on here? So what we can do now is we can define all of the HTML structure that we want in App.jsx return() and then the next outlet line will render whatever component that is nested underneath it in main.jsx, depending on the path like HomePage or AboutPage. This is using the nested routes. You can play around by placing the App below Outlet and check the code. App gets displayed at the bottom of the page. Next we will cut <div and <main lines from AboutPage.jsx and paste in App.jsx replacing <div and remove the <main tag and add </div>. In AboutPage.jsx, we define fragment in the removed codes. Similarly add fragments in HomePage.jsx too.

AboutPage.jsx

export default function AboutPage(){

return(

<>

<h1>About Page</h1>

<p> This App give you, your favorite recipes</p>

)

}

App.jsx

Import/App.css)

import (Outlet) from "react-router-dom",

function App() {

return (

<div className="App">

<main className="main_container">

<Outlet/>

</main>

</div>

);

}

export default App;

HomePage.jsx

import CardList from "../Components/CardList";

import Header from"../Components/Header";

export default function HomePage(){

return(

<Header/>

<> </> )

<CardList/>

}

32 when we check the app on browser, the app look good and the code is much cleaner and compact. If we apply any style in App.jsx App class, it will change the background of all pages.

Import/App.css

import (Outlet) from "react-router-dom",

function App() {

return (

<div className="App" style=((backgroundColor:"gray")}>

<main className="main_container">

<Outlet/>
</main>

</div>

);

}

export default App;

33. you can remove the style and get back the default style of the page.

34. Link based navigation: The only way to move across pages in the app is to directly change the path within our URL. We need to add a way where users can navigate across pages. As we saw in the final App, we can navigate on the home or the about page in the top nav bar. Let us implement this within our app. We goto Component folder and create a file NavBar.jsx. Let us add JSX code to

return the links in this bar

export default function NavBar(){

return(

<nav>

<a href="/">Home</a>

<a href="/about">About</a>

</nav>

}

35. we need the navbar available in all pages. Hence we add this in App.jsx

import'./App.css';

import (Outlet) from "react-router-dom";

import NavBar from/Components/NavBar';

function App() {

return (

<div className="App">

<NavBar/>

<main className="main_container">

<Outlet/>

</main>
</div>

);

export default App;

36. when we check the app on browser, it loads the navbar on all pages. The app is working, but not efficient. When we look at the browser tab, we see the page reloads whenever you click the links. Why? Now we are not using the router logic that we have specified that just removes a component and renders another one, which gives us smoother navigation. Any state that exists within a nested component, like the App component will be completely destroyed, because we refresh our app on clicking the link in the navbar. React-router-dom offer a alleviate this problem, using a library called Link. anchor tags <a with <Link and also replace the library to We replace the href with to. Using Link will not refresh the page, it will re-render the component we choose. Let us update the NavBar.jsx to import and use Link

import (Link) from "react-router-dom";

export default function NavBar(){

return(

<nav>

<Link to="/">Home</Link>

<Link to="/about">About</Link>

</nav>

)

}

37. Defining dynamic routes: in this module, we will add a new recipe page. When I click on any cards, I expect to be moved to a specific page that shows information about the selected card. If we check our demo app, we see when we select a card, I set the URL that looks like /recipe/4700... Let us create a RecipePage.jsx in pages folder and basic code.

export default function RecipePage(){

return(

<div>

Masala Dosa

</div>

38. We next need to add a new route in the main.jsx and import the RecipePage. We also need into specify the path that takes a dynamic value as parameter for each recipe. We add the path="/recipe/id"

import React from "react",

import ReactDOM from "react-dom/client"

import (RouterProvider, Route, createBrowser Router, createRoutes FromElements) from 'react-router-dom",

import/index.css

import App from /App.jsx

import AboutPage from/pages/AboutPage"

Import HomePage from/pages/HomePage",

import RecipePage from/pages/RecipePage";

const router createBrowserRouter(

createRoutes FromElements(

<Route path="/" element = (<App/>)> (/*parnet route*/}

<Route path="/"element = (<HomePage/>)/>{/*child route*/)

<Route path=/about" element = (<AboutPage/>)/>

<Route path="/recipe/:id" element=(<RecipePage/>)/>

</Route>

)

);

ReactDOM.createRoot(document.getElementById('root')).rend

er(

<RouterProvider router=(router)/>);

39. to use the params, we need to import a useParams hook from react-router-dom. We create const params. I also add console.log to see what id we are getting in the URL in the RecipePage.jsx.

import (useParams) from 'react-router-dom"

export default function RecipePage(){

const params = useParams();

console.log (id);

return(

<div>

Masala Dosa

</div>

);

}

40 we check the app on browser, we get the name of the recipe as loaded in to the array. But when we load an unavailable id, we get error. We will solve that later. Next we need to make the card clickable so that it takes us to the Recipe page and show the content. To do so, goto Card.jsx and add onClick to card <div and call function navigate To Recipe Page(). We will define the function on the top. To enable this link programmatically, I import useNavigate hook from react-router-dom. We create a const navigate and initialize it to useNavigate(). We can call this const navigate function inside navigate To RecipePage() function and navigate the path specifying recipe/S(id), template literals. We will be able to navigate to the recipe page. This is programmatic navigation, where I can logically decide to move to one page or another based on some logic. That is not possible using <link>, where the path is hardcoded.

Card,jsx

import (useNavigate) from 'react-router-dom",
export default function Card((recipe)) (

const (image, name, tag, duration, id) = recipe;

const navigate useNavigate();

const navigate ToRecipe = () => {

navigate(/recipe/S(id)');

return (

<div className="card" onClick=(navigateToRecipe)>

<img src=(image) alt="" />

<div className="card-content">

<h3>(name)</h3>

<div className="card-info">

<div className="tag">

<p>(tag)</p>

</div>

<p className="time-text">{duration} mins</p>

</div>

</div>

</div>

);

41 Fetching Data from an API In this session, we are going to introduce a new concept. And that concept is known as data fetching. Now, if you were to go to the final version of our application, you can see that we have multiple cards and each card has an image, a name, time it takes to prepare and some tags. What we saw in demo was data, that has to come from somewhere in our very application programming so far, that data came from a hard coded array that we defined in the final version, that data is not hard coded. It is coming from a database that is hosted somewhere in the cloud We could search for any dish we want and then fetch that data from the database. I can search for say Lettuce, And as you can see now we have a bunch of data that pertain to lettuce, which is the keyword that I just
typed in. We know that data lives in a database and coming to us, but how are we going to access it within our client? We access it within our React client utilizing something known as an application programming interface or an API.

42

An API stands for Application Programming Interface. The word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. We can get lot of data from lot of APIs, we can get from Rapid API http://www.rapidapi.com/hub website. Here we search for Tasty. Tasty is an API that shows information about recipes. We see the Endpoints listed on the left side. If you list of all recipes, we hit recipes/list endpoint, if you need need a specific recipe, we hit recipes/get-more-info. You need to subscribe to this API to use it. With the Basic plan, you get 500 requests, good enough to program and learn. You can sign in and create a free account and use the API with limited data. I will share my credentials, with which yo can work to a limited extent. After crossing the limit, it will block the data feed. You need to put the access parameters in HomePage.jsx.

import CardList from "../components/CardList";

import Header from"../components/Header";

import axios from "axios";

import (useEffect, useState) from "react";

const options = {

method: "GET",

url "https://tasty.p.rapidapi.com/recipes/list",

params: {

from: "0",

size: "20",

headers: (

"X-RapidAPI-Key"

*30b594a022mshc657030b09147dcp153ad1jsn8b9a663a552 7

"X-RapidAPI-Host tasty p rapidapi.com"
export default function HomePage() {

const [recipes, setRecipes] = useState([]);

useEffect(() => {

fetchRecipes();

const fetchRecipes = async () => {

try {

const response = await axios.request(options);

setRecipes (response.data.results);

console.log(response.data);

} catch (error) (

console.error(error);

}

);

return (

<Header />

<CardList recipes=(recipes) />

</>

);

}

43 let's take a look at exactly what's going in the code here before we execute the code. We are importing axios. Axios is used to interact with an API when making API requests. To use it, we need to install the library, in the terminal, run npm install axios. Next we see options, these are the configurations whenever we want to make requests. We see method is http GET request from the base URL specified below. It shows the end-point we are targeting it shows URL=https://tasty p rapidapi.com/recipes/list. Next we see params like, we are getting 20 records, also can get tags that are under 30 mins mentioning tags 'under_3_minutes. Next is headers, which is an important concept APIs will not allow anonymous access of data without knowing who you are. We need

to provide key value pair to get the API access. We have the key followed by the host we need data from. Once you understand and properly configure all these options. Next we make
axios.request with all options. As this is asynchronous, we need to await it. I am checking the data using console.log and also show any errors on console. We defined a fetchRecipies async function and requesting within it. We are using useEffect here, programmed such that the dependency array is left empty at last, what happens here is, the fetchRecipes() function we define will get called only once upon page render. Let us load the page on browser and see dev tools>console. We get an object pack with array(20) as we requested. Under results, we see all the data we got from the API. We can use this data to dynamically render what we need.

44. Iterate through the array from the API: What we will work to do next is, traverse this array and then render these cards with the data we get from the API. Now that we got the array, we will be traversing this array and rendering these cards out from the data that we get from the API. We should store this data as a piece of state. We define a new state and call this as recipes, going to be equal to useState, giving initial value of an empty array. And then once we get our data back, you can see we get our data back object structure where we saw the count and the results in an in console log. Once we get our data, we set recipes equal to response.data.results. And now we should have our recipes in here as soon as we have fetched our data. So I'm going to get this data and pass it to the cardList component. And then within the cardList component, we accept the recipes prop and instead of utilizing this hardcoded array, comment it out, we are going to utilize the recipes that we are getting from the recipe homepage, eventually getting from the external API call. We see the field names are different in our recipes array than the field named we got from the API. We need to look into the console.log and match the fields and rename wherever necessary. We also see that not all data have have the duration. Hence we need to conditionally render this data

45

Card.jsx

Import (useNavigate) from "react-router-dom" export default function Card((recipe)) {

//const (image, name, tag, duration, id) = recipe,

const { thumbnail_url, name, topics, total_time_minutes, id) = recipe,
const navigate = useNavigate();

const navigate ToRecipe = () => {

navigate(/recipe/$(id)");

};

return (

<div className="card" onClick=(navigate ToRecipe)>

(/*<img src=(image) alt="" />*/)

<img src={thumbnail_url) alt=" />

<div className="card-content">

<h3>(name)</h3>

<div className="card-info">

<div className="tag">

{/* <p>(tag)</p> */}

{topics.length > 0? <p>(topics[0].name}</p>:null}

</div>

{/* <p className="time-text">(duration) mins</p>*/}

(total_time_minutes? (

<p className="time-text">{total_time_minutes) mins</p>

):null}

</div>

</div>

</div>

);

CardList.jsx

import Card from /Card

export const recipes = 1

id:1
name: "Masala Dosa",

image:

"https://th.bing.com/th/id/OIP.36afoZp3rNU5YJiYZwZmJgHa Ha?rs=1&pid=ImgDetMain",

tag: "Tasty breakfast",

duration: 50

{

id:2,

name: "Banana Walnut Cake",

image:

"https://evergreenkitchen.ca/wp-content/uploads/2022/07/Ba nana-Walnut-Cake-with-Cream-Cheese-Icing-Evergreen-Kitchen -1.jpg".

tag: "Different breakfast",

duration: 150

{

id:3,

name: "Raagi Rotti",

image:

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS LsoupTsOnSWEF83EBfMN2SNW_fZBCJF32Q&s",

tag: "Healthy breakfast",

duration: 30

(

id:4

name "Chole bathure",

Image

"https://cookingfromheart.com/wp-content/uploads/2019/07/ Pressure-Cooker-Chole-3.jpg",

tag 'Fried breakfast".

duration 120
export default function Cardtist()(*/

export default function CardList((recipes)){ return(

<section className='cards'> (recipes.map((recipe)=>( <Card key = {recipe.id) recipe (recipe)/> )))

</section> );

}

HomePage.jsx

import CardList from "../components/CardList";

import Header from"../components/Header";

import axios from "axios";

import { useEffect, useState) from 'react";

const options = {

method: "GET",

url: "https://tasty.p.rapidapi.com/recipes/list", params: ( from: "0",

size: "20",

headers {

"X-RapidAPI-Key"

*30b594a022mshc657030b09147dcp153ad1jsn8b9a863a552 7'.

"X-RapidAPI-Host" "tasty p.rapidapi.com",
export default function HomePage() {

const [recipes, setRecipes] = useState([]);

useEffect(() => {

fetchRecipes();

), 0);

const fetchRecipes = async () => {

try {

const response = await s.request(options);

setRecipes (response.data.results);

console.log(response.data);

} catch (error) {

console.error(error);

}

return (

<Header />

<> </> );

(/*<CardList/>*/}

<CardList recipes=(recipes) />

}

RecipePage.jsx

import (useParams) from 'react-router-dom

//import (recipes) from/Components/CardList":

export default function RecipePage(){

const (id) useParams().

//console log (params):

const recipe recipes find(r>r.id=id),
return(

<div>

(<h1>(recipe.name) </h1>)

</div>

return <dev></dev>

48. Encapsulate the fetch logic in the custom hook: Right now, our API call lives within the homePage component. This could be potentially problematic, when we need this data in other pages, in other components. It is also making our home page component more complex, bulky, and not very maintainable. We shall encapsulate this fetch logic in a hook, we create. So far, we have been utilizing hooks utilized the UseEffect that libraries have been creating. We have hook, useState hook, useParams, the useNavigate from React router dom. But this time, we are going to create our own hook, in order to fetch all of the different recipes. So to do this, we create a new directory called hooks and create a JavaScript file in this, not a JSX file, but a JavaScript file. We call this useFetchRecipes.js. This will be a very simple JavaScript file. We define an arrow function, fetch recipes and then we're going to define an arrow function. At the bottom of the function, I'm going to export default useFetchRecipes. We can encapsulate all of this logic within this hook. We shall paste the logic above the hook, the options. We import Axios. We will cut all the axios fetch logic and paste that inside of the hook. Inside this function, we are defining the state. We have to import in the useState hook as well as the useEffect hook. We return the recipes array at the bottom of the function In hooks, we get back data in the array format. Let us update homepage, delete recipe and import the useFetchRecipes hook from the hooks/useFetchRecipe. We declare a const array of recipes and load the data. We see our logic is now more simple and reusable in homePage. We can reuse this hook in any component in any page we want

useFetchRecipes.js

import axios from "axios"

import (useEffect, useState) from 'react

const options(

method, "GET"
url: "https://tastyp.rapidapt.com/recipes/list",

params: (

from: "0",

size: "20",

),

headers: (

"X-RapidAPI-Key":

*30b594a022mshc657030b09147dcp153ad1jsn8b9a863a552 7",

"X-RapidAPI-Host": "tasty.p.rapidapi.com", ),

);

const useFetchRecipes = () => { const [recipes, setRecipes] = useState([]); useEffect(() => { fetchRecipes();

1.0);

const fetchRecipes = asyrıc () => {

try {

console.error(error);

const response await axios.request(options), setRecipes (response.data.results); } catch (error) { } export default useFetchRecipes, HomePage.jsx

return [recipes].

Import CardList from/components/CardList"

import Header from/components/Header",

import axios from 'axios",

import (useEffect, usestate } from 'react'
const options = {

method: "GET",

url: "https://tasty.p.rapidapi.com/recipes/list",

params: (

from: "0",

size: "20",

},

headers: (

"X-RapidAPI-Key":

*30b594a022mshc657030609147dcp153ad1jsn8b9a863a552

7",

"X-RapidAPI-Host": "tasty.p.rapidapi.com",

}

*/

import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {

/* const [recipes, setRecipes] = useState(0);

useEffect(() => {

fetchRecipes();

), 0);

const fetchRecipes = async () => {

try (

const response = await axios request(options),

setRecipes (response.data.results),

console log(response.data);

} catch (error) {

console.error(error),

}

const[recipes] = useFetchRecipes(),

return (

<Header/>

<CardList recipes={recipes} />

</>

);

}

47. Handling a Load state: In the last session, it took some time for the data to load. And sometimes the is wrong with the application and they to add loading state show users that we users just think something would just leave. We need are fetching the data to load. Loading state looks like this. If I refresh the application, we see loading state and then our cards loading state and then render the data. To render. We build the build the loading state, we create a new component. Under components folder, I create a Loading.jsx file. We define a functional based component. We export default function Loading() and then we return className loading-container and image. This image can be moved into then we have an the assets directory. We will import that loading.gif add to src in the function. So let's go ahead and save and check the page. Next let us move to the homePage. In the home page, we add <Loading/> and check on the browser.

43 In useFetchRecipes.js, in fetchRecipes(), all the logic is written. We have a try catch block, in which we have request to fetch the data, this request is asynchronous. This is a JavaScript concept, request is going to take some time, we can await it before moving on to the next line of code so we can wait for the response. Our application is going to a state, where we have the empty array for a brief period of time. And then once we get our data back, we render it. We need to store a loading state, so we know that we are loading our application. We declare const a new state called loading a function setLoading() Initialized to useState(false) initially. So initially we are not loading When we try to make this API call fetchRecipes(), we setLoading(true), as we are making an API request. Once we resolve our API, get our data back, we set our state to false? if we get any sort of error, we Instead of setting our recipes to agin setLoading(false) an empty array, we could make get back an empty array loading along with to the homePage, loading as return an http request to our data and may Hence we set it to null We return recipes within this structure. We go back we change the recipes, name to data and from useFetchRecipes() At bottom, we check, if we are loading render the Loading > component Next We can have
similar check here - if we have data, not null, then we want to render the CardList with that data. We see that we have a wonderful loading state.

Loading.jsx

import loadingGif from "../assets/loading.gif";

export default function Loading(){ return( );

<div className="loading-container">

<img src=(loadingGif) alt=""/>

</div>

}

useFetchRecipes.jsx

import axios from "axios";

import {useEffect, useState) from "react";

const options = {

method: 'GET",

url: "https://tasty.p.rapidapi.com/recipes/list",

params: {

from: "0"

size '20",

headers: (

"X-RapidAPI-Key"

*30b5948022mshc657030b09147dcp153ad1jsn8b9a8638552

7

"X-RapidAPI-Host" "tasty.p rapidapi.com",

const useFetchRecipes = () => (

const [recipes, setRecipes] = useState(null);

const [loading, setLoading] = useState(false);

useEffect(() => (

fetchRecipes();

). D):

const fetchRecipes = async () => (

setLoading(true);

try {

const response await axios.request(options);

setRecipes (response.data.results);

setLoading (false);

} catch (error) {

console.error(error);

setLoading (false); }

return [recipes, loading]: );

export default useFetchRecipes,

HomePage.jsx

import CardList from/Components/CardList"

import Header from /components/Header

import Loading from "../components/Loading";

import useFetchRecipes from/hooks/useFetchRecipes",

export default function HomePage() {

const [data, loading] = useFetchRecipes(); return (

<Header/>

(loading && Loading/)
(data && <CardList recipes=(data) />}

</>

);

}

49. Handling an error state: At this point, the It fetchRecipes hook is returning back to us two states that our application can be in. could be in a loading state where we are fetching our data, or we could be in a state where we got our data is loaded and then in this case, loading will be false. However, there is one more state that we have missed and that is the error state. We can just as easily make a request to an API and we can the API can respond to us with an error rather than the data. So we need to handle that case as well. So we're going to go over we will catch the error inside the catch block.

50.

So I'm going to go ahead and console.log the error. An error state is kind of tough to recreate. So what I'm going to do to recreate an error is I'm just going to go ahead and hit an endpoint that doesn't really exist. So instead of just saying /list, I'm going to just say/lists and save here. Goto our application, and inspect. Look at the console we see with errors. We have Axios error and we have the message, request failed with status 404. Back to the recipes, we house that.error inside a state. Lets say const error and setError initialised to API call and go into this catch block, null. As soon as we make this say set error message to show whatever mistake it displays. And now what we can do is we can go ahead and save this and then return that error state. If we ever are in an error state, we can render some error JSX to keep things simple. Like this is just kind of an error, but we may get an error where, you know, we're unauthenticated with credentials and so we want to respond with the user that you're unauthenticated and then we can run some logic there. Next, let us

fix the fetchRecipes() function. Whenever we make a call, the very first thing that we're doing is we're setting the setLoading()

to true, but we should also reset the recipes and the errors to null because what we want to do eventually is just get different data from our Axios call here. So I'm going to say setRecipes() to null and setError() to null. So we're going to set these back to their original forms. I hope this is making sense and this is how we can start handling API calls within our client We can encapsulate all of this logic as well as all of the state in a hook and we can just utilize it. Now let's go over back to our API call and check on the browser.
UseFetchecipes.js

import axios from "axios";

import (useEffect, useState) from "react";

const options = {

method: "GET",

"https://tasty.p.rapidapi.com/recipes/list",

params: {

from: "0",

size: "20",

},

headers: (

"X-RapidAPI-Key":

"30b594a022mshc657030609147dcp153ad1jsn8b9a863a5527",

"X-RapidAPI-Host": "tasty.p.rapidapi.com",

};

const useFetchRecipes = () => (

const [recipes, setRecipes] = useState(null);

const [loading, setLoading] = useState(false),

const [error, setError] = useState(null);

useEffect(() => {

fetchRecipes();

const fetchRecipes = async () => {

setLoading(true),

setRecipes (null);
setError(null);

try {

const response = await axios.request(options);

setRecipes (response.data.results);

setLoading(false);

} catch (err) {

setError(err.message);

setLoading(false);

}

};

return [recipes, loading, error];

};

export default useFetchRecipes,

HomePage.jsx

import CardList from "../Components/CardList";

import Header from"../components/Header";

import Loading from "../components/Loading",

import useFetchRecipes from/hooks/useFetchRecipes",

export default function HomePage() (

const (data, loading, error] = useFetchRecipes(),

return (

<Header/>

(loading && <Loading/>)

(data && <CardList recipes (data) />}
Qus98uVai4tGdq8c/edit?tab=t.0

(error && <p>(error)</p>)

</>

);

}

51. Search for data by keyword: Let us make the search bar functional. If I search for example, Cookie, I click on search, I expect app to recall that API, it only gets data that are related to cookies. If you search for something like cheesecake, click search. Now we get everything related to cheesecake. How are we going to do this in our project? have to figure out if the API that we're because it's the API that's doing all the support specifically asking for the data, Well, the first thing is we hitting supports this work. And if it does not then we cannot do it. Our Tasty API does support it. Look into the https://rapidapi.com/hub, goto Tasty API, select recepies/list endpoint and select Params. We to get the results. We need to look of food or ingredients to search by. see different parameters we use for q param, as it says Name So, we have a search parameter, if we search by some sort of search parameter, we need to add the q in options object of that search parameter. Where declaration, and then the string are we using the options? We see the options is being used inside of the fetchRecipes declaration. We shall add a parameter called searchTerm Before we make the Axios request, we set reqOptions to destructure out the options. We check if we have a searchTerm, then add that queue. We set reqOptions.params.q=search Term, thus adding that queue into the params here. But this kind of code presented a problem, because we're fetching the data fetchRecipes() within the hook itself, inside useEffect() function. We should fetch the data within the HomePage that wants the data. And then if we want to pass in the form of a parameter, we can go do that

52

We add a handle Search() function in HomePage.jsx We to check if some value entered for search in handleSearch() function. If searchTerm is added, then we call fetchRecipes (searchTerm) with searchTerm as parameter. We add the searchTerm as parameter to handle Search() and pass it down in return, to Header as a prop, const handle Search = (searchTerm) => (We add handleSearch as a prop in Header Jsx page Header(handleSearch). We define the function handleClick() arrow function and call handleSearch(searchTerm). Let us check the app on the browser We now search for caramel, need
and see the results as it generates.

Header.jsx

import (useState) from "react";

function Header((handleSearch)) {

const [search Term, setSearchTerm) = useState();

const handleClick = () => {

handleSearch(search Term);

setSearchTerm(");

};

return (

<header className="main_header">

<div className="text-container">

<h1 className="header-title">

Look for <span>Favorite</span> Food

</h1>

<p className="header-description">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut

ipsa fuga quas laboriosam recusandae voluptate, ducimus aspernatur

accusamus ipsum

</p>

<div className="header-input-container"

<input

type="text"

placeholder="Find a recipe...

onChange=((e) => setSearchTerm(e.target value))

value (searchTerm)

<button onClick thandleClick Search</button>

</div>

</div>

<div>

<img

src="https://hips.hearstapps.com/hmg-prod/images/how-to-m ake-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.08 97xw,0.323xh&resize=1200:**

alt="

className="main_img"

/>

</div>

</header>

);

}

export default Header,

useFetchRecipes.js:

import axios from "axios",

import {(useState) from 'react',

const options = {

method: "GET",

url: "https://tasty p rapidapi.com/recipes/list",

params. {

from: "0",

size '20",

headers (

X-RapidAPI-Key"

30b5943022mshc657030b09147dcp153ad1jsn8b9a863a552

7,

X-RapidAPI-Host tasty p rapidapi.com

const useFetchRecipes = () => {

const [recipes, setRecipes] = useState(null);

const [loading, setLoading] = useState(false);

const (error, setError] = useState(null);

const fetchRecipes = async (searchTerm) => {

setLoading(true);

setRecipes(null);

setError(null);

try { (

const reqOptions = (...options);

if (searchTerm) (

reqOptions.params.q = searchTerm;

}

const response = await axios.request(reqOptions);

setRecipes (response.data.results),

setLoading(false);

} catch (err) (

setError(err.message).

setLoading(false),

return (fetchRecipes, (data recipes, loading, error 11,

export default usefetchRecipes
HomePage.jsx:

import (useEffect) from "react";

import CardList from "../components/CardList";

import Header from "../components/Header";

import Loading from "../components/Loading";

import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {

const [fetchRecipes, {data, loading, error)] =

useFetchRecipes();

useEffect(() => {

fetchRecipes();

), 0);

const handleSearch = (searchTerm) => {

if (search Term) {

fetchRecipes (search Term);

return (

<Header handleSearch=(handleSearch) />

(loading && <Loading/>)

(data && <CardList recipes (data) />)

(error && <p>(error)</p>)

<1>
53. Working on the home page. We click on a card, Recipe page: We are completely done with the need to start working on the recipe page. If I it redirects me to /recipe/, that specific recipes ID. We want to render the information for that specific recipe. In order to do this, we have to fetch the data for that specific recipe. It is similar to fetchRecipes API that allows hook. Here, we hit the us to fetch one recipe and get information about that. On website documentation, the API endpoint is recipes/get-more-info. and as you can see here within the query params, we have to provide it with the ID of the recipe we seek information from. We next create a hook for this, that allows us to fetch the data for that recipe. And I'm going to create a new hook, useFetchRecipe.js inside the hooks folder. We will create the page with access credentials we copied from the API to get more info about a recipe and paste the logic we used in the useFetchRecipes.js. We need to rename recipes to recipe in the code. In fetchReciptes() function, we need to replace searchTerm to id. Remove the if condition as we are taking the input in this hook. We can remove try block that requests using axios.request(). So we have a new options, which will be /recipe/ID, ID 8138 hardcoded in the code. In fetch call inside const and we that the params const fetchRecipes, we call async(id) arrow function in which we setLoading to true,

setRecipe to null and setError to null. We use the parameter id and change the hardcoded param to this id. Finally in the return, we make the call to fetchRecipe and return the data

UseFetchRecipe.js

import axios from "axios";

import (useState) from 'react',

const options = (

method. "GET",

url: "https://tasty p rapidapi com/recipes/get-more-info"

params (id: "8138"),

headers (

"X-RapidAPI-Key"

*30b5948022mshc657030b09147dcp153ad1jsn8b9a863a552

7

'X-RapidAPI-Host 'tasty p rapidapi.com",
const useFetchRecipe = () => {

const (recipe, setRecipe] = useState(null);

const (loading, setLoading] = useState(false);

const [error, setError] = useState(null);

const fetchRecipe = async (id) => {

setLoading(true);

setRecipe(null);

setError(null);

try {

const reqOptions = {...options);

reqOptions.params.id = id;

const response = await axios.request(reqOptions);

setRecipe (response.data);

setLoading(false);

) catch (err) {

setError(err.message);

setLoading(false);

return [fetchRecipe, (data: recipe, loading, error )];

export default useFetchRecipe,

54 We need to update the RecipePage.jsx, and utilize the hook We declare const(fetchRecipe, initialize it to useFetchRecipe(). We (data, loading, error)] and add use Effect to get called as parameter) We call the the useParams() Let are getting in as soon as page is rendered (addinf [] getchRecipe() with the ID extracted form us add console log to see the data structure we this page, so that we can render the data.

RecipePage.jsx:

import (use Effect) from 'react

Import (useParams) from 'react-router-dom

import useFetchRecipe from /hooks/useFetchRecipe

import recipes) from/components/CardList"
export default function RecipePage() {

const (id) useParams();

const [fetchRecipe, (data, loading, error)] = useFetchRecipe();

useEffect(() => {

fetchRecipe(id),

3.0):

console.log((data, loading, error });

// const recipe = recipes.find((r) => r.id === parseInt(id));

return <div>(/* <h1>(recipe.name)</h1>*/)</div>;

}

55 Traversing and rendering components to this page. One is the name of the recipe as well as then we have a portion below that the data: So there are two main the header on top that gives us the nutritional information. And shows us the image as well as the instructions. And then we have this portion right here that shows us the image as well as the instructions. Let's work on the header first. We create a new components, RecipeHeader.jsx and RecipeNutritionalFact.jsx. Create a basic page with hard coded values to render the data. We render this second component, RecipeNutritionalFact inside the RecipeHeader. Let us see how this basic layout looks like browser:

RecipeNutritionalFact.jsx

export default function RecipeNutritionalFact(( fact, children ))

return (

<div className="recipe-fact-container">

<img src="" alt=""/>

<h3>1200</h3>

<p>calories</p>

</div>

RecipeHeader.jsx

Import Recipe NutritionalFact from RecipeNutritionalFact
export default function RecipeHeader() (

return(

<div className="recipe-header">

<h1>Cheesecake Muffins</h1>

<RecipeNutritionalFact/>

</div>

)

}

56. So there's two main components to this page. There's going to be this header right over here that gives us the name of the recipe as well as the nutritional information. And then we have this portion right here that shows us the image as well as the instructions. Let's work on the header first. We create a new components, RecipeHeader.jsx and Recipe NutritionalFact.jsx. Create a basic page with hard coded values to render the data. We render this second component, RecipeNutritionalFact inside the RecipeHeader. Let us see how this basic layout looks like browser.

RecipeNutritionalFact.jsx

export default function RecipeNutritionalFact((fact, children))

return (

<div className="recipe-fact-container">

<img src="" alt=""/>

<h3>1200</h3>

<p>calories</p>

</div>

),

}

RecipeHeader.jsx

import RecipeNutritionalFact from "/RecipeNutritionalFact",

export default function RecipeHeader() {

return(

<div className="recipe-header">

<h1>Cheesecake Muffins</h1>
<RecipeNutritionalFact/>

</div>

)

57 Let us inspect in the console window, we open object>data>nutrition. Here we see all the information on calories, carbohydrates n others we want to display on the header. Let us return this information in the RecipeNutritionalfact for nutritionalFacts. If we have an error, we will display the error. We declare const nutritionalFactsArray and load all properties in it. In the return, we iterate over this array using map function and render. In the RecipeNutritionalFact, we display all the properties of this array. We need to install icons for the images. We use react-icons library to use icons for our information. We install the libraries using the command npm i react-icons. We import the icons in the RecipeHeader component. We can choose fire icon for calories, import AiOutline FireFire library from react-icons/al In the RecipeHeader() function, we add separate object Icon and name its library name, AiOutlineFireFire. Add all icons for all 5 iterns in the array. We next goto RecipeNutritionalFact file and destructure icon from the fact as const (Icon)=fact and render it in div tag as a separate component. Implementing with children Prop will be more efficient, In RecipeHeader component, RecipeNutritionalFact.map function, we extract all properties like Icon, id, amount and render the <icon /> within </RecipeNutritionalFact> In RecipeNutritionalFact component, we add children argument to the function and render (children).

RecipeHeader.jsx

import RecipeNutritionalFact from/RecipeNutritionalFact",

import (AiOutlineFire) from 'react-icons/al",

import (CiWheat) from 'react-icons/ci

Import (BiCheese, BiCake) from 'react-icons/bl";

import (loFishOutline) from 'react-icons/los",

export default function RecipeHeader((nutritionalFacts)) {

const nutritionalFacts Array[

(

id 1,

amount: nutritionalFacts calories,
category: "calories", Icon: AiOutlineFire,

{

id: 2,

amount: nutritionalFacts.carbohydrates,

category: "carbs",

Icon: CiWheat,

id: 3,

amount: nutritionalFacts.fat,

category: "fats",

Icon: BiCheese,

),

id: 4,

amount: nutritionalFacts.protein,

category: "proteins",

Icon: loFishOutline,

},

id: 5,

amount nutritionalFacts sugar,

category: 'sugar",

Icon BiCake,

1.

return (

<div className="recipe-header">

<h1>Chai-Spiced Cheesecake Muffins</h1>

<div className="nutritional-facts-container">
(nutritionalFactsArray.map(((Icon, id, amount, category)) => (

<RecipeNutritionalFact fact={{ amount, category)} key=(id)>

<Icon /> )))

</RecipeNutritionalFact>

</div> </div> );

}

RecipeNutritionalFact.jsx

export default function RecipeNutritionalFact({ fact, children }) {

return (

<div className="recipe-fact-container">

(children)

<h3>(fact.amount)</h3>

<p>(fact.category}</p>

</div>

);

}

Create RecipePage.jsx in components folder.

RecipePage.jsx

import (useEffect) from 'react';

import (useParams) from 'react-router-dom";

import RecipeHeader from/components/RecipeHeader"

import useFetchRecipe from/hooks/useFetchRecipe

import Loading from /components/Loading",

// import (recipes) from /components/CardList"

export default function RecipePage() (

const (id) useParama

const fetchRecipe (data, loading, error)) = useFetchRecipe)
useEffect(() => {

fetchRecipe(id);

}, 0);

console.log((data, loading, error));

if (loading) return <Loading />;

if (error) return <h1>(error)</h1>;

return (

<div>

(data && (

<>

<RecipeHeader nutritionalFacts=(data.nutrition) />

</>

)}

</div>

}

58 Building Recipe into the component: let us define a component RecipeInfo.jsx and return Instructions. We need to load the steps for the instructions. Let us data instructions with steps and information inspect and goto how to do the recipe along with the display_text We will accept instructions as parameter in the Recipeinfo function. We will iterate over this array using map and render position and display_text. In the RecipePage, we return <RecipeInfo instructions=(data instructions)/> as we seen in the inspect window We need to display image in the Recipeinfo component, pass image as second argument and show this image in the return statement src=(image), in the RecipePage, we need to pass image=(data.thumbnail_url) This should load the image into the page along with instructions

RecipeHeader.jsx
import RecipeNutritionalFact from "/RecipeNutritionalFact

import (AiOutlineFire) from 'react-icons/ai";

import (CiWheat) from "react-icons/ci";

import (BiCheese, BiCake) from "react-icons/bi";

import (loFishOutline } from 'react-icons/io5";

export default function RecipeHeader((nutritionalFacts, name

}) {

const nutritionalFactsArray = [

{

id: 1,

amount: nutritionalFacts.calories,

category: "calories",

Icon: AiOutline Fire,

},

id: 2,

amount: nutritionalFacts.carbohydrates,

category: "carbs",

Icon: CiWheat,

},

id: 3,

amount: nutritionalFacts.fat,

category: "fats",

Icon: BiCheese,

(

Id. 4,

amount nutritionalFacts protein

category "proteina",

Icon loFish Outline,
).

id: 5,

{ amount: nutritionalFacts.sugar, category: "sugar", Icon: BiCake, ];

return (

<div className="recipe-header">

<h1>(name)</h1>

<div className="nutritional-facts-container">

(nutritionalFactsArray.map(((Icon, id, amount, category )) => ( <RecipeNutritionalFact fact={{ amount, category }} key=(id)> <Icon />

</RecipeNutritionalFact> ))}

</div>

</div>

);

}

RecipeInfo.jsx

export default function RecipeInfo((instructions, image }) { return (

<div className="recipe-info">

<div className="recipe-info-container">

<div className="recipe-info-header">

<h3>INSTRUCTIONS</h3>

</div>

(instructions map(((display_text, position)) => (
<div className="recipe-info-content-container"

key={position)>

<p className="recipe-step">(position)</p>

<p className="recipe-text">(display_text}</p>

</div>

))}

</div>

</div>

<img className="recipe-img" src=(image) alt=" /> ); }

RecipePage.jsx:

import (useEffect) from 'react";

import {useParams) from "react-router-dom";

import RecipeHeader from "../components/RecipeHeader";

import useFetchRecipe from "../hooks/useFetchRecipe";

import Loading from "../components/Loading";

import RecipeInfo from "../components/RecipeInfo";

// import (recipes) from "../components/CardList";

export default function RecipePage() (

const (id) useParams();

const [fetchRecipe, (data, loading, error)) = useFetchRecipe().

useEffect(() => {

fetchRecipe(id),

>.0).

console.log((data, loading error))

if (loading) return «Loading/
if (error) return <h1>(error)</h1>;

return (

<div>

{data && (

<RecipeHeader nutritionalFacts=(data.nutrition}

name=(data.name} />

<RecipeInfo

instructions=(data.instructions)

image=(data.thumbnail_url)

/>

</>

)}

</div>

);

}

59 this should complete the project with all components working There are more advanced topics on this project like subtle error handling, building for production, choosing a host and deployment into hosting server, which are beyond the scope of this project. We shall discuss these advanced topics in advancing course