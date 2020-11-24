<template>
    <div class="container">
        <div class="button">
        </div>
        <div>
            <div class="download one">
                <p class="text">Windows</p>
                <div class="downloadButton">
                    <a :href="publicPath + 'pomodoroTimerDesktop.exe'" download>
                    <selection-button
                    icon="download"
                    color="green"
                    id="windows"
                    @click.native="close"
                    />
                    </a>
                </div>
            </div>
            <div class="download two">
                <p class="text">Linux (soon..)</p>
                <div class="downloadButton">
                    <selection-button
                    icon="download"
                    color="green"
                    @click.native="close"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import selectionButton from '../commonComponents/selectionButton.vue'

export default {
    name: 'downloadDesktop',
    components: {
        selectionButton
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 20vh;
    width: 30vh;
    background: $secondaryColor;
    border: black solid;
    border-radius: 5%;
    margin-top: 5vh;
    margin-left: 6%;
}

.button {
    height: 15%;
    text-align: right;
    margin-top: 1.5%;
}

.download {
    position: relative;
    width: 50%;
    height: 65%;
    top: 3%;
    text-align: center;
    &.one {
        float: right;
        left: 1%;
    }
    &.two {
        float: left;
        right: 1%;
    }
}

.text {
    font-size: 2vh;
    font-weight: bold;
    color: white
}

.downloadButton {
    height: 50%;
}
</style>