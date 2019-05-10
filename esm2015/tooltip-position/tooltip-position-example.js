/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * \@title Tooltip with a custom position
 */
export class TooltipPositionExample {
    constructor() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-position-example',
                template: "<mat-form-field class=\"example-user-input\">\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n",
                styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TooltipPositionExample.prototype.positionOptions;
    /** @type {?} */
    TooltipPositionExample.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3Rvb2x0aXAtcG9zaXRpb24vdG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVczQyxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsb0JBQWUsR0FBc0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVGLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLG9oQkFBNEM7O2FBRTdDOzs7O0lBRUMsaURBQTRGOztJQUM1RiwwQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1Rvb2x0aXBQb3NpdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIGN1c3RvbSBwb3NpdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcFBvc2l0aW9uRXhhbXBsZSB7XG4gIHBvc2l0aW9uT3B0aW9uczogVG9vbHRpcFBvc2l0aW9uW10gPSBbJ2FmdGVyJywgJ2JlZm9yZScsICdhYm92ZScsICdiZWxvdycsICdsZWZ0JywgJ3JpZ2h0J107XG4gIHBvc2l0aW9uID0gbmV3IEZvcm1Db250cm9sKHRoaXMucG9zaXRpb25PcHRpb25zWzBdKTtcbn1cbiJdfQ==