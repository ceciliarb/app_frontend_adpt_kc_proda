<template>
    <div>
        <h1>Página primeira</h1>
        <button v-if="can('btnAdmin')">Só pra administradores</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
