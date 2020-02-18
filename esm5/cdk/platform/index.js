import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { CdkPlatformOverviewExample } from './cdk-platform-overview/cdk-platform-overview-example';
import * as i0 from "@angular/core";
export { CdkPlatformOverviewExample };
var EXAMPLES = [CdkPlatformOverviewExample];
var CdkPlatformExamplesModule = /** @class */ (function () {
    function CdkPlatformExamplesModule() {
    }
    CdkPlatformExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PlatformModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    CdkPlatformExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkPlatformExamplesModule });
    CdkPlatformExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkPlatformExamplesModule_Factory(t) { return new (t || CdkPlatformExamplesModule)(); }, imports: [[
                PlatformModule,
            ]] });
    return CdkPlatformExamplesModule;
}());
export { CdkPlatformExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPlatformExamplesModule, { declarations: [CdkPlatformOverviewExample], imports: [PlatformModule], exports: [CdkPlatformOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPlatformExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    PlatformModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7O0FBRWpHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxDQUFDO0FBRXBDLElBQU0sUUFBUSxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUU5QztJQUFBO0tBU0M7O2dCQVRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7aUVBQ1kseUJBQXlCO3FJQUF6Qix5QkFBeUIsa0JBUDNCO2dCQUNQLGNBQWM7YUFDZjtvQ0FYSDtDQWlCQyxBQVRELElBU0M7U0FEWSx5QkFBeUI7d0ZBQXpCLHlCQUF5QixtQkFWcEIsMEJBQTBCLGFBSXhDLGNBQWMsYUFKQSwwQkFBMEI7a0RBVS9CLHlCQUF5QjtjQVJyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxhdGZvcm1Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrUGxhdGZvcm1PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtDZGtQbGF0Zm9ybU92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0Nka1BsYXRmb3JtT3ZlcnZpZXdFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFBsYXRmb3JtTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUGxhdGZvcm1FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=