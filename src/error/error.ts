import { ErrorFuncType, ErrorExpectedType, ErrorMessageType, ErrorMethodType } from "../types/error";
/**
 * Err class is an Error handling class to check your method or variable or anything you want and returned expected message and error
 * @param T type of callback
 * @param U type of expected returned type
 * @param M type of message
 */
export class Err<T, U, M>{
    method;
    #expected;
    #ErrorFunc?;
    #message?;
    constructor(method: ErrorMethodType<T>, expected: ErrorExpectedType<U>, ErrorFunc?: ErrorFuncType, message?: ErrorMessageType<M>) {
        this.method = method;
        this.#expected = expected;
        this.#ErrorFunc = ErrorFunc;
        this.#message = message;
    }
    getSanaz = (): any => {
        if (this.#ErrorFunc) {

        }

    }
    getError = () => {
        try {
            if (this.method === this.#expected) {
                return true;
            }
            throw new Error();
        } catch (err) {
            if (err instanceof Error) {
                return {
                    errorType: typeof err,
                    customMessage: this.#message,
                    message: err.message,
                    errorName: err.name,
                    stack: err.stack,
                    expected: `expected ${this.#expected} but get ${err.name}`
                };
            }
            if (err instanceof RangeError) {
                return {
                    errorType: typeof err,
                    customMessage: this.#message,
                    message: err.message,
                    errorName: err.name,
                    stack: err.stack,
                    expected: `expected ${this.#expected} but get ${err.name}`
                };
            }
            if (err instanceof EvalError) {
                return {
                    errorType: typeof err,
                    customMessage: this.#message,
                    message: err.message,
                    errorName: err.name,
                    stack: err.stack,
                    expected: `expected ${this.#expected} but get ${err.name}`
                };
            }
            if (err instanceof ReferenceError) {
                return {
                    errorType: typeof err,
                    customMessage: this.#message,
                    message: err.message,
                    errorName: err.name,
                    stack: err.stack,
                    expected: `expected ${this.#expected} but get ${err.name}`
                };
            }
            if (err instanceof SyntaxError) {
                return {
                    errorType: typeof err,
                    customMessage: this.#message,
                    message: err.message,
                    errorName: err.name,
                    stack: err.stack,
                    expected: `expected ${this.#expected} but get ${err.name}`
                };
            }
            if (err instanceof URIError) {
                return {
                    errorType: typeof err,
                    customMessage: this.#message,
                    message: err.message,
                    errorName: err.name,
                    stack: err.stack,
                    expected: `expected ${this.#expected} but get ${err.name}`
                };
            }
            return err;
        }
    }

}

