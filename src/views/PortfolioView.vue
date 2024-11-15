<template>
    <Head />
    <Projects />
    <Footer />
</template>
<script>
import Head from '@/components/HeadComponent.vue';
import Footer from '@/components/FooterComponent.vue';
import Projects from '@/components/Projects.vue';

export default({
    name: 'Portfolio',
    components:{
        Head,
        Projects,
        Footer
    }
})
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
</style>