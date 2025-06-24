import React from 'react'
import EditSnippetForm from '@/components/EditSnippetForm'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'

type SnippetDetailProps = {
  params: { id: string }
}

const EditPageSnippet = async ({params}: SnippetDetailProps) => {
  const id = parseInt(params.id);
  const snippet = await prisma.snippets.findUnique({
    where: { id }
  });

  if(!snippet) return <h1>Snippet Not Found</h1>

  return (
    <div>
      <form className='flex items-center justify-between gap-5'>
        <h1 className='font-bold text-2xl my-3'>Edit Your Snippet</h1>
        <Button>Save</Button>
      </form>
      <EditSnippetForm snippet={snippet} />
    </div>
  )
}

export default EditPageSnippet