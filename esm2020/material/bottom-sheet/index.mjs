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
BottomSheetExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BottomSheetExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetExamplesModule, declarations: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule, MatButtonModule, MatListModule], exports: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] });
BottomSheetExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetExamplesModule, imports: [[MatBottomSheetModule, MatButtonModule, MatListModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: BottomSheetExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBottomSheetModule, MatButtonModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsK0JBQStCLEdBQ2hDLE1BQU0sdURBQXVELENBQUM7QUFDL0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSwrQkFBK0IsRUFBQyxDQUFDO0FBRWhHLE1BQU0sUUFBUSxHQUFHO0lBQ2YseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwrQkFBK0I7Q0FDaEMsQ0FBQztBQVFGLE1BQU0sT0FBTyx5QkFBeUI7OzJIQUF6Qix5QkFBeUI7NEhBQXpCLHlCQUF5QixpQkFYcEMseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwrQkFBK0IsYUFJckIsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLGFBQWEsYUFOOUQseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwrQkFBK0I7NEhBU3BCLHlCQUF5QixZQUwzQixDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7Z0dBS3BELHlCQUF5QjtrQkFOckMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO29CQUMvRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7XG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0LFxufSBmcm9tICcuL2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0JvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGV9IGZyb20gJy4vYm90dG9tLXNoZWV0LWhhcm5lc3MvYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7Qm90dG9tU2hlZXRIYXJuZXNzRXhhbXBsZSwgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXR9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQm90dG9tU2hlZXRIYXJuZXNzRXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0Qm90dG9tU2hlZXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0TGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=