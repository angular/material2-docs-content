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
    CdkPortalOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-portal-overview-example',
                    template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n",
                    styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    CdkPortalOverviewExample.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    CdkPortalOverviewExample.propDecorators = {
        templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent', { static: false },] }]
    };
    return CdkPortalOverviewExample;
}());
export { CdkPortalOverviewExample };
var ComponentPortalExample = /** @class */ (function () {
    function ComponentPortalExample() {
    }
    ComponentPortalExample.decorators = [
        { type: Component, args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal'
                }] }
    ];
    return ComponentPortalExample;
}());
export { ComponentPortalExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBaUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUMsZUFBZSxFQUFVLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRTVFOztHQUVHO0FBQ0g7SUFXRSxrQ0FBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDO0lBRTNELGtEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyx1YUFBK0M7O2lCQUVoRDs7OztnQkFWeUQsZ0JBQWdCOzs7d0NBWXZFLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBV3JELCtCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSx3QkFBd0I7QUFjckM7SUFBQTtJQUlxQyxDQUFDOztnQkFKckMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxtQ0FBbUM7aUJBQzlDOztJQUNvQyw2QkFBQztDQUFBLEFBSnRDLElBSXNDO1NBQXpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuLyoqXG4gKiBAdGl0bGUgUG9ydGFsIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVQb3J0YWxDb250ZW50Jywge3N0YXRpYzogZmFsc2V9KSB0ZW1wbGF0ZVBvcnRhbENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIHNlbGVjdGVkUG9ydGFsOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Q29tcG9uZW50UG9ydGFsRXhhbXBsZT47XG4gIHRlbXBsYXRlUG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChDb21wb25lbnRQb3J0YWxFeGFtcGxlKTtcbiAgICB0aGlzLnRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudGVtcGxhdGVQb3J0YWxDb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtcG9ydGFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZTogJ0hlbGxvLCB0aGlzIGlzIGEgY29tcG9uZW50IHBvcnRhbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSB7fVxuIl19