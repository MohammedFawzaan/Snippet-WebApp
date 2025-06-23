import React from 'react'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

const CreateSnippetPage = () => {

  async function createSnippet(formData:FormData) {
    "use server" // use server directive
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippets.create({
      data: {
        title, code
      }
    });
    console.log(snippet);
    
    redirect("/");
  }

  return (
    <form action={createSnippet}>
        <div className="">
          <Label>Title</Label>
          <Input type='text' name='title' id='title'></Input>
        </div>
        <div className="">
          <Label>Code</Label>
          <Textarea name='code' id='code'></Textarea>
        </div>
        <Button className='my-3' type='submit'>New</Button>
    </form>
  )
}

export default CreateSnippetPage