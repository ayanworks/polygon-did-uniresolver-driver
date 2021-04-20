# Polygon-did-driver

Driver exposing resolution functionality for the did:polygon method through an interface compatible with the DIF Universal Resolver service.

The latest published version of this Dockerized service is used by the deployed dev instance of the aforementioned Universal Resolver service.


# Example DID

```
did:polygon:0x88f8ce435611f27bc89525b47fc147632bbdadac
```

# Build and Run (Docker)

```
docker build -f Dockerfile . -t universalresolver/driver-did-polygon:1.0
docker run -p 8080:8080 universalresolver/driver-did-polygon:1.0
curl -X GET http://localhost:8080/1.0/identifiers/did:polygon:0x88f8ce435611f27bc89525b47fc147632bbdadac
```

# Build and Run (NodeJS)

```
npm start
```