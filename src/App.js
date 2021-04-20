// import {Animation} from './Animation';
// import {Heading} from './Heading'
import './App.css';
import {CssBaseline } from '@material-ui/core';
import SlackTesting from './components/SlackTesting';

function App() {
  return (
    <div className="App">
      <SlackTesting/>
      {/* <Heading/>
     <Animation/> */}
     <CssBaseline/>
    </div>
  );
}

export default App;
