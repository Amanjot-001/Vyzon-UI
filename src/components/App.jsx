import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Doc from './Doc'
import Btns from './Btns'
import { useState } from 'react'
import execute from '../language/run'

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState([]);

  const executeCode = async () => {
    setOutput(execute(code));
    console.log(output[0])
  };

  return (
    <div className="container">
      <Header />
      <div className="inner-container">
        <Main />
        <div className='btn-sec'>
          <Label heading={'Playground'} />
          <Btns onRunClick={executeCode} />
        </div>
        <Playground onCodeChange={setCode} />
        <Label heading={'Result'} />
        <Result result={output[0]} />
        <Label heading={'Documentation'} />
        <Doc />
      </div>
    </div>
  )
}

export default App
