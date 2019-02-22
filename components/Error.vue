<template>
  <div class="error">
    <div class="error-ball">
      <div></div>
      <div></div>
    </div>
    <span>加载失败</span>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped lang="less">
  .error {
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
      width: 60px;
      height: 60px;
      background: #ed4014;
      position: relative;
      border-radius: 50%;
      div {
        position: absolute;
        background: #FFF;
        border-radius: 50%;
        height: 4px;
        width: 48px;
        top: 28px;
        left: 6px;
        &:nth-child(1) {
          transform: rotateZ(45deg);
        }
        &:nth-child(2) {
          transform: rotateZ(-45deg);
        }
      }
    }
    span {
      color: #888;
      font-size: 14px;
      margin-top: 20px;
    }
  }
</style>
