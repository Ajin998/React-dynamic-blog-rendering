import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    blogs: [],
  };
  componentDidMount = async () => {
    let blogs = await fetchData(blogsUrl);
    this.setState({ blogs: [...blogs] });
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.blogs.map((blog, index) => {
            return (
              <div key={index}>
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
