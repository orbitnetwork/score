module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: 'default'
    },
    docker: {
      host: 'testrpc',
      port: 8545,
      network_id: 25189
    },
    rinkeby: {
      host: 'localhost', // Connect to geth on the specified
      port: 8545,
      from: '0xbf4696ecfa2d3697f98805d4166fdaeaf3b67944', // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
}