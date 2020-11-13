<template>
    <div>
        <div id="left" v-if="!smallScreen">
            <button id="button" class="github">
                <a :href="githubLink">Contribute to Source Code</a>
            </button>
            <button id="button" class="desktop">
                <a href="#">Desktop App (Soon...)</a>
            </button>
            <button id="button" class="feedback">
                <a href="#">Submit Your Feedback</a>
            </button>
        </div>
        <div id="right">
            <selection-button id="right" icon="fas fa-cog"/>
        </div>
    </div>
</template>

<script>
import selectionButton from "./commonComponents/selectionButton"

export default {
    name: "Header",
    components: {
        selectionButton
    },
    data() {
        return {
            githubLink: "https://github.com/moomoolive/pomdoro_timer"
        }
    },
    computed: {
        smallScreen() {
            return this.$store.state.smallScreen
        }
    }
}
</script>

<style lang="scss" scoped>
#right {
    text-align: right;
    position: relative;
    bottom: 50%;
}

#left {
    text-align: left;
    width: 60%;
}

#button {
    border-radius: 20%;
    height: 3vh;
    width: 15vh;
    font-size: 1vh;
    font-weight: bold;
    position: relative;
    border-style: solid;
    border-width: 0.1vh;
    top: 20%;
    margin-left: 1%;
    margin-right: 2%;
    overflow: visible;
    &.github {background-color: $primaryColor;}
    &.desktop {background-color: $secondaryColor;}
    &.feedback {background-color: $tertiaryColor;}
}
</style>