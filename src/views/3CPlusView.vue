<template>
    <TresC />
    <Footer />
</template>
<script>
import Footer from '@/components/FooterComponent.vue';
import TresC from '@/components/3CProject.vue'

export default({
    name: '3CProject',
    components:{
        Footer,
        TresC
    }
})
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
</style>