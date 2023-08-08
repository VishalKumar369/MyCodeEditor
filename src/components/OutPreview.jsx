import React from 'react';
import './style.css'

const OutPreview = ({cssCode,htmlCode,jsCode}) => {

const  generateOutput =()=>{
    return `
    <html>
        <head>
            <style>${cssCode}</style>
        </head>
         <body>
            ${htmlCode}
            <script>${jsCode}</script>
         </body>
    </html>
    `;
}
  return (
    <div className="output-preview">
        <iframe
            title='OutPut-Preview'
            srcDoc={generateOutput()}
            sandbox='allow-scripts'
        />
    </div>
  )
}

export default OutPreview;