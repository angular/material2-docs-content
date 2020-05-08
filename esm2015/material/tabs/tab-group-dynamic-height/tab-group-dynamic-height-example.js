/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tabs/tab-group-dynamic-height/tab-group-dynamic-height-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * \@title Tab group with dynamic height based on tab contents
 */
export class TabGroupDynamicHeightExample {
}
TabGroupDynamicHeightExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-height-example',
                templateUrl: 'tab-group-dynamic-height-example.html',
                styleUrls: ['tab-group-dynamic-height-example.css'],
            },] },
];
/** @nocollapse */ TabGroupDynamicHeightExample.ɵfac = function TabGroupDynamicHeightExample_Factory(t) { return new (t || TabGroupDynamicHeightExample)(); };
/** @nocollapse */ TabGroupDynamicHeightExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupDynamicHeightExample, selectors: [["tab-group-dynamic-height-example"]], decls: 7, vars: 0, consts: [["dynamicHeight", ""], ["label", "Short tab"], [1, "example-small-box", "mat-elevation-z4"], ["label", "Long tab"], [1, "example-large-box", "mat-elevation-z4"]], template: function TabGroupDynamicHeightExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupDynamicHeightExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-dynamic-height-example',
                templateUrl: 'tab-group-dynamic-height-example.html',
                styleUrls: ['tab-group-dynamic-height-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1keW5hbWljLWhlaWdodC90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0L3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFVeEMsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBTHhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRDs7MkhBQ1ksNEJBQTRCO29GQUE1Qiw0QkFBNEI7UUNWekMsd0NBQ0U7UUFBQSxrQ0FDRTtRQUFBLDhCQUNFO1FBQUEsK0JBQ0Y7UUFBQSxpQkFBTTtRQUNSLGlCQUFVO1FBQ1Ysa0NBQ0U7UUFBQSw4QkFDRTtRQUFBLCtCQUNGO1FBQUEsaUJBQU07UUFDUixpQkFBVTtRQUNaLGlCQUFnQjs7a0REREgsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggZHluYW1pYyBoZWlnaHQgYmFzZWQgb24gdGFiIGNvbnRlbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cER5bmFtaWNIZWlnaHRFeGFtcGxlIHt9XG4iLCI8bWF0LXRhYi1ncm91cCBkeW5hbWljSGVpZ2h0PlxuICA8bWF0LXRhYiBsYWJlbD1cIlNob3J0IHRhYlwiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLXNtYWxsLWJveCBtYXQtZWxldmF0aW9uLXo0XCI+XG4gICAgICBTbWFsbCBjb250ZW50XG4gICAgPC9kaXY+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJMb25nIHRhYlwiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhcmdlLWJveCBtYXQtZWxldmF0aW9uLXo0XCI+XG4gICAgICBMYXJnZSBjb250ZW50XG4gICAgPC9kaXY+XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==