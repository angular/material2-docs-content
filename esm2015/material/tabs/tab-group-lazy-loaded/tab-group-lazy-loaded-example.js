import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 1 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r0.getTimeLoaded(1), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 2 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r1.getTimeLoaded(2), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 3 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r2.getTimeLoaded(3), "medium"), " ");
} }
/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
export class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
TabGroupLazyLoadedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatTabGroup, i1.MatTab, i1.MatTabContent], pipes: [i2.DatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNJbEMsWUFDRjs7OztJQURFLDRHQUNGOzs7SUFLRSxZQUNGOzs7O0lBREUsNEdBQ0Y7OztJQUlFLFlBQ0Y7Ozs7SUFERSw0R0FDRjs7QURkSjs7R0FFRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFKdEM7UUFLRSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztLQVMzQjtJQVBDLGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztrR0FUVSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ1R0QyxxQ0FBZTtRQUViLGtDQUF1QjtRQUNyQiwwRkFFYztRQUNoQixpQkFBVTtRQUVWLGtDQUF3QjtRQUN0QiwwRkFFYztRQUNoQixpQkFBVTtRQUNWLGtDQUF1QjtRQUNyQiwwRkFFYztRQUNoQixpQkFBVTtRQUNaLGlCQUFnQjs7dUZEVEgseUJBQXlCO2NBSnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2hlcmUgdGhlIHRhYiBjb250ZW50IGlzIGxvYWRlZCBsYXppbHkgKHdoZW4gYWN0aXZhdGVkKVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwTGF6eUxvYWRlZEV4YW1wbGUge1xuICB0YWJMb2FkVGltZXM6IERhdGVbXSA9IFtdO1xuXG4gIGdldFRpbWVMb2FkZWQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdKSB7XG4gICAgICB0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF0gPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF07XG4gIH1cbn1cbiIsIjxtYXQtdGFiLWdyb3VwPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC10YWItY29udGVudCAtLT5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgQ29udGVudCAxIC0gTG9hZGVkOiB7e2dldFRpbWVMb2FkZWQoMSkgfCBkYXRlOidtZWRpdW0nfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10YWI+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LXRhYi1jb250ZW50IC0tPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgQ29udGVudCAyIC0gTG9hZGVkOiB7e2dldFRpbWVMb2FkZWQoMikgfCBkYXRlOidtZWRpdW0nfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgIENvbnRlbnQgMyAtIExvYWRlZDoge3tnZXRUaW1lTG9hZGVkKDMpIHwgZGF0ZTonbWVkaXVtJ319XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19