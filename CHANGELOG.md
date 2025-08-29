# Changelog

## 0.1.0-alpha.1 (2025-08-29)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/gorakhnathy7/hs-mcp/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* clean up environment call outs ([67f1a1d](https://github.com/gorakhnathy7/hs-mcp/commit/67f1a1d670e8e6345a78f14eb4e358a9af00050b))
* **mcp:** add code execution tool ([28a0bd0](https://github.com/gorakhnathy7/hs-mcp/commit/28a0bd05e0c5988e1cc36f8e5db6090a6b35ee7d))
* **mcp:** add logging when environment variable is set ([3f111e0](https://github.com/gorakhnathy7/hs-mcp/commit/3f111e072ea107f1a95355e4be21eb12be1286fd))
* **mcp:** add option to infer mcp client ([f767f94](https://github.com/gorakhnathy7/hs-mcp/commit/f767f9418c3a828254d31132a1ea487aedb46056))
* **mcp:** add unix socket option for remote MCP ([21a5331](https://github.com/gorakhnathy7/hs-mcp/commit/21a5331ea0916bbf264b58cb2c71a67020a565b5))
* **mcp:** parse query string as mcp client options in mcp server ([c569945](https://github.com/gorakhnathy7/hs-mcp/commit/c5699456c5ea54f776c37e38979f1d108c4fe7c7))
* **mcp:** remote server with passthru auth ([3e8772b](https://github.com/gorakhnathy7/hs-mcp/commit/3e8772b34da07e178818095c96c1439ba4f859b2))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([5d9293a](https://github.com/gorakhnathy7/hs-mcp/commit/5d9293ae60f78233ec2f879ac873299eb69fcec3))
* **mcp:** fix bug in header handling ([2e52a55](https://github.com/gorakhnathy7/hs-mcp/commit/2e52a55ba19a293660d678184e6ebefc6b4ad95a))
* **mcp:** fix tool description of jq_filter ([93d9fc6](https://github.com/gorakhnathy7/hs-mcp/commit/93d9fc6e4c0b78d09ccebc5f43723a5b280f209e))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([1f09439](https://github.com/gorakhnathy7/hs-mcp/commit/1f0943926f80c18063262273840e96fc6bc98876))
* **mcp:** include required section for top-level properties and support naming transformations ([c80d7e4](https://github.com/gorakhnathy7/hs-mcp/commit/c80d7e4087257b9b45fc3d53deffec0f5c2c37ac))
* **mcp:** reverse validJson capability option and limit scope ([7524d52](https://github.com/gorakhnathy7/hs-mcp/commit/7524d520dcbaaaed1d6cf8bcb2c15ab0276e8783))
* **mcp:** support jq filtering on cloudflare workers ([c564d5b](https://github.com/gorakhnathy7/hs-mcp/commit/c564d5bc3893c126fa175fe6cfe14cbb4d3048e2))


### Chores

* add docs to RequestOptions type ([b19a4e9](https://github.com/gorakhnathy7/hs-mcp/commit/b19a4e9c549f751fe6c53f15a7888a530bb0fa56))
* add package to package.json ([a69ea91](https://github.com/gorakhnathy7/hs-mcp/commit/a69ea91d5e8d4ed628ad043af7dfe9bd7bed4904))
* **client:** qualify global Blob ([32af13d](https://github.com/gorakhnathy7/hs-mcp/commit/32af13dd4600728cf05e934461b7d02e062197f5))
* **deps:** update dependency @types/node to v20.17.58 ([d4a921b](https://github.com/gorakhnathy7/hs-mcp/commit/d4a921b33249431274fe01f2e8e71b1df30599dc))
* **internal:** codegen related update ([5c85e43](https://github.com/gorakhnathy7/hs-mcp/commit/5c85e4364844fca77e314541db6152542b899c29))
* **internal:** codegen related update ([2d8c2f4](https://github.com/gorakhnathy7/hs-mcp/commit/2d8c2f4a2e49baa2cc793b2ee01089971a775241))
* **internal:** codegen related update ([247a7c8](https://github.com/gorakhnathy7/hs-mcp/commit/247a7c81d0ed517450132ac5bb42a7c0865b1d1c))
* **internal:** codegen related update ([e0977be](https://github.com/gorakhnathy7/hs-mcp/commit/e0977bea956db2822da1a4fa1585273e1bd99e77))
* **internal:** codegen related update ([1eba97c](https://github.com/gorakhnathy7/hs-mcp/commit/1eba97c82c9501f1be5d958502e9d069bb99cc0a))
* **internal:** formatting change ([019bda1](https://github.com/gorakhnathy7/hs-mcp/commit/019bda15e6c9cb65b27081ea17832deccb08d0f1))
* **internal:** make mcp-server publishing public by defaut ([c61ae9b](https://github.com/gorakhnathy7/hs-mcp/commit/c61ae9b0861a98460adcb0b0e0f926d9c38aff0d))
* **internal:** move publish config ([fa09aca](https://github.com/gorakhnathy7/hs-mcp/commit/fa09aca8fab54a0bcd7cf5ccbdc10bf40913ff01))
* **internal:** refactor array check ([ce949f6](https://github.com/gorakhnathy7/hs-mcp/commit/ce949f6cad7f4226d9742e6b7d71463a18814083))
* **internal:** remove redundant imports config ([a1e0b4a](https://github.com/gorakhnathy7/hs-mcp/commit/a1e0b4a0cccd7fd08cf779e0a889a4a5ece9201c))
* **internal:** update comment in script ([9753a3d](https://github.com/gorakhnathy7/hs-mcp/commit/9753a3d0305ae850c5f89449e4a66e34545818a6))
* **internal:** update global Error reference ([b17a4e5](https://github.com/gorakhnathy7/hs-mcp/commit/b17a4e526619f0f359673e4e337f75de862ecb30))
* make some internal functions async ([a4cd427](https://github.com/gorakhnathy7/hs-mcp/commit/a4cd42713bbe37d5c2b1441359676a5cb2dd50c2))
* **mcp:** add cors to oauth metadata route ([b34d42b](https://github.com/gorakhnathy7/hs-mcp/commit/b34d42bad22fb1dc838bd3aa08e57a47162a3d6d))
* **mcp:** document remote server in README.md ([23045e5](https://github.com/gorakhnathy7/hs-mcp/commit/23045e5f3a564d3daa3b1256636a6b7395de0ed0))
* **mcp:** formatting ([60e25ff](https://github.com/gorakhnathy7/hs-mcp/commit/60e25ff32e3fa9efd1f8eec0358d04119c6b031f))
* **mcp:** minor cleanup of types and package.json ([83fdd3e](https://github.com/gorakhnathy7/hs-mcp/commit/83fdd3e24c87d99e52db624917a1dd85d5fd5952))
* **mcp:** refactor streamable http transport ([7ea0e98](https://github.com/gorakhnathy7/hs-mcp/commit/7ea0e9801d973e095c1aad8115ba01aa0b73bdce))
* **mcp:** rework imports in tools ([39f8847](https://github.com/gorakhnathy7/hs-mcp/commit/39f8847d28feb43481d28cd454f3d6d470fbfbc6))
* **mcp:** update package.json ([a6a6b0c](https://github.com/gorakhnathy7/hs-mcp/commit/a6a6b0c2f1fc9f56fe40173ad3f8b4914149927f))
* **mcp:** update README ([8cda3b4](https://github.com/gorakhnathy7/hs-mcp/commit/8cda3b47c7257a21fc81209d3a99458885d36ac5))
* **mcp:** update types ([1d02aa6](https://github.com/gorakhnathy7/hs-mcp/commit/1d02aa64c1b9fdd69668ed0618b2e9f9ed580de8))
* **ts:** reorder package.json imports ([bb5d6c1](https://github.com/gorakhnathy7/hs-mcp/commit/bb5d6c1a9a216f6bb9c0b80d4e1636ce359e10d6))
* update @stainless-api/prism-cli to v5.15.0 ([f7386b8](https://github.com/gorakhnathy7/hs-mcp/commit/f7386b839fd22de3b3da4103f96dbdd98caa5cd3))
* update CI script ([9e50c83](https://github.com/gorakhnathy7/hs-mcp/commit/9e50c83d0f409cf619ea703a08b411aa36e46a97))

## 0.0.1-alpha.1 (2025-07-01)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/gorakhnathy7/hs-mcp/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* configure new SDK language ([19e0397](https://github.com/gorakhnathy7/hs-mcp/commit/19e03978316bd3edb9d52937fe79930f4c0cdc54))
* update SDK settings ([b6bde81](https://github.com/gorakhnathy7/hs-mcp/commit/b6bde8170c115275b229f58a002422a07e93d788))
