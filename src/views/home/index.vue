<script setup lang="ts" name="Demo">
import { reactive,ref } from "vue";
import { showToast } from 'vant';

const value = ref('');
const onSearch = (val) => {
  showToast(val)
  console.log('click')
};
const onCancel = () => showToast('111');


const contentList = reactive([
  "✔ ⚡ Vue3 + Vite4",
]);


const images = reactive([
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
]);
</script>

<template>
  <div class="demo-content px-[12px]">
    <van-search
        v-model="value"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <svg-icon name="edit" />
    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>
