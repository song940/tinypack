const { createGraph, bundle } = require('..');

const [ filename ] = process.argv.slice(2);

const graph = createGraph(filename);
const result = bundle(graph);

console.log(result);