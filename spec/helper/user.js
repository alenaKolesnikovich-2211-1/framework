import supertest from "supertest"
import config from "../config.js"

const {baseURL} = config
const {login} = config.endpoints
const {getUser} = config.endpoints


//User controller
export const user = {
  // function auth()
  login:(payload) => {
    return supertest(baseURL)
      .post(login)
      .set('Accept', 'application/json')
      .send({"username": "demo", "password": "demo"})
  },

  async getAuthToken(){
    const payload = config.credentials
    const res = await this.login(payload)
    return res.body.token
  },

  async getAuthTokenInCache(){
    token = await this.getAuthToken;
    return token
  },

  // structure for authorization by token
  user: (token) => {
    return supertest(baseURL)
      .get('api/v1/user')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
  }
}
