import * as i0 from "@angular/core";
interface Food {
    value: string;
    viewValue: string;
}
interface Car {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectFormExample, "select-form-example", never, {}, {}, never, never>;
}
export {};
