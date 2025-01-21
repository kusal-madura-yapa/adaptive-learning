/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Composables
import { createApp } from 'vue'

// Components
import App from './App.vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Store
// import store from '@/store'

// Router
import router from '@/router'

// Charts
import VueApexCharts from 'vue3-apexcharts'

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

// Register plugins, Vuex store, router, Vuetify, and ApexCharts
app.use(vuetify)
// app.use(store)
app.use(router)
app.use(VueApexCharts)

registerPlugins(app)

// Mount the application
app.mount('#app')
