function Footer() {
    return (
        <footer className="flex flex-col gap-2 px-10 py-4 max-w-[1290px] mx-auto w-full">
            <section className="flex flex-row gap-24">
                    <section>
                        <h1>Prep Hacks</h1>
                    </section>
                    <nav className="flex flex-col gap-2">
                        <h1 className="font-semibold">Resources</h1>
                        <ul className="flex flex-col gap-1">
                            <li>Home</li>
                            <li>Resources</li>
                        </ul>
                    </nav>
            </section>
            <section className="flex justify-center text-sm text-gray-500 mt-6 mb-2">
                <span className="px-2 py-1 self-center">
                Copyright 2024. All Rights Reserved.
                </span>
            </section>
        </footer>
    )
}

export default Footer