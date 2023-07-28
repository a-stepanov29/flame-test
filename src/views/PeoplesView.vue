<template>
  <div class="peoples container">
    <BaseInput
      v-model.trim="searchName"
      placeholder="Введите имя"
      @input="debounceHandleSearchFilter"
    />
    <div class="peoples__list-container">
      <div v-if="pending">Идет подгрузка списка. Ожидайте</div>

      <table class="peoples__list" v-else>
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
          <tr v-for="people of peoples" :key="people.created">
            <td>{{ people.name }}</td>
            <td>{{ people.height }}</td>
            <td>{{ people.mass }}</td>
            <td>{{ people.hair_color }}</td>
            <td><button @click="addToFavorite(people)">Add/Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { defineComponent } from 'vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import { togglePeople } from '../helper/index';

export default defineComponent({
  name: 'PeoplesView',
  components: { BaseInput },
  async mounted() {
    if (!this.$store.state.peoples.length) {
      await this.$store.dispatch('fetchPeoples');
    }
    this.pending = false;
  },
  computed: {
    peoples() {
      return this.$store.state.peoples;
    },
  },
  methods: {
    debounceHandleSearchFilter: _.debounce(function debounceAction() {
      this.inputHandler();
    }, 500),
    inputHandler() {
      this.$store.dispatch('fetchPeoplesBySearch', this.searchName);
    },
    togglePeople,
    addToFavorite(people) {
      this.$store.commit('TOGGLE_FAVORITE', people);
      const favorites = localStorage.getItem('favorites');
      if (favorites) {
        this.togglePeople(favorites, people);
      } else {
        localStorage.setItem('favorites', JSON.stringify([people]));
      }
    },
  },
  data() {
    return {
      searchName: '',
      newPeoples: [],
      pending: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.peoples {
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
