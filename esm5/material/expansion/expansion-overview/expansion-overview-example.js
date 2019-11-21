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
            i0.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_11_listener($event) { return ctx.panelOpenState = true; });
            i0.ɵɵlistener("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_11_listener($event) { return ctx.panelOpenState = false; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLW92ZXJ2aWV3L2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQzlDOztvR0FDWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1ZyQyxxQ0FDRTtZQUFBLDJDQUNFO1lBQUEsa0RBQ0U7WUFBQSx1Q0FDRTtZQUFBLCtCQUNGO1lBQUEsaUJBQWtCO1lBQ2xCLDZDQUNFO1lBQUEsd0NBQ0Y7WUFBQSxpQkFBd0I7WUFDMUIsaUJBQTZCO1lBRTdCLHNDQUNFO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsc0NBQ0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFpQjtZQUNuQixpQkFBc0I7WUFDdEIsK0NBRUU7WUFGbUIsZ0pBQTJCLElBQUksSUFBQztZQUNoQyxnSkFBMkIsS0FBSyxJQUFDO1lBQ3BELG1EQUNFO1lBQUEsd0NBQ0U7WUFBQSxtQ0FDRjtZQUFBLGlCQUFrQjtZQUNsQiw4Q0FDRTtZQUFBLGFBQ0Y7WUFBQSxpQkFBd0I7WUFDMUIsaUJBQTZCO1lBQzdCLDBCQUFHO1lBQUEsOENBQTZCO1lBQUEsaUJBQUk7WUFDdEMsaUJBQXNCO1lBQ3hCLGlCQUFnQjs7WUFMUixnQkFDRjtZQURFLHNGQUNGOzttQ0QzQk47Q0FZQyxBQVBELElBT0M7U0FGWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGV4cGFuc2lvbiBwYW5lbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcbn1cbiIsIjxtYXQtYWNjb3JkaW9uPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBQZXJzb25hbCBkYXRhXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIFR5cGUgeW91ciBuYW1lIGFuZCBhZ2VcbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkFnZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWwgKG9wZW5lZCk9XCJwYW5lbE9wZW5TdGF0ZSA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VkKT1cInBhbmVsT3BlblN0YXRlID0gZmFsc2VcIj5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBTZWxmIGF3YXJlIHBhbmVsXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIEN1cnJlbnRseSBJIGFtIHt7cGFuZWxPcGVuU3RhdGUgPyAnb3BlbicgOiAnY2xvc2VkJ319XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgIDxwPkknbSB2aXNpYmxlIGJlY2F1c2UgSSBhbSBvcGVuPC9wPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG48L21hdC1hY2NvcmRpb24+XG4iXX0=