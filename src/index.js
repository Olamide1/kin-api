const routes = require('./routes');
const cors = require('cors');
const fastify = require('fastify')({
    logger: true
})
const mongoose = require('mongoose');
fastify.use(cors());
// Connect to DB
mongoose.connect('mongodb://localhost/kin-database')
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});

routes.forEach((route, index) => {
    fastify.route(route)
})

const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()