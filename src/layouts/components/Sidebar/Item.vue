
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    color:{
      type: String,
      default: ''
    }
  },
  render (createElement, context) {
    
    const { icon, title,color } = context.props
    const vnodes = []
    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon,color, 'sub-el-icon']} style={{color:color}}/>)
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }
    if (title) {
      vnodes.push(<span slot='title' style={{color:color}}>{(title)}</span>)
    }
    return vnodes
  }
}
</script>

<style lang="scss" scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
