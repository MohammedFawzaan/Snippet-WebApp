"use server"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";

export const CreateSnippet = async (title: string, code: string ) => {
    const snippet = await prisma.snippets.create({
        data: {
            title,
            code,
        },
    })
    console.log(snippet)
    redirect("/")
}

export const SaveSnipppet = async (id: number, code: string) => {
    await prisma.snippets.update({
        where: { id },
        data: { code }
    });
    redirect(`/snippet/${id}`);
}

export const DeleteSnippet = async (id: number) => {
    await prisma.snippets.delete({
        where: { id }
    });
    redirect("/");
}