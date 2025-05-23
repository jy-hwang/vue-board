import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export default {
  getArticles: function (page) {
    console.log(page);
    return axios.get(BASE_URL + `posts?_limit=10`);
  },

  getArticle: function (id) {
    return axios.get(BASE_URL + `posts/${id}`);
  },

  postArticle: function (userId, title, body) {
    return axios.post(BASE_URL + `posts`, {
      userId: userId,
      title: title,
      body: body,
    });
  },
};
