# Polygon-did-driver

Driver exposing resolution functionality for the did:polygon method through an interface compatible with the DIF Universal Resolver service.

The latest published version of this Dockerized service is used by the deployed dev instance of the aforementioned Universal Resolver service.


## Example DID

```
did:polygon:0x88f8ce435611f27bc89525b47fc147632bbdadac
```

## Build and Run (Docker)

Command to create docker image:

```
docker build -f Dockerfile . -t ayanworks/driver-did-polygon:1.0
```

Command to run docker container with using this image:

```
docker run -p 8080:8080 ayanworks/driver-did-polygon:1.0
```

Request to resolve DID 

```
curl -X GET http://localhost:8080/1.0/identifiers/did:polygon:0x88f8ce435611f27bc89525b47fc147632bbdadac
```

## Build and Run (NodeJS)

```
npm start
```