<template>
  <h1>{{ title }}</h1>
</template>
<script>
import apiBoard from "@/api/board";

export default {
  data() {
    return {
      title: "hello",
    };
  },
  mounted() {
    apiBoard
      .getArticle(1)
      .then(function (response) {
        console.log("getArticle : ", response);
      })
      .catch(function (e) {
        console.log(e);
      });
  },
};
</script>
