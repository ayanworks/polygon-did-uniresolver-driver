# Polygon-did-driver

Driver exposing resolution functionality for the did:polygon method through an interface compatible with the DIF Universal Resolver service.

The latest published version of this Dockerized service is used by the deployed dev instance of the aforementioned Universal Resolver service.

## Example DID

```sh
did:polygon:testnet:0x50e775B5c3050e8B2Cfa404C3dE95ab97E43e771
```

## Build and Run (Docker)

```sh
docker build -f ./docker/Dockerfile . -t ayanworks/driver-did-polygon
docker run -p 8080:8080 ayanworks/driver-did-polygon
curl -X GET http://localhost:8080/1.0/identifiers/did:polygon:testnet:0x50e775B5c3050e8B2Cfa404C3dE95ab97E43e771
```

## Build and Run (NodeJS)

```sh
yarn dev
```
