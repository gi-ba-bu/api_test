const request = require('supertest');
const app = require('../server.js');
const { isObject } = require('./helperTest.js')



describe( "Testing routing endpoints", () =>
{   



    // TESTING A GET REQUEST
    test('it responds to .get /books with status 200', () => {
        request(app) // let supertest know the server it is requesting to (note we assigned our server to the variable `app` in the setup)
        .get('/books') // perform a get request to the endpoint of '/books'
        .expect(200) // assert that the response status will be 200 and pass `done` so expect can call it when it is... done!
    })

    //test('it responds to .get /books with content json', () => {
    //    request(app) // let supertest know the server it is requesting to (note we assigned our server to the variable `app` in the setup)
    //    .get('/books') // perform a get request to the endpoint of '/books'
    //   .expect('Content-Type', /json/) // assert that the response status will be 200 and pass `done` so expect can call it when it is... done!
    // })


}
)


describe( "Testing routing endpoints with 'done' ", () =>
{   // TESTING A GET REQUEST
    test('it responds to .get /books with status 200', (done) => {
        request(app) // let supertest know the server it is requesting to (note we assigned our server to the variable `app` in the setup)
        .get('/books') // perform a get request to the endpoint of '/books'
        .expect(200,done) // assert that the response status will be 200 and pass `done` so expect can call it when it is... done!
    })

}
)
