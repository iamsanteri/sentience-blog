import '../styles/PostList.module.css';

const PostList = (pageIdentifier) => {
    // PageIdentifier will be used to loop through appropriate posts for a given tag
    return (
        <>
            <section className="lg:pt-4 pb-12 feed-group">
                <div className="mx-7 lg:mx-32 lg:px-32 xl:mx-64 xl:px-42 2xl:mx-72 2xl:px-48 group">
                    <a className="flex justify-between" href="#">
                        <span className="flex text-lg py-3 dark:text-white group-hover:opacity-75 santeri">My first post</span>
                        <div className="relative flex items-center space-x-1">
                            <span className="text-base py-3 text-gray-500 dark:text-gray-400 mt-0.5 transition-all duration-300 ease-out group-hover:mr-4">1 min read</span>
                            <span className="text-lg absolute text-gray-400 opacity-0 -right-4 font-semibold transition-all duration-300 ease-out group-hover:opacity-100 group-hover:right-1 mt-0.5 dark:text-gray-400">&#8250;</span>
                        </div>
                    </a>
                    <hr className='hide-h-line-if-last dark:opacity-10 h-0.5' />
                </div>
                <div className="mx-7 lg:mx-32 lg:px-32 xl:mx-64 xl:px-42 2xl:mx-72 2xl:px-48 group">
                    <a className="flex justify-between" href="#">
                        <span className="flex text-lg py-3 dark:text-white group-hover:opacity-75">My second post</span>
                        <div className="relative flex items-center space-x-1">
                            <span className="text-base py-3 text-gray-500 dark:text-gray-400 mt-0.5 transition-all duration-300 ease-out group-hover:mr-4">4 min read</span>
                            <span className="text-lg absolute text-gray-400 opacity-0 -right-4 font-semibold transition-all duration-300 ease-out group-hover:opacity-100 group-hover:right-1 mt-0.5 dark:text-gray-400">&#8250;</span>
                        </div>
                    </a>
                    <hr className='hide-h-line-if-last dark:opacity-10 h-0.5' />
                </div>
            </section>
        </>
    );
}

export default PostList;