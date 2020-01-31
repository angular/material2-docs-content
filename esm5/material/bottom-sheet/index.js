import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './bottom-sheet-overview/bottom-sheet-overview-example';
import * as i0 from "@angular/core";
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
                },] },
    ];
    BottomSheetExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: BottomSheetExamplesModule });
    BottomSheetExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BottomSheetExamplesModule_Factory(t) { return new (t || BottomSheetExamplesModule)(); }, imports: [[
                MatBottomSheetModule,
                MatButtonModule,
                MatListModule,
            ]] });
    return BottomSheetExamplesModule;
}());
export { BottomSheetExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BottomSheetExamplesModule, { declarations: [BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet], imports: [MatBottomSheetModule,
        MatButtonModule,
        MatListModule], exports: [BottomSheetOverviewExample,
        BottomSheetOverviewExampleSheet] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheetExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [BottomSheetOverviewExampleSheet],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsK0JBQStCLEVBQ2hDLE1BQU0sdURBQXVELENBQUM7O0FBRS9ELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsK0JBQStCLEdBQ2hDLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLDBCQUEwQjtJQUMxQiwrQkFBK0I7Q0FDaEMsQ0FBQztBQUVGO0lBQUE7S0FXQzs7Z0JBWEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUNuRDs7aUVBQ1kseUJBQXlCO3FJQUF6Qix5QkFBeUIsa0JBVDNCO2dCQUNQLG9CQUFvQjtnQkFDcEIsZUFBZTtnQkFDZixhQUFhO2FBQ2Q7b0NBeEJIO0NBOEJDLEFBWEQsSUFXQztTQURZLHlCQUF5Qjt3RkFBekIseUJBQXlCLG1CQWRwQywwQkFBMEI7UUFDMUIsK0JBQStCLGFBSzdCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsYUFBYSxhQVJmLDBCQUEwQjtRQUMxQiwrQkFBK0I7a0RBYXBCLHlCQUF5QjtjQVZyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge1xuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSxcbiAgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldFxufSBmcm9tICcuL2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0LFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlLFxuICBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldF0sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19