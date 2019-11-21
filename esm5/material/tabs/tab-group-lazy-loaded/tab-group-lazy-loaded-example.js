import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 1 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r15.getTimeLoaded(1), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    var ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 2 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r16.getTimeLoaded(2), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    var ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 3 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r17.getTimeLoaded(3), "medium"), " ");
} }
/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
var TabGroupLazyLoadedExample = /** @class */ (function () {
    function TabGroupLazyLoadedExample() {
        this.tabLoadTimes = [];
    }
    TabGroupLazyLoadedExample.prototype.getTimeLoaded = function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    TabGroupLazyLoadedExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-lazy-loaded-example',
                    templateUrl: 'tab-group-lazy-loaded-example.html',
                    styleUrls: ['tab-group-lazy-loaded-example.css'],
                },] },
    ];
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
        } }, directives: [i1.MatTabGroup, i1.MatTab, i1.MatTabContent], pipes: [i2.DatePipe], styles: [""] });
    return TabGroupLazyLoadedExample;
}());
export { TabGroupLazyLoadedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNHbEMsWUFDRjs7OztJQURFLDZHQUNGOzs7SUFJRSxZQUNGOzs7O0lBREUsNkdBQ0Y7OztJQUlFLFlBQ0Y7Ozs7SUFERSw2R0FDRjs7QURaSjs7R0FFRztBQUNIO0lBQUE7UUFNRSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztLQVMzQjtJQVBDLGlEQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsV0FBVyxFQUFFLG9DQUFvQztvQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7aUJBQ2pEOztzR0FDWSx5QkFBeUI7a0VBQXpCLHlCQUF5QjtZQ1Z0QyxxQ0FDRTtZQUFBLGtDQUNFO1lBQUEsMEZBQ0U7WUFFSixpQkFBVTtZQUNWLGtDQUNFO1lBQUEsMEZBQ0U7WUFFSixpQkFBVTtZQUNWLGtDQUNFO1lBQUEsMEZBQ0U7WUFFSixpQkFBVTtZQUNaLGlCQUFnQjs7b0NEaEJoQjtDQW9CQyxBQWZELElBZUM7U0FWWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aGVyZSB0aGUgdGFiIGNvbnRlbnQgaXMgbG9hZGVkIGxhemlseSAod2hlbiBhY3RpdmF0ZWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cExhenlMb2FkZWRFeGFtcGxlIHtcbiAgdGFiTG9hZFRpbWVzOiBEYXRlW10gPSBbXTtcblxuICBnZXRUaW1lTG9hZGVkKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSkge1xuICAgICAgdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdO1xuICB9XG59XG4iLCI8bWF0LXRhYi1ncm91cD5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgQ29udGVudCAxIC0gTG9hZGVkOiB7e2dldFRpbWVMb2FkZWQoMSkgfCBkYXRlOidtZWRpdW0nfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDIgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgyKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRUYWJDb250ZW50PlxuICAgICAgQ29udGVudCAzIC0gTG9hZGVkOiB7e2dldFRpbWVMb2FkZWQoMykgfCBkYXRlOidtZWRpdW0nfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=