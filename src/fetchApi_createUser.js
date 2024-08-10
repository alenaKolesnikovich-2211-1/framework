const baseURL = "https://reqres.in"

;(async () => {
    const response = await fetch(`${baseURL}/api/users/1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": "User_10-08-2024",
            "job": "leader"
        })
    })
    console.log('response.status', response.status)

    const data = await response.json()
    console.log('user', data)
})()
