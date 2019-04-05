import * as tslib_1 from "tslib";
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
/**
 * @title Portal overview
 */
var CdkPortalOverviewExample = /** @class */ (function () {
    function CdkPortalOverviewExample(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    CdkPortalOverviewExample.prototype.ngAfterViewInit = function () {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    };
    tslib_1.__decorate([
        ViewChild('templatePortalContent', { static: false }),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CdkPortalOverviewExample.prototype, "templatePortalContent", void 0);
    CdkPortalOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-portal-overview-example',
            template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n",
            styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [ViewContainerRef])
    ], CdkPortalOverviewExample);
    return CdkPortalOverviewExample;
}());
export { CdkPortalOverviewExample };
var ComponentPortalExample = /** @class */ (function () {
    function ComponentPortalExample() {
    }
    ComponentPortalExample = tslib_1.__decorate([
        Component({
            selector: 'component-portal-example',
            template: 'Hello, this is a component portal'
        })
    ], ComponentPortalExample);
    return ComponentPortalExample;
}());
export { ComponentPortalExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1wb3J0YWwtb3ZlcnZpZXcvY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFpQixXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQVUsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFNUU7O0dBRUc7QUFNSDtJQU1FLGtDQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFHLENBQUM7SUFFM0Qsa0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBVm9EO1FBQXBELFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzswQ0FBd0IsV0FBVzsyRUFBTTtJQURsRix3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2Qyx1YUFBK0M7O1NBRWhELENBQUM7aURBT3VDLGdCQUFnQjtPQU41Qyx3QkFBd0IsQ0FZcEM7SUFBRCwrQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLHdCQUF3QjtBQWtCckM7SUFBQTtJQUFxQyxDQUFDO0lBQXpCLHNCQUFzQjtRQUpsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxtQ0FBbUM7U0FDOUMsQ0FBQztPQUNXLHNCQUFzQixDQUFHO0lBQUQsNkJBQUM7Q0FBQSxBQUF0QyxJQUFzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbi8qKlxuICogQHRpdGxlIFBvcnRhbCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUG9ydGFsQ29udGVudCcsIHtzdGF0aWM6IGZhbHNlfSkgdGVtcGxhdGVQb3J0YWxDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBzZWxlY3RlZFBvcnRhbDogUG9ydGFsPGFueT47XG4gIGNvbXBvbmVudFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPENvbXBvbmVudFBvcnRhbEV4YW1wbGU+O1xuICB0ZW1wbGF0ZVBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoQ29tcG9uZW50UG9ydGFsRXhhbXBsZSk7XG4gICAgdGhpcy50ZW1wbGF0ZVBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnRlbXBsYXRlUG9ydGFsQ29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LXBvcnRhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGU6ICdIZWxsbywgdGhpcyBpcyBhIGNvbXBvbmVudCBwb3J0YWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbEV4YW1wbGUge31cbiJdfQ==