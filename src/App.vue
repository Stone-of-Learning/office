<template>
  <div id="app">
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/Personnel" icon="home-o"
        >办公</van-tabbar-item
      >
      <van-tabbar-item replace to="/schedule" icon="search"
        >日程</van-tabbar-item
      >
      <van-tabbar-item replace to="/ipa" icon="home-o">通讯录</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style></style>
