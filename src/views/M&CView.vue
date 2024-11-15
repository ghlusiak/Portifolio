<template>
    <Materiais />
    <Footer />
</template>
<script>
import Footer from '@/components/FooterComponent.vue';
import Materiais from '@/components/MateriaisProject.vue';

export default({
    name: 'M&CProject',
    components:{
        Materiais,
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