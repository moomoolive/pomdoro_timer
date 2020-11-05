<template>
    <div class="buttonSection">
        <b-button pill class="button" :id="color">
            <i :class="icon" class="icon"></i>
        </b-button>
        <div class="buttonText">
            {{ buttonText }}
        </div>
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
        icon: String,
        color: String
    }
}
</script>

<style lang="scss" scoped>
.buttonSection {
    height: 8em;
    width: 8em;
    text-align: center;
}

.button {
    height: 6em;
    width: 6em;
    
    &#green {
        background-color: $primaryColor !important;
    }
    &#purple {
        background-color: $secondaryColor !important;
    }
    &#brown {
        background-color: $tertiaryColor !important;
    }
}

.icon {
    height: 3.2em;
    width: 3.2em;
}

.buttonText {
    margin-top: 0.25em;
    font-weight: bold;
    font-size: 1.2em;
}
</style>