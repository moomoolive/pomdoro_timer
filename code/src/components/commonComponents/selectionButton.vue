<template>
    <div>
        <b-button pill :class="'button '+ size" :id="color">
            <i v-if="!!icon" :class="icon + ' icon '+ size"></i>
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
        icon: {
            type: String,
            required: false
        },
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
$small: 3em;
$medium: 6em;
$large: 9em;

.button {
    &.small {
        height: $small;
        width: $small;
    }
    &.medium {
        height: $medium;
        width: $medium;
    }
    &.large {
        height: $large;
        width: $large;
    }
}

.icon {
    &.small{
        @include iconSize($small)
    }
    &.medium{
        @include iconSize($medium)
    }
    &.large {
        @include iconSize($large)
    }
}

.text {
    font-weight: bold;
    &.medium {
        @include textSize($small)
    }
    &.medium {
        @include textSize($medium)
    }
    &.large {
        @include textSize($large)
    }
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