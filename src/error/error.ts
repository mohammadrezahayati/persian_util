/**
 * Importing the necessary types for handling errors.
 * @import {ErrorFuncType, ErrorExpectedType, ErrorMessageType, ErrorMethodType, findErrorType} from '../types/error';
 */
import {
  ErrorFuncType,
  ErrorExpectedType,
  ErrorMessageType,
  ErrorMethodType,
  findErrorType,
} from '../types/error';

/**
 * Err class is an Error handling class to check your method or variable or anything you want and returned expected message and error
 * @param T type of callback
 * @param U type of expected returned type
 * @param M type of message
 */
export class Err<T, U, M> {
  /**
   * @property method is an method or property you want to validate
   */
  method;

  /**
   * @property expected is an something you want to validate quality to return element in method property
   */
  #expected;

  /**
   * @property ErrorFunc is an method when method returned false this specific class constructor run
   */
  #ErrorFunc?;

  /**
   * @property message is an property you want to returned as message to user
   */
  #message?;

  /**
   *
   * @param method is an method or property you want to validate
   * @param expected is an something you want to validate quality to return element in method property
   * @param ErrorFunc is an method when method returned false this specific class constructor run
   * @param message is an property you want to returned as message to user
   */
  constructor(
    method: ErrorMethodType<T>,
    expected: ErrorExpectedType<U>,
    ErrorFunc?: ErrorFuncType,
    message?: ErrorMessageType<M>
  ) {
    this.method = method;
    this.#expected = expected;
    this.#ErrorFunc = ErrorFunc;
    this.#message = message;
  }
  /**
   * Determines the type of error that was thrown and returns an object with the error type.
   * @param {findErrorType} error - the error object to analyze
   * @returns An object with the error type.
   */
  #findError = (error: findErrorType) => {

    if (error instanceof RangeError) {
      return {
        errorType: "RangeError",
      };
    }
    if (error instanceof EvalError) {
      return {
        errorType: "EvalError",
      };
    }
    if (error instanceof ReferenceError) {
      return {
        errorType: "ReferenceError",
      };
    }
    if (error instanceof SyntaxError) {
      return {
        errorType: "SyntaxError",
      };
    }
    if (error instanceof URIError) {
      return {
        errorType: "URIError",
      };
    }
    if (error instanceof Error) {
      return {
        errorType: 'Error',
      };
    }
  }
  /**
   * this method get all error if you have any error
   * @return object if have any error
   * @return true if anything will be fine
   */
  getError = () => {
    try {
      if (this.method === this.#expected) {
        return false;
      }
      if (this.method !== this.#expected) {
        if (this.#ErrorFunc !== undefined) {
          throw this.#ErrorFunc;
        }
      }
      throw new Error();
    } catch (err) {
      if (err instanceof Error) {
        return {
          errorType: this.#findError(err),
          customMessage: this.#message,
          message: err.message,
          errorName: err.name,
          stack: err.stack,
          expected: `expected ${this.#expected} but get ${err.name}`,
        };
      }
      if (err instanceof RangeError) {
        return {
          errorType: this.#findError(err),
          customMessage: this.#message,
          message: err.message,
          errorName: err.name,
          stack: err.stack,
          expected: `expected ${this.#expected} but get ${err.name}`,
        };
      }
      if (err instanceof EvalError) {
        return {
          errorType: this.#findError(err),
          customMessage: this.#message,
          message: err.message,
          errorName: err.name,
          stack: err.stack,
          expected: `expected ${this.#expected} but get ${err.name}`,
        };
      }
      if (err instanceof ReferenceError) {
        return {
          errorType: this.#findError(err),
          customMessage: this.#message,
          message: err.message,
          errorName: err.name,
          stack: err.stack,
          expected: `expected ${this.#expected} but get ${err.name}`,
        };
      }
      if (err instanceof SyntaxError) {
        return {
          errorType: this.#findError(err),
          customMessage: this.#message,
          message: err.message,
          errorName: err.name,
          stack: err.stack,
          expected: `expected ${this.#expected} but get ${err.name}`,
        };
      }
      if (err instanceof URIError) {
        return {
          errorType: this.#findError(err),
          customMessage: this.#message,
          message: err.message,
          errorName: err.name,
          stack: err.stack,
          expected: `expected ${this.#expected} but get ${err.name}`,
        };
      }
      return err;
    }
  };
}
