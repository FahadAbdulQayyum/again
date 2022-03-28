const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    try {
        console.log(arr);
        return res.send({
            message: `Hello NodeJs Server is Running on PORT${PORT}!`, success: true
        })
    } catch (e) {
        console.log('e', e);
        return res.send({ message: e?.message, success: false })
    }
})

// app.post('/login', (req, res) => {
//     try {
//         console.log('req', req?.body);
//         return res.send({ message: 'Successfully Loggedin!', success: true })
//     } catch (e) {
//         console.log('e', e);
//         return res.send({ message: e?.message, success: false })
//     }
// })

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!! `);
})