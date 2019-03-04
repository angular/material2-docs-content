/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
/**
 * \@title Auto-resizing textarea
 */
export class TextFieldAutosizeTextareaExample {
    /**
     * @param {?} ngZone
     */
    constructor(ngZone) {
        this.ngZone = ngZone;
    }
    /**
     * @return {?}
     */
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
}
TextFieldAutosizeTextareaExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autosize-textarea-example',
                template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"2\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
/** @nocollapse */
TextFieldAutosizeTextareaExample.ctorParameters = () => [
    { type: NgZone }
];
TextFieldAutosizeTextareaExample.propDecorators = {
    autosize: [{ type: ViewChild, args: ['autosize',] }]
};
if (false) {
    /** @type {?} */
    TextFieldAutosizeTextareaExample.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    TextFieldAutosizeTextareaExample.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBUXBDLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFDM0MsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDOzs7O0lBSXRDLGFBQWE7UUFDWCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxzeEJBQTBEOzthQUUzRDs7OztZQVJrQixNQUFNOzs7dUJBWXRCLFNBQVMsU0FBQyxVQUFVOzs7O0lBQXJCLG9EQUFxRDs7Ozs7SUFGekMsa0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUZXh0YXJlYUF1dG9zaXplfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbXBvbmVudCwgTmdab25lLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgQXV0by1yZXNpemluZyB0ZXh0YXJlYSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgQFZpZXdDaGlsZCgnYXV0b3NpemUnKSBhdXRvc2l6ZTogQ2RrVGV4dGFyZWFBdXRvc2l6ZTtcblxuICB0cmlnZ2VyUmVzaXplKCkge1xuICAgIC8vIFdhaXQgZm9yIGNoYW5nZXMgdG8gYmUgYXBwbGllZCwgdGhlbiB0cmlnZ2VyIHRleHRhcmVhIHJlc2l6ZS5cbiAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hdXRvc2l6ZS5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xuICB9XG59XG4iXX0=