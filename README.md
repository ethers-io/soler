Soler - Solidity CLI Compiler
=============================

A Solidity compiler with support for:

- detect and use Solidity libraries installed in `node_modules/`
- generates a single verify-contract.json for verifying on block explorers
- outputs a single files including the ABI and byte code.


Command-Line Interface
----------------------

Each contract will be placed in a separate file named based on its contract
name.

```
/home/ricmoo/my_project> soler [ --output FOLDER ] CONTRACT [ ...CONTRACT ]
```


License
-------

MIT License.
