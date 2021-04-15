import express from "express"
import { polygonDIDRegistryABI } from './PolygonDIDABI';
var ethers = require('ethers');
import * as dot from 'dotenv';

dot.config();

const url = process.env.URL;
const DID_ADDRESS = process.env.DID_ADDRESS;

const provider = new ethers.providers.JsonRpcProvider(url);
let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
let registry = new ethers.Contract(DID_ADDRESS, polygonDIDRegistryABI, wallet);

const PORT = 8080;

const app = express();

app.get('/1.0/identifiers/:did', async (req, res) => {
    const did = req.params.did;
    console.log(did);
    const didResolver = await getDID(did.split(':')[2]);
    if (didResolver)
        res.send(JSON.parse(didResolver));
    else
        res.sendStatus(404)
});


async function getDID(address: string): Promise<string> {
    try {
        console.log("*********** resolveDID PolygonRegister ***********");

        // Calling smart contract with getting DID Document
        let returnDidDoc = await registry.functions.getDID(address)
            .then((resDidDocument) => {

                console.log(`****** [resolveDID] ****** resDidDocument - ${JSON.stringify(resDidDocument)} \n\n\n`);
                return resDidDocument;
            })
        console.log(`****** [resolveDID] ****** returnDidDoc - ${JSON.stringify(returnDidDoc)} \n\n\n`);
        return returnDidDoc;
    }
    catch (error) {
        throw error;
    }
}

app.listen(PORT, function () {
    console.log(`Polygon Resolver driver active on port ${PORT}...`)
});