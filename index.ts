import express from "express"
import { resolveDID } from '@ayanworks/polygon-did-resolver';

const PORT = 8080;
const app = express();


app.get('/1.0/identifiers/:did', async (req, res) => {
    const did = req.params.did;
    const didResolver = await resolveDID(did);
    if (didResolver)
        res.send(JSON.parse(didResolver.data));
    else
        res.sendStatus(404)
});

app.listen(PORT, function () {
    console.log(`Polygon Resolver driver active on port ${PORT}...`)
});