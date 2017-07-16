import {
  VueLayoutBaseline,
  VueGrid
} from '@/pages/vuetifyex'

export default [
  {
    path: '/vuetify/layout/baseline',
    name: 'vuetify.layout.baseline',
    component: VueLayoutBaseline,
    meta: {
      breadcrumb: [{
        to: {name: 'vuetify.grid'},
        label: 'Vuetify Grid'
      }]
    }
  }, {
    path: '/vuetify/grid',
    name: 'vuetify.grid',
    component: VueGrid,
    meta: {
      breadcrumb: [{
        to: {name: 'vuetify.grid'},
        label: 'Vuetify Grid'
      }]
    }
  }
]
