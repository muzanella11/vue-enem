export const Dashboard = (resolve) => {
  require.ensure(['./Dashboard'], () => {
    resolve(require('./Dashboard'))
  })
}

export const DashboardTest = (resolve) => {
  require.ensure(['./DashboardTest'], () => {
    resolve(require('./DashboardTest'))
  })
}
