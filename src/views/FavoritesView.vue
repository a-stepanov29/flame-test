<template>
  <div class="favorites container">
    <h1>Избранное</h1>
    <table class="favorites__list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>hair_color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="people of favorites" :key="people.created">
          <td>{{ people.name }}</td>
          <td>{{ people.height }}</td>
          <td>{{ people.mass }}</td>
          <td>{{ people.hair_color }}</td>
          <td><button @click="deletePeople(people)">Удалить персонажа</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { togglePeople } from '../helper/index';

export default {
  name: 'FavoritesView',
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  mounted() {
    const favorites = localStorage.getItem('favorites');
    if (!this.$store.state.favorites.length && favorites) {
      this.$store.commit('SET_FAVORITES', JSON.parse(favorites));
    }
  },
  methods: {
    togglePeople,
    deletePeople(people) {
      const favorites = localStorage.getItem('favorites');
      this.$store.commit('TOGGLE_FAVORITE', people);
      this.togglePeople(favorites, people);
    },
  },
};
</script>

<style lang="scss" scoped>
.favorites {
  &__list-container {
    margin-top: 20px;
  }

  &__list {
    margin-top: 20px;

    td {
      padding: 6px 20px;
      border: 1px solid #333;
    }

    thead,
    tfoot {
      background-color: rgba(44, 22, 22, 0.22);
      color: #fff;
    }
  }
  margin-top: 20px;
}
</style>
