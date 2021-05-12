<template>
  <div>
    <input
      v-model="interviewee"
      type="text"
      placeholder="Type 'Eide' to get data"
    />
    <button @click="fetchData">Click to fetch fake API data</button>
    <div class="card">
      <p>Interviewee：{{ name }}</p>
      <p>Age：{{ age }}</p>
      <p>Job Title：{{ jobTitle }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      jobTitle: '',
      interviewee: '',
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          'https://mocki.io/v1/48221e00-2e99-40cd-bb36-8f3b3b8b3cc3'
        )
        if (!response.ok) {
          throw new Error('Fetch Fake API Error!')
        }
        const data = await response.json()
        const interviewees = data.interviewees
        this.name = 'Not Found'
        this.age = 'Not Found'
        this.jobTitle = 'Not Found'
        for (const person of interviewees) {
          if (person.name === this.interviewee) {
            this.name = person.name
            this.age = person.age
            this.jobTitle = person.jobTitle
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  background-color: var(--bg-color-secondary);
  margin: 30px 0;
  padding: 1rem;
  border-radius: 5px;
  p {
    color: var(--text-color-white);
    font-size: 2rem;
  }
}
</style>
