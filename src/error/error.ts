
/**
 * Error Class
 */

import { ErrorType } from "../types/error";

/**
 * TODO : what we need :
 * TODO : get function, or variable 
 * TODO : check returned type or value function, 
 * TODO : value we expected, 
 * TODO : Error function we expected, 
 * TODO : error message may be an object  
 */
export class Err<methodType, expected, message extends ErrorType<methodType, expected, message>> {
    constructor(private instance: Error) {
        instance = new Error()
    }

}