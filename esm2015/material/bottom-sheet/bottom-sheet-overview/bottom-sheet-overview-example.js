import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/list";
import * as i4 from "@angular/material/core";
/**
 * @title Bottom Sheet Overview
 */
export class BottomSheetOverviewExample {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}
BottomSheetOverviewExample.ɵfac = function BottomSheetOverviewExample_Factory(t) { return new (t || BottomSheetOverviewExample)(i0.ɵɵdirectiveInject(i1.MatBottomSheet)); };
BottomSheetOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomSheetOverviewExample, selectors: [["bottom-sheet-overview-example"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function BottomSheetOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "You have received a file called \"cat-picture.jpeg\".");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 0);
        i0.ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener() { return ctx.openBottomSheet(); });
        i0.ɵɵtext(3, "Open file");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheetOverviewExample, [{
        type: Component,
        args: [{ selector: 'bottom-sheet-overview-example', template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n" }]
    }], function () { return [{ type: i1.MatBottomSheet }]; }, null); })();
export class BottomSheetOverviewExampleSheet {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(i0.ɵɵdirectiveInject(i1.MatBottomSheetRef)); };
BottomSheetOverviewExampleSheet.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheetOverviewExampleSheet, [{
        type: Component,
        args: [{ selector: 'bottom-sheet-overview-example-sheet', template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n" }]
    }], function () { return [{ type: i1.MatBottomSheetRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFFakY7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQW9CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFHLENBQUM7SUFFcEQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7b0dBTFUsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUNWdkMseUJBQUc7UUFBQSxxRUFBbUQ7UUFBQSxpQkFBSTtRQUUxRCxpQ0FBc0Q7UUFBNUIsdUdBQVMscUJBQWlCLElBQUM7UUFBQyx5QkFBUztRQUFBLGlCQUFTOzt1RkRRM0QsMEJBQTBCO2NBSnRDLFNBQVM7MkJBQ0UsK0JBQStCOztBQWUzQyxNQUFNLE9BQU8sK0JBQStCO0lBQzFDLFlBQW9CLGVBQW1FO1FBQW5FLG9CQUFlLEdBQWYsZUFBZSxDQUFvRDtJQUFHLENBQUM7SUFFM0YsUUFBUSxDQUFDLEtBQWlCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7OzhHQU5VLCtCQUErQjtrRkFBL0IsK0JBQStCO1FFdEI1QyxvQ0FBYztRQUNaLDRCQUE0RTtRQUEzQiw2R0FBUyxvQkFBZ0IsSUFBQztRQUN6RSwrQkFBZTtRQUFBLDJCQUFXO1FBQUEsaUJBQU87UUFDakMsK0JBQWU7UUFBQSw2QkFBYTtRQUFBLGlCQUFPO1FBQ3JDLGlCQUFJO1FBRUosNEJBQTRFO1FBQTNCLDZHQUFTLG9CQUFnQixJQUFDO1FBQ3pFLCtCQUFlO1FBQUEsMkJBQVc7UUFBQSxpQkFBTztRQUNqQywrQkFBZTtRQUFBLG9DQUFtQjtRQUFBLGlCQUFPO1FBQzNDLGlCQUFJO1FBRUosNkJBQTRFO1FBQTNCLDhHQUFTLG9CQUFnQixJQUFDO1FBQ3pFLGdDQUFlO1FBQUEsNEJBQVc7UUFBQSxpQkFBTztRQUNqQyxnQ0FBZTtRQUFBLHdDQUF1QjtRQUFBLGlCQUFPO1FBQy9DLGlCQUFJO1FBRUosNkJBQWdGO1FBQTNCLDhHQUFTLG9CQUFnQixJQUFDO1FBQzdFLGdDQUFlO1FBQUEsZ0NBQWU7UUFBQSxpQkFBTztRQUNyQyxnQ0FBZTtRQUFBLHVDQUFzQjtRQUFBLGlCQUFPO1FBQzlDLGlCQUFJO1FBQ04saUJBQWU7O3VGRkVGLCtCQUErQjtjQUozQyxTQUFTOzJCQUNFLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG4vKipcbiAqIEB0aXRsZSBCb3R0b20gU2hlZXQgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkge31cblxuICBvcGVuQm90dG9tU2hlZXQoKTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUtc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldD4pIHt9XG5cbiAgb3BlbkxpbmsoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIiwiPHA+WW91IGhhdmUgcmVjZWl2ZWQgYSBmaWxlIGNhbGxlZCBcImNhdC1waWN0dXJlLmpwZWdcIi48L3A+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5Cb3R0b21TaGVldCgpXCI+T3BlbiBmaWxlPC9idXR0b24+XG4iLCI8bWF0LW5hdi1saXN0PlxuICA8YSBocmVmPVwiaHR0cHM6Ly9rZWVwLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBLZWVwPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPkFkZCB0byBhIG5vdGU8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBEb2NzPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPkVtYmVkIGluIGEgZG9jdW1lbnQ8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBQbHVzPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPlNoYXJlIHdpdGggeW91ciBmcmllbmRzPC9zcGFuPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cImh0dHBzOi8vaGFuZ291dHMuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIEhhbmdvdXRzPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPlNob3cgdG8geW91ciBjb3dvcmtlcnM8L3NwYW4+XG4gIDwvYT5cbjwvbWF0LW5hdi1saXN0PlxuIl19