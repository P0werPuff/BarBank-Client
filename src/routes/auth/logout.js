import * as api from 'api.js';

export async function post(req, res) {
    api.post('sessions', req.body).then(response=>{
        delete req.session.user;
        res.end(JSON.stringify(response));
    })
}