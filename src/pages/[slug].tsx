import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

function BlogDetail(props:any) {
  const {blogDetail} = props;

  const router = useRouter();
  
  return (
    <>
    <Navbar/>
    <div className='container w-[90%] mx-auto mt-10'>
      <h1 className="blog-title font-bold text-2xl py-5">{blogDetail[0].blog.title}</h1>
      <div className='blog-description font-light text-lg' dangerouslySetInnerHTML={{__html: blogDetail[0].blog.description}}/>
    </div>
    </>
  );
}

export default BlogDetail;

export async function getStaticPaths(){
    const response = await fetch('http://localhost:3000/api/getJsonFiles');
    const jsonData = await response.json();
    const paths = jsonData.map(({blog}: {blog:any})=> ({
        params: {slug: blog.slug},
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}:{params:any}){
  const response = await fetch('http://localhost:3000/api/getJsonFiles');
  const jsonData = await response.json();
  const blogDetail= jsonData.filter(({blog}: {blog:any})=>{
    return blog.slug == params.slug;
  })
    return {props: {blogDetail: blogDetail}};
}
