<template>
  <div class="loading">
    <div class="loading-ball">
      <div></div>
    </div>
    <span>加载中</span>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped lang="less">
  .loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-ball {
      div {
        height: 64px;
        width: 64px;
        background: #2d8cf0;
        border-radius: 50%;
        animation: ani 1.6s infinite;
        transform: scale(0, 0);
      }
    }
    span {
      color: #888;
      font-size: 14px;
      margin-top: 20px;
    }
  }
  @keyframes ani {
    0 {
      transform: scale(0, 0);
      opacity: 1;
    }
    80% {
      transform: scale(1, 1);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1);
      opacity: 0;
    }
  }
</style>
