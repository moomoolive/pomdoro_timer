<template>
    <div>
        <b-button pill :class="'button '+ size" :id="color">
            <i :class="icon + ' icon '+ size"></i>
            <div :class="'text '+ size">{{ buttonText }}</div>
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
        icon: String,
        color: String,
        size: {
            type: String,
            required: false,
            default: 'medium'
        }
    }
}
</script>

<style lang="scss" scoped>    
#green {
    background-color: $primaryColor !important;
}

#purple {
    background-color: $secondaryColor !important;
}

#brown {
    background-color: $tertiaryColor !important;
}

.button {
    &.medium {
        height: 6em;
        width: 6em;
    }
    &.large {
        height: 9em;
        width: 9em;
    }
}

.icon {
    &.medium{
        height:2.5em;
        width: 2.5em;
    }
    &.large {
        height: 3.75em;
        width: 3.75em;
    }
}

.text {
    font-weight: bold;
    &.medium {
        font-size: 0.7em;
    }
    &.large {
        font-size: 1.05em;
    }
}
</style>