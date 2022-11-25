import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Filter from "../../components/Filter";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=IN&category=${slug}&apiKey=84addf0a8b97435da94399230184ec4b`
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <div>
      <div className="flex justify-end p-4">
        <Filter />
      </div>
      <div className="grid lg:grid-cols-5 gap-8  md:grid-cols-3 sm:grid-cols-2 ">
        {data.map((item) => {
          return (
            <Link href={item.url}>
              <div
                key={item.title}
                className=" bg-zinc-50 p-2 rounded-lg transition ease-in-out delay-150
                 hover:-translate-y-1 hover:scale-110 h-full hover:shadow-green-200 hover: duration-300 ..."
              >
                <img src={item.urlToImage} alt="..." />
                <h2>{item.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Slug;
