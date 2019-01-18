/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1wb3J0YWwtb3ZlcnZpZXcvY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFpQixXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQVUsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFVNUUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQU1uQyxZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFHLENBQUM7Ozs7SUFFM0QsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLHVhQUErQzs7YUFFaEQ7Ozs7WUFWeUQsZ0JBQWdCOzs7b0NBWXZFLFNBQVMsU0FBQyx1QkFBdUI7Ozs7SUFBbEMseURBQTRFOztJQUM1RSxrREFBNEI7O0lBQzVCLG1EQUF5RDs7SUFDekQsa0RBQW9DOzs7OztJQUV4QixxREFBMkM7O0FBWXpELE1BQU0sT0FBTyxzQkFBc0I7OztZQUpsQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLG1DQUFtQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuLyoqXG4gKiBAdGl0bGUgUG9ydGFsIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVQb3J0YWxDb250ZW50JykgdGVtcGxhdGVQb3J0YWxDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBzZWxlY3RlZFBvcnRhbDogUG9ydGFsPGFueT47XG4gIGNvbXBvbmVudFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPENvbXBvbmVudFBvcnRhbEV4YW1wbGU+O1xuICB0ZW1wbGF0ZVBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoQ29tcG9uZW50UG9ydGFsRXhhbXBsZSk7XG4gICAgdGhpcy50ZW1wbGF0ZVBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnRlbXBsYXRlUG9ydGFsQ29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LXBvcnRhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGU6ICdIZWxsbywgdGhpcyBpcyBhIGNvbXBvbmVudCBwb3J0YWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbEV4YW1wbGUge31cbiJdfQ==