import { Button } from "@/shadcn/components/ui/button"
import Filters from "./Filters"

function FeedInfo() {
    return (
        <section className="px-4 py-2 flex flex-col gap-6">
            <section className="flex flex-row justify-between">
                <h1 className="text-3xl">Popular right now</h1>
                <Button variant={'primary'}>
                    Create a resource
                </Button>
            </section>
            <Filters/>
        </section>
    )
}

export default FeedInfo