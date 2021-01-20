import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
class BlogCard extends Component {
  render() {
    let { blog } = this.props;
    return (
      <div className={styles["main__div"]}>
        <img
          className={styles["blog__img"]}
          src={blog.imageUrl}
          alt={blog.title}
        />
        <h3>
          <Link
            className={styles["blog__title"]}
            to={{ pathname: `blogs/${blog.id}`, state: { id: blog.id } }}
          >
            {blog.title}
          </Link>
        </h3>
      </div>
    );
  }
}
export default BlogCard;
