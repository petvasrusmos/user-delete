<template>
  <div>
    <h3>Некий список</h3>
    <div class="leaderboard">
      <ul class="leaderboard__profiles">
        <li v-for="user in users" :key="user.id" class="leaderboard__profile">
          <span>{{ user.name }}</span>
          <svg-icon
          class="leaderboard__icon"
          type="mdi"
          :path="icon"
          @click="deleteGuy(user.id)"
        />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mdiDeleteOutline } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  setup () {
    const icon = mdiDeleteOutline
    console.log(mdiDeleteOutline)
    const store = useStore()
    console.log(store)
    console.log(store.getters.allUsers)
    const deleteGuy = function (id) {
      store.commit('deleteUser', id)
      console.log('deleted', id)
    }
    return {
      users: computed(() => store.getters.allUsers),
      icon,
      deleteGuy
    }
  },
  components: {
    SvgIcon
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list {
  display: flex;
  flex-flow: column;
  &__item {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
}
.leaderboard {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  &__profiles {
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    width: 100%;
    max-width: 300px;
  }

  &__profile {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    cursor: pointer;
    transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
    background-color: #fff;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }
  }
  &__icon {
    &:hover {
      transform: scale(1.2);
    }
  }
}

</style>
