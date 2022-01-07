import chai from "chai"
import chaiHttp from "chai-http"
import server from "../src/server"

chai.use(chaiHttp);

describe('github-info', () => {
    it('get', async () => {
        let response = await chai.request(server)
                                    .get('/')
                                    .send()
    })
})
