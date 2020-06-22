import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
/**
 * @title Basic expansion panel
 */
let ExpansionOverviewExample = /** @class */ (() => {
    class ExpansionOverviewExample {
        constructor() {
            this.panelOpenState = false;
        }
    }
    ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
    ExpansionOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 17, vars: 1, consts: [["hideToggle", ""], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-accordion");
            i0.ɵɵelementStart(1, "mat-expansion-panel", 0);
            i0.ɵɵelementStart(2, "mat-expansion-panel-header");
            i0.ɵɵelementStart(3, "mat-panel-title");
            i0.ɵɵtext(4, " This is the expansion title ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-panel-description");
            i0.ɵɵtext(6, " This is a summary of the content ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "This is the primary content of the panel.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-expansion-panel", 1);
            i0.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_9_listener() { return ctx.panelOpenState = true; })("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_9_listener() { return ctx.panelOpenState = false; });
            i0.ɵɵelementStart(10, "mat-expansion-panel-header");
            i0.ɵɵelementStart(11, "mat-panel-title");
            i0.ɵɵtext(12, " Self aware panel ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-panel-description");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵtext(16, "I'm visible because I am open");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
        } }, directives: [i1.MatAccordion, i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i1.MatExpansionPanelDescription], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLW92ZXJ2aWV3L2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUEsTUFLYSx3QkFBd0I7UUFMckM7WUFNRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7b0dBRlksd0JBQXdCO2lFQUF4Qix3QkFBd0I7WUNWckMscUNBQ0E7WUFFRSw4Q0FDRjtZQUNJLGtEQUNFO1lBQUEsdUNBQ0U7WUFBQSw2Q0FDRjtZQUFBLGlCQUFrQjtZQUNsQiw2Q0FDRTtZQUFBLGtEQUNGO1lBQUEsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUM3Qix5QkFBRztZQUFBLHlEQUF5QztZQUFBLGlCQUFJO1lBQ2xELGlCQUFzQjtZQUV0Qiw4Q0FFRTtZQUZtQix5SUFBMkIsSUFBSSxJQUFDLDRIQUNMLEtBQUssSUFEQTtZQUVuRCxtREFDRTtZQUFBLHdDQUNFO1lBQUEsbUNBQ0Y7WUFBQSxpQkFBa0I7WUFDbEIsOENBQ0U7WUFBQSxhQUNGO1lBQUEsaUJBQXdCO1lBQzFCLGlCQUE2QjtZQUM3QiwwQkFBRztZQUFBLDhDQUE2QjtZQUFBLGlCQUFJO1lBQ3RDLGlCQUFzQjtZQUN4QixpQkFBZ0I7O1lBTFIsZ0JBQ0Y7WUFERSxzRkFDRjs7bUNEeEJOO0tBWUM7U0FGWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGV4cGFuc2lvbiBwYW5lbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcbn1cbiIsIjxtYXQtYWNjb3JkaW9uPlxuPCEtLSAjZG9jcmVnaW9uIGJhc2ljLXBhbmVsIC0tPlxuPCEtLSAjZG9jcmVnaW9uIGhpZGUtdG9nZ2xlIC0tPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBoaWRlVG9nZ2xlPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGhpZGUtdG9nZ2xlIC0tPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFRoaXMgaXMgdGhlIGV4cGFuc2lvbiB0aXRsZVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUaGlzIGlzIGEgc3VtbWFyeSBvZiB0aGUgY29udGVudFxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICA8cD5UaGlzIGlzIHRoZSBwcmltYXJ5IGNvbnRlbnQgb2YgdGhlIHBhbmVsLjwvcD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGJhc2ljLXBhbmVsIC0tPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCAob3BlbmVkKT1cInBhbmVsT3BlblN0YXRlID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbG9zZWQpPVwicGFuZWxPcGVuU3RhdGUgPSBmYWxzZVwiPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFNlbGYgYXdhcmUgcGFuZWxcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgQ3VycmVudGx5IEkgYW0ge3twYW5lbE9wZW5TdGF0ZSA/ICdvcGVuJyA6ICdjbG9zZWQnfX1cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgPHA+SSdtIHZpc2libGUgYmVjYXVzZSBJIGFtIG9wZW48L3A+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==