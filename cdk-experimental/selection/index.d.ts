import * as i0 from '@angular/core';
import { SelectionChange } from '@angular/cdk-experimental/selection';

/**
 * @title CDK Selection Column on a CDK table.
 */
export declare class CdkSelectionColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    selected: string[];
    selectionChanged(event: SelectionChange<PeriodicElement>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkSelectionColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkSelectionColumnExample, "cdk-selection-column-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK Selection on a simple list.
 */
export declare class CdkSelectionListExample {
    data: string[];
    selected1: string[];
    selected2: string[];
    selected3: string[];
    selected4: string[];
    getCurrentSelected(event: SelectionChange<string>): string[];
    trackByFn(index: number): number;
    changeElementName(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkSelectionListExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkSelectionListExample, "cdk-selection-list-example", never, {}, {}, never, never, true, never>;
}

declare interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export { }
