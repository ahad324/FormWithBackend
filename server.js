// import { createClient } from '@supabase/supabase-js';
const client = require('@supabase/supabase-js').createClient
const express = require('express');
const cors = require('cors');
const app = express();
const port=3000;

const supabaseUrl = 'https://fdkjkxmjffinjpwdthmk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka2preG1qZmZpbmpwd2R0aG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNDYzNzgsImV4cCI6MjAyNDcyMjM3OH0.6nydnucjfMiX7poTxNJ6_mzlU8hJaHmZ2ngQ31eB8E4'
const supabase = client(supabaseUrl, supabaseKey)
app.use(cors())
app.use(express.json());
// app.use(express.text());
app.post('/register', function(req, res) {
    try {
        const { username,email, password } = req.body;

        // Insert the user data into Supabase users table
        supabase.from('users').insert([{ username,email, password }]).then(({ data, error }) => {
            if (error) {
                console.error('Error inserting user data:', error.message);
                res.status(500).send({ message: 'Error inserting user data' });
            } else {
                console.log('User data inserted successfully:', data);
                res.status(200).send({ message: 'User registered successfully' });
            }
        });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).send({ message: 'Error registering user' });
    }
});
app.get('/',function(req,res){
    res.send("i got / it's ok!")
})
// app.post('/login', function(req, res) {
//     try {
//         const { username, password } = req.body;

//         // Insert the user data into Supabase users table
//         supabase.from('users').
//         select().eq('username',username).single().insert([{ username, password }]).then(({ data, error }) => {
//             if (error) {
//                 console.error('Error inserting user data:', error.message);
//                 res.status(500).send({ message: 'Error inserting user data' });
//             } else {
//                 console.log('User data inserted successfully:', data);
//                 res.status(200).send({ message: 'User registered successfully' });
//             }
//         });
//     } catch (error) {
//         console.error('Error registering user:', error.message);
//         res.status(500).send({ message: 'Error registering user' });
//     }
// })
// app.post('/register', function(req, res){
//     console.log(req.body);
//     res.send({message:"Data aagya successfully!"});
// })



// app.get('/', function(req, res){
//     res.send("Welcome Everything is fine and working correctly!");
//     res.end();
// })

// app.post('/', function(req, res){ // Change to POST request handler
//     console.log("Received data:", req.body); // Log the data received from client
//     // Handle the received data as needed
//     res.send('Data received successfully'); // Send a plain text response
// });
app.listen(port, ()=>{
    console.log("Server is listening on port " , port);
})

// async function insertData() {
//     const { data, error } = await supabase
//         .from('your_table_name')
//         .insert([
//             { name: 'John', age: 30 },
//             { name: 'Jane', age: 25 }
//         ]);
//     if (error) {
//         console.error('Error inserting data:', error.message);
//     } else {
//         console.log('Data inserted successfully:', data);
//     }
// }

// // Example: Query data from a table
// async function queryData() {
//     const { data, error } = await supabase
//         .from('your_table_name')
//         .select('*');
//     if (error) {
//         console.error('Error querying data:', error.message);
//     } else {
//         console.log('Data queried successfully:', data);
//     }
// }
