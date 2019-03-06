<template>
  <div>
    <el-row>
      <el-col :span="10" class="json-border">
        <div id="jsoneditortext"></div>
      </el-col>
      <el-col :span="2" style="text-align: center">
          <el-row class="button-common">
            <el-button size="mini" @click="changeJson('right')" icon="el-icon-caret-right"></el-button>
          </el-row>
          <el-row class="button-common">
            <el-button size="mini" @click="changeJson('left')" icon="el-icon-caret-left"></el-button>
          </el-row>

      </el-col>
      <el-col :span="10" class="json-border">
        <div id="jsoneditor"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        name: 'Jsonformat',
        mounted() {
            this.showJsonText();
            this.showJson();
        },
        data() {
            return {
                jsonText: {
                    Array: [1, 2, 3],
                    Boolean: true,
                    Null: null,
                    Number: 123,
                    Object: {
                        a: 'b',
                        c: 'd'
                    },
                    String: 'Hello World'
                },
                json: {
                    Array: [1, 2, 3],
                    Boolean: true,
                    Null: null,
                    Number: 123,
                    Object: {
                        a: 'b',
                        c: 'd'
                    },
                    String: 'Hello World'
                },
                editorText: '',
                editor: ''
            }
        },
        methods: {
            showJsonText() {
                let container = document.getElementById("jsoneditortext");
                let options = {};
                this.editorText = new this.$jsoneditor(container, options);
                this.editorText.setMode('text')
                this.editorText.set(this.jsonText);
            },
            showJson() {
                let container = document.getElementById("jsoneditor");
                let options = {};
                this.editor = new this.$jsoneditor(container, options);
                this.editor.set(this.json);
            },
            changeJson(type) {
                console.log(type)
                if(type === 'left') {
                    this.editorText.set(this.editor.get());
                } else if(type === 'right') {
                    this.editor.set(this.editorText.get());
                }
            }
        }
    }
</script>

<style scoped>
  /* 公共的json框属性 */
  .json-border {
    height: 600px;
  }
  #jsoneditortext {
    height: 100%;
  }
  #jsoneditor {
    height: 100%;
  }
  .button-common {
    margin-top: 100px;
  }



</style>
