import chai from "chai"
import chaiHttp from "chai-http"
import server from "../src/server"

chai.use(chaiHttp);

describe('github-info', () => {
    it('get', async () => {
        let response = await chai.request(server)
                                    .get('/')
                                    .send()
        chai.expect(response.status).equal(200)

    })
    it('get /api/', async () => {
        let response = await chai.request(server)
            .get('/api/')
            .send()
        chai.expect(response.status).equal(404)
    })
    it('get /api/:owner/:repo/', async () => {
        let response = await chai.request(server)
            .get('/api/')
            .send()

        let expectedJson =  {

        }
        chai.expect(JSON.parse(response.body)).deep.equal(expectedJson)
    })
})
