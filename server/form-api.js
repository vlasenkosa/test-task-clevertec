import { Router } from 'express';
import request from 'request';
import { fetchFormSuccess, fetchDataSuccess } from '../src/Components/Actions/index';

const router = Router();

router.post('/meta', (req, res) => {
    request.post('http://test.clevertec.ru/tt/meta', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.status(200).json(fetchFormSuccess(JSON.parse(body)));
        }
    });
});

router.post('/data', (req, res) => {
    request.post({url:'http://test.clevertec.ru/tt/data', body: JSON.stringify(req.body)}, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.status(200).json(fetchDataSuccess(JSON.parse(body)));
        }
    });
});

export default router;