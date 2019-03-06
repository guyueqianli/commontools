<template>
  <div>
    <el-row class="common-conds">
      <div class="time-title">现在的Unix时间戳(Unix timestamp)是 : </div>
      <el-input v-model="timestamp" class="time-input" readonly></el-input>
      <el-button class="time-button" size="mini" @click="start">开始</el-button>
      <el-button class="time-button" size="mini" @click="stop">停止</el-button>
      <el-button class="time-button" size="mini" @click="reset">刷新</el-button>
    </el-row>
    <el-row class="common-conds">
      <el-row class="change-common">
        <div class="change-title">Unix时间戳（Unix timestamp）: </div>
        <el-input v-model="opttimestamp" class="change-input"></el-input>
        <el-button class="change-button" size="medium" @click="changeBjtime">转换成北京时间</el-button>
        <el-input v-model="bjtime" class="change-input" readonly></el-input>
      </el-row>
      <el-row class="change-common">
        <div class="change-title">北京时间（年-月-日 时:分:秒）: </div>
        <el-input v-model="optbjtime" class="change-input"></el-input>
        <el-button class="change-button" size="medium" @click="changeUnixtime">转换成时间戳</el-button>
        <el-input v-model="totimestamp" class="change-input" readonly></el-input>
      </el-row>
    </el-row>
  </div>
</template>
<script>
    export default {
        name: 'Unixtime',
        mounted() {
            this.start();
        },
        data() {
            return {
                timestamp: '',
                time: 0,
                opttimestamp: '',
                bjtime: '',
                optbjtime: '',
                totimestamp: ''
            }
        },
        methods: {
            showTime() {
                this.timestamp = parseInt((new Date().getTime()) / 1000);
            },
            start() {
                clearInterval(this.time);
                this.time = setInterval(this.showTime, 500);
            },
            stop() {
                clearInterval(this.time);
            },
            reset() {
                this.showTime();
            },

            // 将 时间戳 转换成 北京时间
            changeBjtime() {
                let d = new Date(this.opttimestamp * 1000);
                let month = '' + (d.getMonth() + 1);
                let day = '' + d.getDate();
                let year = '' + d.getFullYear();
                let hour = '' + d.getHours();
                let minute = '' + d.getMinutes();
                let second = '' + d.getSeconds();
                month = month.length < 2 ? '0' + month : month;
                day = day.length < 2 ? '0' + day : day;
                hour = hour.length < 2 ? '0' + hour : hour;
                minute = minute.length < 2 ? '0' + minute : minute;
                second = second.length < 2 ? '0' + second : second;
                this.bjtime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            },

            // 将 北京时间 转化成 时间戳
            changeUnixtime() {
                let date = new Date(this.optbjtime);
                this.totimestamp = parseInt(Date.parse(date) / 1000);
            },
        }
    }
</script>

<style scoped>
  /* 公共区域 */
  .common-conds {
    margin-top: 20px;
    padding: 20px 10px 25px 40px;
    background: #fafafa;
    font-size: 14px;
    border: 1px solid #dcdcdc;
  }
  .time-title {
    margin-left: 200px;
    height: 50px;
    line-height: 50px;
    width: 250px;
    float: left;
  }
  .time-input {
    margin-left: 10px;
    height: 50px;
    line-height: 50px;
    width: 150px;
    float: left;
  }

  /* scoped 下 不影响其他地方的写法 >>> */
  .time-input >>> .el-input__inner {
    color: #dd6161;
    height: 35px;
    line-height: 35px;
  }


  .time-button {
    margin-left: 10px;
    margin-top: 9px;
    float: left;
  }

  /* 内容改变区域 */
  .change-common {
    padding: 10px 0 10px 0;
  }

  .change-title {
    margin-left: 100px;
    height: 50px;
    line-height: 50px;
    width: 250px;
    float: left;
  }

  .change-input {
    margin-left: 10px;
    height: 50px;
    line-height: 50px;
    width: 200px;
    float: left;
  }

  .change-button {
    margin-left: 10px;
    margin-top: 6px;
    width: 150px;
    float: left;
  }
</style>
