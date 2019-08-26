/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
/**
 * \@title Portal overview
 */
export class CdkPortalOverviewExample {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    }
}
CdkPortalOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-portal-overview-example',
                template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n",
                styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"]
            }] }
];
/** @nocollapse */
CdkPortalOverviewExample.ctorParameters = () => [
    { type: ViewContainerRef }
];
CdkPortalOverviewExample.propDecorators = {
    templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent', { static: false },] }]
};
if (false) {
    /** @type {?} */
    CdkPortalOverviewExample.prototype.templatePortalContent;
    /** @type {?} */
    CdkPortalOverviewExample.prototype.selectedPortal;
    /** @type {?} */
    CdkPortalOverviewExample.prototype.componentPortal;
    /** @type {?} */
    CdkPortalOverviewExample.prototype.templatePortal;
    /**
     * @type {?}
     * @private
     */
    CdkPortalOverviewExample.prototype._viewContainerRef;
}
export class ComponentPortalExample {
}
ComponentPortalExample.decorators = [
    { type: Component, args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWlCLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFDLGVBQWUsRUFBVSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQVU1RSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBTW5DLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUcsQ0FBQzs7OztJQUUzRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9GLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsdWFBQStDOzthQUVoRDs7OztZQVZ5RCxnQkFBZ0I7OztvQ0FZdkUsU0FBUyxTQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQUFuRCx5REFBNkY7O0lBQzdGLGtEQUE0Qjs7SUFDNUIsbURBQXlEOztJQUN6RCxrREFBb0M7Ozs7O0lBRXhCLHFEQUEyQzs7QUFZekQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBSmxDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsbUNBQW1DO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnRQb3J0YWwsIFBvcnRhbCwgVGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG4vKipcbiAqIEB0aXRsZSBQb3J0YWwgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVBvcnRhbENvbnRlbnQnLCB7c3RhdGljOiBmYWxzZX0pIHRlbXBsYXRlUG9ydGFsQ29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgc2VsZWN0ZWRQb3J0YWw6IFBvcnRhbDxhbnk+O1xuICBjb21wb25lbnRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxDb21wb25lbnRQb3J0YWxFeGFtcGxlPjtcbiAgdGVtcGxhdGVQb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKENvbXBvbmVudFBvcnRhbEV4YW1wbGUpO1xuICAgIHRoaXMudGVtcGxhdGVQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy50ZW1wbGF0ZVBvcnRhbENvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBvbmVudC1wb3J0YWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlOiAnSGVsbG8sIHRoaXMgaXMgYSBjb21wb25lbnQgcG9ydGFsJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb3J0YWxFeGFtcGxlIHt9XG4iXX0=