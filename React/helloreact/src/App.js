import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/signin/SignIn';
import Home from './components/home/Home';
import Register from './components/register/Register';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
// function App() {
//   return (<h1>Hello World in React</h1>);
// }

// JSX -> babel(transpiler) -> js

// let App = () =>
// (
//   <div>
//     <button>click me </button>
//     <h1 className='bg-primary'>Hello World in React</h1>
//   </div>
// );
// let App=()=>(
//   <div style={{color:"white",backgroundColor:"black"}} className='snip'>
//     <pre>
//     1. close every tag including self-closing tag <br/>
//     2. class -&gt; className & for =&gt; htmlFor<br/>
//     3. must not have adjacent elements (use &lt;&gt;jsx fragment&lt;/&gt; or
//     <br/> wrap that into a parent element)<br/>
//       eg. <br/>
//       <h1> hii</h1>
//       <h1> Hello</h1>
//     </pre> 
//     4. must not use inline style like style="color:red"; instead use style=&#123;&#123;color:"white",backgroundColor:"black"&#125;&#125;
//     <br/>
      // 5. in jsx images is used as a resource so we have to import it 
//     &copy;&reg;

//   </div>
// );

let App=()=>(

  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='login' element={<SignIn/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  </Routes>
);
export default App;
