import Head from 'next/head'

import styles from '@/styles/About.module.css'

export default function SinglePost({ postData }) {

  return (
    <>
        <Head>
            <title>About this site</title>
            <meta
                name="description"
                content=""
            />
        </Head>
        <section className="bg-white dark:bg-sentient pt-14 mb-4 lg:mb-10 lg:pt-24">
            <div className="w-full flex justify-center">
                <div className="p-5 md:w-3/4 lg:w-3/5 xl:w-2/4 2xl:w-2/5">
                    <h1 style={{ lineHeight: 2.5 + "rem"}} className="mb-9 text-3xl md:text-4xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white">About this site</h1>
                    <article style={{ lineHeight: 2 + "rem"}} className="prose-lg text-lg lg:prose-xl text-gray-700 dark:text-gray-300">
                        <p>I set up Sentience to experiment with different writing styles I'd probably never use elsewhere. Among others, here you'll find all sorts of fictional essays that are short and descriptive in nature.</p>
                        <p>Why?</p>
                        <p>Because writing as media, in addition to human labor and financial capital, are core forms of <a style={{textDecoration: "underline", textDecorationThickness: 1 + "px"}} href="https://www.lostbookofsales.com/notes/the-almanack-of-naval-ravikant-by-eric-jorgenson/?ref=sentience#leverage" className="dark:text-zinc-200 hover:opacity-75">modern leverage</a>.</p>
                        <p>Finally, there is something timeless and magical about writing that is endlessly difficult to master. It's like a form of art with infinite amounts of variety that most of us never quite grasp with fluency. One perspective is to look at it as a lifelong craft or a hobby bringing you joy and fulfillment. </p>
                        <p>And so, I'm willing to explore it further. </p>
                        <p>If I would only manage to create a fraction of what I consume, I think I'd be a better human being. Who knows, I could even end up helping some other people too. And hey, I won't even complain that English isn't my native language! </p>
                        <p>So get in the mood and start writing.</p>
                        <p><em>P.S. This site is optimized for what I'd describe a "pure reading experience" with dark and light themes adjusting to your system's settings. Enjoy! </em></p>
                    </article>
                </div>
            </div>
        </section>
    </>
  )
}