import express from "express"
import * as dot from 'dotenv';
import { resolveDID } from '@ayanworks/polygon-did-resolver';

dot.config();

const PORT = 8080;
const app = express();


app.get('/1.0/identifiers/:did/:privateKey', async (req, res) => {
    const did = req.params.did;
    const privateKey = req.params.privateKey;
    const didResolver = await resolveDID(did, privateKey);
    if (didResolver)
        res.send(JSON.parse(didResolver.data));
    else
        res.sendStatus(404)
});

app.listen(PORT, function () {
    console.log(`Polygon Resolver driver active on port ${PORT}...`)
});