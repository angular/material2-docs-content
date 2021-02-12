import { ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
const _c0 = ["templatePortalContent"];
const _c1 = ["domPortalContent"];
function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Hello, this is a template portal");
} }
/**
 * @title Portal overview
 */
export class CdkPortalOverviewExample {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        this.domPortal = new DomPortal(this.domPortalContent);
    }
}
CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
CdkPortalOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templatePortalContent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domPortalContent = _t.first);
    } }, decls: 15, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], ["templatePortalContent", ""], [3, "click"], ["domPortalContent", ""]], template: function CdkPortalOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1, "The portal outlet is below:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener() { return ctx.selectedPortal = ctx.componentPortal; });
        i0.ɵɵtext(7, "Render component portal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener() { return ctx.selectedPortal = ctx.templatePortal; });
        i0.ɵɵtext(9, "Render template portal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_10_listener() { return ctx.selectedPortal = ctx.domPortal; });
        i0.ɵɵtext(11, "Render DOM portal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", null, 4);
        i0.ɵɵtext(14, "Hello, this is a DOM portal");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
    } }, directives: [i1.CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPortalOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-portal-overview-example',
                templateUrl: 'cdk-portal-overview-example.html',
                styleUrls: ['cdk-portal-overview-example.css'],
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { templatePortalContent: [{
            type: ViewChild,
            args: ['templatePortalContent']
        }], domPortalContent: [{
            type: ViewChild,
            args: ['domPortalContent']
        }] }); })();
export class ComponentPortalExample {
}
ComponentPortalExample.ɵfac = function ComponentPortalExample_Factory(t) { return new (t || ComponentPortalExample)(); };
ComponentPortalExample.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Hello, this is a component portal");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentPortalExample, [{
        type: Component,
        args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBVSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0phLGdEQUFnQzs7QURNcEU7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBU25DLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUksQ0FBQztJQUU1RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQ3RDLElBQUksQ0FBQyxxQkFBcUIsRUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnR0FsQlUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7Ozs7Ozs7O1FDbEJyQywwQkFBSTtRQUFBLDJDQUEyQjtRQUFBLGlCQUFLO1FBQ3BDLDhCQUFtQztRQUNqQyx5RkFBOEQ7UUFDaEUsaUJBQU07UUFDTiwwSEFBa0Y7UUFFbEYsaUNBQW1EO1FBQTNDLGlKQUEwQztRQUFDLHVDQUF1QjtRQUFBLGlCQUFTO1FBQ25GLGlDQUFrRDtRQUExQyxnSkFBeUM7UUFBQyxzQ0FBc0I7UUFBQSxpQkFBUztRQUNqRixrQ0FBNkM7UUFBckMsNElBQW9DO1FBQUMsa0NBQWlCO1FBQUEsaUJBQVM7UUFFdkUscUNBQXVCO1FBQUEsNENBQTJCO1FBQUEsaUJBQU07O1FBUnpDLGVBQWtDO1FBQWxDLG9EQUFrQzs7dUZEZ0JwQyx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DO21FQUVxQyxxQkFBcUI7a0JBQXhELFNBQVM7bUJBQUMsdUJBQXVCO1lBQ0gsZ0JBQWdCO2tCQUE5QyxTQUFTO21CQUFDLGtCQUFrQjs7QUF1Qi9CLE1BQU0sT0FBTyxzQkFBc0I7OzRGQUF0QixzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQUZ0QixpREFBaUM7O3VGQUVqQyxzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSxtQ0FBbUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudFBvcnRhbCwgRG9tUG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUG9ydGFsIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVQb3J0YWxDb250ZW50JykgdGVtcGxhdGVQb3J0YWxDb250ZW50OiBUZW1wbGF0ZVJlZjx1bmtub3duPjtcbiAgQFZpZXdDaGlsZCgnZG9tUG9ydGFsQ29udGVudCcpIGRvbVBvcnRhbENvbnRlbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIHNlbGVjdGVkUG9ydGFsOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Q29tcG9uZW50UG9ydGFsRXhhbXBsZT47XG4gIHRlbXBsYXRlUG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuICBkb21Qb3J0YWw6IERvbVBvcnRhbDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoQ29tcG9uZW50UG9ydGFsRXhhbXBsZSk7XG4gICAgdGhpcy50ZW1wbGF0ZVBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbChcbiAgICAgIHRoaXMudGVtcGxhdGVQb3J0YWxDb250ZW50LFxuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZlxuICAgICk7XG4gICAgdGhpcy5kb21Qb3J0YWwgPSBuZXcgRG9tUG9ydGFsKHRoaXMuZG9tUG9ydGFsQ29udGVudCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LXBvcnRhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGU6ICdIZWxsbywgdGhpcyBpcyBhIGNvbXBvbmVudCBwb3J0YWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbEV4YW1wbGUgeyB9XG4iLCI8aDI+VGhlIHBvcnRhbCBvdXRsZXQgaXMgYmVsb3c6PC9oMj5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLXBvcnRhbC1vdXRsZXRcIj5cbiAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwic2VsZWN0ZWRQb3J0YWxcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48bmctdGVtcGxhdGUgI3RlbXBsYXRlUG9ydGFsQ29udGVudD5IZWxsbywgdGhpcyBpcyBhIHRlbXBsYXRlIHBvcnRhbDwvbmctdGVtcGxhdGU+XG5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gY29tcG9uZW50UG9ydGFsXCI+UmVuZGVyIGNvbXBvbmVudCBwb3J0YWw8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gdGVtcGxhdGVQb3J0YWxcIj5SZW5kZXIgdGVtcGxhdGUgcG9ydGFsPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IGRvbVBvcnRhbFwiPlJlbmRlciBET00gcG9ydGFsPC9idXR0b24+XG5cbjxkaXYgI2RvbVBvcnRhbENvbnRlbnQ+SGVsbG8sIHRoaXMgaXMgYSBET00gcG9ydGFsPC9kaXY+XG4iXX0=