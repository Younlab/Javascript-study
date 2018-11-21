<template>
    <header>
        <h1>{{ this.headerText }}</h1>
    </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["headerText"])
  }
};
</script>

<style lang="scss" scoped>
header {
  h1 {
    color: #2f3b52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
}
</style>
