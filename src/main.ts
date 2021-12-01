import { fibonacci } from "./fibonacci.ts";

if (Deno.args.length < 2){
    console.error("Usage: benchtool-deno 1 10000 10 # [1] benchtype ( only 1 has implemented ), [10000] nElements, [10] execution for warm executions");
    Deno.exit(-1);
}

const benchType: number = parseInt(Deno.args[0]);

if(benchType != 1){
    console.error(`benchtype ${benchType} not implemented`);
    Deno.exit(-1);
}

const nElement:number = parseInt(Deno.args[1]);
const executionCount:number = parseInt(Deno.args[2]);

const result = fibonacci(nElement, executionCount);
console.log(`${result[1]} ${result[0]}`);
