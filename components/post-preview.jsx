import Link from "next/link";
import React from "react";

function PostPreview({ title, body, id }) {
  return (
    <div className="blog-head">
      <Link href={"/post/" + id}>
        <h3 className="capitalize blog-title-preview cursor-pointer hover:text-primary duration-100">{title}</h3>
      </Link>
      <span className="italic">20/08/2021</span>
      <p>{body}</p>
    </div>
  );
}

export default PostPreview;
