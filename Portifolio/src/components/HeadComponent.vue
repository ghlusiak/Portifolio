<template>
    <header>
        <div class="header">
            <div class="imagem">
            </div>
            <div class="info">
                <h1> Gustavo Hlusiak</h1>
                <h2>Developer Junior </h2>
            </div>
            <div class="links">
                <a href="https://github.com/ghlusiak"><i class='bx bxl-github' ></i></a>
                <a href="https://www.instagram.com/g_hlusiak/"> <i class='bx bxl-instagram'></i></a>
                <a href="https://www.linkedin.com/in/gustavo-jos%C3%A9-da-silva-hlusiak-9606b1316/"> <i class='bx bxl-linkedin-square' ></i></a>
            </div>
        </div>
    </header>
</template>
<script>
import 'boxicons';
    export default({
        name: 'Head'
    })

</script>
<style>
    .header{
        background-color: rgb(225, 225, 225);
        height: 300px;
        display: flex;
    }

    .imagem{
        background-image: url(../assets/gustavo.jpg);
        margin: 40px;
        margin-left: 100px;
        height: 220px;
        width: 220px;
        border-radius: 50%;
        border: 5px solid black;
        background-size:cover;
        background-repeat: no-repeat;
        display: block;
        background-position: center;
    }

    .info{
        display: block;
        justify-content: center;
        margin: auto 0;

        h1{
            font-size: 42px;
            font-weight: bold;
        }
        h2{
            font-size: 36px;
            color: rgb(31, 31, 31);
        }
    }

    .links{
        display: flex;
        margin: 93px 10px;
        
        a{
            text-decoration: none;
            color: black;
            font-size: 30px;
            margin: 10px;
            transition: .5s;
        }

        a:hover{
            font-size: 30px;
            color: #ff9100
        }
    }
</style>