<template>
  <div class="con">
    自提
  </div>
</template>

<script>
export default {
  name: "extract",
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
  width: 81rem;
  height: auto;
  margin-left: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
}

</style>