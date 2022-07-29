<template>
  <div id="app">
    <router-view />

    <van-tabbar routes v-model="active">
      <van-tabbar-item  to="/Personnel" icon="home-o"
        >办公</van-tabbar-item
      >
      <van-tabbar-item  to="/schedule" icon="search"
        >日程</van-tabbar-item
      >
      <van-tabbar-item  to="/ipa" icon="home-o">通讯录</van-tabbar-item>
      <van-tabbar-item  to="/my" icon="search">我的</van-tabbar-item>
    </van-tabbar>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>


<style></style>
