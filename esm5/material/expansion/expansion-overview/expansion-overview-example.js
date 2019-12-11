import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Basic expansion panel
 */
var ExpansionOverviewExample = /** @class */ (function () {
    function ExpansionOverviewExample() {
        this.panelOpenState = false;
    }
    ExpansionOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-overview-example',
                    templateUrl: 'expansion-overview-example.html',
                    styleUrls: ['expansion-overview-example.css'],
                },] },
    ];
    ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
    ExpansionOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 19, vars: 1, consts: [["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Age"], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelement(8, "input", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field");
            i0.ɵɵelement(10, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-expansion-panel", 2);
            i0.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_11_listener($event) { return ctx.panelOpenState = true; })("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_11_listener($event) { return ctx.panelOpenState = false; });
            i0.ɵɵelementStart(12, "mat-expansion-panel-header");
            i0.ɵɵelementStart(13, "mat-panel-title");
            i0.ɵɵtext(14, " Self aware panel ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-panel-description");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵtext(18, "I'm visible because I am open");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(16);
            i0.ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
        } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription, i2.MatFormField, i3.MatInput], styles: [""] });
    return ExpansionOverviewExample;
}());
export { ExpansionOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionOverviewExample, [{
        type: Component,
        args: [{
                selector: 'expansion-overview-example',
                templateUrl: 'expansion-overview-example.html',
                styleUrls: ['expansion-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLW92ZXJ2aWV3L2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQzlDOztvR0FDWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1ZyQyxxQ0FDRTtZQUFBLDJDQUNFO1lBQUEsa0RBQ0U7WUFBQSx1Q0FDRTtZQUFBLCtCQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDZDQUNFO1lBQUEsd0NBQ0Y7WUFBQSxpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHNDQUNFO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsc0NBQ0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFDdEIsK0NBRUU7WUFGbUIsZ0pBQTJCLElBQUksSUFBQyxtSUFDTCxLQUFLLElBREE7WUFFbkQsbURBQ0U7WUFBQSx3Q0FDRTtZQUFBLG1DQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDhDQUNFO1lBQUEsYUFDRjtZQUFBLGlCQUF3QjtZQUMxQixpQkFBNkI7WUFDN0IsMEJBQUc7WUFBQSw4Q0FBNkI7WUFBQSxpQkFBSTtZQUN0QyxpQkFBc0I7WUFDeEIsaUJBQWdCOztZQUxSLGdCQUNGO1lBREUsc0ZBQ0Y7O21DRDNCTjtDQVlDLEFBUEQsSUFPQztTQUZZLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgZXhwYW5zaW9uIHBhbmVsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25PdmVydmlld0V4YW1wbGUge1xuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xufVxuIiwiPG1hdC1hY2NvcmRpb24+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFBlcnNvbmFsIGRhdGFcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB5b3VyIG5hbWUgYW5kIGFnZVxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQWdlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCAob3BlbmVkKT1cInBhbmVsT3BlblN0YXRlID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbG9zZWQpPVwicGFuZWxPcGVuU3RhdGUgPSBmYWxzZVwiPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFNlbGYgYXdhcmUgcGFuZWxcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgQ3VycmVudGx5IEkgYW0ge3twYW5lbE9wZW5TdGF0ZSA/ICdvcGVuJyA6ICdjbG9zZWQnfX1cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgPHA+SSdtIHZpc2libGUgYmVjYXVzZSBJIGFtIG9wZW48L3A+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==