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
CdkPortalOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
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
        args: [{ selector: 'cdk-portal-overview-example', template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"] }]
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
ComponentPortalExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Hello, this is a component portal");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentPortalExample, [{
        type: Component,
        args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBVSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0phLGdEQUFnQzs7QURNcEU7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBU25DLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUksQ0FBQztJQUU1RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQ3RDLElBQUksQ0FBQyxxQkFBcUIsRUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnR0FsQlUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7Ozs7Ozs7O1FDbEJyQywwQkFBSTtRQUFBLDJDQUEyQjtRQUFBLGlCQUFLO1FBQ3BDLDhCQUFtQztRQUNqQyx5RkFBOEQ7UUFDaEUsaUJBQU07UUFDTiwwSEFBa0Y7UUFFbEYsaUNBQW1EO1FBQTNDLGlKQUEwQztRQUFDLHVDQUF1QjtRQUFBLGlCQUFTO1FBQ25GLGlDQUFrRDtRQUExQyxnSkFBeUM7UUFBQyxzQ0FBc0I7UUFBQSxpQkFBUztRQUNqRixrQ0FBNkM7UUFBckMsNElBQW9DO1FBQUMsa0NBQWlCO1FBQUEsaUJBQVM7UUFFdkUscUNBQXVCO1FBQUEsNENBQTJCO1FBQUEsaUJBQU07O1FBUnpDLGVBQWtDO1FBQWxDLG9EQUFrQzs7dUZEZ0JwQyx3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDRSw2QkFBNkI7bUVBS0gscUJBQXFCO2tCQUF4RCxTQUFTO21CQUFDLHVCQUF1QjtZQUNILGdCQUFnQjtrQkFBOUMsU0FBUzttQkFBQyxrQkFBa0I7O0FBdUIvQixNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUFGdEIsaURBQWlDOzt1RkFFakMsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsbUNBQW1DO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnRQb3J0YWwsIERvbVBvcnRhbCwgUG9ydGFsLCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFBvcnRhbCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUG9ydGFsQ29udGVudCcpIHRlbXBsYXRlUG9ydGFsQ29udGVudDogVGVtcGxhdGVSZWY8dW5rbm93bj47XG4gIEBWaWV3Q2hpbGQoJ2RvbVBvcnRhbENvbnRlbnQnKSBkb21Qb3J0YWxDb250ZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBzZWxlY3RlZFBvcnRhbDogUG9ydGFsPGFueT47XG4gIGNvbXBvbmVudFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPENvbXBvbmVudFBvcnRhbEV4YW1wbGU+O1xuICB0ZW1wbGF0ZVBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcbiAgZG9tUG9ydGFsOiBEb21Qb3J0YWw8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKENvbXBvbmVudFBvcnRhbEV4YW1wbGUpO1xuICAgIHRoaXMudGVtcGxhdGVQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwoXG4gICAgICB0aGlzLnRlbXBsYXRlUG9ydGFsQ29udGVudCxcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWZcbiAgICApO1xuICAgIHRoaXMuZG9tUG9ydGFsID0gbmV3IERvbVBvcnRhbCh0aGlzLmRvbVBvcnRhbENvbnRlbnQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBvbmVudC1wb3J0YWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlOiAnSGVsbG8sIHRoaXMgaXMgYSBjb21wb25lbnQgcG9ydGFsJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb3J0YWxFeGFtcGxlIHsgfVxuIiwiPGgyPlRoZSBwb3J0YWwgb3V0bGV0IGlzIGJlbG93OjwvaDI+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1wb3J0YWwtb3V0bGV0XCI+XG4gIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cInNlbGVjdGVkUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVBvcnRhbENvbnRlbnQ+SGVsbG8sIHRoaXMgaXMgYSB0ZW1wbGF0ZSBwb3J0YWw8L25nLXRlbXBsYXRlPlxuXG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IGNvbXBvbmVudFBvcnRhbFwiPlJlbmRlciBjb21wb25lbnQgcG9ydGFsPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IHRlbXBsYXRlUG9ydGFsXCI+UmVuZGVyIHRlbXBsYXRlIHBvcnRhbDwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0ZWRQb3J0YWwgPSBkb21Qb3J0YWxcIj5SZW5kZXIgRE9NIHBvcnRhbDwvYnV0dG9uPlxuXG48ZGl2ICNkb21Qb3J0YWxDb250ZW50PkhlbGxvLCB0aGlzIGlzIGEgRE9NIHBvcnRhbDwvZGl2PlxuIl19