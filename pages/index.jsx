import React, { useEffect } from "react";
import Layout from "/components/Layout";
import Image from "next/image";
import PostPreview from "../components/post-preview";

export default function index(props) {
  useEffect(() => {
    console.log("props", props);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full justify-around h-full">
        <div className="flex flex-col gap-12 px-6">
          <h1 className="text-3xl bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
            Bienvenido a nuestro blog
          </h1>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl text-primary font-semibold">
              Últimas entradas del blog
            </h2>
            <div className="flex flex-col gap-4">
              {props.posts.slice(0, 3).map((post, i) => (
                <PostPreview key={i} title={post.title} body={post.body} id={post.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-cover">
          <Image
            src="/images/flowers.png"
            width="512"
            height="512"
            alt="Some flowers"
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { posts },
  };
}
