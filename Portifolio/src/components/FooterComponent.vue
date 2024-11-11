<template>
    <footer>
        <p>
            Copyright © 2024.
        </p>
        <p>
            Designed by <span class="name">Gustavo Hlusiak</span>
        </p>
    </footer>
</template>
<script>
export default{
    name: "Footer"
}
</script>
<style scoped>
    footer{
        margin-top: 200px;
        background-color: #e2e2e2;
        color: #000000;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
    }

    span{
        color: rgb(0, 0, 0);
        transition: .3s;
    }

    span:hover{
        color: #ff9100;
    }
</style>