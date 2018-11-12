<template>
    <form action="" method="post">
        <h6>This is a Local Component in App.vue</h6>
        <div>
            <label for="account">Email :</label>
            <input type="email" name="account" value="">
        </div>
        <div>
            <label for="password">Password :</label>
            <input type="password" name="password" value="">
        </div>
    </form>
</template>
<script>
    export default{

    }
</script>

<style>
input{
    border-style: groove;
}
h6{
    margin: 0;
}
</style>
