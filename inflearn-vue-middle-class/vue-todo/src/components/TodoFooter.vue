<template>
    <footer class="clearAllContainer">
        <span @click="clearTodo" class="clearAllBtn">
            Clear All
        </span>
    </footer>
</template>

<script>
export default {
    methods:{
        clearTodo:function(){
            localStorage.clear();
        }
    }
}
</script>

<style scoped>
    .clearAllContainer{
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background: white;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBtn{
        color: #e20303;
        display: block;
    }
</style>
