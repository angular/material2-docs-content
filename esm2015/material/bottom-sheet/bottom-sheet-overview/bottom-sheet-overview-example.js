/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview-example.ts
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
        i0.ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener() { return ctx.openBottomSheet(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7OztBQVVqRixNQUFNLE9BQU8sMEJBQTBCOzs7O0lBQ3JDLFlBQW9CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFHLENBQUM7Ozs7SUFFcEQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOzs7O1lBVE8sY0FBYzs7dUhBVVQsMEJBQTBCO2tGQUExQiwwQkFBMEI7UUNYdkMseUJBQUc7UUFBQSxxRUFBbUQ7UUFBQSxpQkFBSTtRQUUxRCxpQ0FBc0Q7UUFBNUIsdUdBQVMscUJBQWlCLElBQUM7UUFBQyx5QkFBUztRQUFBLGlCQUFTOztrRERTM0QsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7Ozs7OztJQUVhLGtEQUFvQzs7QUFXbEQsTUFBTSxPQUFPLCtCQUErQjs7OztJQUMxQyxZQUFvQixlQUFtRTtRQUFuRSxvQkFBZSxHQUFmLGVBQWUsQ0FBb0Q7SUFBRyxDQUFDOzs7OztJQUUzRixRQUFRLENBQUMsS0FBaUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSwwQ0FBMEM7YUFDeEQ7Ozs7WUFyQnVCLGlCQUFpQjs7aUlBc0I1QiwrQkFBK0I7dUZBQS9CLCtCQUErQjtRRXZCNUMsb0NBQ0U7UUFBQSw0QkFDRTtRQUQrQyw2R0FBUyxvQkFBZ0IsSUFBQztRQUN6RSwrQkFBZTtRQUFBLDJCQUFXO1FBQUEsaUJBQU87UUFDakMsK0JBQWU7UUFBQSw2QkFBYTtRQUFBLGlCQUFPO1FBQ3JDLGlCQUFJO1FBRUosNEJBQ0U7UUFEK0MsNkdBQVMsb0JBQWdCLElBQUM7UUFDekUsK0JBQWU7UUFBQSwyQkFBVztRQUFBLGlCQUFPO1FBQ2pDLCtCQUFlO1FBQUEsb0NBQW1CO1FBQUEsaUJBQU87UUFDM0MsaUJBQUk7UUFFSiw2QkFDRTtRQUQrQyw4R0FBUyxvQkFBZ0IsSUFBQztRQUN6RSxnQ0FBZTtRQUFBLDRCQUFXO1FBQUEsaUJBQU87UUFDakMsZ0NBQWU7UUFBQSx3Q0FBdUI7UUFBQSxpQkFBTztRQUMvQyxpQkFBSTtRQUVKLDZCQUNFO1FBRG1ELDhHQUFTLG9CQUFnQixJQUFDO1FBQzdFLGdDQUFlO1FBQUEsZ0NBQWU7UUFBQSxpQkFBTztRQUNyQyxnQ0FBZTtRQUFBLHVDQUFzQjtRQUFBLGlCQUFPO1FBQzlDLGlCQUFJO1FBQ04saUJBQWU7O2tERkdGLCtCQUErQjtjQUozQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLDBDQUEwQzthQUN4RDs7Ozs7OztJQUVhLDBEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG4vKipcbiAqIEB0aXRsZSBCb3R0b20gU2hlZXQgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7fVxuXG4gIG9wZW5Cb3R0b21TaGVldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0Pikge31cblxuICBvcGVuTGluayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iLCI8cD5Zb3UgaGF2ZSByZWNlaXZlZCBhIGZpbGUgY2FsbGVkIFwiY2F0LXBpY3R1cmUuanBlZ1wiLjwvcD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkJvdHRvbVNoZWV0KClcIj5PcGVuIGZpbGU8L2J1dHRvbj5cbiIsIjxtYXQtbmF2LWxpc3Q+XG4gIDxhIGhyZWY9XCJodHRwczovL2tlZXAuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIEtlZXA8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+QWRkIHRvIGEgbm90ZTwvc3Bhbj5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIERvY3M8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+RW1iZWQgaW4gYSBkb2N1bWVudDwvc3Bhbj5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIFBsdXM8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+U2hhcmUgd2l0aCB5b3VyIGZyaWVuZHM8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9oYW5nb3V0cy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgSGFuZ291dHM8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+U2hvdyB0byB5b3VyIGNvd29ya2Vyczwvc3Bhbj5cbiAgPC9hPlxuPC9tYXQtbmF2LWxpc3Q+XG4iXX0=