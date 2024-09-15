import { getMarkdownContent } from "@/lib/markdown";
import Detail from "./detail";
import { blogs } from "@/blogs";
import { Metadata } from "next";

export default async function Page(props: {
  params: {
    id: string;
  };
}) {
  const id = props.params.id;
  const metaData = blogs.find((blog) => blog.slug === id);

  const data = await getMarkdownContent(`public/assets/blog/${id}/${id}.md`);

  return (
    <div>
      <Detail
        data={{
          ...metaData,
          content: data,
        }}
      />
    </div>
  );
}
