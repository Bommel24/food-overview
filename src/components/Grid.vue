<template>
  <v-container fluid>
    <v-row align-content="start" justify="start">
      <v-col lg="3" md="4" sm="6" cols="12" v-for="(item,i) of filteredInventory" :key="i">
        <Card :item="item" :type="getType(item)"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card";
export default {
  props: {
    inventory: {
      type: Array,
      required: true
    },
    types: {
      type: Array,
      required: true
    }
  },
  computed: {
    filteredInventory() {
      return this.inventory.filter(item => {
        return this.getType(item).active;
      });
    }
  },
  components: {
    Card
  },
  methods: {
    getType(item) {
      return this.types.find(type => {
        return type.name == item.type;
      });
    }
  }
};
</script>