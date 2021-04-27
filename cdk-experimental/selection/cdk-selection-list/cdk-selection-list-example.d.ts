import { SelectionChange } from '@angular/cdk-experimental/selection';
import * as i0 from "@angular/core";
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkSelectionListExample, "cdk-selection-list-example", never, {}, {}, never, never>;
}
