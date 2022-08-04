import * as i0 from '@angular/core';
import * as i3 from '@angular/cdk-experimental/selection';
import * as i4 from '@angular/cdk/table';
import * as i5 from '@angular/common';
import * as i6 from '@angular/forms';
import * as i7 from '@angular/material/legacy-checkbox';
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkSelectionColumnExample, "cdk-selection-column-example", never, {}, {}, never, never, false>;
}

export declare class CdkSelectionExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkSelectionExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkSelectionExamplesModule, [typeof i1.CdkSelectionListExample, typeof i2.CdkSelectionColumnExample], [typeof i3.CdkSelectionModule, typeof i4.CdkTableModule, typeof i5.CommonModule, typeof i6.FormsModule, typeof i6.ReactiveFormsModule, typeof i7.MatLegacyCheckboxModule], [typeof i1.CdkSelectionListExample, typeof i2.CdkSelectionColumnExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkSelectionExamplesModule>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkSelectionListExample, "cdk-selection-list-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        CdkSelectionListExample
    }
}

declare namespace i2 {
    export {
        CdkSelectionColumnExample
    }
}

declare interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export { }
