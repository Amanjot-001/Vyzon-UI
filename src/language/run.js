import Parser from './parser.js'
import Interpreter from './interpreter/Interpreter.js'

const parser = new Parser();
const interpreter = new Interpreter();

export default function execute(code) {
    const ast = parser.parse(code);
    return interpreter.interpret(ast.body);
}