<template>
  <nav class='flex justify-between items-center p-4'>
    <div class='flex flex-col items-center'>
      <u-icon name='i-mdi-language-markdown-outline' class='w-10 h-10'></u-icon>
      <small class='text-xs'>
        A
        <a href='https://readme.so' target='_blank'>readme.so</a>
        clone
      </small>
    </div>
    <div class='flex items-center content-center gap-8'>
      <u-toggle
        id='theme-toggle'
        off-icon='i-heroicons-sun-20-solid'
        on-icon='i-heroicons-moon-20-solid'
        v-model='isDark'
        :ui='{
          inactive: "bg-[#7287FD]",
          active: "dark:bg-[#B4BEFE]",
          icon: { off: "text-[#DC8A78]", on: "dark:text-[#CBA6F7]" }
        }'
      >
      </u-toggle>

      <u-tooltip v-for='(link, i) in repoLinks.links' :key='`repolink-${i}`' :text='link.info'>
        <u-button
          class='scale-125 max-md:hidden hover:text-[#1E66F5] hover:dark:text-[#89B4FA] hover:bg-transparent hover:dark:bg-transparent'
          variant='ghost'
          target='_blank'
          :icon='link.icon'
          :class='link.styles'
          :to='link.to'
        >
        </u-button>
      </u-tooltip>
    </div>
  </nav>
</template>

<script setup lang='ts'>
const colorMode = useColorMode();

const repoLinks = {
  label: 'REPOSITORY',
  links : [
    {
      info: 'View on Github',
      to: 'https://github.com/vuejs/docs', // TODO: Use the repository url instead
      icon: 'i-mdi-github-box',
      styles: 'text-[#FE640B] dark:text-[#FAB387]'
    },
    {
      info: 'Star the repository',
      to: 'https://github.com/vuejs/docs', // TODO: Use the repository url instead
      icon: 'i-ph-shooting-star-fill',
      styles: 'text-[#DD7878] dark:text-[#F2CDCD]'
    },
  ]
};

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
</script>
