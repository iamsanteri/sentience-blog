import React, { useState } from 'react';

import '../styles/PostList.module.css';

import Link from "next/link";

const PostList = ({pageIdentifier, allPostsData}) => {
    const [showAmount, setShowAmount] = useState(5);
    
    let filteredList = allPostsData;

    // PageIdentifier will be used to loop through appropriate posts for a given tag
    if (pageIdentifier !== "index") {
        filteredList = allPostsData.filter(post => post.type == pageIdentifier)
    }

    // Paginate list to five items at a time, starting with five initially
    let paginatedList = filteredList.slice(0, showAmount)

    function loadMore() {
        setShowAmount(showAmount => showAmount + 5);
        paginatedList = filteredList.slice(0, showAmount)
    }


    return (
        <>
            <section className="lg:pt-4 pb-6 feed-group">
                <div className="mb-5 mx-7 lg:mx-32 lg:px-32 xl:mx-64 xl:px-42 2xl:mx-72 2xl:px-48">
                    {paginatedList.map(({ id, type, title, minutesReadTime }) => (
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
                <div className="grid place-content-center">
                    <div className="px-3 py-2 text-xs border rounded border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:cursor-pointer dark:text-white" onClick={ loadMore } style={{ display: showAmount > filteredList.length ? "none" : "block"}}>LOAD MORE</div>
                </div>
            </section>
        </>
    );
}

export default PostList;