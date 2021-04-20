import 'dotenv/config'
import {database} from './config/database'
import {app} from './server'
import {keys} from './config/keys'

let port = null
if (process.env.NODE_ENV === 'production') port = keys.PORT_PRODUCTION || 8080
else port = keys.PORT_DEVELOPMENT || 3030

/**
 * Connect to the Database
 */
module.exports = app.listen(port, async () => {
  await database()
  console.log(`Service listening at http://localhost:${port}`)
})
