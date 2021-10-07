import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './bottom-sheet-overview/bottom-sheet-overview-example';
import { BottomSheetHarnessExample } from './bottom-sheet-harness/bottom-sheet-harness-example';
import * as i0 from "@angular/core";
export { BottomSheetHarnessExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, };
const EXAMPLES = [
    BottomSheetHarnessExample,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
export class BottomSheetExamplesModule {
}
BottomSheetExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: BottomSheetExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BottomSheetExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: BottomSheetExamplesModule, declarations: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule,
        MatButtonModule,
        MatListModule], exports: [BottomSheetHarnessExample,
        BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] });
BottomSheetExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: BottomSheetExamplesModule, imports: [[
            MatBottomSheetModule,
            MatButtonModule,
            MatListModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: BottomSheetExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatListModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsK0JBQStCLEVBQ2hDLE1BQU0sdURBQXVELENBQUM7QUFDL0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLCtCQUErQixHQUNoQyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLCtCQUErQjtDQUNoQyxDQUFDO0FBWUYsTUFBTSxPQUFPLHlCQUF5Qjs7OEhBQXpCLHlCQUF5QjsrSEFBekIseUJBQXlCLGlCQWZwQyx5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLCtCQUErQixhQUs3QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGFBQWEsYUFUZix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLCtCQUErQjsrSEFhcEIseUJBQXlCLFlBVDNCO1lBQ1Asb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixhQUFhO1NBQ2Q7bUdBS1UseUJBQXlCO2tCQVZyQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7XG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0XG59IGZyb20gJy4vYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7Qm90dG9tU2hlZXRIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9ib3R0b20tc2hlZXQtaGFybmVzcy9ib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQm90dG9tU2hlZXRIYXJuZXNzRXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQm90dG9tU2hlZXRIYXJuZXNzRXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==