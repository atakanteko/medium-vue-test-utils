<template>
  <div>
    <LoginForm :isAdmin="true"/>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";
export default {
  name: 'LoginContainer',
  components: {
    LoginForm,
  },
};
</script>
