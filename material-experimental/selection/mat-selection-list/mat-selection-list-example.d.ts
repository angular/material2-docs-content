import { SelectionChange } from '@angular/cdk-experimental/selection';
import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @title Mat Selection on a simple list.
 */
export declare class MatSelectionListExample implements OnDestroy {
    private readonly _destroyed;
    data: string[];
    selected1: string[];
    selected2: string[];
    selected3: string[];
    selected4: string[];
    ngOnDestroy(): void;
    getCurrentSelected(event: SelectionChange<string>): string[];
    trackByFn(index: number, value: string): number;
    changeElementName(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectionListExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelectionListExample, "mat-selection-list-example", never, {}, {}, never, never>;
}
