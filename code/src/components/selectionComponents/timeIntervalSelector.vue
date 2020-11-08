<template>
    <div class="cssGrid">
        <div v-for="n in 3" :key="n" id="gridGroup1">
            <sub-grid
            :size="gridProperties[`grid1${n}`].size"
            :icon="gridProperties[`grid1${n}`].icon"
            :gridRow="gridProperties[`grid1${n}`].gridRow"
            :gridColumn="gridProperties[`grid1${n}`].gridColumn"
            :message="gridProperties[`grid1${n}`].message"
            :style="`grid-row: ${1}; grid-column: ${n};`"
            />
        </div>
        <div v-for="i in 3" :key="i + 27" id="gridGroup2">
            <sub-grid
            :size="gridProperties[`grid2${i}`].size"
            :icon="gridProperties[`grid2${i}`].icon"
            :gridRow="gridProperties[`grid2${i}`].gridRow"
            :gridColumn="gridProperties[`grid2${i}`].gridColumn"
            :message="gridProperties[`grid2${i}`].message"
            :style="`grid-row: ${2}; grid-column: ${i};`"
            />
        </div>
        <div v-for="k in 3" :key="k + 89" id="gridGroup3">
            <sub-grid
            :size="gridProperties[`grid3${k}`].size"
            :icon="gridProperties[`grid3${k}`].icon"
            :gridRow="gridProperties[`grid3${k}`].gridRow"
            :gridColumn="gridProperties[`grid3${k}`].gridColumn"
            :message="gridProperties[`grid3${k}`].message"
            :style="`grid-row: ${3}; grid-column: ${k};`"
            />
        </div>
    </div>
</template>

<script>
import subGrid from './timeIntervalComponents/subGrid.vue'
import gridData from './grids.js'

export default {
    name: 'timeIntervalSelector',
    components: {
        subGrid
    },
    data() {
        return {
            gridProperties: ''
        }
    },
    created() {
        this.gridProperties = gridData
    }
}
</script>

<style lang="scss" scoped>
.cssGrid {
    display: grid;
    grid-template-rows: repeat(3, 33.3%);
    grid-template-columns: repeat(3, 33.3%);
    background-color: $secondaryColor;
    border-radius: 100%;
    align-items: center;
}

#gridGroup1, #gridGroup2, #gridGroup3 {
    height: 33.3%;
}
</style>