// button.vue
<template>
  <button class="wq-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
// 使用 defineOptions 配置组件名称
defineOptions({ name: "wq-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`wq-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
