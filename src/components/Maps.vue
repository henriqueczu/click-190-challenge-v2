<template>
  <div ref="mapContainer" class="map-container" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  center: {
    type: Array,
    default: () => [-23.206134, -46.7864501],
  },
  zoom: {
    type: Number,
    default: 13,
  },
})

const mapContainer = ref(null)
let map = null

onMounted(() => {
  map = L.map(mapContainer.value).setView(props.center, props.zoom)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map)
})

onBeforeUnmount(() => {
  map?.remove()
})
</script>

<style scoped>
.map-container {
  flex: 1;
  min-height: 0;
  width: 100%;
}
</style>
