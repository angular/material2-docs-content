import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkPortalOverviewExample, ComponentPortalExample } from './cdk-portal-overview/cdk-portal-overview-example';
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
                },] }
    ];
    return CdkPortalExamplesModule;
}());
export { CdkPortalExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3J0YWwvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sbURBQW1ELENBQUM7QUFFM0QsT0FBTyxFQUFDLHdCQUF3QixFQUFFLHNCQUFzQixFQUFDLENBQUM7QUFFMUQsSUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUFBO0lBU0EsQ0FBQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQzFDOztJQUVELDhCQUFDO0NBQUEsQUFURCxJQVNDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUsXG4gIENvbXBvbmVudFBvcnRhbEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLCBDb21wb25lbnRQb3J0YWxFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb21wb25lbnRQb3J0YWxFeGFtcGxlXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=