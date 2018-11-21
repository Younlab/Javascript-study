<template>
    <div id="root">
        <p>{{ this.$store.getters.originalPrice }}</p>
        <p>{{ this.$store.getters.doublePrice }}</p>
        <p>{{ this.$store.getters.triplePrice }}</p>
    </div>
</template>

<script>
export default {
  computed: {
    originalPrice() {},
    doublePrice() {},
    triplePrice() {}
  }
};
</script>

<style>
</style>
