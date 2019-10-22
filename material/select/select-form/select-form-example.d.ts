import * as i0 from "@angular/core";
export interface Food {
    value: string;
    viewValue: string;
}
export interface Car {
    value: string;
    viewValue: string;
}
/**
 * @title Select in a form
 */
export declare class SelectFormExample {
    selectedValue: string;
    selectedCar: string;
    foods: Food[];
    cars: Car[];
    static ngFactoryDef: i0.ɵɵFactoryDef<SelectFormExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<SelectFormExample, "select-form-example", never, {}, {}, never>;
}
