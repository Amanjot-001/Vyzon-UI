import '../styles/Btns.css'

export default function Btns({onRunClick}) {
    return (
        <div className="btns">
            <div className="Run" onClick={onRunClick}>
                Run
            </div>
            {/* <div className="clear">
                Clear
            </div> */}
        </div>
    )
}