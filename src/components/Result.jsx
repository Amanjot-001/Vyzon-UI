import '../styles/Result.css'
import Top from './Top'
import Editor from './Editor'

export default function Result({ result }) {
    return (
        <div className="result">
            <Top fileName={'output'} />
            {result != '' ? <Editor disabled={true} code={result} /> : <Editor disabled={true} />}
        </div>
    )
}