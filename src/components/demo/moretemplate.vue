<template>
    <moretemplate></moretemplate>
</template>
<script lang="ts">
import Moretemplate from '@/components/moretemplate/moretemplate.vue';
import { templates } from './data'

export default {
    components: {
        Moretemplate
    },
    setup() {

        const ts = templates
        return {
            ts
        }
    },
    methods: {

    }
}

</script>


<style></style>
