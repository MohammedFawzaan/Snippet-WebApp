import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as actions from "@/actions"

type SnippetDetailProps = {
    params: { id: string }
}

const SnippetDetails = async ({ params }: SnippetDetailProps) => {
    const id = parseInt(params.id);

    const snippet = await prisma.snippets.findUnique({
        where: { id }
    });
    
    if (!snippet) return <h1>Snippet Not Found</h1>
    
    const deleteSnippetAction = actions.DeleteSnippet.bind(null, snippet?.id);
    
    return (
        <div>
            <h1 className='font-bold text-2xl my-3'>SnippetDetails with id:{id}</h1>
            <h2 className='text-1xl font-medium my-3'>{snippet?.title}</h2>
            <div className='m-5 p-3 font-semibold bg-gray-200 rounded-md'>{snippet?.code}</div>
            <div className='flex items-center gap-5'>
                <Link href={`/snippet/${id}/edit`}>
                    <Button>Edit</Button>
                </Link>
                <form action={deleteSnippetAction}>
                    <Button type='submit' variant={'destructive'}>Delete</Button>
                </form>
            </div>
        </div>
    )
}

export default SnippetDetails