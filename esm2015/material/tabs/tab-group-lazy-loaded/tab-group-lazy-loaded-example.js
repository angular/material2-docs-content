/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 1 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r15.getTimeLoaded(1), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 2 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r16.getTimeLoaded(2), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 3 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r17.getTimeLoaded(3), "medium"), " ");
} }
/**
 * \@title Tab group where the tab content is loaded lazily (when activated)
 */
export class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            },] },
];
/** @nocollapse */ TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
/** @nocollapse */ TabGroupLazyLoadedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group");
        i0.ɵɵelementStart(1, "mat-tab", 0);
        i0.ɵɵtemplate(2, TabGroupLazyLoadedExample_ng_template_2_Template, 2, 4, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-tab", 2);
        i0.ɵɵtemplate(4, TabGroupLazyLoadedExample_ng_template_4_Template, 2, 4, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-tab", 3);
        i0.ɵɵtemplate(6, TabGroupLazyLoadedExample_ng_template_6_Template, 2, 4, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatTabGroup, i1.MatTab, i1.MatTabContent], pipes: [i2.DatePipe], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TabGroupLazyLoadedExample.prototype.tabLoadTimes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDR2xDLFlBQ0Y7Ozs7SUFERSw2R0FDRjs7O0lBSUUsWUFDRjs7OztJQURFLDZHQUNGOzs7SUFJRSxZQUNGOzs7O0lBREUsNkdBQ0Y7Ozs7O0FESkosTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1FLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0tBUzNCOzs7OztJQVBDLGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7O2tHQUNZLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDVnRDLHFDQUNFO1FBQUEsa0NBQ0U7UUFBQSwwRkFDRTtRQUVKLGlCQUFVO1FBQ1Ysa0NBQ0U7UUFBQSwwRkFDRTtRQUVKLGlCQUFVO1FBQ1Ysa0NBQ0U7UUFBQSwwRkFDRTtRQUVKLGlCQUFVO1FBQ1osaUJBQWdCOzttQ0ROSCx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOzs7O0lBRUMsaURBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2hlcmUgdGhlIHRhYiBjb250ZW50IGlzIGxvYWRlZCBsYXppbHkgKHdoZW4gYWN0aXZhdGVkKVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBMYXp5TG9hZGVkRXhhbXBsZSB7XG4gIHRhYkxvYWRUaW1lczogRGF0ZVtdID0gW107XG5cbiAgZ2V0VGltZUxvYWRlZChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF0pIHtcbiAgICAgIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgIENvbnRlbnQgMSAtIExvYWRlZDoge3tnZXRUaW1lTG9hZGVkKDEpIHwgZGF0ZTonbWVkaXVtJ319XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgQ29udGVudCAyIC0gTG9hZGVkOiB7e2dldFRpbWVMb2FkZWQoMikgfCBkYXRlOidtZWRpdW0nfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgIENvbnRlbnQgMyAtIExvYWRlZDoge3tnZXRUaW1lTG9hZGVkKDMpIHwgZGF0ZTonbWVkaXVtJ319XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19