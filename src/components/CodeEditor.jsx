import React from 'react';
import './style.css'

const CodeEditor = ({language, code, setCode}) => {
  return (
    <div className="codeEditor">
        <div className="heading">
            {language}
        </div>
        <div className="areaforText">
            <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Enter ${language} code here...`}
            cols="30" rows="10" />
        </div>
    </div>
  )
}

export default CodeEditor;