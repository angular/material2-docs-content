import * as i0 from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TemplateRef } from '@angular/core';

/**
 * @title Testing with MatBottomSheetHarness
 */
export declare class BottomSheetHarnessExample {
    readonly bottomSheet: MatBottomSheet;
    template: TemplateRef<any>;
    constructor(bottomSheet: MatBottomSheet);
    open(config?: MatBottomSheetConfig): MatBottomSheetRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetHarnessExample, "bottom-sheet-harness-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Bottom Sheet Overview
 */
export declare class BottomSheetOverviewExample {
    private _bottomSheet;
    constructor(_bottomSheet: MatBottomSheet);
    openBottomSheet(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExample, "bottom-sheet-overview-example", never, {}, {}, never, never, true, never, false>;
}

export declare class BottomSheetOverviewExampleSheet {
    private _bottomSheetRef;
    constructor(_bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>);
    openLink(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExampleSheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExampleSheet, "bottom-sheet-overview-example-sheet", never, {}, {}, never, never, true, never, false>;
}

export { }
