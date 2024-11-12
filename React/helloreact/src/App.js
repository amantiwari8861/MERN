import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Layout from './components/Layout';
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
  <Layout/>
);
export default App;
