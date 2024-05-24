<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: "",
    to: {
      name: "Home"
    }
  },
  {
    icon: "gem-o",
    title: "",
    to: {
      name: "Like"
    }
  },
  {
    icon: "user-o",
    title: "",
    to: {
      name: "User"
    }
  }
]);
</script>
