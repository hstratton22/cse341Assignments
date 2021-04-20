const express = require('express');
const app =  express();
/*
app.use((req, res, next) => {
    console.log('First');
    next();

});
app.use((req, res, next) => {
    console.log('second');
    res.send('<h1>This is second</h1>');

});
*/
app.use('/users', (req, res, next) => {
    console.log('This is users');
    //next();
    res.send('<h1>This is with users</h1>');

});
app.use('/', (req, res, next) => {
    console.log('This is without user');
    res.send('<h1>This is without user</h1>');

});
app.listen(3000);