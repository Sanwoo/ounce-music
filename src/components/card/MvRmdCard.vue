<template>
  <div class="mv-rmd-card" @click="toMain(info.id)" ref="contain">
    <div class="_cover" ref="cover">
      <img
        :src="info.picUrl + rectangleImgSize"
        v-if="info.picUrl"
        v-img-lazyload
        alt
      />
      <span>{{ info.artistName }}</span>
    </div>
    <p>{{ info.name }}</p>
  </div>
</template>

<script>
export default {
  name: "mvrmdcard",
  props: {
    info: Object,
  },
  methods: {
    toMain(id) {
      let { cover, contain } = this.$refs,
        query = {
          id,
          cover: cover.getBoundingClientRect(),
          contain: contain.getBoundingClientRect(),
        };
      this.$router.push({
        path: "/home/mvdetail",
        query,
      });
    },
  },
};
</script>

<style scoped lang="less">
.mv-rmd-card {
  display: inline-flex;
  flex-direction: column;
  width: 220px;
  height: 180px;
  margin-left: 16px;
  &:last-child {
    margin-right: 16px;
  }
  ._cover {
    position: relative;
    width: 100%;
    flex: 1;
    overflow: hidden;
    border-radius: 8px;
    background: #def;
    span {
      position: absolute;
      right: 6px;
      top: 6px;
      padding: 2px 4px;
      font-size: 10px;
      background: crimson;
      border-radius: 4px;
    }
  }
  & > p {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.9);
    overflow: hidden;
  }
}
</style>
