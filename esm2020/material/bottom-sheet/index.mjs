import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
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
BottomSheetExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: BottomSheetExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BottomSheetExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-rc.0", ngImport: i0, type: BottomSheetExamplesModule, declarations: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule, MatButtonModule, MatListModule], exports: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] });
BottomSheetExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: BottomSheetExamplesModule, imports: [MatBottomSheetModule, MatButtonModule, MatListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: BottomSheetExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBottomSheetModule, MatButtonModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsK0JBQStCLEdBQ2hDLE1BQU0sdURBQXVELENBQUM7QUFDL0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBQyxDQUFDO0FBRWhHLE1BQU0sUUFBUSxHQUFHO0lBQ2YseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwrQkFBK0I7Q0FDaEMsQ0FBQztBQU9GLE1BQU0sT0FBTyx5QkFBeUI7OzJIQUF6Qix5QkFBeUI7NEhBQXpCLHlCQUF5QixpQkFWcEMseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwrQkFBK0IsYUFJckIsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLGFBQWEsYUFOOUQseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwrQkFBK0I7NEhBUXBCLHlCQUF5QixZQUoxQixvQkFBb0IsRUFBRSxlQUFlLEVBQUUsYUFBYTtnR0FJbkQseUJBQXlCO2tCQUxyQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7b0JBQy9ELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCxcbn0gZnJvbSAnLi9ib3R0b20tc2hlZXQtb3ZlcnZpZXcvYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCb3R0b21TaGVldEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2JvdHRvbS1zaGVldC1oYXJuZXNzL2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0JvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGUsIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLCBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0fTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEJvdHRvbVNoZWV0TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdExpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRFeGFtcGxlc01vZHVsZSB7fVxuIl19