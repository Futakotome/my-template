<template>
  <div v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}"  @click="hanleClick(item)">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title"  :color="item.redirect&&$route.fullPath === item.redirect ? variables.menuActiveText : ''"/>
        </el-menu-item>
      </app-link>
    </template>
    <div v-else @click="hanleClick(item)">
      <el-submenu  ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
          <item  v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" :color="item.path.split('/')[1]===$route.fullPath.split('/')[1]? '#f4f4f5' : ''" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
         @click="hanleClick(item)"
      />
    </el-submenu>
    </div>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/layouts/components/utils/validate'
import Item from './Item'
import AppLink from './Link'
import variables from '@/layouts/styles/variables.scss'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    },
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  data () {
    this.onlyOneChild = null
    return {}
  },
  computed: {
    variables () {
      return variables
    },
  },
  methods: {
    hanleClick(item,){
      console.log(111,item.path.split('/')[1],222,this.$route.fullPath.split('/')[1])
    },
    hasOneShowingChild (children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
