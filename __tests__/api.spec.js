const request = require('supertest');
const app = require('../server.js');
const { isObject } = require('./helperTest.js')


describe( "Testing routing endpoints", () =>
{    
    let api;
    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log("test server running on port 5000");
        });
    });

    afterAll((done) => {
        console.log("gracefully stopping the test server");
        api.close(done);
    });
    
    // TESTING A GET REQUEST
    test('it responds to .get /books with status 200', (done) => {
        request(api) // let supertest know the server it is requesting to (note we assigned our server to the variable `app` in the setup)
        .get('/books') // perform a get request to the endpoint of '/books'
        .expect(200,done) // assert that the response status will be 200 and pass `done` so expect can call it when it is... done!
    })

    test('it responds to .get /books with content json', (done) => {
        request(api) // let supertest know the server it is requesting to (note we assigned our server to the variable `app` in the setup)
        .get('/books') // perform a get request to the endpoint of '/books'
       .expect('Content-Type', /json/)
       .expect(200,done) // assert that the response content type will be json and pass `done` so expect can call it when it is... done!
    })

    test('it responds to .get /books/game-of-thrones with content object', (done) => {
        request(api) // let supertest know the server it is requesting to (note we assigned our server to the variable `app` in the setup)
        .get('/books/game-of-thrones') // perform a get request to the endpoint of '/books/game-of-thrones'
        .end( (err,res) => {
            if(err) done(err);
            try{
                expect(isObject(res.body)).toBe(true);
                done();
            } catch(err) {
                done(err);
            }
        });
    });


}
)

// "INCORRECT TESTING"
describe( "Testing routing endpoints without 'done' ", () => // It "works" but we it will produce a leaking warning
{   // TESTING A GET REQUEST
    //test('it responds to .get /books with status 200', () => {
    //    request(app) // let supertest know the server it is requesting to (note we assigned our server to the variable `app` in the setup)
    //    .get('/books') // perform a get request to the endpoint of '/books'
    //    .expect(200) // assert that the response status will be 200 and pass `done` so expect can call it when it is... done!
    //})

}
)
