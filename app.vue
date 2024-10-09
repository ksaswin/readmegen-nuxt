<template>
  <div>
    <navigation></navigation>
    <nuxt-page></nuxt-page>
  </div>
</template>

<style lang='scss'>
body {
  @apply bg-[#EFF1F5] dark:bg-[#1E1E2E] text-[#4C4F69] dark:text-[#CDD6F4];
}

a {
  @apply text-[#1E66F5] dark:text-[#89B4FA];
}

.markdown-preview {
  * {
    @apply mb-1;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-semibold;
  }

  h1, h2, h3 {
    @apply border-b border-[#BCC0CC] dark:border-[#45475A];
  }

  h1, h2, h3, h4 {
    @apply my-4 pb-2;
  }

  h1 {
    @apply text-3xl;
  }

  h2 {
    @apply text-2xl;
  }

  h3 {
    @apply text-xl;
  }

  p {
    @apply mb-4;
  }

  code {
    @apply px-2 py-1 rounded text-sm bg-[#DCE0E8] dark:bg-[#45475A];
  }

  pre {
    @apply w-full mb-4;
  }

  pre > code {
    @apply p-4 block w-full overflow-scroll;
  }

  ul, ol {
    @apply ml-9 mb-4;
  }

  ul li {
    @apply list-disc;
  }

  ol li {
    @apply list-decimal;
  }

  table {
    @apply table-auto border border-collapse;

    th, td {
      @apply px-2 border border-[#BCC0CC] dark:border-[#45475A] even:bg-[#CCD0DA] dark:even:bg-[#313244];
    }
  }
}
</style>
