let chai = require("chai")
let chaiHttp = require("chai-http")
const expect = require("chai").expect;
//const app = require('../server')


//
chai.use(chaiHttp)
const app = "http://localhost:5000"

describe("Translate kilograms CO2 equivalent to an area of trees that can absorb the CO2 in one year",() => {
    it("It should return the correct area of trees",(done) => {
        chai.request(app)
        .post("/translate/tree")
        .send({kgco2e:100})
        .end( function(err,res){
            expect(res).to.have.status(200)
            expect(res).to.be.json
            expect(res.body.m2Year).to.equal(2041)
            done()
        }) 
    })
    
})