import { Component } from "react";
import { Link } from "react-router-dom";
import { blogsUrl, fetchData } from "../api/fetchData";

class Links extends Component {
  state = {
    blog: {},
  };

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    let data = await fetchData(`${blogsUrl}/${id}`);
    this.setState({ blog: data });
  };

  render() {
    let { links } = this.state.blog;
    return (
      <div>
        {links &&
          links.map((link, index) => {
            return (
              <div key={index}>
                <Link
                  to={{
                    pathname: `/blogs/${link.id}`,
                  }}
                >
                  <p>{link.title}</p>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
export default Links;
