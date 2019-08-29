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
    BottomSheetExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatBottomSheetModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiwrQkFBK0IsRUFDaEMsTUFBTSx1REFBdUQsQ0FBQztBQUUvRCxJQUFNLFFBQVEsR0FBRztJQUNmLDBCQUEwQjtJQUMxQiwrQkFBK0I7Q0FDaEMsQ0FBQztBQUVGO0lBQUE7SUFVQSxDQUFDOztnQkFWQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUNuRDs7SUFFRCxnQ0FBQztDQUFBLEFBVkQsSUFVQztTQURZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldFxufSBmcm9tICcuL2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldF0sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19