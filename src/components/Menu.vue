<template>
  <div class="menu">
    <a
      v-for="item of menuItems"
      :key="item.name"
      :href="item.href"
      class="menuItem"
      :class="{menuItemActive: item.active}"
    >{{item.name}}</a>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    menuItems: [
      {
        name: "Menu Item 1",
        href: "#",
        active: true
      },
      {
        name: "Menu Item 2",
        href: "#",
        active: false
      },
      {
        name: "Menu Item 3",
        href: "#",
        active: false
      },
      {
        name: "Menu Item 4",
        href: "#",
        active: false
      },
      {
        name: "Menu Item 5",
        href: "#",
        active: false
      },
      {
        name: "Menu Item 6",
        href: "#",
        active: false
      }
    ]
  })
};
</script>

<style scoped>
.menu {
  margin-top: 10px;
  word-break: break-word;
}
.menuItem {
  text-decoration: inherit;
  color: black;
  margin-left: 20px;
  white-space: nowrap;
}
.menuItemActive {
  text-decoration: underline;
  color: black;
}
</style>