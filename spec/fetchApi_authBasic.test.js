describe('Auth JWT using token', () => {
    it('Gets user info by token, passes', async () => {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "emilys",
                password: 'emilyspass',
                expiresInMins: 30
            })
        })
        const responseBody = await response.json()

        expect(response.status).toEqual( 200)
        expect(responseBody.username).toBe('emilys')
        expect(responseBody.token).toBeTruthy()
    })
})
describe('Auth, fails', () => {
    it('Failed login' , async () => {
    const response = await fetch('https://dummyjson.com/auth/login' , {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
    username: 'kminchelle',
    password: 'wrongpassword' ,
    expiresInMins: 30,
    }),
    })
    const data = await response.json()
    expect(response.status).toEqual( 400)
    expect(data.message).toBe( 'Invalid credentials' )
    })
})
