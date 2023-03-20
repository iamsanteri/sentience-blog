import Head from 'next/head'

export default function Custom404() {
    return (
        <>
        <Head>
            <title>Not found - Sentience</title>
            <meta
                name="description"
                content=""
            />
        </Head>
        <section className="bg-white dark:bg-sentient pt-20 lg:pt-24">
            <div className="py-24 lg:py-44 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
                <h1 className="mb-1 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Page not found.</h1>
            </div>
        </section>
        </>
    );
}