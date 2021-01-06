import { TemplateRef } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
/**
 * @title Testing with MatBottomSheetHarness
 */
export declare class BottomSheetHarnessExample {
    readonly bottomSheet: MatBottomSheet;
    template: TemplateRef<any>;
    constructor(bottomSheet: MatBottomSheet);
    open(config?: MatBottomSheetConfig): import("@angular/material/bottom-sheet").MatBottomSheetRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDef<BottomSheetHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BottomSheetHarnessExample, "bottom-sheet-harness-example", never, {}, {}, never, never>;
}
