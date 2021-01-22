export const blogsUrl = "https://blog-backend-api-server.herokuapp.com/Blog";
// export const blogsUrl =
//   "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

export const fetchData = async (url) => {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (err) {
    return err;
  }
};
