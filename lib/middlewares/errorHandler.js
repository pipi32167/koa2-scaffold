const env = process.env.NODE_ENV || 'development'

export default () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {

      if (err instanceof Error) {
        if (env === 'development') {
          console.error(err, err.stack)
        } else {
          console.error(err)
        } 
      }
      ctx.status = err.status || 500
      ctx.body = {
        status: ctx.status,
        msg: err.msg || err.toString(),
      }
    }
  }
}