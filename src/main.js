import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/element-ui/index.css';
import 'jsoneditor/dist/jsoneditor.min.css';
import 'jsoneditor/dist/jsoneditor.min';
import jsoneditor from 'jsoneditor';



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

Vue.config.productionTip = false;
Vue.prototype.$jsoneditor = jsoneditor;

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
});