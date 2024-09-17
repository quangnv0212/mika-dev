import { blogs } from "@/blogs";
import { getMarkdownContent } from "@/lib/markdown";
import Detail from "./detail";
import fs from "fs";

export default async function Page(props: {
  params: {
    id: string;
  };
}) {
  const id = props.params.id;
  const metaData = blogs.find((blog) => blog.slug === id);
  //Read file
  const res = fs.readFileSync(`public/assets/blog/${id}/${id}.md`, "utf8");
  console.log("====================================");
  console.log(res);
  console.log("====================================");

  return (
    <div>
      <Detail
        data={{
          ...metaData,
          content: res,
        }}
      />
    </div>
  );
}
