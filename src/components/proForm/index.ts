import Vue from 'vue';
import ProForm from '@/component/proForm/src/ProForm.vue';
import ProLayout from '@/component/proForm/src/ProLayout.vue';
import ProFormItem from '@/component/proForm/src/ProFormItem.vue';

// 直接在入口处全局注册组件,避免递归嵌套引用报错
Vue.component('ProFormItem', ProFormItem);
Vue.component(ProLayout.name, ProLayout);

export default ProForm;
