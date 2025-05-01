import * as i0 from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as _angular_material_bottom_sheet from '@angular/material/bottom-sheet';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';

/**
 * @title Bottom Sheet Overview
 */
declare class BottomSheetOverviewExample {
    private _bottomSheet;
    openBottomSheet(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExample, "bottom-sheet-overview-example", never, {}, {}, never, never, true, never>;
}
declare class BottomSheetOverviewExampleSheet {
    private _bottomSheetRef;
    openLink(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExampleSheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExampleSheet, "bottom-sheet-overview-example-sheet", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatBottomSheetHarness
 */
declare class BottomSheetHarnessExample {
    readonly bottomSheet: MatBottomSheet;
    template: TemplateRef<any>;
    open(config?: MatBottomSheetConfig): _angular_material_bottom_sheet.MatBottomSheetRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetHarnessExample, "bottom-sheet-harness-example", never, {}, {}, never, never, true, never>;
}

export { BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
