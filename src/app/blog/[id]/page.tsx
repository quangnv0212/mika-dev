import { blogs } from "@/blogs";
import Detail from "./detail";

export default async function Page(props: {
  params: {
    id: string;
  };
}) {
  const id = props.params.id;
  const metaData = blogs.find((blog) => blog.slug === id);

  return (
    <div>
      <Detail
        data={{
          ...metaData,
        }}
      />
    </div>
  );
}
