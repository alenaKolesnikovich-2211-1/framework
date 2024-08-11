import supertest from "supertest"
import { config } from "../config";
import { user } from "../helper/user.js"

describe('Auth', () => {
  describe('POST /api/v1/login', () => {
    test('Checks that the method exists, passes', async () => {
      const res = await supertest('https://try.vikunja.io/')
      .post(`${endpoint}`)
      .send({})

      expect(res.status).not.toEqual(404);
    })

    test('Checks when login and psw are right, passes', async () => {
      const res = await user.login(config.credentials)
      /*const res = await supertest(`${baseURL}`)
        .post(`${endpoint}`)
        .set('Accept', 'application/json')
        .send({"username": "demo", "password": "demo"})*/

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('token')
        expect(typeof res.body.token).toEqual('string')
    })
    test('Checks when invalid login and correct password, fails', async () => {
      const res = await user.login({username: 'ek_demo', password: 'demo'})
      
      /*const res = await supertest(`${baseURL}`)
        .post(`${endpoint}`)
        .set('Accept', 'application/json')
        .send({username: "ek_test", password: "demo"})*/

        expect(res.status).toEqual(412)
        expect(res.body.code).toEqual(1011)
        expect(res.body.message).toContain("Wrong username or password")
    })
    test('Checks when correct login and invalid password, fails', async () => {
      const res = await user.login({username: 'demo', password: 'ek_demo'})

      /*const res = await supertest(`${baseURL}`)
        .post(`${endpoint}`)
        .send({username: 'demo', password: "ek_demo"})*/

        expect(res.status).toEqual(412)
        expect(res.body.code).toBe(1011)
        expect(res.body.message).toContain("Wrong username or password")
    })
  })
});
