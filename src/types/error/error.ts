
/**
 * Type of the callback error we gave to the Err class at the first element may be method or any variable
 * @param T you can set your type
 */
export type ErrorMethodType<T> = (() => boolean) | T

/**
 * Type of the expected error we want to returned
 * @param T you can set your type
 */
export type ErrorExpectedType<T> = T

/**
 * All type of javascript Error Function we can pass the pure Error type functions in Err class and its optional
 */
export type ErrorFuncType = RangeError | EvalError | ReferenceError | SyntaxError | URIError;

/**
 * Type of the error message we want to returned
 * @param T you can set your type
 */
export type ErrorMessageType<T> = T;

