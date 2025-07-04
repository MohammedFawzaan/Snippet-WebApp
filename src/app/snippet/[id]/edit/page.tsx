import React from 'react'
import EditSnippetForm from '@/components/EditSnippetForm'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

type SnippetDetailProps = {
  params: { id: string }
}

const EditPageSnippet = async ({params}: SnippetDetailProps) => {
  const id = parseInt(params.id);
  const snippet = await prisma.snippets.findUnique({
    where: { id }
  });

  if(!snippet) return notFound();

  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  )
}

export default EditPageSnippet