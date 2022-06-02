<template>
  <el-tabs class="tabs" v-model="activeName" :tab-position="widget.options.position" :type="widget.options.type" style="width: 100%">
    <el-tab-pane :key="widget.name" v-for="widget in widget.items" :label="widget.label" :name="widget.name" lazy>
      <template v-for="(item, index) in widget.list">
        <!--        todo ProLayout-->
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Tabs',
})
export default class GenerateTabs extends Vue {
  @Prop({
    type: Object,
    default: () => ({}),
  })
  widget!: any;

  activeName = this.widget.items[0].name;
}
</script>

<style lang="scss" scoped></style>
