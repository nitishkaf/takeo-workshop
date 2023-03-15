// props : pass down data from one component to another
// state : useState, useEffect
// React hooks --> function that will initialize a state, update the state

import ApiCall from './component/ApiCall';
import { Counter } from './component/Counter';

function App() {

  return (
    <>
      <Counter />
      <hr />
      <ApiCall />
    </>
  );
}

export default App;
