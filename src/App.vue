<template>
  <div>
    <MyHeader title="购物车" background="purple" color="#fff"></MyHeader>
    <div class="main">
      <MyGoods :gObj="obj" v-for="obj in list" :key="obj.id"></MyGoods>
    </div>

    <MyFooter @changeFn="allFn" :arr="list"></MyFooter>
  </div>
</template>

<script type = "text/ecmascript-6">
import MyHeader from "./components/MyHeader.vue";
import MyGoods from "./components/MyGoods.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getList() {
      const res = await this.$axios({
        url: "/api/cart",
      });
      this.list = res.data.list;
    },
    allFn(bool) {
      this.list.forEach((obj) => {
        obj.goods_state = bool;
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>