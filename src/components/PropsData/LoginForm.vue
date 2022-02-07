<template>
  <div>
    <div v-if="isAdmin" data-test="admin-form">Admin Form Design</div>
    <div v-else data-test="user-form">User Form Design</div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
  },
};
</script>
