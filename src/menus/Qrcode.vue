<template>
  <div>
    <el-row class="content">
      <div class="content-left">
        <el-input
          type="textarea"
          rows="12"
          placeholder="请输入内容"
          v-model="textData"
          resize="none"></el-input>
        <div class="content-button">
          <el-button type="primary" plain round @click="buildQrcode">生成二维码</el-button>
          <el-button type="text" @click="emptyText">清空结果</el-button>
        </div>
      </div>
      <div class="content-right">
        <div id="qrcode"></div>
        <div class="content-label">此处生成二维码</div>
      </div>
    </el-row>
  </div>
</template>
<script>
  import QRCode from 'qrcodejs2'
  export default {
    name: 'Qrcode',
    components: {
      QRCode
    },
    data() {
      return {
        textData: '',
      }
    },
    methods: {
      buildQrcode() {
        if(this.textData !== '') {
          document.getElementById('qrcode').innerHTML = ''
          let qrcode = new QRCode('qrcode', {
            width: 250, //图像宽度
            height: 250, //图像高度
            colorDark : "#000000", //前景色
            colorLight : "#ffffff", //背景色
            text: this.textData,
            typeNumber:4,
            correctLevel : QRCode.CorrectLevel.H
          });
        }
      },
      emptyText() {
        this.textData = ''
        document.getElementById('qrcode').innerHTML = ''
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
  .content-left {
    width: 60%;
    margin-right: 100px;
    float: left;
  }
  .content-button {
    margin-top: 40px;
    text-align: center;
  }
  .content-right {
    width: 250px;
    height: 250px;
    float: left;
    background: #fff;
    text-align: center;
  }
  .content-label {
    margin-top: 20px;
    color: #8c939d;
  }
  #qrcode {
    width: 250px;
    height: 250px;
  }

</style>
