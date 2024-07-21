import React from "react";
import { useState, useEffect } from "react";
import PageIndex from "../../components/PageIndex/PageIndex";
import styles from "./blog.module.css";

interface Blog {
  post_id: string;
  post_name: string;
  post_content: string;
  post_date: string;
  post_author: string;
}

interface Blogs {
  blogs: Blog[];
}

export default function Blog({ blogs }: Blogs) {
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const headersColection = document
      .getElementById("blog")
      ?.getElementsByTagName("h3");
    const headersArray = headersColection ? Array.from(headersColection) : [];
    setHeaderList(headersArray);
  }, []);

  const iterateBlogs = (blogsList: Blog[]) => {
    console.log(blogsList);
    const result = [];
    for (const key in blogsList) {
      if (blogsList.hasOwnProperty(key)) {
        result.push(
          <div key={key} className={styles.postContainer}>
            <h4>{blogsList[key].post_name}</h4>
            <div className={styles.textArea}>{blogsList[key].post_content}</div>
          </div>
        );
      }
    }
    return result;
  };

  return (
    <div id="blog" className={styles.dynamicFlexContainer}>
      <div className={styles.mainBlogContainer}>{iterateBlogs(blogs)}</div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
    </div>
  );
}
