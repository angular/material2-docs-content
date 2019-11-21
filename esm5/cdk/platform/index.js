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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7O0FBRWpHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxDQUFDO0FBRXBDLElBQU0sUUFBUSxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUU5QztJQUFBO0tBUUM7O2dCQVJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztpRUFDWSx5QkFBeUI7cUlBQXpCLHlCQUF5QixrQkFOM0I7Z0JBQ1AsY0FBYzthQUNmO29DQVhIO0NBZ0JDLEFBUkQsSUFRQztTQURZLHlCQUF5Qjt3RkFBekIseUJBQXlCLG1CQVRwQiwwQkFBMEIsYUFJeEMsY0FBYyxhQUpBLDBCQUEwQjtrREFTL0IseUJBQXlCO2NBUHJDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsYXRmb3JtTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1BsYXRmb3JtT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrUGxhdGZvcm1PdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtDZGtQbGF0Zm9ybU92ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQbGF0Zm9ybU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1BsYXRmb3JtRXhhbXBsZXNNb2R1bGUge1xufVxuIl19