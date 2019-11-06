/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/cdk/text-field";
const _c0 = ["autosize"];
const _c1 = ["fontSize", ""];
const _c2 = ["autosize", "cdkTextareaAutosize"];
/**
 * \@title Auto-resizing textarea
 */
export class TextFieldAutosizeTextareaExample {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
    }
    /**
     * @return {?}
     */
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        () => this.autosize.resizeToFitContent(true)));
    }
}
TextFieldAutosizeTextareaExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autosize-textarea-example',
                templateUrl: './text-field-autosize-textarea-example.html',
                styleUrls: ['./text-field-autosize-textarea-example.css'],
            },] },
];
/** @nocollapse */
TextFieldAutosizeTextareaExample.ctorParameters = () => [
    { type: NgZone }
];
TextFieldAutosizeTextareaExample.propDecorators = {
    autosize: [{ type: ViewChild, args: ['autosize',] }]
};
/** @nocollapse */ TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ TextFieldAutosizeTextareaExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.autosize = _t.first);
    } }, decls: 22, vars: 1, consts: [["value", "16px", 3, "selectionChange"], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Font size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0, _c1);
        i0.ɵɵlistener("selectionChange", function TextFieldAutosizeTextareaExample_Template_mat_select_selectionChange_3_listener($event) { return ctx.triggerResize(); });
        i0.ɵɵelementStart(5, "mat-option", 1);
        i0.ɵɵtext(6, "10px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-option", 2);
        i0.ɵɵtext(8, "12px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-option", 3);
        i0.ɵɵtext(10, "14px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-option", 4);
        i0.ɵɵtext(12, "16px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-option", 5);
        i0.ɵɵtext(14, "18px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-option", 6);
        i0.ɵɵtext(16, "20px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field");
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Autosize textarea");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "textarea", 7, _c2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r6 = i0.ɵɵreference(4);
        i0.ɵɵadvance(17);
        i0.ɵɵstyleProp("font-size", _r6.value);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.MatInput, i5.CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autosize-textarea-example',
                templateUrl: './text-field-autosize-textarea-example.html',
                styleUrls: ['./text-field-autosize-textarea-example.css'],
            }]
    }], function () { return [{ type: i0.NgZone }]; }, { autosize: [{
            type: ViewChild,
            args: ['autosize']
        }] });
if (false) {
    /** @type {?} */
    TextFieldAutosizeTextareaExample.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    TextFieldAutosizeTextareaExample.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBUXBDLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFDM0MsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDOzs7O0lBSXZDLGFBQWE7UUFDWCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QixTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2FBQzFEOzs7O1lBUmtCLE1BQU07Ozt1QkFZdEIsU0FBUyxTQUFDLFVBQVU7O2dIQUhWLGdDQUFnQztxRUFBaEMsZ0NBQWdDOzs7Ozs7UUNWN0Msc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLHlCQUFTO1FBQUEsaUJBQVk7UUFDaEMsMENBQ0U7UUFEaUMsMklBQW1CLG1CQUFlLElBQUM7UUFDcEUscUNBQXlCO1FBQUEsb0JBQUk7UUFBQSxpQkFBYTtRQUMxQyxxQ0FBeUI7UUFBQSxvQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHFDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDMUMsc0NBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUMxQyxzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDNUMsaUJBQWE7UUFDZixpQkFBaUI7UUFFakIsdUNBQ0U7UUFBQSxrQ0FBVztRQUFBLGtDQUFpQjtRQUFBLGlCQUFZO1FBQ3hDLG9DQUk0QztRQUM5QyxpQkFBaUI7OztRQVBELGdCQUFpQztRQUFqQyxzQ0FBaUM7O21DREZwQyxnQ0FBZ0M7Y0FMNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2FBQzFEOztrQkFJRSxTQUFTO21CQUFDLFVBQVU7Ozs7SUFBckIsb0RBQXFEOzs7OztJQUZ6QyxtREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RleHRhcmVhQXV0b3NpemV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmUsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEB0aXRsZSBBdXRvLXJlc2l6aW5nIHRleHRhcmVhICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgQFZpZXdDaGlsZCgnYXV0b3NpemUnKSBhdXRvc2l6ZTogQ2RrVGV4dGFyZWFBdXRvc2l6ZTtcblxuICB0cmlnZ2VyUmVzaXplKCkge1xuICAgIC8vIFdhaXQgZm9yIGNoYW5nZXMgdG8gYmUgYXBwbGllZCwgdGhlbiB0cmlnZ2VyIHRleHRhcmVhIHJlc2l6ZS5cbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYXV0b3NpemUucmVzaXplVG9GaXRDb250ZW50KHRydWUpKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZvbnQgc2l6ZTwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCAjZm9udFNpemUgdmFsdWU9XCIxNnB4XCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJ0cmlnZ2VyUmVzaXplKClcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjEwcHhcIj4xMHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTJweFwiPjEycHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxNHB4XCI+MTRweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE2cHhcIj4xNnB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMThweFwiPjE4cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIyMHB4XCI+MjBweDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIFtzdHlsZS5mb250U2l6ZV09XCJmb250U2l6ZS52YWx1ZVwiPlxuICA8bWF0LWxhYmVsPkF1dG9zaXplIHRleHRhcmVhPC9tYXQtbGFiZWw+XG4gIDx0ZXh0YXJlYSBtYXRJbnB1dFxuICAgICAgICAgICAgY2RrVGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgICAgI2F1dG9zaXplPVwiY2RrVGV4dGFyZWFBdXRvc2l6ZVwiXG4gICAgICAgICAgICBjZGtBdXRvc2l6ZU1pblJvd3M9XCIxXCJcbiAgICAgICAgICAgIGNka0F1dG9zaXplTWF4Um93cz1cIjVcIj48L3RleHRhcmVhPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==