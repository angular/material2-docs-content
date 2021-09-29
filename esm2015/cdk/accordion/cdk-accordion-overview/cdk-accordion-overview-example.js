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
        args: [{ selector: 'cdk-accordion-overview-example', template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2FjY29yZGlvbi9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3L2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9hY2NvcmRpb24vY2RrLWFjY29yZGlvbi1vdmVydmlldy9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNDdEMsZ0RBUW1EO0lBQ2pELDhCQUE0RTtJQUFqQyxnTEFBUyxZQUFzQixJQUFDO0lBQ3pFLFlBQ0E7SUFBQSwrQkFBaUQ7SUFDL0MsWUFDRjtJQUFBLGlCQUFPO0lBQ1QsaUJBQU07SUFDTiw4QkFLdUQ7SUFDckQsZ1BBR0Y7SUFBQSxpQkFBTTtJQUNSLGlCQUFxQjs7Ozs7SUFuQm5CLG9EQUF1QywrQkFBQSwrQ0FBQTtJQUlyQyxlQUNBO0lBREEsd0NBQ0E7SUFDRSxlQUNGO0lBREUseUVBQ0Y7SUFLQSxlQUFzRDtJQUF0RCxxREFBc0Q7SUFDdEQsa0RBQXFDLG1EQUFBOztBRGxCM0M7O0dBRUc7QUFNSCxNQUFNLE9BQU8sMkJBQTJCO0lBTHhDO1FBTUUsVUFBSyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNELGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0tBQ25COztzR0FIWSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ1Z4Qyx3Q0FBeUM7UUFDdkMsMEdBeUJxQjtRQUN2QixpQkFBZ0I7O1FBekJLLGVBQVU7UUFBVixtQ0FBVTs7dUZEUWxCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtBY2NvcmRpb25PdmVydmlld0V4YW1wbGUge1xuICBpdGVtcyA9IFsnSXRlbSAxJywgJ0l0ZW0gMicsICdJdGVtIDMnLCAnSXRlbSA0JywgJ0l0ZW0gNSddO1xuICBleHBhbmRlZEluZGV4ID0gMDtcbn1cbiIsIjxjZGstYWNjb3JkaW9uIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb25cIj5cbiAgPGNkay1hY2NvcmRpb24taXRlbVxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXggPSBpbmRleDtcIlxuICAgICNhY2NvcmRpb25JdGVtPVwiY2RrQWNjb3JkaW9uSXRlbVwiXG4gICAgY2xhc3M9XCJleGFtcGxlLWFjY29yZGlvbi1pdGVtXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIFthdHRyLmlkXT1cIidhY2NvcmRpb24taGVhZGVyLScgKyBpbmRleFwiXG4gICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJhY2NvcmRpb25JdGVtLmV4cGFuZGVkXCJcbiAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIidhY2NvcmRpb24tYm9keS0nICsgaW5kZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbS1oZWFkZXJcIiAoY2xpY2spPVwiYWNjb3JkaW9uSXRlbS50b2dnbGUoKVwiPlxuICAgICAge3sgaXRlbSB9fVxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWFjY29yZGlvbi1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIENsaWNrIHRvIHt7IGFjY29yZGlvbkl0ZW0uZXhwYW5kZWQgPyAnY2xvc2UnIDogJ29wZW4nIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWFjY29yZGlvbi1pdGVtLWJvZHlcIlxuICAgICAgcm9sZT1cInJlZ2lvblwiXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJhY2NvcmRpb25JdGVtLmV4cGFuZGVkID8gJycgOiAnbm9uZSdcIlxuICAgICAgW2F0dHIuaWRdPVwiJ2FjY29yZGlvbi1ib2R5LScgKyBpbmRleFwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2FjY29yZGlvbi1oZWFkZXItJyArIGluZGV4XCI+XG4gICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXNcbiAgICAgIGV4Y2VwdHVyaSBpbmNpZHVudCBpcHN1bSBkZWxlbml0aSBsYWJvcmUsIHRlbXBvcmUgbm9uIG5hbSBkb2xvcmlidXMgYmxhbmRpdGlpc1xuICAgICAgdmVyaXRhdGlzIGlsbG8gYXV0ZW0gaXVyZSBhbGlxdWlkIHVsbGFtIHJlbSB0ZW5ldHVyIGRlc2VydW50IHZlbGl0IGN1bHBhP1xuICAgIDwvZGl2PlxuICA8L2Nkay1hY2NvcmRpb24taXRlbT5cbjwvY2RrLWFjY29yZGlvbj5cblxuIl19