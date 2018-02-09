import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
/**
 * @title Bottom Sheet Overview
 */
export declare class BottomSheetOverviewExample {
    private bottomSheet;
    constructor(bottomSheet: MatBottomSheet);
    openBottomSheet(): void;
}
export declare class BottomSheetOverviewExampleSheet {
    private bottomSheetRef;
    constructor(bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>);
    onNoClick(event: MouseEvent): void;
}
