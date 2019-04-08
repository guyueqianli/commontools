<template>
  <div>
    <el-row class="content">
      <el-input
        type="textarea"
        rows="10"
        placeholder="请输入内容"
        v-model="textarea"
        resize="none"></el-input>
      <div class="content-button">
        <el-button type="primary" plain round @click="resetUrlencode">UrlEncode编码</el-button>
        <el-button type="primary" plain round @click="resetUrldecode">UrlDecode解码</el-button>
        <el-button type="text" @click="emptyText">清空结果</el-button>
      </div>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'UnixTime',
    data() {
      return {
        textarea: ''
      }
    },
    methods: {
      resetUrlencode() {
        if(this.textarea !== '') {
          this.textarea = encodeURIComponent(this.textarea)
        }
      },
      resetUrldecode() {
        if(this.textarea !== '') {
          this.textarea = decodeURIComponent(this.textarea)
        }
      },
      emptyText() {
        this.textarea = ''
      }
    }
  }
</script>

<style scoped>
  .content {
    margin-top: 20px;
    padding: 40px 100px;
    background: #fafafa;
    font-size: 14px;
    border: 1px solid #dcdcdc;
  }
  .content-button {
    margin-top: 40px;
    text-align: center;
  }

</style>
