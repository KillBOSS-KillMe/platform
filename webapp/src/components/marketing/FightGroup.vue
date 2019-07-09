<template>
  <div class="con">
    拼团
  </div>
</template>

<script>
export default {
  name: "fightGroup",
  components: {
    // HelloWorld
  },
  data() {
    return {
      domList: [],
      isOpenWind: true //点击X关闭窗口
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
.con {
  width: 93rem;
  height: auto;
  margin-left: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
}

</style>