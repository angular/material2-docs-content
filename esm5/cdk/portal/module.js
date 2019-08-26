import * as tslib_1 from "tslib";
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkPortalOverviewExample, ComponentPortalExample } from './cdk-portal-overview/cdk-portal-overview-example';
var EXAMPLES = [
    CdkPortalOverviewExample,
    ComponentPortalExample,
];
var CdkPortalExamplesModule = /** @class */ (function () {
    function CdkPortalExamplesModule() {
    }
    CdkPortalExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                PortalModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
            entryComponents: [ComponentPortalExample]
        })
    ], CdkPortalExamplesModule);
    return CdkPortalExamplesModule;
}());
export { CdkPortalExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3J0YWwvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN2QixNQUFNLG1EQUFtRCxDQUFDO0FBRTNELElBQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtDQUN2QixDQUFDO0FBVUY7SUFBQTtJQUNBLENBQUM7SUFEWSx1QkFBdUI7UUFSbkMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFlBQVksRUFBRSxRQUFRO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQzFDLENBQUM7T0FDVyx1QkFBdUIsQ0FDbkM7SUFBRCw4QkFBQztDQUFBLEFBREQsSUFDQztTQURZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLFxuICBDb21wb25lbnRQb3J0YWxFeGFtcGxlXG59IGZyb20gJy4vY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLFxuICBDb21wb25lbnRQb3J0YWxFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogW0NvbXBvbmVudFBvcnRhbEV4YW1wbGVdXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcnRhbEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==