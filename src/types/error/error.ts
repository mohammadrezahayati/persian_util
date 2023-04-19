/**
 * TODO : get function, or variable 
 * TODO : check returned type or value function, 
 * TODO : value we expected, 
 * TODO : Error function we expected, 
 * TODO : error message may be an object 
 */
export interface ErrorType<methodType,expected,message> {
    method: () => unknown | methodType;
    expected: unknown | expected;
    ErrorFunc?: RangeError | EvalError | ReferenceError | SyntaxError | SyntaxError | URIError ;
    message: unknown | message;
}