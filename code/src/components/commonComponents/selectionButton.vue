<template>
    <div ref="container" class="container">
        <b-button
        pill
        :id="color"
        class="button"
        :style="`width: ${buttonSize}px; height: ${buttonSize}px;`"
        >
            <div class="buttonContents">
                <p :style="`font-size: ${textSize}px; font-weight: bold;`">
                    {{ buttonText }}<br>
                    <i
                    v-if="!!icon"
                    :class="icon"
                    :style="`font-size: 3em;`"
                    ></i>
                </p>
            </div>
        </b-button>
    </div>
</template>

<script>
export default {
    name: "selectionButton",
    props: {
        buttonText: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        color: String
    },
    data() {
        return {
            windowHeight: window.innerHeight,
            height: 0
        }
    },
    methods: {
        onResize() {
            this.windowHeight = window.innerHeight
        }
    },
    computed: {
        buttonSize() {
            return this.height * 0.9
        },
        textSize() {
            return this.height * 0.1
        }
    },
    watch: {
        windowHeight(newVal, oldVal) {
            this.height = this.$refs.container.clientHeight
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize)
            this.height = this.$refs.container.clientHeight
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    }
}
</script>

<style lang="scss" scoped> 
.buttonContents, .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#green {
    background-color: $primaryColor !important;
}

#purple {
    background-color: $secondaryColor !important;
}

#brown {
    background-color: $tertiaryColor !important;
}
</style>