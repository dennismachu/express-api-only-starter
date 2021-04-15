import chai from "chai"
import chaiHttp from "chai-http"
import faker from "faker"
import server from "../main/index"
import supertest from "supertest"
import {database} from '../main/config/database'
import {
    viewAllNotes
} from "../main/app/notes/notesService.js"

// Assertion Style
let should = chai.should()
let expect = chai.expect
// const expect = require('chai').expect


chai.use(chaiHttp)

describe("Notes API",() => {
    /**
     * This variable will be used to hold the notes from the Find All Call
     */
    let notes;

    // This function will run before every test
    // beforeEach((done) => {
        //
    // });

    /**
     * This function will once before all the test
     */
    // before(async () => {
        // COnnect to the DB
    //  });

    /**
     * This function will run after all the test is completed
     */
    //  after(async () => {
        // Drop the DB
    //  });
    
    /**
     *  Test GET Route
     */
    describe("GET /api/v1/notes",() => {
        it("It should GET all the notes", (done) => {
            chai.request(server)
                .get('/api/v1/notes')
                .end((err,res) => {
                    const body = res.body
                    notes = res.body.data.docs
                    res.should.have.status(200)
                    expect(body.success).to.equal(true)
                    done();
                })
        })
    })

    /**
     *  Test GET (by id) Route
     */

     describe("GET /api/v1/notes/:id",() => {
        it("It should GET note by :id", (done) => {
            chai.request(server)
                .get(`/api/v1/notes/${notes[0]._id}`)
                .end((err,res) => {
                    const body = res.body
                    res.should.have.status(200)
                    expect(body.success).to.equal(true)
                    done();
                })
        })
    })

    /**
     *  Test POST Route
     */

    /**
     * Testing a Note Services
     */

     describe("View Notes Services",() => {
        it("Testing the Service", async () => {
           try {
               const notes = await viewAllNotes(10)
               expect(notes.docs).to.be.an('array')
               expect(notes).to.have.property('docs')
           } catch (error) {
               // Expect the errors here
               console.log(error);
           }
            
        })
        
    })
    
})