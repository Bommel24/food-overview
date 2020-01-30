<template>
  <v-app>
    <div class="app">
      <Header class="header" />
      <Inventory />
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Inventory from "@/components/Inventory";
export default {
  name: "App",
  components: {
    Header,
    Inventory
  }
};
</script>
<style scoped>
.app {
  background-color: #c8c8c8;
  padding: 10px;
  height: 100%;
}
.header {
  padding: 40px;
}
</style>