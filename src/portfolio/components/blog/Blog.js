import React from "react";
import BlogHeader from "./BlogHeader";
import BlogPost from "./BlogPost";

import BlogEntries from "./entry/BlogEntries";

const Blog = props => {
  const blogEntries = BlogEntries.map(entry => {
    return (
      <BlogPost
        key={entry.date}
        date={entry.date}
        title={entry.title}
        subtitle={entry.subtitle}
        content={entry.content}
        header={entry.header}
        footer={entry.footer}
      />
    );
  });
  return (
    <div>
      <a name="blog" />
      <BlogHeader />
      <div className="blog-list">{blogEntries}</div>
    </div>
  );
};

export default Blog;
