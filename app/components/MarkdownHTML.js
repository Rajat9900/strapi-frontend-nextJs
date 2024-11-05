import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownHTML = ({markdown}) => {
  return (
    <div className='prose'>
     <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default MarkdownHTML
