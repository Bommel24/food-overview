<template>
  <div>
    <div class="filter">
      <span>Filter:</span>
      <div class="chips">
        <v-chip
          v-for="type of types"
          :key="type.name"
          x-small
          :color="type.color"
          text-color="white"
          class="ma-1 filterChip"
          @click="type.active=!type.active"
        >
          <input type="checkbox" v-model="type.active" />
          <span class="ml-1">{{type.name}}</span>
        </v-chip>
      </div>
    </div>
    <Grid :inventory="inventory" :types="types" />
  </div>
</template>

<script>
import Grid from "@/components/Grid";
export default {
  name: "Inventory",
  components: {
    Grid
  },
  created() {
    for (let item of this.inventory) {
      item.text = this.loremText;
    }
  },
  data: () => ({
    loremText:
      "Lorem ipsum dolor sit amet, consetectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    types: [
      {
        name: "Meat",
        color: "#E73C01",
        active: true
      },
      {
        name: "Vegetable",
        color: "#2B9030",
        active: true
      },
      {
        name: "Fruit",
        color: "#F39200",
        active: true
      }
    ],
    inventory: [
      {
        name: "Apple",
        type: "Fruit",
        text: null
      },
      {
        name: "Aubergine",
        type: "Vegetable",
        text: null
      },
      {
        name: "Banana",
        type: "Fruit",
        text: null
      },
      {
        name: "Broccoli",
        type: "Vegetable",
        text: null
      },
      {
        name: "Chicken",
        type: "Meat",
        text: null
      },
      {
        name: "Orange",
        type: "Fruit",
        text: null
      },
      {
        name: "Beef",
        type: "Meat",
        text: null
      },
      {
        name: "Zucchini",
        type: "Vegetable",
        text: null
      }
    ]
  })
};
</script>
<style scoped>
.filter {
  padding-left: 57px;
}
.chips {
  display: inline-block;
}
.filterChip {
  padding: 0 8px;
}
</style>