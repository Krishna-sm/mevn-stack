<template>
    <div>
        this is sigle blog page and id is {{ router.params.id }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

        const router = useRoute();
        console.log({s:router.params});
</script>

<style lang="scss" scoped>

</style>