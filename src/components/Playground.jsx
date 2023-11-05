import '../styles/Playground.css'
import Top from './Top'
import Editor from './Editor'

export default function Playground({ onCodeChange, startingCode }) {
    return (
        <div className="playground">
            <Top fileName={'app.vy'} />
            <Editor onCodeChange={onCodeChange} code={startingCode} />
        </div>
    )
}