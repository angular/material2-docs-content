import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
var _c0 = ["templatePortalContent"];
var _c1 = ["templatePortalContent", ""];
function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Hello, this is a template portal");
} }
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
                    templateUrl: 'cdk-portal-overview-example.html',
                    styleUrls: ['cdk-portal-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    CdkPortalOverviewExample.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    CdkPortalOverviewExample.propDecorators = {
        templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent', { static: false },] }]
    };
    CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    CdkPortalOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.templatePortalContent = _t.first);
        } }, decls: 10, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], [3, "click"]], template: function CdkPortalOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1, "The portal outlet is below:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, _c1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener($event) { return ctx.selectedPortal = ctx.componentPortal; });
            i0.ɵɵtext(7, "Render component portal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 2);
            i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener($event) { return ctx.selectedPortal = ctx.templatePortal; });
            i0.ɵɵtext(9, "Render template portal");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
        } }, directives: [i1.CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
    return CdkPortalOverviewExample;
}());
export { CdkPortalOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkPortalOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-portal-overview-example',
                templateUrl: 'cdk-portal-overview-example.html',
                styleUrls: ['cdk-portal-overview-example.css'],
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { templatePortalContent: [{
            type: ViewChild,
            args: ['templatePortalContent', { static: false }]
        }] });
var ComponentPortalExample = /** @class */ (function () {
    function ComponentPortalExample() {
    }
    ComponentPortalExample.decorators = [
        { type: Component, args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal'
                },] },
    ];
    ComponentPortalExample.ɵfac = function ComponentPortalExample_Factory(t) { return new (t || ComponentPortalExample)(); };
    ComponentPortalExample.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "Hello, this is a component portal");
        } }, encapsulation: 2 });
    return ComponentPortalExample;
}());
export { ComponentPortalExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(ComponentPortalExample, [{
        type: Component,
        args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWlCLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFDLGVBQWUsRUFBVSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztJQ0d4QyxnREFBZ0M7O0FERHBFOztHQUVHO0FBQ0g7SUFXRSxrQ0FBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDO0lBRTNELGtEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDL0M7Ozs7Z0JBVnlELGdCQUFnQjs7O3dDQVl2RSxTQUFTLFNBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztvR0FEeEMsd0JBQXdCO2lFQUF4Qix3QkFBd0I7Ozs7OztZQ1hyQywwQkFBSTtZQUFBLDJDQUEyQjtZQUFBLGlCQUFLO1lBQ3BDLDhCQUNFO1lBQUEseUZBQWdEO1lBQ2xELGlCQUFNO1lBQ04sNEhBQW9DO1lBRXBDLGlDQUFtRDtZQUEzQyx1SkFBMEM7WUFBQyx1Q0FBdUI7WUFBQSxpQkFBUztZQUNuRixpQ0FBa0Q7WUFBMUMsc0pBQXlDO1lBQUMsc0NBQXNCO1lBQUEsaUJBQVM7O1lBTGxFLGVBQWtDO1lBQWxDLG9EQUFrQzs7bUNERmpEO0NBdUJDLEFBakJELElBaUJDO1NBWlksd0JBQXdCO21DQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOztrQkFFRSxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7QUFhckQ7SUFBQTtLQUlzQzs7Z0JBSnJDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsbUNBQW1DO2lCQUM5Qzs7Z0dBQ1ksc0JBQXNCOytEQUF0QixzQkFBc0I7WUFGdEIsaURBQWlDOztpQ0EzQjlDO0NBNkJzQyxBQUp0QyxJQUlzQztTQUF6QixzQkFBc0I7bUNBQXRCLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLG1DQUFtQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuLyoqXG4gKiBAdGl0bGUgUG9ydGFsIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVQb3J0YWxDb250ZW50Jywge3N0YXRpYzogZmFsc2V9KSB0ZW1wbGF0ZVBvcnRhbENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIHNlbGVjdGVkUG9ydGFsOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Q29tcG9uZW50UG9ydGFsRXhhbXBsZT47XG4gIHRlbXBsYXRlUG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChDb21wb25lbnRQb3J0YWxFeGFtcGxlKTtcbiAgICB0aGlzLnRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudGVtcGxhdGVQb3J0YWxDb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtcG9ydGFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZTogJ0hlbGxvLCB0aGlzIGlzIGEgY29tcG9uZW50IHBvcnRhbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSB7fVxuIiwiPGgyPlRoZSBwb3J0YWwgb3V0bGV0IGlzIGJlbG93OjwvaDI+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1wb3J0YWwtb3V0bGV0XCI+XG4gIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cInNlbGVjdGVkUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVBvcnRhbENvbnRlbnQ+SGVsbG8sIHRoaXMgaXMgYSB0ZW1wbGF0ZSBwb3J0YWw8L25nLXRlbXBsYXRlPlxuXG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IGNvbXBvbmVudFBvcnRhbFwiPlJlbmRlciBjb21wb25lbnQgcG9ydGFsPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IHRlbXBsYXRlUG9ydGFsXCI+UmVuZGVyIHRlbXBsYXRlIHBvcnRhbDwvYnV0dG9uPlxuIl19