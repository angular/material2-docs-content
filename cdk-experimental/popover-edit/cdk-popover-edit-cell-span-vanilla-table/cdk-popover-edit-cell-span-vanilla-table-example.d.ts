import { NgForm } from '@angular/forms';
import * as i0 from "@angular/core";
export interface Person {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
}
/**
 * @title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
export declare class CdkPopoverEditCellSpanVanillaTableExample {
    readonly preservedValues: WeakMap<Person, any>;
    readonly persons: Person[];
    onSubmit(person: Person, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditCellSpanVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditCellSpanVanillaTableExample, "cdk-popover-edit-cell-span-vanilla-table-example", never, {}, {}, never, never, false>;
}
