#!/usr/bin/env node

import { mkdirSync, writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";

import { Options } from "@ricmoo/cli";
import { compile } from "@ricmoo/solidity";


const CLIOptions = {
    quiet: Options.boolean,
//    optimize: { type: "boolean" }
//    error-on-warning: { type: "boolean" }
//    library: { type: "array" },
    output: { type: Options.string, defaultValue: "build" }
};

// Usage
// soler filename contract [ contract ... ] [ --output build ]


(async function() {

    // Parse the CLI options (with sane defaults)
    const options = Options.cli(CLIOptions);

    // Compile the contracts
    const output = compile(options.args[0]);

    // Find the contracts to dump
    const write: Record<string, string> = { };

    for (const name of options.args.slice(1)) {
        const found = output[name];

        if (!found) { throw new Error(`Missing contract: ${ name }`); }

        // Always dump the verify info (Solidity names cannot contain a hyphen)
        write["verify-contract.json"] = JSON.stringify(found.input);

        write[name.toLowerCase() + ".json"] = JSON.stringify(Object.assign({ }, found, { input: undefined }));
    }

    // Make sure we have an output folder
    const build = options.getString("output");
    mkdirSync(build, { recursive: true });

    // Dump each contract
    for (const filename in write) {
        const content = write[filename] + "\n";
        const path = resolve(build, filename);

        if (!options.getBoolean("quiet")) {
            console.log(`Writing: ${ relative(".", path) }`);
        }

        writeFileSync(path, content);
    }

})();
