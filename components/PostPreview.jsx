import Link from "next/link";
import React from "react";

function PostPreview({ title, body, id }) {
  return (
    <Link href={"/post/" + id}>
      <div className="flex flex-col gap-1 hover:opacity-70 duration-100">
        <h3 className="capitalize post-title-preview cursor-pointer">{title}</h3>
        <span className="italic">20/08/2021</span>
        <p>{body}</p>
      </div>
    </Link>
  );
}

export default PostPreview;
