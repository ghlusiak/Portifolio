<template>
    <section>
        <div class="linha"></div>
        <h2> Meus Projetos </h2>
        <div class="container">

            <div class="card">
                <div class="img">
                    <img src="../../public/3c.png" alt="3C+">
                </div>
                <div class="content">
                    <h3>CRM 3C+</h3>
                    <p>Projeto Final - Code Academy</p>
                </div>
                <div class="buttons">
                    <button class="btn">Ver Detalhes</button>
                    <button class="btn">Código Fonte</button>
                </div>
            </div>
            <div class="card">
                <div class="img">
                    <img src="../../public/materiais.png" alt="cefcm">
                </div>
                <div class="content">
                    <h3>Materiais de Construção</h3>
                    <p>Projeto Final - CEFCM</p>
                </div>
                <div class="buttons">
                    <button class="btn">Ver Detalhes</button>
                    <button class="btn">Código Fonte</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Projects"
}
</script>

<style scoped>

.linha{
    margin-top: 40px;
    margin-left: 60px;
    width: 225px;
    height: 3px;
    background-color: #242424;
}

h2{
    margin: 20px;
    padding-left: 40px;
}

h3{
    font-size: 20px;
    font-weight: 600;
}

.container {
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin: 20px;
    flex-wrap: wrap;
}

.card {
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    width: 350px;
    background-color: #f7f7f7;
    height: 350px;
    margin: 20px;
}

.img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    background-position: center;
    background-size: contain;
    border-radius: 5% 5px 0 0;
    cursor: pointer;
}

img{
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    background-position: center;
    background-size: contain;
    border-radius: 5% 5px 0 0;
    cursor: pointer;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px;
}

p {
    margin: none;
}

.buttons {
    display: flex;
    justify-content: space-around;
    margin-left: 40px;
    margin-right: 40px;
}

.btn {
    font-size: 12px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
</style>