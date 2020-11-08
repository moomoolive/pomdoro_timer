<template>
    <div>
    <b-navbar class="header">
        <b-navbar-brand>
            <img src="https://img.icons8.com/cotton/64/000000/tomato--v2.png"/>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <selection-button icon="fas fa-cog"/>
        </b-navbar-nav>
    </b-navbar>
    <!-- <a href="https://icons8.com/icon/70472/tomato">Tomato icon by Icons8</a> -->
    </div>
</template>

<script>
import selectionButton from "./commonComponents/selectionButton"

export default {
    name: "Header",
    components: {
        selectionButton
    }
}
</script>

<style lang="scss" scoped>
.header {
    background-color: $tertiaryColor !important;
}
</style>