<template>
  <div class="app">
    <BaseHeader />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseHeader from '@/components/Base/BaseHeader.vue';

export default defineComponent({
  name: 'App',
  components: { BaseHeader },
});
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
}
</style>
