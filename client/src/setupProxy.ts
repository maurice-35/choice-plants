import { createProxyMiddleware,  } from 'http-proxy-middleware';

module.exports = function (app: { use: (arg0: any) => void; }) {
  app.use(
    createProxyMiddleware('/api', 
		{ target: 'http://localhost:8000' }
		)
  )
}
