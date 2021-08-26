import Link from "next/link";
import React from "react";

function PostPreview({ title, body, id }) {
  return (
    <div className="flex flex-col gap-1">
      <Link href={"/post/" + id}>
        <h3 className="capitalize post-title-preview cursor-pointer hover:opacity-70 duration-100">{title}</h3>
      </Link>
      <span className="italic">20/08/2021</span>
      <p>{body}</p>
    </div>
  );
}

export default PostPreview;
