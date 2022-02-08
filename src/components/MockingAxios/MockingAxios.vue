<template>
  <div>
    <form @submit.prevent="getTodo">
      <input type="number" v-model.number="todoId" data-id>
      <input type="submit">
    </form>
    <div v-if="todo">
      <h1 data-title>{{this.todo.title}}</h1>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "MockingAxios",
  data() {
    return {
      todoId: '',
      todo: null,
    }
  },
  methods: {
    async getTodo() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.todoId}`)
        this.todo  = response.data
        console.log(this.todo)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
