<template>
  <div class="wrapper">
    <div>
      <h1 class="title">Wasateam Simple Test</h1>
      <div>
        <h3>Description</h3>
        <p>This is Eide's simple tech test for Wasateam.</p>
      </div>
      <FetchFakeData></FetchFakeData>
      <NuxtLink to="/information">View more about Eide...</NuxtLink>
    </div>
  </div>
</template>
<script>
import FetchFakeData from '~/components/FetchFakeData.vue'
export default {
  components: {
    FetchFakeData,
  },
  head() {
    return {
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: `This page shows Fake API data fetching.`,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.title {
  color: var(--text-color-primary);
}
</style>
