export { default as App } from '../../components/App.vue'
export { default as BlogComponent } from '../../components/BlogComponent.vue'
export { default as Carousel } from '../../components/Carousel.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Form } from '../../components/Form.vue'
export { default as Header } from '../../components/Header.vue'
export { default as TypebotContact } from '../../components/TypebotContact.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
