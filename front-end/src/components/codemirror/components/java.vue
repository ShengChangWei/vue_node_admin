<template>
    <codemirror style="height: 100%;" v-model="code" :options="cmOptions"></codemirror>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/mode/clike/clike.js";
export default {
  name: "javaCodemirror",
  components: {
    codemirror
  },
  data() {
    return {
      code: `
    public class Test003 {
            public static void main(String[] args) {
                int i = 5;
                System.out.println(0/i);   
                System.out.println(0%i); 
                System.out.println(i/0);    
                System.out.println(i%0);    
            }
    }`,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/x-java",
        theme: "mdn-like",
        lineNumbers: true,
        line: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    };
  }
};
</script>

<style lang="scss">
.CodeMirror {
  height: 100%;
}
.CodeMirror-wrap {
  height: 100%;
  .CodeMirror-code {
    padding-left: 3px;
  }
}
</style>

