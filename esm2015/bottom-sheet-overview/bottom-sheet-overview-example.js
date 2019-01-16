/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
/**
 * \@title Bottom Sheet Overview
 */
export class BottomSheetOverviewExample {
    /**
     * @param {?} bottomSheet
     */
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    /**
     * @return {?}
     */
    openBottomSheet() {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}
BottomSheetOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example',
                template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
BottomSheetOverviewExample.ctorParameters = () => [
    { type: MatBottomSheet }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheetOverviewExample.prototype.bottomSheet;
}
export class BottomSheetOverviewExampleSheet {
    /**
     * @param {?} bottomSheetRef
     */
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    openLink(event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"
            }] }
];
/** @nocollapse */
BottomSheetOverviewExampleSheet.ctorParameters = () => [
    { type: MatBottomSheetRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheetOverviewExampleSheet.prototype.bottomSheetRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVVwRSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBQ3JDLFlBQW9CLFdBQTJCO1FBQTNCLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtJQUFHLENBQUM7Ozs7SUFFbkQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLHdKQUFpRDs7YUFFbEQ7Ozs7WUFUTyxjQUFjOzs7Ozs7O0lBV1IsaURBQW1DOztBQVdqRCxNQUFNLE9BQU8sK0JBQStCOzs7O0lBQzFDLFlBQW9CLGNBQWtFO1FBQWxFLG1CQUFjLEdBQWQsY0FBYyxDQUFvRDtJQUFHLENBQUM7Ozs7O0lBRTFGLFFBQVEsQ0FBQyxLQUFpQjtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0Msb3dCQUF1RDthQUN4RDs7OztZQXJCdUIsaUJBQWlCOzs7Ozs7O0lBdUIzQix5REFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldFJlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vKipcbiAqIEB0aXRsZSBCb3R0b20gU2hlZXQgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHt9XG5cbiAgb3BlbkJvdHRvbVNoZWV0KCk6IHZvaWQge1xuICAgIHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUtc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0T3ZlcnZpZXdFeGFtcGxlU2hlZXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0Pikge31cblxuICBvcGVuTGluayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiJdfQ==