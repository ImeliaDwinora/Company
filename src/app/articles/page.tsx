"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/articles.type";
import DeleteButton from "../../components/delete-button";

const PAGE_SIZE = 6;
const MAX_PAGE = 3;

export default function Articles() {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getArticlesData() {
      setLoading(true);
      try {
        const offset = (page - 1) * PAGE_SIZE;
        const response = await fetch(
          `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles?pageSize=${PAGE_SIZE}&offset=${offset}`
        );
        const articles = await response.json();
        setData(articles);
        setLoading(false); 
      } catch (error) {
        console.error("Failed to fetch:", error);
        setData(null);
        setLoading(false); 
      }
    }

    getArticlesData();
  }, [page]);

  if (loading) return <p className="text-center py-4">Loading articles⌛...</p>;

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((article) => (
          <article
            key={article.objectId}
            className="bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="font-semibold text-lg">{article.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {article.articlesContent}
              </p>
              <div className="mt-4 flex gap-2">
                <Link
                  href={`/articles/edit/${article.objectId}`}
                  className="px-3 py-1 rounded-xl bg-sky-500 text-white hover:bg-sky-600 text-sm"
                >
                  Edit
                </Link>
                <DeleteButton objectId={article.objectId} setData={setData} data={data} />
                <Link
                  href={`/articles/${article.objectId}`}
                  className="px-3 py-1 rounded-xl bg-green-500 text-white hover:bg-green-600 text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          ← Previous
        </button>

        <span className="self-center text-sm text-gray-700">
          Page {page} of 3
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(MAX_PAGE, prev + 1))}
          disabled={page === MAX_PAGE}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
