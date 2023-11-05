import '../styles/Editor.css'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';

export default function Editor({ disabled = false, code, onCodeChange }) {
    const [lineNumbers, setLineNumbers] = useState([]);
    const codeAreaRef = React.createRef();
    const lineNumbersRef = React.createRef();

    const updateLineNumbers = (text) => {
        const lines = text.split('\n');
        setLineNumbers(new Array(lines.length).fill().map((_, i) => i + 1));
    };

    useEffect(() => {
        if (disabled && code) {
            updateLineNumbers(code);
        }
    }, [])

    useEffect(() => {
        const codeArea = codeAreaRef.current;
        const lineNumbersContainer = lineNumbersRef.current;

        const handleScroll = () => {
            const scrollTop = codeArea.scrollTop;
            lineNumbersContainer.scrollTop = scrollTop;
            codeArea.scrollTop = scrollTop;
        };

        codeArea.addEventListener('scroll', handleScroll);

        return () => {
            codeArea.removeEventListener('scroll', handleScroll);
        };
    }, [codeAreaRef, lineNumbersRef]);

    const handleCodeChange = (event) => {
        const newText = event.target.value;
        updateLineNumbers(newText);
        onCodeChange(newText);
    };

    return (
        <div className="editor-container">
            <div className="line-numbers" ref={lineNumbersRef}>
                {lineNumbers.map((line, index) => (
                    <div key={index} className="line-number">
                        {line}
                    </div>
                ))}
            </div>
            <div className="textarea">
                <textarea
                    id="codeArea"
                    disabled={disabled}
                    value={code}
                    onChange={handleCodeChange}
                    ref={codeAreaRef}
                >
                </textarea>
            </div>
        </div>
    )
}

Editor.propTypes = {
    disabled: PropTypes.bool,
    code: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.any]),
}