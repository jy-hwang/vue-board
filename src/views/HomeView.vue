<template>
  <el-table @row-click="rowClicked" :data="articles" style="width: 100%">
    <el-table-column prop="id" label="id" width="80" />
    <el-table-column prop="userId" label="userId" width="120" />
    <el-table-column prop="title" label="title" />
  </el-table>
  <a href="/board/write" class="btn-write">
    <img src="/images/pen_icon.png" alt="글쓰기버튼" />
  </a>
</template>
<script>
import apiBoard from "@/api/board";

export default {
  data() {
    return {
      articles: null,
    };
  },
  mounted() {
    apiBoard
      .getArticles(0)
      .then((response) => {
        console.log("getArticles : ", response);
        this.articles = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    rowClicked(row) {
      this.$router.push({
        path: `/board/detail/${row.id}`,
      });
    },
  },
};
</script>
<style scoped>
.btn-write {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background: #fc1f49;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  z-index: 10;
  display: inline-block;
}

.btn-write img {
  position: relative;
  top: 50%;
  left: 25%;
  transform: translate(-56%, -50%);
}
</style>
