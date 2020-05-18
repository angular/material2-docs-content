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
let BottomSheetOverviewExample = /** @class */ (() => {
    /**
     * \@title Bottom Sheet Overview
     */
    class BottomSheetOverviewExample {
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
    return BottomSheetOverviewExample;
})();
export { BottomSheetOverviewExample };
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
let BottomSheetOverviewExampleSheet = /** @class */ (() => {
    class BottomSheetOverviewExampleSheet {
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
    return BottomSheetOverviewExampleSheet;
})();
export { BottomSheetOverviewExampleSheet };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7OztBQUtqRjs7OztJQUFBLE1BS2EsMEJBQTBCOzs7O1FBQ3JDLFlBQW9CLFlBQTRCO1lBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUFHLENBQUM7Ozs7UUFFcEQsZUFBZTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDMUQsQ0FBQzs7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxXQUFXLEVBQUUsb0NBQW9DO29CQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDakQ7Ozs7Z0JBVE8sY0FBYzs7MkhBVVQsMEJBQTBCO3NGQUExQiwwQkFBMEI7WUNYdkMseUJBQUc7WUFBQSxxRUFBbUQ7WUFBQSxpQkFBSTtZQUUxRCxpQ0FBc0Q7WUFBNUIsdUdBQVMscUJBQWlCLElBQUM7WUFBQyx5QkFBUztZQUFBLGlCQUFTOztxQ0RGeEU7S0FpQkM7U0FOWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7Ozs7SUFFYSxrREFBb0M7O0FBT2xEO0lBQUEsTUFJYSwrQkFBK0I7Ozs7UUFDMUMsWUFBb0IsZUFBbUU7WUFBbkUsb0JBQWUsR0FBZixlQUFlLENBQW9EO1FBQUcsQ0FBQzs7Ozs7UUFFM0YsUUFBUSxDQUFDLEtBQWlCO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7OztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsV0FBVyxFQUFFLDBDQUEwQztpQkFDeEQ7Ozs7Z0JBckJ1QixpQkFBaUI7O3FJQXNCNUIsK0JBQStCOzJGQUEvQiwrQkFBK0I7WUV2QjVDLG9DQUNFO1lBQUEsNEJBQ0U7WUFEK0MsNkdBQVMsb0JBQWdCLElBQUM7WUFDekUsK0JBQWU7WUFBQSwyQkFBVztZQUFBLGlCQUFPO1lBQ2pDLCtCQUFlO1lBQUEsNkJBQWE7WUFBQSxpQkFBTztZQUNyQyxpQkFBSTtZQUVKLDRCQUNFO1lBRCtDLDZHQUFTLG9CQUFnQixJQUFDO1lBQ3pFLCtCQUFlO1lBQUEsMkJBQVc7WUFBQSxpQkFBTztZQUNqQywrQkFBZTtZQUFBLG9DQUFtQjtZQUFBLGlCQUFPO1lBQzNDLGlCQUFJO1lBRUosNkJBQ0U7WUFEK0MsOEdBQVMsb0JBQWdCLElBQUM7WUFDekUsZ0NBQWU7WUFBQSw0QkFBVztZQUFBLGlCQUFPO1lBQ2pDLGdDQUFlO1lBQUEsd0NBQXVCO1lBQUEsaUJBQU87WUFDL0MsaUJBQUk7WUFFSiw2QkFDRTtZQURtRCw4R0FBUyxvQkFBZ0IsSUFBQztZQUM3RSxnQ0FBZTtZQUFBLGdDQUFlO1lBQUEsaUJBQU87WUFDckMsZ0NBQWU7WUFBQSx1Q0FBc0I7WUFBQSxpQkFBTztZQUM5QyxpQkFBSTtZQUNOLGlCQUFlOzswQ0ZwQmY7S0E4QkM7U0FQWSwrQkFBK0I7a0RBQS9CLCtCQUErQjtjQUozQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLDBDQUEwQzthQUN4RDs7Ozs7OztJQUVhLDBEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG4vKipcbiAqIEB0aXRsZSBCb3R0b20gU2hlZXQgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7fVxuXG4gIG9wZW5Cb3R0b21TaGVldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0Pikge31cblxuICBvcGVuTGluayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iLCI8cD5Zb3UgaGF2ZSByZWNlaXZlZCBhIGZpbGUgY2FsbGVkIFwiY2F0LXBpY3R1cmUuanBlZ1wiLjwvcD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkJvdHRvbVNoZWV0KClcIj5PcGVuIGZpbGU8L2J1dHRvbj5cbiIsIjxtYXQtbmF2LWxpc3Q+XG4gIDxhIGhyZWY9XCJodHRwczovL2tlZXAuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIEtlZXA8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+QWRkIHRvIGEgbm90ZTwvc3Bhbj5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIERvY3M8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+RW1iZWQgaW4gYSBkb2N1bWVudDwvc3Bhbj5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0LWxpbmU+R29vZ2xlIFBsdXM8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+U2hhcmUgd2l0aCB5b3VyIGZyaWVuZHM8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9oYW5nb3V0cy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXQtbGluZT5Hb29nbGUgSGFuZ291dHM8L3NwYW4+XG4gICAgPHNwYW4gbWF0LWxpbmU+U2hvdyB0byB5b3VyIGNvd29ya2Vyczwvc3Bhbj5cbiAgPC9hPlxuPC9tYXQtbmF2LWxpc3Q+XG4iXX0=