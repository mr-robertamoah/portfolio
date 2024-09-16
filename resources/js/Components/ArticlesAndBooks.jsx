import useArticles from '@/Composables/useArticles'
import MediumIcon from '@/Icons/MediumIcon'
import React from 'react'

export default function ArticlesAndBooks() {
    const articles = useArticles()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-10 w-full flex-wrap'>
            {
                articles.map((article, idx) => (
                    <div key={idx} className='w-full min-h-48 h-fit rounded shadow-sm bg-white p-4 shadow-blue-600'>
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
        <div className='col-start-1 md:col-start-2 lg:col-start-3'></div>
    </div>
  )
}
