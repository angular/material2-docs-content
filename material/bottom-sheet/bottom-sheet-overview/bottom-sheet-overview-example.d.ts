import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
/**
 * @title Bottom Sheet Overview
 */
export declare class BottomSheetOverviewExample {
    private _bottomSheet;
    constructor(_bottomSheet: MatBottomSheet);
    openBottomSheet(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExample, "bottom-sheet-overview-example", never, {}, {}, never, never>;
}
export declare class BottomSheetOverviewExampleSheet {
    private _bottomSheetRef;
    constructor(_bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>);
    openLink(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomSheetOverviewExampleSheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BottomSheetOverviewExampleSheet, "bottom-sheet-overview-example-sheet", never, {}, {}, never, never>;
}
