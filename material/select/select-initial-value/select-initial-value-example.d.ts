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
 * @title Basic select with initial value and no form
 */
export declare class SelectInitialValueExample {
    foods: Food[];
    cars: Car[];
    selectedFood: string;
    selectedCar: string;
    selectCar(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectInitialValueExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectInitialValueExample, "select-initial-value-example", never, {}, {}, never, never, false>;
}
export {};
