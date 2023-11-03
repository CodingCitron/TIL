<template>
  <a download="관심도서.xls" :href="require(`@/assets/관심도서.xls`)">
    관심도서 다운로드
  </a>
</template>

<script>
export default {
  name: 'App',
}
</script>
