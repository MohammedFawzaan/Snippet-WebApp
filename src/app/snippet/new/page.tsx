"use client"
import React, { useState } from 'react'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Editor from '@monaco-editor/react'
import { CreateSnippet } from '@/actions'

const CreateSnippetPage = () => {
  const [title, setTitle] = useState("")
  const [code, setCode] = useState("// Write your code here")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await CreateSnippet(title, code)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="code">Code</Label>
        <Editor
          height="50vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value ?? "")}
        />
      </div>
      
      <Button className="my-3" type="submit">
        New
      </Button>
    </form>
  )
}

export default CreateSnippetPage