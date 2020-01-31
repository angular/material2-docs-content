import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkPortalOverviewExample, ComponentPortalExample } from './cdk-portal-overview/cdk-portal-overview-example';
import * as i0 from "@angular/core";
export { CdkPortalOverviewExample, ComponentPortalExample };
var EXAMPLES = [
    CdkPortalOverviewExample,
    ComponentPortalExample,
];
var CdkPortalExamplesModule = /** @class */ (function () {
    function CdkPortalExamplesModule() {
    }
    CdkPortalExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PortalModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: [ComponentPortalExample]
                },] },
    ];
    CdkPortalExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
    CdkPortalExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); }, imports: [[
                PortalModule,
            ]] });
    return CdkPortalExamplesModule;
}());
export { CdkPortalExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
        ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample,
        ComponentPortalExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPortalExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    PortalModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [ComponentPortalExample]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcG9ydGFsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sbURBQW1ELENBQUM7O0FBRTNELE9BQU8sRUFBQyx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0FBRTFELElBQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtDQUN2QixDQUFDO0FBRUY7SUFBQTtLQVNDOztnQkFUQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDMUM7OytEQUNZLHVCQUF1QjtpSUFBdkIsdUJBQXVCLGtCQVB6QjtnQkFDUCxZQUFZO2FBQ2I7a0NBakJIO0NBdUJDLEFBVEQsSUFTQztTQURZLHVCQUF1Qjt3RkFBdkIsdUJBQXVCLG1CQVpsQyx3QkFBd0I7UUFDeEIsc0JBQXNCLGFBS3BCLFlBQVksYUFOZCx3QkFBd0I7UUFDeEIsc0JBQXNCO2tEQVdYLHVCQUF1QjtjQVJuQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLFxuICBDb21wb25lbnRQb3J0YWxFeGFtcGxlXG59IGZyb20gJy4vY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge0Nka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSwgQ29tcG9uZW50UG9ydGFsRXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUsXG4gIENvbXBvbmVudFBvcnRhbEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbQ29tcG9uZW50UG9ydGFsRXhhbXBsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsRXhhbXBsZXNNb2R1bGUge1xufVxuIl19