import Link from 'next/link';
import styles from '../styles/Recommendations.module.css';

const Recommendations = ({pageIdentifier, allPostsData, postData}) => {
    
    let filteredList = allPostsData;

    // PageIdentifier will be used to loop through appropriate posts for a given tag
    if (pageIdentifier !== "index") {
        filteredList = allPostsData.filter(function (post) {
            return post.type == pageIdentifier && post.id != postData.id;
        });
        filteredList.length = 5
    }

    return (
        <>
            <section className="mt-12 mb-2 lg:mb-20 lg:pt-4 pb-12 feed-group bg-gray-100 dark:bg-recommendations">
                <div className="mx-7 lg:mx-32 lg:px-32 xl:mx-64 xl:px-42 2xl:mx-72 2xl:px-48">
                    <h1 className="mb-4 pb-3 pt-14 text-2xl md:text-3xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white">You might also like...</h1>
                    {filteredList.map(({ id, type, title, minutesReadTime }) => (
                        <div key={id} className="group">
                            <Link className="flex justify-between items-center" href={`/${type}/${id}`}>
                                <span className="text-lg py-3 dark:text-white group-hover:opacity-75 truncate w-9/12">{ title }</span>
                                <div className="relative flex items-center space-x-1">
                                    <span className="text-base py-3 text-gray-500 dark:text-gray-400 mt-0.5 transition-all duration-300 ease-out group-hover:mr-4 whitespace-nowrap">{ minutesReadTime + " min read" }</span>
                                    <span className="text-lg absolute text-gray-400 opacity-0 -right-4 font-semibold transition-all duration-300 ease-out group-hover:opacity-100 group-hover:right-1 mt-0.5 dark:text-gray-400">&#8250;</span>
                                </div>
                            </Link>
                            <hr className='hide-h-line-if-last dark:opacity-10 h-0.5' />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Recommendations;