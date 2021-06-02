import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/accordion";
import * as i2 from "@angular/common";
function CdkAccordionOverviewExample_cdk_accordion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cdk-accordion-item", 2, 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵlistener("click", function CdkAccordionOverviewExample_cdk_accordion_item_1_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(1); return _r3.toggle(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtext(7, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const _r3 = i0.ɵɵreference(1);
    i0.ɵɵattribute("id", "accordion-header-" + index_r2)("aria-expanded", _r3.expanded)("aria-controls", "accordion-body-" + index_r2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Click to ", _r3.expanded ? "close" : "open", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", _r3.expanded ? "" : "none");
    i0.ɵɵattribute("id", "accordion-body-" + index_r2)("aria-labelledby", "accordion-header-" + index_r2);
} }
/**
 * @title Accordion overview
 */
export class CdkAccordionOverviewExample {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        this.expandedIndex = 0;
    }
}
CdkAccordionOverviewExample.ɵfac = function CdkAccordionOverviewExample_Factory(t) { return new (t || CdkAccordionOverviewExample)(); };
CdkAccordionOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkAccordionOverviewExample, selectors: [["cdk-accordion-overview-example"]], decls: 2, vars: 1, consts: [[1, "example-accordion"], ["class", "example-accordion-item", "role", "button", "tabindex", "0", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 1, "example-accordion-item"], ["accordionItem", "cdkAccordionItem"], [1, "example-accordion-item-header", 3, "click"], [1, "example-accordion-item-description"], ["role", "region", 1, "example-accordion-item-body"]], template: function CdkAccordionOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-accordion", 0);
        i0.ɵɵtemplate(1, CdkAccordionOverviewExample_cdk_accordion_item_1_Template, 8, 9, "cdk-accordion-item", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i1.CdkAccordion, i2.NgForOf, i1.CdkAccordionItem], styles: [".example-accordion[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%] {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]    + .example-accordion-item[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%], .example-accordion-item-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAccordionOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-accordion-overview-example',
                templateUrl: 'cdk-accordion-overview-example.html',
                styleUrls: ['cdk-accordion-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2FjY29yZGlvbi9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3L2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9hY2NvcmRpb24vY2RrLWFjY29yZGlvbi1vdmVydmlldy9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNDdEMsZ0RBUW1EO0lBQ2pELDhCQUE0RTtJQUFqQyxnTEFBUyxZQUFzQixJQUFDO0lBQ3pFLFlBQ0E7SUFBQSwrQkFBaUQ7SUFDL0MsWUFDRjtJQUFBLGlCQUFPO0lBQ1QsaUJBQU07SUFDTiw4QkFLdUQ7SUFDckQsZ1BBR0Y7SUFBQSxpQkFBTTtJQUNSLGlCQUFxQjs7Ozs7SUFuQm5CLG9EQUF1QywrQkFBQSwrQ0FBQTtJQUlyQyxlQUNBO0lBREEsd0NBQ0E7SUFDRSxlQUNGO0lBREUseUVBQ0Y7SUFLQSxlQUFzRDtJQUF0RCxxREFBc0Q7SUFDdEQsa0RBQXFDLG1EQUFBOztBRGxCM0M7O0dBRUc7QUFNSCxNQUFNLE9BQU8sMkJBQTJCO0lBTHhDO1FBTUUsVUFBSyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNELGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0tBQ25COztzR0FIWSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ1Z4Qyx3Q0FBeUM7UUFDdkMsMEdBeUJxQjtRQUN2QixpQkFBZ0I7O1FBekJLLGVBQVU7UUFBVixtQ0FBVTs7dUZEUWxCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEFjY29yZGlvbiBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQWNjb3JkaW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgaXRlbXMgPSBbJ0l0ZW0gMScsICdJdGVtIDInLCAnSXRlbSAzJywgJ0l0ZW0gNCcsICdJdGVtIDUnXTtcbiAgZXhwYW5kZWRJbmRleCA9IDA7XG59XG4iLCI8Y2RrLWFjY29yZGlvbiBjbGFzcz1cImV4YW1wbGUtYWNjb3JkaW9uXCI+XG4gIDxjZGstYWNjb3JkaW9uLWl0ZW1cbiAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4ID0gaW5kZXg7XCJcbiAgICAjYWNjb3JkaW9uSXRlbT1cImNka0FjY29yZGlvbkl0ZW1cIlxuICAgIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbVwiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCIwXCJcbiAgICBbYXR0ci5pZF09XCInYWNjb3JkaW9uLWhlYWRlci0nICsgaW5kZXhcIlxuICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiYWNjb3JkaW9uSXRlbS5leHBhbmRlZFwiXG4gICAgW2F0dHIuYXJpYS1jb250cm9sc109XCInYWNjb3JkaW9uLWJvZHktJyArIGluZGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYWNjb3JkaW9uLWl0ZW0taGVhZGVyXCIgKGNsaWNrKT1cImFjY29yZGlvbkl0ZW0udG9nZ2xlKClcIj5cbiAgICAgIHt7IGl0ZW0gfX1cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbS1kZXNjcmlwdGlvblwiPlxuICAgICAgICBDbGljayB0byB7eyBhY2NvcmRpb25JdGVtLmV4cGFuZGVkID8gJ2Nsb3NlJyA6ICdvcGVuJyB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbS1ib2R5XCJcbiAgICAgIHJvbGU9XCJyZWdpb25cIlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiYWNjb3JkaW9uSXRlbS5leHBhbmRlZCA/ICcnIDogJ25vbmUnXCJcbiAgICAgIFthdHRyLmlkXT1cIidhY2NvcmRpb24tYm9keS0nICsgaW5kZXhcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIidhY2NvcmRpb24taGVhZGVyLScgKyBpbmRleFwiPlxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcmZlcmVuZGlzXG4gICAgICBleGNlcHR1cmkgaW5jaWR1bnQgaXBzdW0gZGVsZW5pdGkgbGFib3JlLCB0ZW1wb3JlIG5vbiBuYW0gZG9sb3JpYnVzIGJsYW5kaXRpaXNcbiAgICAgIHZlcml0YXRpcyBpbGxvIGF1dGVtIGl1cmUgYWxpcXVpZCB1bGxhbSByZW0gdGVuZXR1ciBkZXNlcnVudCB2ZWxpdCBjdWxwYT9cbiAgICA8L2Rpdj5cbiAgPC9jZGstYWNjb3JkaW9uLWl0ZW0+XG48L2Nkay1hY2NvcmRpb24+XG5cbiJdfQ==