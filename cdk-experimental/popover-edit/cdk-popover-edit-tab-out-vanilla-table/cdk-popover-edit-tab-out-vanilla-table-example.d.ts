import { NgForm } from '@angular/forms';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
 */
export declare class CdkPopoverEditTabOutVanillaTableExample {
    readonly preservedNameValues: WeakMap<PeriodicElement, any>;
    readonly preservedWeightValues: WeakMap<PeriodicElement, any>;
    readonly elements: PeriodicElement[];
    onSubmitName(element: PeriodicElement, f: NgForm): void;
    onSubmitWeight(element: PeriodicElement, f: NgForm): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPopoverEditTabOutVanillaTableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkPopoverEditTabOutVanillaTableExample, "cdk-popover-edit-tab-out-vanilla-table-example", never, {}, {}, never, never>;
}
