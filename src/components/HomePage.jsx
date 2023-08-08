import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import OutPreview from './OutPreview';
import './style.css'

const HomePage = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  return (
    <div className='home'>
      <div className="editor-panels">
        <CodeEditor language="HTML" code={htmlCode} setCode={setHtmlCode} />
        <CodeEditor language="CSS" code={cssCode} setCode={setCssCode} />
        <CodeEditor language="JavaScript" code={jsCode} setCode={setJsCode} />
      </div>
      <OutPreview jsCode={jsCode} htmlCode={htmlCode} cssCode={cssCode} />
    </div>
  )
}

export default HomePage;