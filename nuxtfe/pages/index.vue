<template>
  <div>
    <GhostWindHeader />
    <GhostWindContainer />
  </div>
</template>

<script>
import GhostWindContainer from '~/components/GhostWindContainer.vue'
import GhostWindHeader from '~/components/GhostWindHeader.vue'

export default {
  name: 'IndexPage',
  components: { GhostWindHeader, GhostWindContainer },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Vue-Nuxt Frontend',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description' + process.env.API_URL,
        },
      ],
    }
  },
  mounted() {},
}
</script>
