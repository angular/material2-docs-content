import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import * as i0 from "@angular/core";
export { GridListDynamicExample, GridListOverviewExample, };
var EXAMPLES = [
    GridListDynamicExample,
    GridListOverviewExample,
];
var GridListExamplesModule = /** @class */ (function () {
    function GridListExamplesModule() {
    }
    GridListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: GridListExamplesModule });
    GridListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); }, imports: [[
                CommonModule,
                MatGridListModule,
            ]] });
    return GridListExamplesModule;
}());
export { GridListExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
        GridListOverviewExample], imports: [CommonModule,
        MatGridListModule], exports: [GridListDynamicExample,
        GridListOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsdUJBQXVCLEdBQ3hCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGO0lBQUE7S0FVQzs4REFEWSxzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkFSeEI7Z0JBQ1AsWUFBWTtnQkFDWixpQkFBaUI7YUFDbEI7aUNBcEJIO0NBMEJDLEFBVkQsSUFVQztTQURZLHNCQUFzQjt3RkFBdEIsc0JBQXNCLG1CQWJqQyxzQkFBc0I7UUFDdEIsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixpQkFBaUIsYUFQbkIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtrREFZWixzQkFBc0I7Y0FUbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEdyaWRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHtHcmlkTGlzdER5bmFtaWNFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3Qtb3ZlcnZpZXcvZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBHcmlkTGlzdER5bmFtaWNFeGFtcGxlLFxuICBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBHcmlkTGlzdER5bmFtaWNFeGFtcGxlLFxuICBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==