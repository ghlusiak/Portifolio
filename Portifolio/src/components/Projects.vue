<template>
    <div class="container">
        <h2> Meus Projetos </h2>

        <div class="card">
            <div class="img">
                <img src="" alt="Project Image">
            </div>
            <div class="content">
                <h3>Título do Projeto</h3>
                <p>Descrição do Projeto</p>
            </div>
            <div class="buttons">
                <button class="btn">Ver Detalhes</button>
                <button class="btn">Código Fonte</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Projects"
    }
</script>

<style scoped>

    .card{
         border: none;
         box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
         width: 350px;
         background-color: #f7f7f7;
         height: 350px;
    }

    .img{
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
        background-color: red;
        border-radius: 5% 5px 0 0 ;
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 10px;
    }

    p{
        margin: none;
    }

    .buttons{
        display: flex;
        justify-content: space-around;
        margin-left: 40px;
        margin-right: 40px;
    }

    .btn{
        font-size: 12px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

</style>