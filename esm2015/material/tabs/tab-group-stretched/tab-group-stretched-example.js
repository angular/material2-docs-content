import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with stretched labels
 */
export class TabGroupStretchedExample {
}
TabGroupStretchedExample.ɵfac = function TabGroupStretchedExample_Factory(t) { return new (t || TabGroupStretchedExample)(); };
TabGroupStretchedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupStretchedExample, selectors: [["tab-group-stretched-example"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupStretchedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group", 0);
        i0.ɵɵelementStart(1, "mat-tab", 1);
        i0.ɵɵtext(2, " Content 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-tab", 2);
        i0.ɵɵtext(4, " Content 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-tab", 3);
        i0.ɵɵtext(6, " Content 3 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatTabGroup, i1.MatTab], styles: [".example-stretched-tabs[_ngcontent-%COMP%] {\n  max-width: 800px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupStretchedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-stretched-example',
                templateUrl: 'tab-group-stretched-example.html',
                styleUrls: ['tab-group-stretched-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtc3RyZXRjaGVkL3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXN0cmV0Y2hlZC90YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNWckMsd0NBQWdGO1FBQzlFLGtDQUF1QjtRQUFDLDJCQUFVO1FBQUEsaUJBQVU7UUFDNUMsa0NBQXdCO1FBQUMsMkJBQVU7UUFBQSxpQkFBVTtRQUM3QyxrQ0FBdUI7UUFBQywyQkFBVTtRQUFBLGlCQUFVO1FBQzlDLGlCQUFnQjs7dUZETUgsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggc3RyZXRjaGVkIGxhYmVsc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBTdHJldGNoZWRFeGFtcGxlIHt9XG4iLCI8bWF0LXRhYi1ncm91cCBtYXQtc3RyZXRjaC10YWJzIGNsYXNzPVwiZXhhbXBsZS1zdHJldGNoZWQtdGFicyBtYXQtZWxldmF0aW9uLXo0XCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj4gQ29udGVudCAxIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj4gQ29udGVudCAyIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPiBDb250ZW50IDMgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19