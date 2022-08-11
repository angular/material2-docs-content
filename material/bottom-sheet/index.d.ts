import * as i0 from '@angular/core';
import * as i3 from '@angular/material/bottom-sheet';
import * as i4 from '@angular/material/button';
import * as i5 from '@angular/material/legacy-list';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TemplateRef } from '@angular/core';

export declare class BottomSheetExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BottomSheetExamplesModule, [typeof i1.BottomSheetHarnessExample, typeof i2.BottomSheetOverviewExample, typeof i2.BottomSheetOverviewExampleSheet], [typeof i3.MatBottomSheetModule, typeof i4.MatButtonModule, typeof i5.MatLegacyListModule], [typeof i1.BottomSheetHarnessExample, typeof i2.BottomSheetOverviewExample, typeof i2.BottomSheetOverviewExampleSheet]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BottomSheetExamplesModule>;
}

/**
 * @title Testing with MatBottomSheetHarness
 */
export declare class BottomSheetHarnessExample {
    readonly bottomSheet: MatBottomSheet;
    template: TemplateRef<any>;
    constructor(bottomSheet: MatBottomSheet);
    open(config?: MatBottomSheetConfig): MatBottomSheetRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetHarnessExample, "bottom-sheet-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Bottom Sheet Overview
 */
export declare class BottomSheetOverviewExample {
    private _bottomSheet;
    constructor(_bottomSheet: MatBottomSheet);
    openBottomSheet(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExample, "bottom-sheet-overview-example", never, {}, {}, never, never, false>;
}

export declare class BottomSheetOverviewExampleSheet {
    private _bottomSheetRef;
    constructor(_bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>);
    openLink(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExampleSheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExampleSheet, "bottom-sheet-overview-example-sheet", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        BottomSheetHarnessExample
    }
}

declare namespace i2 {
    export {
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet
    }
}

export { }
