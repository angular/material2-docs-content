import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
/**
 * @title Bottom Sheet Overview
 */
export declare class BottomSheetOverviewExample {
    private _bottomSheet;
    constructor(_bottomSheet: MatBottomSheet);
    openBottomSheet(): void;
    static ɵfac: i0.ɵɵFactoryDef<BottomSheetOverviewExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BottomSheetOverviewExample, "bottom-sheet-overview-example", never, {}, {}, never>;
}
export declare class BottomSheetOverviewExampleSheet {
    private _bottomSheetRef;
    constructor(_bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>);
    openLink(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<BottomSheetOverviewExampleSheet>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BottomSheetOverviewExampleSheet, "bottom-sheet-overview-example-sheet", never, {}, {}, never>;
}
