import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './bottom-sheet-overview/bottom-sheet-overview-example';
export { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, };
var EXAMPLES = [
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
];
var BottomSheetExamplesModule = /** @class */ (function () {
    function BottomSheetExamplesModule() {
    }
    BottomSheetExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatListModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: [BottomSheetOverviewExampleSheet],
                },] }
    ];
    return BottomSheetExamplesModule;
}());
export { BottomSheetExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsK0JBQStCLEVBQ2hDLE1BQU0sdURBQXVELENBQUM7QUFFL0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiwrQkFBK0IsR0FDaEMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsMEJBQTBCO0lBQzFCLCtCQUErQjtDQUNoQyxDQUFDO0FBRUY7SUFBQTtJQVdBLENBQUM7O2dCQVhBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDbkQ7O0lBRUQsZ0NBQUM7Q0FBQSxBQVhELElBV0M7U0FEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldFxufSBmcm9tICcuL2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0LFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldF0sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19