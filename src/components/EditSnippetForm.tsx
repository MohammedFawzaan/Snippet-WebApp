"use client"
import { Editor } from "@monaco-editor/react"
import { Snippets } from "@prisma/client"
import { useState } from "react"
import { Button } from '@/components/ui/button'
import * as action from "@/actions"

const EditSnippetForm = ({ snippet }: { snippet: Snippets }) => {
  const [code, setCode] = useState(snippet.code);

  const saveSnipppetAction = async (formData: FormData) => {
    const codeValue = formData.get("code");
    if (typeof codeValue === "string") {
      await action.SaveSnipppet(snippet.id, codeValue);
    }
  };

  return (
    <div>
      <form action={saveSnipppetAction} className='flex items-center justify-between gap-5'>
        <h1 className='font-bold text-2xl my-3'>Edit Your Snippet</h1>
        <input type="hidden" name="code" value={code} />
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={(value) => setCode(value ?? "")}
      />
    </div>
  )
}

export default EditSnippetForm