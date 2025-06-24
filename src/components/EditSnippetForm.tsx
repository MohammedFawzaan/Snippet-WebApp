"use client"
import { Editor } from "@monaco-editor/react"
import { Snippets } from "@prisma/client"
import { useState } from "react"

const EditSnippetForm = ({snippet}:{snippet:Snippets}) => {
  const [code, setCode] = useState(snippet.code);

  async function handleEditMount() {
    // setCode();
  }

  return (
    <div>
        <Editor 
          height="50vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={code}
          // onMount={handleEditMount}
        />
    </div>
  )
}

export default EditSnippetForm