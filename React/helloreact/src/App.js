import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// function App() {
//   return (<h1>Hello World in React</h1>);
// }

// JSX -> babel(transpiler) -> js

let App = () =>
(
  <div>
    <button>click me </button>
    <h1 className='bg-primary'>Hello World in React</h1>
  </div>
);

export default App;
