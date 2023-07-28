<template>
  <div class="base-header container">
    <ul>
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/peoples"><li>Peoples</li></router-link>
      <router-link to="/favorites"> <li>Favorites</li></router-link>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseHeader',
});
</script>

<style lang="scss" scoped>
.base-header {
  ul {
    display: flex;
    gap: 20px;
  }

  li {
    list-style-type: none;
    background: lightgray;
    padding: 10px 20px;
    border-radius: 10px;

    &:hover {
      background: gray;
    }
  }
}
</style>
