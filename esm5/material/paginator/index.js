import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorConfigurableExample } from './paginator-configurable/paginator-configurable-example';
import { PaginatorOverviewExample } from './paginator-overview/paginator-overview-example';
import * as i0 from "@angular/core";
export { PaginatorConfigurableExample, PaginatorOverviewExample, };
var EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
];
var PaginatorExamplesModule = /** @class */ (function () {
    function PaginatorExamplesModule() {
    }
    PaginatorExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PaginatorExamplesModule });
    PaginatorExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); }, imports: [[
                CommonModule,
                MatInputModule,
                MatPaginatorModule,
                FormsModule,
            ]] });
    return PaginatorExamplesModule;
}());
export { PaginatorExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatPaginatorModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXpGLE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLDRCQUE0QjtJQUM1Qix3QkFBd0I7Q0FDekIsQ0FBQztBQUVGO0lBQUE7S0FZQzsrREFEWSx1QkFBdUI7aUlBQXZCLHVCQUF1QixrQkFWekI7Z0JBQ1AsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsV0FBVzthQUNaO2tDQTFCSDtDQWdDQyxBQVpELElBWUM7U0FEWSx1QkFBdUI7d0ZBQXZCLHVCQUF1QixtQkFmbEMsNEJBQTRCO1FBQzVCLHdCQUF3QixhQUt0QixZQUFZO1FBQ1osY0FBYztRQUNkLGtCQUFrQjtRQUNsQixXQUFXLGFBVGIsNEJBQTRCO1FBQzVCLHdCQUF3QjtrREFjYix1QkFBdUI7Y0FYbkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge1xuICBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlXG59IGZyb20gJy4vcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS9wYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQYWdpbmF0b3JPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcGFnaW5hdG9yLW92ZXJ2aWV3L3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yRXhhbXBsZXNNb2R1bGUge1xufVxuIl19