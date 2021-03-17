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
        args: [{
                selector: 'tab-group-dynamic-height-example',
                templateUrl: 'tab-group-dynamic-height-example.html',
                styleUrls: ['tab-group-dynamic-height-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1keW5hbWljLWhlaWdodC90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0L3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLDRCQUE0Qjs7d0dBQTVCLDRCQUE0QjsrRUFBNUIsNEJBQTRCO1FDVHpDLHdDQUE2QjtRQUUzQixrQ0FBMkI7UUFDekIsOEJBQWdEO1FBQzlDLCtCQUNGO1FBQUEsaUJBQU07UUFDUixpQkFBVTtRQUNWLGtDQUEwQjtRQUN4Qiw4QkFBZ0Q7UUFDOUMsK0JBQ0Y7UUFBQSxpQkFBTTtRQUNSLGlCQUFVO1FBQ1osaUJBQWdCOzt1RkRISCw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBkeW5hbWljIGhlaWdodCBiYXNlZCBvbiB0YWIgY29udGVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwRHluYW1pY0hlaWdodEV4YW1wbGUge31cbiIsIjwhLS0gI2RvY3JlZ2lvbiBkeW5hbWljLWhlaWdodCAtLT5cbjxtYXQtdGFiLWdyb3VwIGR5bmFtaWNIZWlnaHQ+XG48IS0tICNlbmRkb2NyZWdpb24gZHluYW1pYy1oZWlnaHQgLS0+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2hvcnQgdGFiXCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc21hbGwtYm94IG1hdC1lbGV2YXRpb24tejRcIj5cbiAgICAgIFNtYWxsIGNvbnRlbnRcbiAgICA8L2Rpdj5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkxvbmcgdGFiXCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFyZ2UtYm94IG1hdC1lbGV2YXRpb24tejRcIj5cbiAgICAgIExhcmdlIGNvbnRlbnRcbiAgICA8L2Rpdj5cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19