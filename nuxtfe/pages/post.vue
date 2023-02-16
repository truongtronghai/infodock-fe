<template>
  <div>
    <GhostWindPost />
    <GhostWindFooter />
  </div>
</template>
<script>
import GhostWindFooter from '~/components/GhostWindFooter.vue'
import GhostWindPost from '~/components/GhostWindPost.vue'

export default {
  name: 'PostPage',
  comments: {
    GhostWindFooter,
    GhostWindPost,
  },
  components: { GhostWindFooter },
}
</script>
