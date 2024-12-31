# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









Login/Signup App – authentication with
JWT token
Backend
Path:/signup
Method: POST
Body:
{name:”user”, email:”user@user.com”, password:”welcome”}
Maintain Response codes:
Server Error: 500
User already exists: 409
Success: 201
Path: /login
Method: POST
Body:
{name:”user”, email:”user@user.com”, password:”welcome”}
Maintain Response codes:
Server Error: 500
User does not exist: 401
Success: 201
Server side validation using JOI library. JOI module is a popular
module for data validation. This module validates the data based on
schemas. There are various functions like optional(), required(), min(),
max(), etc which make it easy to use and a user-friendly module for
validating the data. We ensure that the name is entered, email is
properly entered and password are entered with proper validations.
Only if validated, we save data into the database.
Middleware to interpret JOI Library
header
authorization: jwt token
/products GET
{
{name: ”mobile”, price: 1000},
{name: “laptop”, price: 20000}
}
we ensure that the API /products is access restricted. Only after
successful login with JWT token, one can access this API. Otherwise,
it defaults to login page.
Frontend
Routing
private routing- ensure to take user to appropriate route from any
route after successful login or after failed login.
Login page
client side validation
Login integration and store JWT (JSON web token) token
Signup page
client side validation
Signup API intergration
Home page
show logged in user name
show logout button
show access restricted /products API to demonstrate how we can use
jwt token for access restricted API calls.
Let us see the demo access, goto localhost:3000/login, goto signup
page. When we click signup button, it validates, asking to input all
fields. Let us create a user ram, email as ram@ram.com, password
as abc. We validate that the login must be minimum 4 character
length or whatever applicable as per the requirement. We set the
password as welcome.
After successful signup, we are routed to login page. We sign in with
the parameters we added in signup page. We have validations similar
to signup page here. After successful signin, you will be routed to user
/home API that displays the logged in user name. In this page, we call
an API and display information about some data. This API can only be
access when logged in, or when JWT token is retrieved from server
and stored in the localstorage. To see our JWT token, we can open
devtools, Network>products>Headers>Authorization. Only when this
token is loaded, we can access these authenticated pages.
This is complete full stack project that has 3 modules, the server side,
middle ware, and client side. Due to time constraint, we have added
limited data, frontend and routes, covering fundamental structure of
the full stack application.
1. Let us create a folder Auth-app and create two folders inside it,
frontend and backend. Let us open project folder in terminal
and create base react project. Issue command npx
create-react-app frontend in the root folder. This will take few
mins. Once installed, let us move into frontend folder and start
the project, issuing command npm start. If you get
dependencies error, run the command npm config set
legacy-peer-deps true and then run npx create command.
2. Let us clear unnecessary stuff in the project and start the project
clean. Let us clear everything in App.css and save, in App.js, let
us show only the page name as follows:
App.js
import './App.css';
function App() {
return (
<div className="App">
<h1>Auth app</h1>>
</div>
);
}
export default App;
3. let us start working on the backend first and then come back to
fronend later.
4. Let us move into backend folder in terminal, issue command
npm init -y to initialize package.json. On the backend project, let
us install jsonwebtoken for jw token, bcrypt tp encrypt and
decrypt password, body-parser to request body to the server,
dotenv for environment variable, mongoose to manage DB
connections and run operations, joi to manage server side
validations, and cors to allow other ports requests and nodemon
to monitor app and update changes on server instantly, to our
app,
npm i express jsonwebtoken bcrypt body-parser dotenv
mongoose nodemon joi cors
5. in vs code, in backend folder, let us create a file index.js, .env
and write server side code. In package.json, we include
index.js
const express = require('express');
const app = express();
require('dotenv').config(); //to read from .env file
const PORT = process.env.PORT || 8080; //read from 8080 as
set in .env or any other port
app.get('/hello', (req, res) => {
res.send('World');
});
app.listen(PORT, () => {
console.log(`Server is running on ${PORT}`)
})
package.json
{
"name": "backend",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"start": "nodemon index.js"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"bcrypt": "^5.1.1",
"body-parser": "^1.20.2",
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"joi": "^17.13.1",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.4.1",
"nodemon": "^3.1.9"
}
}
.env
PORT=8080
6. let us start our backend server running command npm start on
the terminal and give URL localhost:8080/hello and check if we
get the World message on browser. Ensure your server is
running.
7. Let us create folders Controllers, Middlewares, Models, Routers
inside the backend module.
8. Inside Model folder, let us create file db.js to connect to
MongoDB. We need to create DB cluster in MongoDB and add
information here. Let us create database and a cluster in it. Let
us copy the connection string and paste it in Mongo Compass to
start interacting with the database and check status. We need to
set the connection string properly, like in my case:
"mongodb+srv://kmraoin:welcome123>@cluster0.aotxz.mongod
b.net/Authentication-Mern1?retryWrites=true&w=majority&appNa
me=Cluster0"
9. let us update .env and db.js accordingly
.env
PORT=8080
MONGO_CONN="mongodb+srv://kmraoin:welcome123>@cluste
r0.aotxz.mongodb.net/Authentication-Mern1?retryWrites=true&w
=majority&appName=Cluster0"
db.js
const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;
mongoose.connect(mongo_url)
.then(() => {
console.log('MongoDB Connected...');
}).catch((err) => {
console.log('MongoDB Connection Error: ', err);
})
10.when we check the backend terminal that is running the service
already, we get message MongoDB connected. Let us next
create User model in Models folder.
User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
name: {
type: String,
required: true,
},
email: {
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true,
}
});
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
11. we need to update the index.js to enable routing
index.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;
app.get('/hello', (req, res) => {
res.send('World');
});
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.listen(PORT, () => {
console.log(`Server is running on ${PORT}`)
})
12. in Routes folder, we create file AuthRouter.js and
ProductRouter.js
AuthRouter.js
const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } =
require('../Middlewares/AuthValidation');
const router = require('express').Router();
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/login', (req, res)=>{
res.send('logged in');
});
router.post('/signup', (req, res)=>{
res.send('Signed up');
});
module.exports = router;
ProductRouter.js
const ensureAuthenticated = require('../Middlewares/Auth');
const router = require('express').Router();
router.get('/', ensureAuthenticated, (req, res) => {
console.log('---- logged in user detail ---', req.user);
res.status(200).json([
{
name: "mobile",
price: 10000
},
{
name: "tv",
price: 20000
}
])
});
module.exports = router;
13. next we need to add logic in controllers folder. Let us create
file called AuthController.js
AuthController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");
const signup = async (req, res) => {
try {
const { name, email, password } = req.body;
const user = await UserModel.findOne({ email });
if (user) {
return res.status(409)
.json({ message: 'User already exists, you can login',
success: false });
}
const userModel = new UserModel({ name, email, password
});
userModel.password = await bcrypt.hash(password, 10);
await userModel.save();
res.status(201)
.json({
message: "Signup successful",
success: true
})
} catch (err) {
res.status(500)
.json({
message: "Internal server errror",
success: false
})
}
}
const login = async (req, res) => {
try {
const { email, password } = req.body;
const user = await UserModel.findOne({ email });
const errorMsg = 'Authentication failed, email or password
incorrect';
if (!user) {
return res.status(403)
.json({ message: errorMsg, success: false });
}
const isPassEqual = await bcrypt.compare(password,
user.password);
if (!isPassEqual) {
return res.status(403)
.json({ message: errorMsg, success: false });
}
//when successful login
const jwtToken = jwt.sign(
{ email: user.email, _id: user._id },
process.env.JWT_SECRET,
{ expiresIn: '24h' }
)
res.status(200)
.json({
message: "Login Success",
success: true,
jwtToken,
email,
name: user.name
})
} catch (err) {
res.status(500)
.json({
message: "Internal server error",
success: false
})
}
}
module.exports = {
signup,
login
}
14. we will add server side validation in Middleware folder,
creating file AuthValidation.js
AuthValidation.js
const Joi = require('joi');
const signupValidation = (req, res, next) => {
const schema = Joi.object({
name: Joi.string().min(3).max(100).required(),
email: Joi.string().email().required(),
password: Joi.string().min(4).max(100).required()
});
const { error } = schema.validate(req.body);
if (error) {
return res.status(400)
.json({ message: "Bad request", error })
}
next();
}
const loginValidation = (req, res, next) => {
const schema = Joi.object({
email: Joi.string().email().required(),
password: Joi.string().min(4).max(100).required()
});
const { error } = schema.validate(req.body);
if (error) {
return res.status(400)
.json({ message: "Bad request", error })
}
next();
}
module.exports = {
signupValidation,
loginValidation
}
15.in Postman, let us goto path http://localhost:8080/auth/signup to
first check signup. Here, we keep the Post type and enter the
URL. In the Body>raw section, we enter the data to be fed.
{
"name":"user1",
"email": "user1@user.com",
"password":"welcome"
}
16. we need to add bcrypt secret code in the .env file to save and
retrieve data.
.env
PORT=8080
MONGO_CONN="mongodb+srv://kmraoin:welcome123@cluster
0.aotxz.mongodb.net/Authentication-Mern1?retryWrites=true&w=
majority&appName=Cluster0"
JWT_SECRET="secret-123"
17. we enter the user data as per the model we designed. This
data will be saved only when all validations are correct, like the
email format, password length of min 4 length etc. Check if the
record is created in the DB.
18.Once, created, we will work on checking the login. To check
login, we goto http://localhost:8080/auth/login in postman.
{
"email": "user1@user.com",
"password":"welcome"
}
19.if you give the right parameters, you get the Login success
message along with jwtToken. Copy this token and save it in a
notepad, we need this for further validation. To ensure that we
access a page only after successful login, we created a route
called Products. We create file ProductRouter.js under Routes
folder.
ProductRouter.js
const ensureAuthenticated = require('../Middlewares/Auth');
const router = require('express').Router();
router.get('/', ensureAuthenticated, (req, res) => {
console.log('---- logged in user detail ---', req.user);
res.status(200).json([
{
name: "mobile",
price: 10000
},
{
name: "tv",
price: 20000
}
])
});
module.exports = router;
20. we create file Auth.js under Middlewared folder to check
authorization of the jwt.
Auth.js
const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {
const auth = req.headers['authorization'];
if (!auth) {
return res.status(403)
.json({ message: 'Unauthorized, JWT token required' });
}
try {
const decoded = jwt.verify(auth,
process.env.JWT_SECRET);
req.user = decoded;
next();
} catch (err) {
return res.status(403)
.json({ message: 'Unauthorized, JWT token wrong or
expired' });
}
}
module.exports = ensureAuthenticated;
21. let us check the products route in postman. We need to goto
path, http://localhost:8080/products and set method to GET, not
POST. We need to add authorization token here to check the
validation. Try to Send the values with below values. It will return
Unauthorised error, as we have not added token. Goto Header
section and under Key, enter Authorization and under Value,
enter the jwt token. Now send the data, it should show the
products vaules. It is the Auth.js that is validating for the token
checking with our JWT_SECRET. If in case of errors, it moves to
catch block and shows 403 error.
{
"email": "user1@user.com",
"password":"welcome"
}
22. we could do user profile update here, but due to time
constraint, we are doing this simple hardcoded product page. We
have finished the backend module. We will next move to the
frontend module of the project.
23. In the frontend module of the project, we need to install router
and toastify. Toastify shows the messages on browser
interactively.
npm i react-router-dom react-toastify
24. after installing libraries, run npm start on the frontend folder.
25. We add the code for index.js as follow:
index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';
const root =
ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
);
// If you want to start measuring performance in your app, pass a
function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
26. under Pages, we add following files:
Home.js
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
function Home() {
const [loggedInUser, setLoggedInUser] = useState('');
const [products, setProducts] = useState('');
const navigate = useNavigate();
useEffect(() => {
setLoggedInUser(localStorage.getItem('loggedInUser'))
}, [])
const handleLogout = (e) => {
localStorage.removeItem('token');
localStorage.removeItem('loggedInUser');
handleSuccess('User Loggedout');
setTimeout(() => {
navigate('/login');
}, 1000)
}
const fetchProducts = async () => {
try {
const url = "http://localhost:8080/products";
const headers = {
headers: {
'Authorization': localStorage.getItem('token')
}
}
const response = await fetch(url, headers);
const result = await response.json();
console.log(result);
setProducts(result);
} catch (err) {
handleError(err);
}
}
useEffect(() => {
fetchProducts()
}, [])
return (
<div>
<h1>Welcome {loggedInUser}</h1>
<button onClick={handleLogout}>Logout</button>
<div>
{
products && products?.map((item, index) => (
<ul key={index}>
<span>{item.name} : {item.price}</span>
</ul>
))
}
</div>
<ToastContainer />
</div>
)
}
export default Home
Login.js
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Login() {
const [loginInfo, setLoginInfo] = useState({
email: '',
password: ''
})
const navigate = useNavigate();
const handleChange = (e) => {
const { name, value } = e.target;
console.log(name, value);
const copyLoginInfo = { ...loginInfo };
copyLoginInfo[name] = value;
setLoginInfo(copyLoginInfo);
}
const handleLogin = async (e) => {
e.preventDefault();
const { email, password } = loginInfo;
if (!email || !password) {
return handleError('email and password are required')
}
try {
const url = `http://localhost:8080/auth/login`;
const response = await fetch(url, {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(loginInfo)
});
const result = await response.json();
const { success, message, jwtToken, name, error } =
result;
if (success) {
handleSuccess(message);
localStorage.setItem('token', jwtToken);
localStorage.setItem('loggedInUser', name);
setTimeout(() => {
navigate('/home')
}, 1000)
} else if (error) {
const details = error?.details[0].message;
handleError(details);
} else if (!success) {
handleError(message);
}
console.log(result);
} catch (err) {
handleError(err);
}
}
return (
<div className='container'>
<h1>Login</h1>
<form onSubmit={handleLogin}>
<div>
<label htmlFor='email'>Email</label>
<input
onChange={handleChange}
type='email'
name='email'
placeholder='Enter your email...'
value={loginInfo.email}
/>
</div>
<div>
<label htmlFor='password'>Password</label>
<input
onChange={handleChange}
type='password'
name='password'
placeholder='Enter your password...'
value={loginInfo.password}
/>
</div>
<button type='submit'>Login</button>
<span>Does't have an account ?
<Link to="/signup">Signup</Link>
</span>
</form>
<ToastContainer />
</div>
)
}
export default Login
Signup.js
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Signup() {
const [signupInfo, setSignupInfo] = useState({
name: '',
email: '',
password: ''
})
const navigate = useNavigate();
const handleChange = (e) => {
const { name, value } = e.target;
console.log(name, value);
const copySignupInfo = { ...signupInfo };
copySignupInfo[name] = value;
setSignupInfo(copySignupInfo);
}
const handleSignup = async (e) => {
e.preventDefault();
const { name, email, password } = signupInfo;
if (!name || !email || !password) {
return handleError('name, email and password are
required')
}
try {
const url = `http://localhost:8080/auth/signup`;
const response = await fetch(url, {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(signupInfo)
});
const result = await response.json();
const { success, message, error } = result;
if (success) {
handleSuccess(message);
setTimeout(() => {
navigate('/login')
}, 1000)
} else if (error) {
const details = error?.details[0].message;
handleError(details);
} else if (!success) {
handleError(message);
}
console.log(result);
} catch (err) {
handleError(err);
}
}
return (
<div className='container'>
<h1>Signup</h1>
<form onSubmit={handleSignup}>
<div>
<label htmlFor='name'>Name</label>
<input
onChange={handleChange}
type='text'
name='name'
autoFocus
placeholder='Enter your name...'
value={signupInfo.name}
/>
</div>
<div>
<label htmlFor='email'>Email</label>
<input
onChange={handleChange}
type='email'
name='email'
placeholder='Enter your email...'
value={signupInfo.email}
/>
</div>
<div>
<label htmlFor='password'>Password</label>
<input
onChange={handleChange}
type='password'
name='password'
placeholder='Enter your password...'
value={signupInfo.password}
/>
</div>
<button type='submit'>Signup</button>
<span>Already have an account ?
<Link to="/login">Login</Link>
</span>
</form>
<ToastContainer />
</div>
)
}
export default Signup
27. we need to define the routing in App.js:
App.js
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const PrivateRoute = ({ element }) => {
return isAuthenticated ? element : <Navigate to="/login" />
}
return (
<div className="App">
<RefrshHandler setIsAuthenticated={setIsAuthenticated} />
<Routes>
<Route path='/' element={<Navigate to="/login" />} />
<Route path='/login' element={<Login />} />
<Route path='/signup' element={<Signup />} />
<Route path='/home' element={<PrivateRoute
element={<Home />} />} />
</Routes>
</div>
);
}
export default App;
28.
29. let us add frontend pages
Signup.js
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Signup() {
const [signupInfo, setSignupInfo] = useState({
name: '',
email: '',
password: ''
})
const navigate = useNavigate();
const handleChange = (e) => {
const { name, value } = e.target;
console.log(name, value);
const copySignupInfo = { ...signupInfo };
copySignupInfo[name] = value;
setSignupInfo(copySignupInfo);
}
const handleSignup = async (e) => {
e.preventDefault();
const { name, email, password } = signupInfo;
if (!name || !email || !password) {
return handleError('name, email and password are
required')
}
try {
const url = `http://localhost:8080/auth/signup`;
const response = await fetch(url, {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(signupInfo)
});
const result = await response.json();
const { success, message, error } = result;
if (success) {
handleSuccess(message);
setTimeout(() => {
navigate('/login')
}, 1000)
} else if (error) {
const details = error?.details[0].message;
handleError(details);
} else if (!success) {
handleError(message);
}
console.log(result);
} catch (err) {
handleError(err);
}
}
return (
<div className='container'>
<h1>Signup</h1>
<form onSubmit={handleSignup}>
<div>
<label htmlFor='name'>Name</label>
<input
onChange={handleChange}
type='text'
name='name'
autoFocus
placeholder='Enter your name...'
value={signupInfo.name}
/>
</div>
<div>
<label htmlFor='email'>Email</label>
<input
onChange={handleChange}
type='email'
name='email'
placeholder='Enter your email...'
value={signupInfo.email}
/>
</div>
<div>
<label htmlFor='password'>Password</label>
<input
onChange={handleChange}
type='password'
name='password'
placeholder='Enter your password...'
value={signupInfo.password}
/>
</div>
<button type='submit'>Signup</button>
<span>Already have an account ?
<Link to="/login">Login</Link>
</span>
</form>
<ToastContainer />
</div>
)
}
export default Signup
Login.js
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Login() {
const [loginInfo, setLoginInfo] = useState({
email: '',
password: ''
})
const navigate = useNavigate();
const handleChange = (e) => {
const { name, value } = e.target;
console.log(name, value);
const copyLoginInfo = { ...loginInfo };
copyLoginInfo[name] = value;
setLoginInfo(copyLoginInfo);
}
const handleLogin = async (e) => {
e.preventDefault();
const { email, password } = loginInfo;
if (!email || !password) {
return handleError('email and password are
required')
}
try {
const url = `http://localhost:8080/auth/login`;
const response = await fetch(url, {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(loginInfo)
});
const result = await response.json();
const { success, message, jwtToken, name, error } =
result;
if (success) {
handleSuccess(message);
localStorage.setItem('token', jwtToken);
localStorage.setItem('loggedInUser', name);
setTimeout(() => {
navigate('/home')
}, 1000)
} else if (error) {
const details = error?.details[0].message;
handleError(details);
} else if (!success) {
handleError(message);
}
console.log(result);
} catch (err) {
handleError(err);
}
}
return (
<div className='container'>
<h1>Login</h1>
<form onSubmit={handleLogin}>
<div>
<label htmlFor='email'>Email</label>
<input
onChange={handleChange}
type='email'
name='email'
placeholder='Enter your email...'
value={loginInfo.email}
/>
</div>
<div>
<label htmlFor='password'>Password</label>
<input
onChange={handleChange}
type='password'
name='password'
placeholder='Enter your password...'
value={loginInfo.password}
/>
</div>
<button type='submit'>Login</button>
<span>Does't have an account ?
<Link to="/signup">Signup</Link>
</span>
</form>
<ToastContainer />
</div>
)
}
export default Login
Home.js
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
function Home() {
const [loggedInUser, setLoggedInUser] = useState('');
const [products, setProducts] = useState('');
const navigate = useNavigate();
useEffect(() => {
setLoggedInUser(localStorage.getItem('loggedInUser'))
}, [])
const handleLogout = (e) => {
localStorage.removeItem('token');
localStorage.removeItem('loggedInUser');
handleSuccess('User Loggedout');
setTimeout(() => {
navigate('/login');
}, 1000)
}
const fetchProducts = async () => {
try {
const url = "http://localhost:8080/products";
const headers = {
headers: {
'Authorization': localStorage.getItem('token')
}
}
const response = await fetch(url, headers);
const result = await response.json();
console.log(result);
setProducts(result);
} catch (err) {
handleError(err);
}
}
useEffect(() => {
fetchProducts()
}, [])
return (
<div>
<h1>Welcome {loggedInUser}</h1>
<button onClick={handleLogout}>Logout</button>
<div>
{
products && products?.map((item, index) => (
<ul key={index}>
<span>{item.name} : {item.price}</span>
</ul>
))
}
</div>
<ToastContainer />
</div>
)
}
export default Home
30. let us add index.css for styling
index.css
*,
::before,
::after{
box-sizing: border-box;
padding: 0;
margin: 0;
}
label{
font-size: 20px;
}
html,
body{
height: 100%;
width: 100%;
}
body{
display: flex;
justify-content: center;
align-items: center;
}
.container{
background-color: #FFF;
padding: 32px 48px;
border-radius: 10px;
width: 100%;
max-width: 400px;
box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
}
.container > h1{
margin-bottom: 20px;
}
.container > form{
display: flex;
flex-direction: column;
gap: 10px;
}
.container div{
display: flex;
flex-direction: column;
}
.container input{
width: 100%;
font-size: 20px;
padding: 10px;
border: none;
outline: none;
border-bottom: 1px solid black;
}
.container input::placeholder{
font-size: 12px;
font-style: italic;
}
button{
background-color: purple;
border: none;
font-size: 20px;
color: white;
border-radius: 5px;
padding: 10px;
cursor: pointer;
margin: 10px 0;
}
31. let us create a file to return errors utils.js under src folder,
utils.js
import { toast } from 'react-toastify';
export const handleSuccess = (msg) => {
toast.success(msg, {
position: 'top-right'
})
}
export const handleError = (msg) => {
toast.error(msg, {
position: 'top-right'
})
}
32. we can check the signup, login and product pages here
checking validations with the dev tools>network>Headers and
Preview. We can check the token going to dev
tools>Application>local storage>token to check the jwt token.