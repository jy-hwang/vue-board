<template>
  <el-row :gutter="20">
    <el-col :span="6" />
    <el-col :span="14">
      <el-form :model="article" label-width="auto" style="max-width: 600px">
        <el-form-item label="id">
          {{ article.id }}
        </el-form-item>
        <el-form-item label="userId">
          {{ article.userId }}
        </el-form-item>
        <el-form-item label="title">
          <el-input v-model="article.title" readonly />
        </el-form-item>
        <el-form-item label="body">
          <el-input
            v-model="article.body"
            type="textarea"
            :rows="10"
            readonly
          />
        </el-form-item>
      </el-form>
      <el-button @click="goBack">Back</el-button>
    </el-col>
    <el-col :span="6" />
  </el-row>
</template>

<script>
import apiBoard from "@/api/board";

export default {
  data() {
    return {
      article: "",
    };
  },
  mounted() {
    apiBoard
      .getArticle(this.$route.params.id)
      .then((response) => {
        this.article = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    goBack() {
      console.log("clicked");
      this.$router.go(-1);
    },
  },
};
</script>
<style></style>
