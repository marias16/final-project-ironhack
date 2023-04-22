import { createPinia } from 'pinia'
import { createApp } from 'vue'

const pinia = createPinia()

export function setupPinia(app) {
  app = createApp(app)
  app.use(pinia)
}
