import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiwrQkFBK0IsRUFDaEMsTUFBTSx1REFBdUQsQ0FBQztBQUUvRCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLCtCQUErQixHQUNoQyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsK0JBQStCO0NBQ2hDLENBQUM7QUFFRjtJQUFBO0lBVUEsQ0FBQzs7Z0JBVkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDbkQ7O0lBRUQsZ0NBQUM7Q0FBQSxBQVZELElBVUM7U0FEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUsXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXRcbn0gZnJvbSAnLi9ib3R0b20tc2hlZXQtb3ZlcnZpZXcvYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldF0sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19