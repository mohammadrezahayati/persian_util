import Holidays from "date-holidays";
 
/**
 * 
 */
export class Holiday extends Holidays {
    constructor(private country: string){
        super();
        this.country = country
    }
    
}