<template>
  <Nuxt />
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ],
    }
  },
}
</script>
