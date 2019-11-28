/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/portal/cdk-portal-overview/cdk-portal-overview-example.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWlCLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFDLGVBQWUsRUFBVSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lDR3hDLGdEQUFnQzs7Ozs7QURPcEUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQU1uQyxZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFHLENBQUM7Ozs7SUFFM0QsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOzs7O1lBVnlELGdCQUFnQjs7O29DQVl2RSxTQUFTLFNBQUMsdUJBQXVCOztnR0FEdkIsd0JBQXdCOzZEQUF4Qix3QkFBd0I7Ozs7OztRQ1hyQywwQkFBSTtRQUFBLDJDQUEyQjtRQUFBLGlCQUFLO1FBQ3BDLDhCQUNFO1FBQUEseUZBQWdEO1FBQ2xELGlCQUFNO1FBQ04sMEhBQW9DO1FBRXBDLGlDQUFtRDtRQUEzQyx1SkFBMEM7UUFBQyx1Q0FBdUI7UUFBQSxpQkFBUztRQUNuRixpQ0FBa0Q7UUFBMUMsc0pBQXlDO1FBQUMsc0NBQXNCO1FBQUEsaUJBQVM7O1FBTGxFLGVBQWtDO1FBQWxDLG9EQUFrQzs7a0REU3BDLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7O2tCQUVFLFNBQVM7bUJBQUMsdUJBQXVCOzs7O0lBQWxDLHlEQUE0RTs7SUFDNUUsa0RBQTRCOztJQUM1QixtREFBeUQ7O0lBQ3pELGtEQUFvQzs7Ozs7SUFFeEIscURBQTJDOztBQVl6RCxNQUFNLE9BQU8sc0JBQXNCOzs7WUFKbEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSxtQ0FBbUM7YUFDOUM7OzRGQUNZLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FBRnRCLGlEQUFpQzs7a0RBRWpDLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLG1DQUFtQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuLyoqXG4gKiBAdGl0bGUgUG9ydGFsIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVQb3J0YWxDb250ZW50JykgdGVtcGxhdGVQb3J0YWxDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBzZWxlY3RlZFBvcnRhbDogUG9ydGFsPGFueT47XG4gIGNvbXBvbmVudFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPENvbXBvbmVudFBvcnRhbEV4YW1wbGU+O1xuICB0ZW1wbGF0ZVBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoQ29tcG9uZW50UG9ydGFsRXhhbXBsZSk7XG4gICAgdGhpcy50ZW1wbGF0ZVBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnRlbXBsYXRlUG9ydGFsQ29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcG9uZW50LXBvcnRhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGU6ICdIZWxsbywgdGhpcyBpcyBhIGNvbXBvbmVudCBwb3J0YWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbEV4YW1wbGUge31cbiIsIjxoMj5UaGUgcG9ydGFsIG91dGxldCBpcyBiZWxvdzo8L2gyPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtcG9ydGFsLW91dGxldFwiPlxuICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJzZWxlY3RlZFBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVQb3J0YWxDb250ZW50PkhlbGxvLCB0aGlzIGlzIGEgdGVtcGxhdGUgcG9ydGFsPC9uZy10ZW1wbGF0ZT5cblxuPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0ZWRQb3J0YWwgPSBjb21wb25lbnRQb3J0YWxcIj5SZW5kZXIgY29tcG9uZW50IHBvcnRhbDwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0ZWRQb3J0YWwgPSB0ZW1wbGF0ZVBvcnRhbFwiPlJlbmRlciB0ZW1wbGF0ZSBwb3J0YWw8L2J1dHRvbj5cbiJdfQ==