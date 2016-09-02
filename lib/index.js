import path from 'path'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import serve from 'koa-static'
import views from 'koa-views'
import convert from 'koa-convert'
import './config'
import errorHandler from './middlewares/errorHandler'
import api from './api'

const app = new Koa()

app.use(errorHandler())
app.use(views(path.join(__dirname, '../views'), {
  map: {
    html: 'ejs'
  }
}))
app.use(logger())
app.use(bodyParser())
app.keys = ['some secret hurr']
app.use(convert(session(app)))
app.use(serve('../public'))
app
  .use(api.routes())
  .use(api.allowedMethods())

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST)

console.log(`url: http://${HOST}:${PORT}`)
