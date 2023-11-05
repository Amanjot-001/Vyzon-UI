import '../styles/Creators.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Creators() {
    return (
        <div className="creators">
            <div className="card">
                <div className="name"># Yash Poonia</div>
                <div className="github">
                    <a href="https://github.com/yash7xm"><FontAwesomeIcon icon={faGithub} /> <span>Github</span></a>
                </div>
            </div>
            <div className="card">
                <div className="name"># Amanjot Singh</div>
                <a href="https://github.com/Amanjot-001"><FontAwesomeIcon icon={faGithub} /> <span>Github</span></a>
            </div>
        </div>
    )
}