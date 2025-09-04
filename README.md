Soler - Solidity CLI
====================

A Solidity Compiler CLI that:

- detects and use Solidity libraries installed in `node_modules/`
- generates a single verify-contract.json for verifying on block explorers
- outputs a single files including the ABI and byte code.

For a more programmatic API, use the
[@ricmoo/solidity](https://www.npmjs.com/package/@ricmoo/solidity)
library directly.


Installing
----------

Generally this is only needed as a `devDependency`, to compile contracts
once and use the generated JSON directly.

```
/home/ricmoo/my_project> npm install --save-dev soler
```


Command-Line Interface
----------------------

Compiles the Solidity `FILENAME`, writing a JSON with `{ abi, bytecode }`
for each `CONTRACT` name provided to `CONTRACT.json`. The output is written to
`FOLDER` (by default `./build`).

Currently all builds are optimized.

A `verify-contract.json` is also exported, which is a complete and
reproducable input to the Solidity compiler that can be used to verify
a contract on Etherscan or similar block explorers.

```
/home/ricmoo/my_project> soler [ --output FOLDER ] FILENAME CONTRACT [ ...CONTRACT ]
```


To Do
-----

- Add `--no-optimize` flag
- Add `--library` support (easy; if you need this feature let me know)
- Add `.d.ts` output


License
-------

MIT License.
