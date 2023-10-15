<template>
            <VueMarkdownRender :source="content" /> 
</template>

<script setup>
import VueMarkdownRender from 'vue-markdown-render'
import PrismJs from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import {onMounted} from 'vue'
        defineProps(['content'])

        onMounted(()=>{
            PrismJs.highlightAll()
        })

</script>

<style lang="scss" scoped>

</style>