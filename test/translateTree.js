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
    
    it("It should return an error when sending negative numbers",(done) => {
        chai.request(app)
        .post("/translate/tree")
        .send({kgco2e:-100})
        .end( function(err,res){
            expect(res).to.have.status(400)
            expect(res).to.be.json
            expect(res.body.errors[0].msg).to.equal("Please send a valid positive CO2 number. Ex. 100")
            done()
        }) 
    })

    it("It should return an error when sending other types of values. Ex 'a'",(done) => {
        chai.request(app)
        .post("/translate/tree")
        .send({kgco2e:'a'})
        .end( function(err,res){
            console.log(res.body.errors[0].msg)
            expect(res).to.have.status(400)
            expect(res).to.be.json
            expect(res.body.errors[0].msg).to.equal("Please send a valid CO2 number. Ex. 100")
            expect(res.body.errors[1].msg).to.equal("Please send a valid positive CO2 number. Ex. 100")
            done()
        }) 
    })
})