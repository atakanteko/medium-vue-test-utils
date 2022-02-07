<template>
  <h1>Emitter Component</h1>
</template>

<script>
export default {
  name: "EmitterComponent",
  methods: {
    emitMyEvent() {
      this.$emit("sendNameAge", "Alp", "20")
    }
  }
}
</script>
