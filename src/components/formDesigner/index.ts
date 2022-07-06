import Vue from 'vue';
import '@/icons/autoImportSvg'; // 自动导入src/icon目录下的svg图标
import ProFormItem from '@/component/proForm/src/ProFormItem.vue';
import ProLayout from '@/component/proForm/src/ProLayout.vue';
import WidgetFormItem from './src/WidgetFormItem.vue';
import WidgetLayout from './src/WidgetLayout.vue';
import FormDesigner from './src/FormDesigner.vue';

// 直接在入口处全局注册组件,避免递归嵌套引用报错
// @ts-ignore
Vue.component(WidgetFormItem.name, WidgetFormItem);
Vue.component(WidgetLayout.name, WidgetLayout);
Vue.component('ProFormItem', ProFormItem);
Vue.component(ProLayout.name, ProLayout);

export default FormDesigner;
