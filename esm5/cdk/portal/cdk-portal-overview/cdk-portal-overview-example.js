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
        templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent',] }]
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
            args: ['templatePortalContent']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFpQixXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQVUsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7SUNHeEMsZ0RBQWdDOztBRERwRTs7R0FFRztBQUNIO0lBV0Usa0NBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUcsQ0FBQztJQUUzRCxrREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9GLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOzs7O2dCQVZ5RCxnQkFBZ0I7Ozt3Q0FZdkUsU0FBUyxTQUFDLHVCQUF1Qjs7b0dBRHZCLHdCQUF3QjtpRUFBeEIsd0JBQXdCOzs7Ozs7WUNYckMsMEJBQUk7WUFBQSwyQ0FBMkI7WUFBQSxpQkFBSztZQUNwQyw4QkFDRTtZQUFBLHlGQUFnRDtZQUNsRCxpQkFBTTtZQUNOLDRIQUFvQztZQUVwQyxpQ0FBbUQ7WUFBM0MsdUpBQTBDO1lBQUMsdUNBQXVCO1lBQUEsaUJBQVM7WUFDbkYsaUNBQWtEO1lBQTFDLHNKQUF5QztZQUFDLHNDQUFzQjtZQUFBLGlCQUFTOztZQUxsRSxlQUFrQztZQUFsQyxvREFBa0M7O21DREZqRDtDQXVCQyxBQWpCRCxJQWlCQztTQVpZLHdCQUF3QjttQ0FBeEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7a0JBRUUsU0FBUzttQkFBQyx1QkFBdUI7O0FBYXBDO0lBQUE7S0FJc0M7O2dCQUpyQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLG1DQUFtQztpQkFDOUM7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lBRnRCLGlEQUFpQzs7aUNBM0I5QztDQTZCc0MsQUFKdEMsSUFJc0M7U0FBekIsc0JBQXNCO21DQUF0QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSxtQ0FBbUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbi8qKlxuICogQHRpdGxlIFBvcnRhbCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUG9ydGFsQ29udGVudCcpIHRlbXBsYXRlUG9ydGFsQ29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgc2VsZWN0ZWRQb3J0YWw6IFBvcnRhbDxhbnk+O1xuICBjb21wb25lbnRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxDb21wb25lbnRQb3J0YWxFeGFtcGxlPjtcbiAgdGVtcGxhdGVQb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKENvbXBvbmVudFBvcnRhbEV4YW1wbGUpO1xuICAgIHRoaXMudGVtcGxhdGVQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy50ZW1wbGF0ZVBvcnRhbENvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBvbmVudC1wb3J0YWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlOiAnSGVsbG8sIHRoaXMgaXMgYSBjb21wb25lbnQgcG9ydGFsJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb3J0YWxFeGFtcGxlIHt9XG4iLCI8aDI+VGhlIHBvcnRhbCBvdXRsZXQgaXMgYmVsb3c6PC9oMj5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLXBvcnRhbC1vdXRsZXRcIj5cbiAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwic2VsZWN0ZWRQb3J0YWxcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48bmctdGVtcGxhdGUgI3RlbXBsYXRlUG9ydGFsQ29udGVudD5IZWxsbywgdGhpcyBpcyBhIHRlbXBsYXRlIHBvcnRhbDwvbmctdGVtcGxhdGU+XG5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gY29tcG9uZW50UG9ydGFsXCI+UmVuZGVyIGNvbXBvbmVudCBwb3J0YWw8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gdGVtcGxhdGVQb3J0YWxcIj5SZW5kZXIgdGVtcGxhdGUgcG9ydGFsPC9idXR0b24+XG4iXX0=