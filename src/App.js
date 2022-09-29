import './App.css';
// import store from './store';
import action from './action';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const selector = useSelector((state) => state);
  const sender = useDispatch();
  function Incfun() {
    const dum = action("INC");
    sender(dum);
  }

  function Decfun() {
    action("DEC");
    const dum = action("DEC")
    sender(dum)    
  }
  
  return (
    <div className="App">
     {console.log(selector)}
      <h2>Counter : <span>{selector.counter}</span></h2>
      <button onClick={Incfun}>Increment ++</button>
      <button onClick={Decfun}>Decrement --</button>
    </div>
  );
}

export default App;
