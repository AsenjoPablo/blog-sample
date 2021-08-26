import React, { useEffect } from "react";
import Layout from "./../../components/Layout";

export default function id(props) {
  useEffect(() => {
    console.log("props", props);
  }, []);

  return (
    <Layout>
      <div className="container h-full">
        <h1 className="capitalize blog-title-preview mb-2">
          {props.post.title}
        </h1>
        <p className="italic mb-8">20/08/2021</p>
        <div>{props.post.body}</div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const post = await (
    await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + context.params.id
    )
  ).json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { post },
  };
}
