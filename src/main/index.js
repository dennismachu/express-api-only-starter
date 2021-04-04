require('dotenv').config();
// import configFile from './config/configFile'
import {database} from './configs/database'
import {app} from './server'
import {keys} from './configs/keys'

if (process.env.NODE_ENV === 'production') {
  const port = keys.PORT_PRODUCTION || 8080
}
const port = keys.PORT_DEVELOPMENT || 3030

/**
 * Connect to the Database
 */
database()
module.exports = app.listen(port, async () => {
  await database()
  console.log(`Service listening at http://localhost:${port}`)
})