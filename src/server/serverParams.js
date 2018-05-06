const params = {
  host : 'localhost',
  port : 3000,
}

const retServerAddress = () => {
  let address = params.host + ':' + params.port;
  return address;
}

module.exports = {
  retServerAddress,
}
