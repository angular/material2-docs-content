/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
const _c0 = ["templatePortalContent"];
function CdkPortalOverviewExample_ng_template_3_Template(rf, ctx) { }
function CdkPortalOverviewExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Hello, this is a template portal");
} }
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
                templateUrl: 'cdk-portal-overview-example.html',
                styleUrls: ['cdk-portal-overview-example.css'],
            },] },
];
/** @nocollapse */
CdkPortalOverviewExample.ctorParameters = () => [
    { type: ViewContainerRef }
];
CdkPortalOverviewExample.propDecorators = {
    templatePortalContent: [{ type: ViewChild, args: ['templatePortalContent',] }]
};
/** @nocollapse */ CdkPortalOverviewExample.ɵfac = function CdkPortalOverviewExample_Factory(t) { return new (t || CdkPortalOverviewExample)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
/** @nocollapse */ CdkPortalOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPortalOverviewExample, selectors: [["cdk-portal-overview-example"]], viewQuery: function CdkPortalOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templatePortalContent = _t.first);
    } }, decls: 10, vars: 1, consts: [[1, "example-portal-outlet"], [3, "cdkPortalOutlet"], ["templatePortalContent", ""], [3, "click"]], template: function CdkPortalOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1, "The portal outlet is below:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵtemplate(3, CdkPortalOverviewExample_ng_template_3_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, CdkPortalOverviewExample_ng_template_4_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_6_listener($event) { return ctx.selectedPortal = ctx.componentPortal; });
        i0.ɵɵtext(7, "Render component portal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 3);
        i0.ɵɵlistener("click", function CdkPortalOverviewExample_Template_button_click_8_listener($event) { return ctx.selectedPortal = ctx.templatePortal; });
        i0.ɵɵtext(9, "Render template portal");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.selectedPortal);
    } }, directives: [i1.CdkPortalOutlet], styles: [".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPortalOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-portal-overview-example',
                templateUrl: 'cdk-portal-overview-example.html',
                styleUrls: ['cdk-portal-overview-example.css'],
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { templatePortalContent: [{
            type: ViewChild,
            args: ['templatePortalContent']
        }] }); })();
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
            },] },
];
/** @nocollapse */ ComponentPortalExample.ɵfac = function ComponentPortalExample_Factory(t) { return new (t || ComponentPortalExample)(); };
/** @nocollapse */ ComponentPortalExample.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentPortalExample, selectors: [["component-portal-example"]], decls: 1, vars: 0, template: function ComponentPortalExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Hello, this is a component portal");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentPortalExample, [{
        type: Component,
        args: [{
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBaUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUMsZUFBZSxFQUFVLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUNHeEMsZ0RBQWdDOzs7OztBRE9wRSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBTW5DLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUcsQ0FBQzs7OztJQUUzRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9GLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7Ozs7WUFWeUQsZ0JBQWdCOzs7b0NBWXZFLFNBQVMsU0FBQyx1QkFBdUI7O2dHQUR2Qix3QkFBd0I7NkRBQXhCLHdCQUF3Qjs7Ozs7O1FDWHJDLDBCQUFJO1FBQUEsMkNBQTJCO1FBQUEsaUJBQUs7UUFDcEMsOEJBQ0U7UUFBQSx5RkFBZ0Q7UUFDbEQsaUJBQU07UUFDTiwwSEFBb0M7UUFFcEMsaUNBQW1EO1FBQTNDLHVKQUEwQztRQUFDLHVDQUF1QjtRQUFBLGlCQUFTO1FBQ25GLGlDQUFrRDtRQUExQyxzSkFBeUM7UUFBQyxzQ0FBc0I7UUFBQSxpQkFBUzs7UUFMbEUsZUFBa0M7UUFBbEMsb0RBQWtDOztrRERTcEMsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7a0JBRUUsU0FBUzttQkFBQyx1QkFBdUI7Ozs7SUFBbEMseURBQTRFOztJQUM1RSxrREFBNEI7O0lBQzVCLG1EQUF5RDs7SUFDekQsa0RBQW9DOzs7OztJQUV4QixxREFBMkM7O0FBWXpELE1BQU0sT0FBTyxzQkFBc0I7OztZQUpsQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLG1DQUFtQzthQUM5Qzs7NEZBQ1ksc0JBQXNCOzJEQUF0QixzQkFBc0I7UUFGdEIsaURBQWlDOztrREFFakMsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsbUNBQW1DO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnRQb3J0YWwsIFBvcnRhbCwgVGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG4vKipcbiAqIEB0aXRsZSBQb3J0YWwgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVBvcnRhbENvbnRlbnQnKSB0ZW1wbGF0ZVBvcnRhbENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIHNlbGVjdGVkUG9ydGFsOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Q29tcG9uZW50UG9ydGFsRXhhbXBsZT47XG4gIHRlbXBsYXRlUG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChDb21wb25lbnRQb3J0YWxFeGFtcGxlKTtcbiAgICB0aGlzLnRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudGVtcGxhdGVQb3J0YWxDb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtcG9ydGFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZTogJ0hlbGxvLCB0aGlzIGlzIGEgY29tcG9uZW50IHBvcnRhbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSB7fVxuIiwiPGgyPlRoZSBwb3J0YWwgb3V0bGV0IGlzIGJlbG93OjwvaDI+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1wb3J0YWwtb3V0bGV0XCI+XG4gIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cInNlbGVjdGVkUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVBvcnRhbENvbnRlbnQ+SGVsbG8sIHRoaXMgaXMgYSB0ZW1wbGF0ZSBwb3J0YWw8L25nLXRlbXBsYXRlPlxuXG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IGNvbXBvbmVudFBvcnRhbFwiPlJlbmRlciBjb21wb25lbnQgcG9ydGFsPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJzZWxlY3RlZFBvcnRhbCA9IHRlbXBsYXRlUG9ydGFsXCI+UmVuZGVyIHRlbXBsYXRlIHBvcnRhbDwvYnV0dG9uPlxuIl19