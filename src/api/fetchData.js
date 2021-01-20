export const blogsUrl = "https://heroku-json-data-server.herokuapp.com/blogs";
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
