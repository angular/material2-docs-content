/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/expansion/expansion-overview/expansion-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * \@title Basic expansion panel
 */
let ExpansionOverviewExample = /** @class */ (() => {
    /**
     * \@title Basic expansion panel
     */
    class ExpansionOverviewExample {
        constructor() {
            this.panelOpenState = false;
        }
    }
    ExpansionOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-overview-example',
                    templateUrl: 'expansion-overview-example.html',
                    styleUrls: ['expansion-overview-example.css'],
                },] },
    ];
    /** @nocollapse */ ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
    /** @nocollapse */ ExpansionOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 23, vars: 1, consts: [["matInput", ""], ["matInput", "", "type", "number", "min", "1"], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-accordion");
            i0.ɵɵelementStart(1, "mat-expansion-panel");
            i0.ɵɵelementStart(2, "mat-expansion-panel-header");
            i0.ɵɵelementStart(3, "mat-panel-title");
            i0.ɵɵtext(4, " Personal data ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-panel-description");
            i0.ɵɵtext(6, " Type your name and age ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "First name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-form-field");
            i0.ɵɵelementStart(12, "mat-label");
            i0.ɵɵtext(13, "Age");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-expansion-panel", 2);
            i0.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_15_listener() { return ctx.panelOpenState = true; })("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_15_listener() { return ctx.panelOpenState = false; });
            i0.ɵɵelementStart(16, "mat-expansion-panel-header");
            i0.ɵɵelementStart(17, "mat-panel-title");
            i0.ɵɵtext(18, " Self aware panel ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "mat-panel-description");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p");
            i0.ɵɵtext(22, "I'm visible because I am open");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(20);
            i0.ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
        } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription, i2.MatFormField, i2.MatLabel, i3.MatInput], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return ExpansionOverviewExample;
})();
export { ExpansionOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionOverviewExample, [{
        type: Component,
        args: [{
                selector: 'expansion-overview-example',
                templateUrl: 'expansion-overview-example.html',
                styleUrls: ['expansion-overview-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ExpansionOverviewExample.prototype.panelOpenState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLW92ZXJ2aWV3L2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFLeEM7Ozs7SUFBQSxNQUthLHdCQUF3QjtRQUxyQztZQU1FLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2lCQUM5Qzs7dUhBQ1ksd0JBQXdCO29GQUF4Qix3QkFBd0I7WUNWckMscUNBQ0U7WUFBQSwyQ0FDRTtZQUFBLGtEQUNFO1lBQUEsdUNBQ0U7WUFBQSwrQkFDRjtZQUFBLGlCQUFrQjtZQUNsQiw2Q0FDRTtZQUFBLHdDQUNGO1lBQUEsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUU3QixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsMEJBQVU7WUFBQSxpQkFBWTtZQUNqQyw0QkFDRjtZQUFBLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsb0JBQUc7WUFBQSxpQkFBWTtZQUMxQiw0QkFDRjtZQUFBLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFDdEIsK0NBRUU7WUFGbUIsMElBQTJCLElBQUksSUFBQyw2SEFDTCxLQUFLLElBREE7WUFFbkQsbURBQ0U7WUFBQSx3Q0FDRTtZQUFBLG1DQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDhDQUNFO1lBQUEsYUFDRjtZQUFBLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFDN0IsMEJBQUc7WUFBQSw4Q0FBNkI7WUFBQSxpQkFBSTtZQUN0QyxpQkFBc0I7WUFDeEIsaUJBQWdCOztZQUxSLGdCQUNGO1lBREUsc0ZBQ0Y7O21DRDdCTjtLQVlDO1NBRlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzs7O0lBRUMsa0RBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBleHBhbnNpb24gcGFuZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZSB7XG4gIHBhbmVsT3BlblN0YXRlID0gZmFsc2U7XG59XG4iLCI8bWF0LWFjY29yZGlvbj5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgUGVyc29uYWwgZGF0YVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHlvdXIgbmFtZSBhbmQgYWdlXG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+QWdlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsIChvcGVuZWQpPVwicGFuZWxPcGVuU3RhdGUgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlZCk9XCJwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlXCI+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgU2VsZiBhd2FyZSBwYW5lbFxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBDdXJyZW50bHkgSSBhbSB7e3BhbmVsT3BlblN0YXRlID8gJ29wZW4nIDogJ2Nsb3NlZCd9fVxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICA8cD5JJ20gdmlzaWJsZSBiZWNhdXNlIEkgYW0gb3BlbjwvcD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPC9tYXQtYWNjb3JkaW9uPlxuIl19