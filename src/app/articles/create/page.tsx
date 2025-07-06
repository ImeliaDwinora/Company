"use client";

import { useState } from "react";

export default function Create() {
  const [articleData, setArticleData] = useState({
    image: "",
    articlesContent: "",
    title: "",
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await fetch(
      "https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      }
    );

    setArticleData({ image: "",
    articlesContent: "",
    title: "",})
    alert("New Article Added!")
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="articleTitle"> Article Title</label>
          <input
            className="border"
            type="text"
            id="articleTitle"
            placeholder="Input the article title"
            value={articleData.title}
            onChange={(event) =>
              setArticleData({ ...articleData, title: event.target.value })
            }
          />
        </div>
        <div className="grid">
          <label htmlFor="articleImage"> Article Image</label>
          <textarea
            className="border"
            id="articleImage"
            value={articleData.image}
            onChange={(event) =>
              setArticleData({
                ...articleData,
                image: event.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="grid">
          <label htmlFor="articleContent"> Article Content</label>
          <input
            type="text"
            id="articleContent"
            className="border"
            value={articleData.articlesContent}
            onChange={(event) =>
              setArticleData({ ...articleData, articlesContent: event.target.value })
            }
          />
        </div>
        <button type="submit" className="border border-black">Add New Article</button>
      </form>
    </main>
  );
}
