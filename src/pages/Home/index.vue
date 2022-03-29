<template>
  <div>
    <TapNav></TapNav>
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";
import {mapState} from 'vuex'
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor,
  },
  mounted() {
    this.$store.dispatch('getfloorList')
  },
  computed: {
    ...mapState({
      floorList: (state) => {state.home.floorList},
    })
  }
};
</script>

<style>
</style>