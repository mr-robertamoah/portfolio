import useArticles from '@/Composables/useArticles'
import useBooks from '@/Composables/useBooks'
import MediumIcon from '@/Icons/MediumIcon'
import React from 'react'

export default function ArticlesAndBooks() {
    const articles = useArticles()
    const books = useBooks()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='w-full lg:col-span-2'>
            <div className="w-full mx-auto lg:w-[90%] px-2">
                <div className='z-[3] text-nowrap bg-white text-2xl mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent'
                >Articles</div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
                {
                    articles.map((article, idx) => (
                        <div key={idx} className='w-[90%] mx-auto sm:w-full max-w-md min-h-48 h-fit rounded shadow-sm bg-white p-4 shadow-blue-600'>
                            <div className='mb-8'>
                                <MediumIcon className='w-5 h-5'/>
                            </div>
                            <div className='text-base sm:text-lg w-full text-center'
                            >
                                <a href={article.url}>
                                    {article.title}
                                </a>
                            </div>
                            <hr className='mx-4 my-5' />

                            <div className='flex flex-wrap w-full gap-2'>
                                {
                                    article.skills?.length ?
                                    article.skills.map((skill, idx) => (
                                        <div className='text-sm rounded p-1 bg-gray-200 text-gray-600' key={idx}>{ skill }</div>
                                    )) :
                                    <></>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='col-start-1 md:col-start-2 lg:col-start-3'>
            <div className="w-full px-2">
                <div className='z-[3] text-nowrap bg-white text-2xl mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent'
                >Recommended Books</div>
            </div>

            <div className='w-full flex gap-10 pb-10 overflow-hidden overflow-x-auto px-5'>
                {
                    books.map((book, idx) => (
                        <div key={idx} className='w-fit rounded shrink-0 shadow-sm bg-white p-4 pt-2 shadow-blue-600'>
                            <div className='text-base sm:text-lg w-full text-center text-slate-700 font-bold mb-2'
                            >
                                {book.name}
                            </div>
                            <div className='flex items-end justify-between space-x-2'>
                                <div className='mb-0'>
                                    <img src={book.icon} alt={book.name} className='w-24 mx-auto'/>
                                </div>
                                <div>
                                    <div className='text-xs text-gray-400 text-end mb-2'>by</div>
                                    <div className='text-sm text-gray-600'>
                                        {book.authors.join(', ')}
                                    </div>
                                </div>
                            </div>
                            <hr className='mx-4 my-5' />

                            <div className='text-sm text-gray-600 w-full text-center text-wrap'>
                                {book.descripton}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
