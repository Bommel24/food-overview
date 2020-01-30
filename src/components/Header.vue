<template>
  <v-container fluid>
    <v-row align-content="end" justify="space-around">
      <v-col lg="3" md="3" sm="12" cols="12">
        <span class="brand">Brandname</span>
      </v-col>
      <v-col lg="9" md="9" sm="12" cols="12">
        <Menu style="text-align: right;" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "App",
  components: {
    Menu
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
  padding: 20px;
}
</style>
<style scoped>
.brand {
  font-weight: 500;
  font-size: 1.5em;
}
</style>