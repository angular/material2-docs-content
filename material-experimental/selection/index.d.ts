import * as i0 from '@angular/core';
import * as i3 from '@angular/material-experimental/selection';
import * as i4 from '@angular/material/table';
import * as i5 from '@angular/common';
import * as i6 from '@angular/forms';
import * as i7 from '@angular/material/checkbox';
import { SelectionChange } from '@angular/cdk-experimental/selection';
import { SelectionChange as SelectionChange_2 } from '@angular/material-experimental/selection';

declare namespace i1 {
    export {
        MatSelectionListExample
    }
}

declare namespace i2 {
    export {
        MatSelectionColumnExample
    }
}

/**
 * @title Table that uses `matSelectionColumn` which allows users to select rows.
 */
export declare class MatSelectionColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    selected: string[];
    selectionChanged(event: SelectionChange_2<PeriodicElement>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectionColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelectionColumnExample, "mat-selection-column-example", never, {}, {}, never, never, false, never>;
}

export declare class MatSelectionExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectionExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatSelectionExamplesModule, [typeof i1.MatSelectionListExample, typeof i2.MatSelectionColumnExample], [typeof i3.MatSelectionModule, typeof i4.MatTableModule, typeof i5.CommonModule, typeof i6.FormsModule, typeof i6.ReactiveFormsModule, typeof i7.MatCheckboxModule], [typeof i1.MatSelectionListExample, typeof i2.MatSelectionColumnExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatSelectionExamplesModule>;
}

/**
 * @title Mat Selection on a simple list.
 */
export declare class MatSelectionListExample {
    data: string[];
    selected1: string[];
    selected2: string[];
    selected3: string[];
    selected4: string[];
    getCurrentSelected(event: SelectionChange<string>): string[];
    trackByFn(index: number, value: string): number;
    changeElementName(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectionListExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelectionListExample, "mat-selection-list-example", never, {}, {}, never, never, false, never>;
}

declare interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export { }
