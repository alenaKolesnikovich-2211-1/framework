/*
// example #1
// Fetch Auth Basic
// ${Buffer.from('admin:secret')} : 'admin:secret' === 'login:psw'
// `Basic ${Buffer.from('admin:secret').toString('base64')}` - this string can be used to decode login:psw to base64-string

const response = await fetch(`http://localhost:7080`, {
    headers: {
        Authorization: `Basic ${Buffer.from('admin:secret').toString('base64')}`,
    }
})

// example #2
// Fetch Auth JWT
// token is Base64-string that is repeted 3x, separator == '.'

const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
    }
})

*/

;(async () => {
    const responseLogin = await fetch('https://dummyjson.com/auth/login', {
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
    const dataLogin = await responseLogin.json()
    const token = dataLogin.token;
    console.log('token', token);
    console.log('dataLogin', dataLogin)

    const responseMe = await fetch('https://dummyjson.com/users/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const dataMe = await responseMe.json();
    console.log('dataMe', dataMe);
})()