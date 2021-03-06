import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Container,
  Header,
  Aside,
  Main,
  Submenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Button,
  ButtonGroup,
  Input
} from 'element-ui'


Vue.config.productionTip = false

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Submenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Input);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
