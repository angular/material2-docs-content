/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/list";
import * as i4 from "@angular/material/core";
/**
 * \@title Bottom Sheet Overview
 */
export class BottomSheetOverviewExample {
    /**
     * @param {?} _bottomSheet
     */
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    /**
     * @return {?}
     */
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}
BottomSheetOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example',
                templateUrl: 'bottom-sheet-overview-example.html',
                styleUrls: ['bottom-sheet-overview-example.css'],
            },] },
];
/** @nocollapse */
BottomSheetOverviewExample.ctorParameters = () => [
    { type: MatBottomSheet }
];
/** @nocollapse */ BottomSheetOverviewExample.ɵfac = function BottomSheetOverviewExample_Factory(t) { return new (t || BottomSheetOverviewExample)(i0.ɵɵdirectiveInject(i1.MatBottomSheet)); };
/** @nocollapse */ BottomSheetOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheetOverviewExample, selectors: [["bottom-sheet-overview-example"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function BottomSheetOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "You have received a file called \"cat-picture.jpeg\".");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 0);
        i0.ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener($event) { return ctx.openBottomSheet(); });
        i0.ɵɵtext(3, "Open file");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheetOverviewExample, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example',
                templateUrl: 'bottom-sheet-overview-example.html',
                styleUrls: ['bottom-sheet-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatBottomSheet }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheetOverviewExample.prototype._bottomSheet;
}
export class BottomSheetOverviewExampleSheet {
    /**
     * @param {?} _bottomSheetRef
     */
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                templateUrl: 'bottom-sheet-overview-example-sheet.html',
            },] },
];
/** @nocollapse */
BottomSheetOverviewExampleSheet.ctorParameters = () => [
    { type: MatBottomSheetRef }
];
/** @nocollapse */ BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(i0.ɵɵdirectiveInject(i1.MatBottomSheetRef)); };
/** @nocollapse */ BottomSheetOverviewExampleSheet.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-nav-list");
        i0.ɵɵelementStart(1, "a", 0);
        i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_1_listener($event) { return ctx.openLink($event); });
        i0.ɵɵelementStart(2, "span", 1);
        i0.ɵɵtext(3, "Google Keep");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 1);
        i0.ɵɵtext(5, "Add to a note");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "a", 2);
        i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_6_listener($event) { return ctx.openLink($event); });
        i0.ɵɵelementStart(7, "span", 1);
        i0.ɵɵtext(8, "Google Docs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "span", 1);
        i0.ɵɵtext(10, "Embed in a document");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "a", 3);
        i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_11_listener($event) { return ctx.openLink($event); });
        i0.ɵɵelementStart(12, "span", 1);
        i0.ɵɵtext(13, "Google Plus");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "span", 1);
        i0.ɵɵtext(15, "Share with your friends");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "a", 4);
        i0.ɵɵlistener("click", function BottomSheetOverviewExampleSheet_Template_a_click_16_listener($event) { return ctx.openLink($event); });
        i0.ɵɵelementStart(17, "span", 1);
        i0.ɵɵtext(18, "Google Hangouts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "span", 1);
        i0.ɵɵtext(20, "Show to your coworkers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i3.MatNavList, i3.MatListItem, i4.MatLine], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheetOverviewExampleSheet, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                templateUrl: 'bottom-sheet-overview-example-sheet.html',
            }]
    }], function () { return [{ type: i1.MatBottomSheetRef }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheetOverviewExampleSheet.prototype._bottomSheetRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7O0FBVWpGLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFDckMsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQUcsQ0FBQzs7OztJQUVwRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7WUFUTyxjQUFjOztvR0FVVCwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1h2Qyx5QkFBRztRQUFBLHFFQUFtRDtRQUFBLGlCQUFJO1FBRTFELGlDQUFzRDtRQUE1Qiw2R0FBUyxxQkFBaUIsSUFBQztRQUFDLHlCQUFTO1FBQUEsaUJBQVM7O2tERFMzRCwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOzs7Ozs7O0lBRWEsa0RBQW9DOztBQVdsRCxNQUFNLE9BQU8sK0JBQStCOzs7O0lBQzFDLFlBQW9CLGVBQW1FO1FBQW5FLG9CQUFlLEdBQWYsZUFBZSxDQUFvRDtJQUFHLENBQUM7Ozs7O0lBRTNGLFFBQVEsQ0FBQyxLQUFpQjtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLDBDQUEwQzthQUN4RDs7OztZQXJCdUIsaUJBQWlCOzs4R0FzQjVCLCtCQUErQjtvRUFBL0IsK0JBQStCO1FFdkI1QyxvQ0FDRTtRQUFBLDRCQUNFO1FBRCtDLDZHQUFTLG9CQUFnQixJQUFDO1FBQ3pFLCtCQUFlO1FBQUEsMkJBQVc7UUFBQSxpQkFBTztRQUNqQywrQkFBZTtRQUFBLDZCQUFhO1FBQUEsaUJBQU87UUFDckMsaUJBQUk7UUFFSiw0QkFDRTtRQUQrQyw2R0FBUyxvQkFBZ0IsSUFBQztRQUN6RSwrQkFBZTtRQUFBLDJCQUFXO1FBQUEsaUJBQU87UUFDakMsK0JBQWU7UUFBQSxvQ0FBbUI7UUFBQSxpQkFBTztRQUMzQyxpQkFBSTtRQUVKLDZCQUNFO1FBRCtDLDhHQUFTLG9CQUFnQixJQUFDO1FBQ3pFLGdDQUFlO1FBQUEsNEJBQVc7UUFBQSxpQkFBTztRQUNqQyxnQ0FBZTtRQUFBLHdDQUF1QjtRQUFBLGlCQUFPO1FBQy9DLGlCQUFJO1FBRUosNkJBQ0U7UUFEbUQsOEdBQVMsb0JBQWdCLElBQUM7UUFDN0UsZ0NBQWU7UUFBQSxnQ0FBZTtRQUFBLGlCQUFPO1FBQ3JDLGdDQUFlO1FBQUEsdUNBQXNCO1FBQUEsaUJBQU87UUFDOUMsaUJBQUk7UUFDTixpQkFBZTs7a0RGR0YsK0JBQStCO2NBSjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxXQUFXLEVBQUUsMENBQTBDO2FBQ3hEOzs7Ozs7O0lBRWEsMERBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5cbi8qKlxuICogQHRpdGxlIEJvdHRvbSBTaGVldCBPdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHt9XG5cbiAgb3BlbkJvdHRvbVNoZWV0KCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUtc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLXNoZWV0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXRSZWY6IE1hdEJvdHRvbVNoZWV0UmVmPEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQ+KSB7fVxuXG4gIG9wZW5MaW5rKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiIsIjxwPllvdSBoYXZlIHJlY2VpdmVkIGEgZmlsZSBjYWxsZWQgXCJjYXQtcGljdHVyZS5qcGVnXCIuPC9wPlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuQm90dG9tU2hlZXQoKVwiPk9wZW4gZmlsZTwvYnV0dG9uPlxuIiwiPG1hdC1uYXYtbGlzdD5cbiAgPGEgaHJlZj1cImh0dHBzOi8va2VlcC5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgS2VlcDwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5BZGQgdG8gYSBub3RlPC9zcGFuPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgRG9jczwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5FbWJlZCBpbiBhIGRvY3VtZW50PC9zcGFuPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cImh0dHBzOi8vcGx1cy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgUGx1czwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5TaGFyZSB3aXRoIHlvdXIgZnJpZW5kczwvc3Bhbj5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCJodHRwczovL2hhbmdvdXRzLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBIYW5nb3V0czwvc3Bhbj5cbiAgICA8c3BhbiBtYXQtbGluZT5TaG93IHRvIHlvdXIgY293b3JrZXJzPC9zcGFuPlxuICA8L2E+XG48L21hdC1uYXYtbGlzdD5cbiJdfQ==