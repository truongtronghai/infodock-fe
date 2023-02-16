<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error', // If you need to do, you can set a custom layout for the error page by changing this value
  // props: ['error'], // use this props to work with errors
  data() {
    return {
      error: {
        statusCode: 404,
      },
    }
  },
}
</script>
