import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Blog.module.css";
import notFound from "../components/notFound";
class Blog extends Component {
  state = {
    blog: {},
    status: "",
  };

  componentDidMount = async () => {
    let data = await fetchData(`${blogsUrl}/${this.props.match.params.id}`);
    this.setState({ blog: data[0], status: "Successfull" });
  };
  componentDidUpdate = async () => {
    if (this.state.blog !== undefined) {
      if (this.state.blog.id !== this.props.match.params.id) {
        let data = await fetchData(`${blogsUrl}/${this.props.match.params.id}`);
        this.setState({ blog: data[0], status: "Successfull" });
      }
    }
  };

  handleClick(id) {
    let result = fetchData(`${blogsUrl}/${id}`);
    this.setState({ blog: result, status: "Successfull" });
  }

  render() {
    let { imageUrl, content, author, title } = this.state.blog;
    if (this.state.status === "Successfull") {
      return (
        <>
          <Header />
          <div className={styles["blog__page"]}>
            <div className={styles["blog__section"]}>
              <div>
                <img
                  className={styles["blog__image"]}
                  src={imageUrl}
                  alt="blog"
                />
              </div>
              <h2 className={styles["blog__author"]}> Written by:-{author}</h2>
              <h1 className={styles["blog__title"]}> {title}</h1>
              <p className={styles["blog__content"]}>{content}</p>
            </div>
            <div className={styles["blog__rel__links"]}>
              <h2>Related Links</h2>
              {this.state.blog.links &&
                this.state.blog.links.map((link) => {
                  return (
                    <div key={link.id}>
                      <Link
                        to={{
                          pathname: `/Blog/${link.id}`,
                        }}
                      >
                        <p
                          onClick={() => this.handleClick(link.id)}
                          className={styles["blog__links"]}
                        >
                          {link.title}
                          <h1 type="id" name="id" id="id">
                            {this.state.blogId}
                          </h1>
                        </p>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
          <Footer />
        </>
      );
    } else {
      return <notFound />;
    }
  }
}
export default Blog;
