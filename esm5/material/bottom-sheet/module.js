import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './bottom-sheet-overview/bottom-sheet-overview-example';
var EXAMPLES = [
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
var BottomSheetExamplesModule = /** @class */ (function () {
    function BottomSheetExamplesModule() {
    }
    BottomSheetExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                MatBottomSheetModule,
                MatListModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
            entryComponents: [BottomSheetOverviewExampleSheet],
        })
    ], BottomSheetExamplesModule);
    return BottomSheetExamplesModule;
}());
export { BottomSheetExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsK0JBQStCLEVBQ2hDLE1BQU0sdURBQXVELENBQUM7QUFFL0QsSUFBTSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsK0JBQStCO0NBQ2hDLENBQUM7QUFXRjtJQUFBO0lBQ0EsQ0FBQztJQURZLHlCQUF5QjtRQVRyQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asb0JBQW9CO2dCQUNwQixhQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixPQUFPLEVBQUUsUUFBUTtZQUNqQixlQUFlLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUNuRCxDQUFDO09BQ1cseUJBQXlCLENBQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXRcbn0gZnJvbSAnLi9ib3R0b20tc2hlZXQtb3ZlcnZpZXcvYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogW0JvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXRdLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==