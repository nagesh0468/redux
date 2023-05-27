
import './App.css';
import { useSelector,use, useDispatch
 } from 'react-redux';



function App() {

  const valueFromStore = useSelector((store) => store)

  const dispatch = useDispatch()
  const ADD = {
    type : 'ADD',
    payload : 100
  }
  const SUB = {
    type : 'SUBTRACT',
    payload : 50
  }
  
  return (
    <div className="App">
      <h1>redux {valueFromStore.count}</h1>
      <button onClick={() => {dispatch(ADD)}} >add</button>
      <button onClick={() => {dispatch(SUB)}} >sub</button>
    </div>
  );
}

export default App;
