import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, } from './bottom-sheet-overview/bottom-sheet-overview-example';
import { BottomSheetHarnessExample } from './bottom-sheet-harness/bottom-sheet-harness-example';
import * as i0 from "@angular/core";
export { BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet };
const EXAMPLES = [
    BottomSheetHarnessExample,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
export class BottomSheetExamplesModule {
}
BottomSheetExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: BottomSheetExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BottomSheetExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: BottomSheetExamplesModule, declarations: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule, MatButtonModule, MatLegacyListModule], exports: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] });
BottomSheetExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: BottomSheetExamplesModule, imports: [MatBottomSheetModule, MatButtonModule, MatLegacyListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: BottomSheetExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBottomSheetModule, MatButtonModule, MatLegacyListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiwrQkFBK0IsR0FDaEMsTUFBTSx1REFBdUQsQ0FBQztBQUMvRCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQzs7QUFFOUYsT0FBTyxFQUFDLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLCtCQUErQixFQUFDLENBQUM7QUFFaEcsTUFBTSxRQUFRLEdBQUc7SUFDZix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLCtCQUErQjtDQUNoQyxDQUFDO0FBT0YsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5Qjt1SEFBekIseUJBQXlCLGlCQVZwQyx5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLCtCQUErQixhQUlyQixvQkFBb0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLGFBTnBFLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsK0JBQStCO3VIQVFwQix5QkFBeUIsWUFKMUIsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQjsyRkFJekQseUJBQXlCO2tCQUxyQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztvQkFDckUsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRMZWdhY3lMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktbGlzdCc7XG5pbXBvcnQge1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCxcbn0gZnJvbSAnLi9ib3R0b20tc2hlZXQtb3ZlcnZpZXcvYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCb3R0b21TaGVldEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2JvdHRvbS1zaGVldC1oYXJuZXNzL2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0JvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGUsIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLCBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0fTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEJvdHRvbVNoZWV0TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdExlZ2FjeUxpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRFeGFtcGxlc01vZHVsZSB7fVxuIl19