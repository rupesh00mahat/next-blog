import BlogItem from "@/components/blog-item";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
const fetchData = async () =>{
  const response = await fetch('/api/getJsonFiles');
  const jsonData = await response.json();
  setData(jsonData);
}
fetchData();
  },[])


  return (
    <>
    <Navbar/>
    <div className="blog-area grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 w-[90%] mx-auto gap-10">
      {data && data.map(({blog}, index)=>{
        return <BlogItem key={index} blog={blog}/>
      })}
    </div>
    </>
  );
}
