<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="username" data-username>
      <input v-model="password" data-password>
      <input type="submit">
    </form>

    <div
        class="message"
        v-if="submitted"
    >
      welcome, {{ username }}.
    </div>
  </div>
</template>


<script>
export default {
  name: "UserInput",

  data() {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    checkInputs(){
      return this.username.length > 0 && this.password.length > 0
    }
  },
  methods: {
    login() {
      this.submitted = this.checkInputs
    }
  }
}
</script>
