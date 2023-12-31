import '../styles/App.css'
import Header from './Header'
import Main from './Main'
import Label from './Label'
import Playground from './Playground'
import Result from './Result'
import Doc from './Doc'
import Btns from './Btns'
import Creators from './Creators'
import { useState, useEffect, useRef } from 'react'
import execute from '../language/run'

function App() {
  const startingCode = `def factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

let result = factorial(5);
write(result);`

  const [code, setCode] = useState(startingCode);
  const [output, setOutput] = useState('');
  const resultRef = useRef(null);

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
      setOutput('');
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
        <Playground onCodeChange={setCode} startingCode={startingCode} />
        <div className="result-div" ref={resultRef}>
          <Label heading={'Result'} />
        </div>
        <Result result={output} />
        <Label heading={'Documentation'} />
        <Doc />
        <Label heading={'Creators'} />
        <Creators />
      </div>
    </div>
  )
}

export default App
