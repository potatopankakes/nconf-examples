const nconf = require('nconf')

const f='conf/sample.json'
nconf.argv()
  .env()
  .file({ file: f })

console.info(`using config file: ${f}`)

console.info('---------------')
console.info(`x:y as nconf.get(x:y): ${nconf.get('x:y')}`)
console.info(`x:y as nconf.get(x).y: ${nconf.get('x').y}`)
console.info(`process.env.x:y: ${process.env['x:y']}`)
console.info(`process.env.x.y: ${process.env['x.y']}`)

console.info('---------------')
console.info(`z as nconf.get(z): ${nconf.get('z')}`)
console.info(`process.env.z: ${process.env['z']}`)
