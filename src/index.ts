import express from "express"
import { getResolver } from "@ayanworks/polygon-did-resolver"
import { Resolver, ResolverRegistry } from "did-resolver"

const PORT = 8080
const app = express()

app.use(express.json())

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  })
})

app.get("/1.0/identifiers/:did", async (req, res) => {
  try {
    const did = req.params.did
    const resolver = new Resolver(getResolver() as ResolverRegistry)

    const didDocument = await resolver.resolve(did)

    res.send(JSON.stringify(didDocument, null, 2))
  } catch (error) {
    res.sendStatus(404)
  }
})

app.listen(PORT, () => {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    PORT,
    PORT
  )
})
