<template>
    <codemirror ref="myCm" style="height: 100%;" :value="code" :options="cmOptions" @ready="onCmReady" @input="onCmCodeChange">
    </codemirror>
</template>
<script>
import { codemirror } from "vue-codemirror";
// require styles
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/lib/codemirror";
import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/search/searchcursor";
import "codemirror/addon/search/search";
import "codemirror/addon/display/placeholder";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/hint/anyword-hint";
export default {
  name: "sqlCodemirror",
  components: {
    codemirror
  },
  data() {
    return {
      code: `SELECT Persons.LastName,Orders.OrderNo
INTO Persons_Order_Backup
FROM Persons
INNER JOIN Orders
ON Persons.Id_P=Orders.Id_P`,
      cmOptions: {
        lineNumbers: true,
        indentUnit: 4,
        autofocus: true,
        styleActiveLine: true,
        matchBrackets: true,
        mode: "text/x-mysql",
        lineWrapping: true,
        theme: "3024-day",
        extraKeys: {
          Ctrl: "autocomplete"
        },
        foldGutter: true,
        placeholder: "Please end with ';'"
      }
    };
  },
  methods: {
    onCmReady(cm) {
      cm.on("keypress", () => {
        cm.showHint();
      });
    },
    onCmCodeChange(newCode) {
      this.code = newCode;
    }
  }
};
</script>

<style lang="scss">
.CodeMirror-wrap {
  height: 100%;
  .CodeMirror-code {
      padding-left: 3px;
  }
}
</style>

