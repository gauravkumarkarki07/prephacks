import { ArrowDown, ArrowUp } from 'lucide-react';

function PostCard() {
    return (
        <section className="flex flex-col gap-3 px-4 py-2 text-xs">
            <h1 className="text-primary text-lg">React + NestJs Boilerplate for technical interview</h1>
            <section className="flex flex-col gap-2">
                <section className='flex flex-row justify-between'>
                    <span className="px-2 py-1 rounded-lg bg-secondary/50 w-fit">Github Repo</span>
                    <span className='text-blue-700'>Gaurav Karki, Wednesday, 2024</span>
                </section>
                <section className="flex flex-row gap-2 text-sm font-semibold px-1">
                    Tags:
                    <span className='underline underline-offset-2'> Frontend Interview Boilder plate</span>
                </section>
            </section>
            <section className='flex flex-row gap-3 items-center'>
                <span>
                    <ArrowUp size={15} />
                </span>
                <span>
                    <ArrowDown size={15} />
                </span>
                <span>
                    12.k views
                </span>
            </section>
        </section>
    )
}

export default PostCard