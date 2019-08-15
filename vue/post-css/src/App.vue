<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="postcss">
:root {
  /* 定义变量 */
  --color: #e2e2e2;

  /* 定义一组属性 */
  --fontStyle: {
    font-size: 12px;
    color: #fff;
  }

  /* 定义媒体查询条件 */
  @custom-media --set-viewport (min-width : 300px);
}

body {
  background: var(--color);
  @apply --fontStyle;
}

@media (--set-viewport) {
  body {
    min-width: 300px;
  }
}

@media (width >= 500px) and (width <= 2000px) {
  body {
    min-width: 500px;
  }
}
</style>

