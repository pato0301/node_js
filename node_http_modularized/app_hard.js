const http = require('http');
const router = require('./router')

// console.log(router.route('/',res));


http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

	router.ruta(req.url,res)
	// router.route(req.url)
	// Route System
	// ¿?
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));