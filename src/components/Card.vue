<template>
  <v-card tile class="mx-auto" width="300">
    <div class="align-end placeholderImage"></div>
    <v-card-title>
      {{item.name}}
      <v-spacer></v-spacer>
      <v-chip small :color="type.color" text-color="white" class="typeChip">{{type.name}}</v-chip>
    </v-card-title>
    <v-card-text class="text--primary">{{item.text}}</v-card-text>
    <v-card-actions class="moreInfo">
      <v-icon class="moreInfoIcon" :color="type.color">mdi-chevron-right</v-icon>
      <span class="moreInfoText">More info</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.placeholderImage {
  height: 200px;
  background-color: #777777;
}
.typeChip {
  font-weight: 300;
}
.moreInfo {
  padding: 14px;
  cursor: pointer;
}
.moreInfoIcon {
  margin-left: 0px;
  transition: margin-left 0.3s ease;
}
.moreInfo:hover > .moreInfoIcon {
  margin-left: 6px;
}
.moreInfoText {
  font-size: 0.9em;
  margin-left: 0px;
  transition: margin-left 0.3s ease;
}
.moreInfo:hover > .moreInfoText {
  margin-left: 4px;
}
</style>