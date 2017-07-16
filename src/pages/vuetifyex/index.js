export const VueLayoutBaseline = (resolve) => {
  require.ensure(['./layoutex/Baseline'], () => {
    resolve(require('./layoutex/Baseline'))
  })
}

export const VueGrid = (resolve) => {
  require.ensure(['./grid'], () => {
    resolve(require('./grid'))
  })
}
