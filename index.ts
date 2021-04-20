import express from "express"
import * as dot from 'dotenv';
import { resolveDID } from 'polygon-did-resolver';

dot.config();

const PORT = 8080;
const app = express();


app.get('/1.0/identifiers/:did', async (req, res) => {
    const did = req.params.did;
    console.log(did);
    const didResolver = await resolveDID(did);
    if (didResolver)
        res.send(JSON.parse(didResolver));
    else
        res.sendStatus(404)
});

app.listen(PORT, function () {
    console.log(`Polygon Resolver driver active on port ${PORT}...`)
});