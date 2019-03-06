<template>
  <div id="app">
    <el-container>
      <el-header>
        <p class="header-name">常用工具集合</p>
      </el-header>
      <el-container>
        <el-aside style="width: 200px;">
          <el-menu router class="el-menu-vertical-demo">
            <el-menu-item index="unixtime">
              <i class="el-icon-time"></i>
              <span slot="title">Unix 时间戳</span>
            </el-menu-item>
            <el-menu-item index="urlcode">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">URL 编码/解码</span>
            </el-menu-item>
            <el-menu-item index="jsonformat">
              <i class="el-icon-view"></i>
              <span slot="title">JSON 格式化</span>
            </el-menu-item>
            <el-menu-item index="qrcode">
              <i class="el-icon-menu"></i>
              <span slot="title">二维码生成器</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style  scoped src="./style/home.css">
</style>
