import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Doc from './Doc'
import Btns from './Btns'
import { useState, useEffect, useRef } from 'react'
import execute from '../language/run'

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState([]);
  const resultRef = useRef(null);

  const startingCode = ``

  const customLogger = {
    log: (message) => {
      setOutput((prevOutput) => prevOutput + message + '\n');
    },
  };

  useEffect(() => {
    const originalConsoleLog = console.log;
    console.log = customLogger.log;

    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

  const executeCode = async () => {
    try {
      setOutput([]);
      execute(code);
    } catch (error) {
      setOutput(error);
    }

    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
        <div className="result-div" ref={resultRef}>
          <Label heading={'Result'} />
        </div>
        <Result result={output} />
        <Label heading={'Documentation'} />
        <Doc />
      </div>
    </div>
  )
}

export default App
