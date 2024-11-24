import Link from 'next/link';
import React from 'react'


function BlogItem({blog}: {blog:any}) {

  const {author, date,content, title, slug} = blog;
  return (
    <article className='blog-item shadow-lg rounded-md'>
      <img src={"/images/blog-item-one.jpg"} alt='' className='object-cover rounded-t-md w-full '/>
      <div className="article-content pt-4 px-2 w-[90%] mx-auto h-2/4">
        <h3 className='article-title text-lg font-semibold'>
          <Link href={`${slug}`}>{title}</Link>
        </h3>
        <p className='article-description text-sm leading-6 text-gray-600 font-lighter mb-2'>{content.slice(0,150)}...</p>
        <div className="author-info flex gap-5 mb-4 items-center">
          <img className="author-image h-16 w-16 object-cover rounded-full" src='/images/author-one.jpg'/>
          <div className="author-and-date flex flex-col jusitfy-center">
            <span className='author-name font-semibold'>{author.name}</span>
            <span className='author-date text-lg font-light text-gray-400'>{date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogItem