"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Update({
  params,
}: {
  params: { objectId: string };
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: "",
      articlesContent: "",
      title: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    async function getArticlesData() {
      try {
        const objectId = params.objectId;
        const response = await fetch(
          `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${objectId}`
        );
        const data = await response.json();
        reset(data);
      } catch (error) {
        console.error("Gagal mengambil data artikel:", error);
      }
    }

    getArticlesData();
  }, [params, reset]);

  async function handleSubmitForm(formData: {
    image: string;
    articlesContent: string;
    title: string;
  }) {
    try {
      const objectId = params.objectId;
      const response = await fetch(
        `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${objectId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Update Article Success");
        router.push("/");
      } else {
        alert("Failed to update Article");
      }
    } catch (error) {
      console.error("Gagal update artikel:", error);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <form className="grid gap-4 w-full max-w-md p-4" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid">
          <label htmlFor="articleTitle">Article Title</label>
          <input
            className="border p-2"
            type="text"
            id="articleTitle"
            placeholder="Input the article title"
            {...register("title")}
          />
        </div>
        <div className="grid">
          <label htmlFor="articleImage">Article Image</label>
          <textarea
            className="border p-2"
            id="articleImage"
            placeholder="Image URL"
            {...register("image")}
          ></textarea>
        </div>
        <div className="grid">
          <label htmlFor="articleContent">Article Content</label>
          <input
            type="text"
            id="articleContent"
            className="border p-2"
            placeholder="Write article content"
            {...register("articlesContent")}
          />
        </div>
        <button
          type="submit"
          className="border border-black p-2 bg-black text-white hover:bg-gray-800 transition"
        >
          Update Article
        </button>
      </form>
    </main>
  );
}
