<template>
  <div>
    <h1 v-if="checkAge" data-test="warning">Yaşınız 18'den küçük olduğu için sistemimize kayıt işleminiz gerçekleştirilememiştir.</h1>
    <h1 v-else>Kayıt başarılı!</h1>
  </div>
</template>

<script>
export default {
  name: 'ComputedComponent',
  props: {
    age: {
      type: Number,
    },
  },
  computed: {
    checkAge() {
      return this.age < 18;
    }
  },
};
</script>
