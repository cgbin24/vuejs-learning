
// 导入组件
import { Toast } from 'mint-ui';
// 导入 bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 按需导入mint-ui
import { Button } from 'mint-ui';
// 使用 Vue.component 注册按钮插件
Vue.component('mybtn', Button);

// 导入 mui 样式表，和bootstrap样式没区别
import './lib/mui/css/mui.min.css'





export default{
  data() {
    return {
        toastInstance: null
    };
  },
  created() {
      this.show();
  },
  methods: {
    getList(){
        setTimeout(function(){
            this.toastInstance.close();
        },3000)
    },
    show(){
      this.totalInstance = Toast({
        message: '这是提示',
        position: 'top',
        duration: 1000, // 设置时长
        iconClass: 'icon icon-success', // 自定义 Toast的样式， 需要自己提供一个类名
        className: "mytoast"
      });
    }
  },
}