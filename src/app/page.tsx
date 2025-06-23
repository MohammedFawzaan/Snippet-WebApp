import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await prisma.snippets.findMany();
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium m-5">All Snippets</h1>
        <Link href="/snippet/new">
          <Button>New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
          <div className="bg-gray-200 rounded-md flex items-center justify-between p-3 my-2" key={snippet.id}>
            <h1>{snippet.title}</h1>
            <p>{snippet.code}</p>
            <Link href={`/snippet/${snippet.id}`}>
              <Button variant={'link'}>View</Button>
            </Link>
          </div>
        ))}
    </div>
  );
}