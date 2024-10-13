import { ArrowDown, ArrowUp } from 'lucide-react';

function PostCard() {
    return (
        <section className="flex flex-col gap-4 px-4 py-2">
            <h1 className="font-semibold text-primary">React + NestJs Boilerplate for technical interview</h1>
            <section className="flex flex-col gap-2">
                <section className='flex flex-row justify-between text-sm'>
                    <span className="px-2 py-1 rounded-lg bg-secondary/40 w-fit">Github Repo</span>
                    <span>Gaurav Karki, Wednesday, 2024</span>
                </section>
                <section className="flex flex-row gap-2 text-sm font-semibold">
                    Tags:
                    <span className='underline underline-offset-2'> Frontend Interview Boilder plate</span>
                </section>
            </section>
            <section className='flex flex-row gap-3 items-center text-sm'>
                <span>
                    <ArrowUp size={20} />
                </span>
                <span>
                    <ArrowDown size={20} />
                </span>
                <span>
                    12.k views
                </span>
            </section>
        </section>
    )
}

export default PostCard