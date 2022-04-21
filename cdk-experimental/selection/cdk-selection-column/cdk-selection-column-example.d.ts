import { SelectionChange } from '@angular/cdk-experimental/selection';
import * as i0 from "@angular/core";
/**
 * @title CDK Selection Column on a CDK table.
 */
export declare class CdkSelectionColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    selected: string[];
    selectionChanged(event: SelectionChange<PeriodicElement>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkSelectionColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkSelectionColumnExample, "cdk-selection-column-example", never, {}, {}, never, never, false>;
}
interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export {};
