import { SelectionChange } from '@angular/cdk-experimental/selection';
import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @title CDK Selection Column on a CDK table.
 */
export declare class CdkSelectionColumnExample implements OnDestroy {
    private readonly _destroyed;
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    selected: string[];
    ngOnDestroy(): void;
    selectionChanged(event: SelectionChange<PeriodicElement>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkSelectionColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkSelectionColumnExample, "cdk-selection-column-example", never, {}, {}, never, never>;
}
interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export {};
