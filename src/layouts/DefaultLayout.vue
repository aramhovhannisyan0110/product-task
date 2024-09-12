<script setup lang="ts">
import { ref } from "vue";

const selectedKeys = ref<string[]>(["1"]);
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px; overflow: hidden">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="content">
        <slot />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Created by Aram
    </a-layout-footer>
  </a-layout>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;

  .content {
    background: #fff;
    padding: 24px;
    height: 100%;
    overflow: auto;
  }
}
</style>
