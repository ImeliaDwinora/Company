// app/articles/[objectId]/page.tsx
import { Article } from "@/types/articles.type";
import Image from "next/image";

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) {
  const id = (await params).objectId

  const res = await fetch(
    `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${id}`,
    { cache: "no-store" }
  );

  const data: Article = await res.json() as Article;

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={300}
          className="rounded-lg object-cover"
        />
        <h2 className="text-3xl font-bold text-[#3D3D3D]">{data.title}</h2>
        <p className="text-gray-700 leading-relaxed">{data.articlesContent}</p>
      </div>
    </main>
  );
}
