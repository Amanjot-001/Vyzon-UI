import Top from './Top'
import Editor from './Editor'
import '../styles/Doc.css'

const docData = [
    {
        heading: '# Rules',
        info: `=> Every statement in Vyzon should end with a semicolon <span style="color: #268bd2">(;)</span> to indicate the termination of the statement.
=> Variable names in Vyzon should not start with a number.
=> All functions in Vyzon should be declared above their function calls.
=> In Vyzon, the <span style="color: #268bd2">++</span> and <span style="color: #268bd2">--</span> operators are not supported yet.`
    },
    {
        heading: '# Variable Declaration',
        info: `=> In Vyzon, variables are declared using the <span style="color: #268bd2">let</span> keyword.`,
        code: `let a;  // Variable 'a' is declared and initialized with the default value of 0\nlet b = 1;  // Variable 'b' is declared and initialized with the value 1\nlet c = 'Hello, World!';`,
        fileName: 'Variable.vy'
    },
    {
        heading: '# Data Types',
        info: `=> Vyzon supports various data types, including <span style="color: #268bd2">strings</span>, <span style="color: #268bd2">numbers</span>, <span style="color: #268bd2">true</span>, <span style="color: #268bd2">false</span>, and <span style="color: #268bd2">null</span>, to represent a wide range of values. For example:`,
        code: `let a = 'Hello, World!';let b = 10;let c = 10 + (10 * 3) + a;
let d = "Ok!";
let e = null;
let f = true;
let g = false;`,
        fileName: 'DataTypes.vy'
    },
    {
        heading: '# Operators',
        info: `=> The operators are the same as in other programming languages.`,
        code: `// Comparison Operators\nconst isEqual = 5 == 10;\nconst isNotEqual = 5 != 10;\nconst isGreaterThan = 5 > 10;\nconst isLessThan = 5 < 10;\nconst isGreaterOrEqual = 5 >= 10;\nconst isLessOrEqual = 5 <= 10;\n\n// Logical Operators\nconst andResult = true && false;\nconst orResult = true || false;\nconst notResult = !true;\n\n// Arithmetic Operators\nconst addition = 5 + 10;\nconst subtraction = 10 - 5;\nconst multiplication = 5 * 10;\nconst division = 10 / 5;\nconst modulus = 10 % 3;\n\n// Assignment Operators\nlet x = 5;\nx = x + 2;\nx += 2;\nx -= 3;\nx *= 4;\nx /= 6;`,
        fileName: 'Operators.vy'
    },
    {
        heading: '# Console Output',
        info: `=> In Vyzon, you can print to the console using the <span style="color: #268bd2">write()</span> function. Here are some examples:`,
        code: `let a = 'Anything';
write(a); 
write("abc");
write("write anything: ", a);`,
        fileName: `ConsoleOutput.vy`
    },
    {
        heading: '# Function',
        info: `=> You can declare functions in Vyzon using the <span style="color: #268bd2">def</span> keyword, followed by the function name and parameters enclosed in parentheses.<br>The function body is defined in a block. To call a function, use its name followed by parentheses, passing any required arguments.`,
        code: `def greet(name) { \nwrite("Hello, " + name + "!");\n}\n\ngreet("Alice"); // Calls the greet function with "Alice" as an argument.`,
        fileName: 'Function.vy'
    },
    {
        heading: '# Conditionals',
        info: `=> Vyzon supports conditional statements for decision-making in your code. You can use the <span style="color: #268bd2">if</span>, <span style="color: #268bd2">elif</span>, and <span style="color: #268bd2">else</span> statements to execute different blocks of code based on specific conditions.`,
        code: `let x = 10;\n\nif (x > 15) {\n\twrite("x is greater than 15");\n} elif (x > 5) {\n\twrite("x is greater than 5 but not greater than 15");\n} else {\n\twrite("x is not greater than 5");\n}`,
        fileName: 'Conditionals.vy'
    },
    {
        heading: '# Loops',
        info: `=> Vyzon supports various loop types to suit your needs. You can use <span style="color: #268bd2">for</span>, <span style="color: #268bd2">while</span>, and <span style="color: #268bd2">do while</span> loops to control the flow of your Vyzon programs by repeating code as needed.`,
        code: `write("Using the for loop:");\nfor (let i=0; i<10; i+=1) {\n\t write("Current value of i: ", i);\n}\n\nwrite("Using the while loop:");\nlet j = 0;\nwhile (j < 5) {\n\twrite("Current value of j: ", j);\n\tj = j + 1;\n}\n\nwrite("Using the do-while loop:");\nlet k = 0;\ndo {\n\twrite("Current value of k: ", k);\n\tk = k + 1;\n} while (k < 5);`,
        fileName: 'Loops.vy'
    },
]

export default function Doc() {
    return (
        <div className="doc">
            {docData.map((data, index) => (
                <div className="doc-item" key={index}>
                    <div className="heading">{data.heading}</div>
                    <div className="info" dangerouslySetInnerHTML={{ __html: data.info }}>
                    </div>
                    {data.fileName ? (
                        <div className="example">
                            <Top fileName={data.fileName} />
                            <Editor disabled={true} code={data.code} className='custom-editor' />
                        </div>
                    ) : null}
                </div>
            ))}
        </div >
    )
}