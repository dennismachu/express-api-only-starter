import chai from "chai"
import chaiHttp from "chai-http"
import faker from "faker"
import server from "../main/index"
import {
    viewAllNotes
} from "../main/app/notes/notesService.js"
import {database} from '../main/config/database'

// Assertion Style
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe("Notes API",() => {
    /**
     * This variable will be used to hold the notes from the Find All Call
     */
    var notes = []

    /**
     *  Test GET all Notes Route
     */
    describe("GET all notes", ()=>{
        it("It should GET all notes",(done)=>{
            chai.request(server)
            .get("/api/v1/notes")
            .end((err,res)=>{
                const body = res.body
                notes = body.data.docs
                res.should.have.status(200)
                expect(body.success).to.equal(true)
            done();
            })
        })
    })

    /**
     *  Test GET a Note Route
     */
    describe("GET /api/v1/notes/:id",() => {
        it("It should GET notes by their ID", (done) => {
            chai.request(server)
            .get("/api/v1/notes/"+notes[0]._id)
            .end((err,res)=>{
                const body = res.body
                res.should.have.status(200)
                expect(body.success).to.equal(true)
            done();
            })
        })
    })
})