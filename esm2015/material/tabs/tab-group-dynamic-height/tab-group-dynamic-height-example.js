import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with dynamic height based on tab contents
 */
export class TabGroupDynamicHeightExample {
}
TabGroupDynamicHeightExample.ɵfac = function TabGroupDynamicHeightExample_Factory(t) { return new (t || TabGroupDynamicHeightExample)(); };
TabGroupDynamicHeightExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabGroupDynamicHeightExample, selectors: [["tab-group-dynamic-height-example"]], decls: 7, vars: 0, consts: [["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"]], template: function TabGroupDynamicHeightExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group", 0);
        i0.ɵɵelementStart(1, "mat-tab", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3, " Small content ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-tab", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtext(6, " Large content ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatTabGroup, i1.MatTab], styles: [".example-small-box[_ngcontent-%COMP%], .example-large-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupDynamicHeightExample, [{
        type: Component,
        args: [{ selector: 'tab-group-dynamic-height-example', template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1keW5hbWljLWhlaWdodC90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0L3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLDRCQUE0Qjs7d0dBQTVCLDRCQUE0QjsrRUFBNUIsNEJBQTRCO1FDVHpDLHdDQUE2QjtRQUUzQixrQ0FBMkI7UUFDekIsOEJBQWdEO1FBQzlDLCtCQUNGO1FBQUEsaUJBQU07UUFDUixpQkFBVTtRQUNWLGtDQUEwQjtRQUN4Qiw4QkFBZ0Q7UUFDOUMsK0JBQ0Y7UUFBQSxpQkFBTTtRQUNSLGlCQUFVO1FBQ1osaUJBQWdCOzt1RkRISCw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGR5bmFtaWMgaGVpZ2h0IGJhc2VkIG9uIHRhYiBjb250ZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBEeW5hbWljSGVpZ2h0RXhhbXBsZSB7fVxuIiwiPCEtLSAjZG9jcmVnaW9uIGR5bmFtaWMtaGVpZ2h0IC0tPlxuPG1hdC10YWItZ3JvdXAgZHluYW1pY0hlaWdodD5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBkeW5hbWljLWhlaWdodCAtLT5cbiAgPG1hdC10YWIgbGFiZWw9XCJTaG9ydCB0YWJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1zbWFsbC1ib3ggbWF0LWVsZXZhdGlvbi16NFwiPlxuICAgICAgU21hbGwgY29udGVudFxuICAgIDwvZGl2PlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiTG9uZyB0YWJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYXJnZS1ib3ggbWF0LWVsZXZhdGlvbi16NFwiPlxuICAgICAgTGFyZ2UgY29udGVudFxuICAgIDwvZGl2PlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=