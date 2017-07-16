import dashboard from './dashboard'
import vuetifyex from './vuetifyex'
// const Dashboard = (resolve) => {
//   require.ensure(['@/pages/Dashboard'], () => {
//     resolve(require('@/pages/Dashboard'))
//   })
// }

const Hello = (resolve) => {
  require.ensure(['@/components/Hello'], () => {
    resolve(require('@/components/Hello'))
  })
}

const PageNotFound = (resolve) => {
  require.ensure(['@/pages/error/404'], () => {
    resolve(require('@/pages/error/404'))
  })
}

// const dashboard = {
//   path: '/',
//   name: 'dashboard',
//   component: Dashboard,
//   meta: {
//     layout: true,
//     breadcrumb: [{
//       to: {name: 'dashboard'},
//       label: 'Dashboard'
//     }]
//   }
// }

const hello = {
  path: '/hello',
  name: 'hello',
  component: Hello,
  meta: {
    breadcrumb: [{
      to: {name: 'hello'},
      label: 'Hello'
    }]
  }
}

export default [
  ...dashboard,
  ...vuetifyex,
  hello,
  {
    name: 'pageNotFound',
    path: '*',
    component: PageNotFound,
    meta: {
      noLayout: true,
      allowAnonymous: true
    }
  }
]
