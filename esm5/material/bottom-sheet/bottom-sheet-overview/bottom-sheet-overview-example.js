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
var BottomSheetOverviewExample = /** @class */ (function () {
    function BottomSheetOverviewExample(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    BottomSheetOverviewExample.prototype.openBottomSheet = function () {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    BottomSheetOverviewExample.ɵfac = function BottomSheetOverviewExample_Factory(t) { return new (t || BottomSheetOverviewExample)(i0.ɵɵdirectiveInject(i1.MatBottomSheet)); };
    BottomSheetOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheetOverviewExample, selectors: [["bottom-sheet-overview-example"]], decls: 4, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function BottomSheetOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "You have received a file called \"cat-picture.jpeg\".");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function BottomSheetOverviewExample_Template_button_click_2_listener() { return ctx.openBottomSheet(); });
            i0.ɵɵtext(3, "Open file");
            i0.ɵɵelementEnd();
        } }, directives: [i2.MatButton], styles: [""] });
    return BottomSheetOverviewExample;
}());
export { BottomSheetOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheetOverviewExample, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example',
                templateUrl: 'bottom-sheet-overview-example.html',
                styleUrls: ['bottom-sheet-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatBottomSheet }]; }, null); })();
var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet.ɵfac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(i0.ɵɵdirectiveInject(i1.MatBottomSheetRef)); };
    BottomSheetOverviewExampleSheet.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) { if (rf & 1) {
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
    return BottomSheetOverviewExampleSheet;
}());
export { BottomSheetOverviewExampleSheet };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheetOverviewExampleSheet, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                templateUrl: 'bottom-sheet-overview-example-sheet.html',
            }]
    }], function () { return [{ type: i1.MatBottomSheetRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFFakY7O0dBRUc7QUFDSDtJQU1FLG9DQUFvQixZQUE0QjtRQUE1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7SUFBRyxDQUFDO0lBRXBELG9EQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7d0dBTFUsMEJBQTBCO21FQUExQiwwQkFBMEI7WUNYdkMseUJBQUc7WUFBQSxxRUFBbUQ7WUFBQSxpQkFBSTtZQUUxRCxpQ0FBc0Q7WUFBNUIsdUdBQVMscUJBQWlCLElBQUM7WUFBQyx5QkFBUztZQUFBLGlCQUFTOztxQ0RGeEU7Q0FpQkMsQUFYRCxJQVdDO1NBTlksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOztBQVNEO0lBS0UseUNBQW9CLGVBQW1FO1FBQW5FLG9CQUFlLEdBQWYsZUFBZSxDQUFvRDtJQUFHLENBQUM7SUFFM0Ysa0RBQVEsR0FBUixVQUFTLEtBQWlCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7a0hBTlUsK0JBQStCO3dFQUEvQiwrQkFBK0I7WUV2QjVDLG9DQUNFO1lBQUEsNEJBQ0U7WUFEK0MsNkdBQVMsb0JBQWdCLElBQUM7WUFDekUsK0JBQWU7WUFBQSwyQkFBVztZQUFBLGlCQUFPO1lBQ2pDLCtCQUFlO1lBQUEsNkJBQWE7WUFBQSxpQkFBTztZQUNyQyxpQkFBSTtZQUVKLDRCQUNFO1lBRCtDLDZHQUFTLG9CQUFnQixJQUFDO1lBQ3pFLCtCQUFlO1lBQUEsMkJBQVc7WUFBQSxpQkFBTztZQUNqQywrQkFBZTtZQUFBLG9DQUFtQjtZQUFBLGlCQUFPO1lBQzNDLGlCQUFJO1lBRUosNkJBQ0U7WUFEK0MsOEdBQVMsb0JBQWdCLElBQUM7WUFDekUsZ0NBQWU7WUFBQSw0QkFBVztZQUFBLGlCQUFPO1lBQ2pDLGdDQUFlO1lBQUEsd0NBQXVCO1lBQUEsaUJBQU87WUFDL0MsaUJBQUk7WUFFSiw2QkFDRTtZQURtRCw4R0FBUyxvQkFBZ0IsSUFBQztZQUM3RSxnQ0FBZTtZQUFBLGdDQUFlO1lBQUEsaUJBQU87WUFDckMsZ0NBQWU7WUFBQSx1Q0FBc0I7WUFBQSxpQkFBTztZQUM5QyxpQkFBSTtZQUNOLGlCQUFlOzswQ0ZwQmY7Q0E4QkMsQUFYRCxJQVdDO1NBUFksK0JBQStCO2tEQUEvQiwrQkFBK0I7Y0FKM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSwwQ0FBMEM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldFJlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcblxuLyoqXG4gKiBAdGl0bGUgQm90dG9tIFNoZWV0IE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkge31cblxuICBvcGVuQm90dG9tU2hlZXQoKTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUtc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldD4pIHt9XG5cbiAgb3BlbkxpbmsoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIiwiPHA+WW91IGhhdmUgcmVjZWl2ZWQgYSBmaWxlIGNhbGxlZCBcImNhdC1waWN0dXJlLmpwZWdcIi48L3A+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5Cb3R0b21TaGVldCgpXCI+T3BlbiBmaWxlPC9idXR0b24+XG4iLCI8bWF0LW5hdi1saXN0PlxuICA8YSBocmVmPVwiaHR0cHM6Ly9rZWVwLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBLZWVwPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPkFkZCB0byBhIG5vdGU8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBEb2NzPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPkVtYmVkIGluIGEgZG9jdW1lbnQ8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdC1saW5lPkdvb2dsZSBQbHVzPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPlNoYXJlIHdpdGggeW91ciBmcmllbmRzPC9zcGFuPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cImh0dHBzOi8vaGFuZ291dHMuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIEhhbmdvdXRzPC9zcGFuPlxuICAgIDxzcGFuIG1hdC1saW5lPlNob3cgdG8geW91ciBjb3dvcmtlcnM8L3NwYW4+XG4gIDwvYT5cbjwvbWF0LW5hdi1saXN0PlxuIl19