<template>
  <el-row :gutter="20">
    <el-col :span="6" />
    <el-col :span="14">
      <el-form label-width="auto" style="max-width: 600px">
        <el-form-item label="title" value="제목">
          <el-input v-model="title" />
        </el-form-item>
        <el-form-item label="body" value="본문">
          <el-input v-model="body" type="textarea" :rows="10" />
        </el-form-item>
      </el-form>
      <el-button @click="writeArticle">저장</el-button>
    </el-col>
    <el-col :span="6" />
  </el-row>
</template>
<script>
import apiBoard from "@/api/board";

export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    writeArticle() {
      if (!this.title || !this.body) {
        this.$message.error("제목과 본문을 작성해주세요");
        return;
      }

      apiBoard
        .postArticle(0, this.title, this.body)
        .then((response) => {
          console.log("postArticle result : ", response);
          this.$router.push({ path: "/" });
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("게시물 저장 중 오류가 발생했습니다.");
        });
    },
  },
};
</script>
