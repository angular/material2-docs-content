import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/cdk/text-field";
var _c0 = ["autosize"];
var _c1 = ["fontSize", ""];
var _c2 = ["autosize", "cdkTextareaAutosize"];
/** @title Auto-resizing textarea */
var TextFieldAutosizeTextareaExample = /** @class */ (function () {
    function TextFieldAutosizeTextareaExample(_ngZone) {
        this._ngZone = _ngZone;
    }
    TextFieldAutosizeTextareaExample.prototype.triggerResize = function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    TextFieldAutosizeTextareaExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autosize-textarea-example',
                    templateUrl: './text-field-autosize-textarea-example.html',
                    styleUrls: ['./text-field-autosize-textarea-example.css'],
                },] },
    ];
    /** @nocollapse */
    TextFieldAutosizeTextareaExample.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    TextFieldAutosizeTextareaExample.propDecorators = {
        autosize: [{ type: ViewChild, args: ['autosize',] }]
    };
    TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(i0.ɵɵdirectiveInject(i0.NgZone)); };
    TextFieldAutosizeTextareaExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) { if (rf & 1) {
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
            var _r6 = i0.ɵɵreference(4);
            i0.ɵɵadvance(17);
            i0.ɵɵstyleProp("font-size", _r6.value);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.MatInput, i5.CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return TextFieldAutosizeTextareaExample;
}());
export { TextFieldAutosizeTextareaExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFFcEMsb0NBQW9DO0FBQ3BDO0lBTUUsMENBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUl2Qyx3REFBYSxHQUFiO1FBQUEsaUJBSUM7UUFIQyxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsV0FBVyxFQUFFLDZDQUE2QztvQkFDMUQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7aUJBQzFEOzs7O2dCQVJrQixNQUFNOzs7MkJBWXRCLFNBQVMsU0FBQyxVQUFVOztvSEFIVixnQ0FBZ0M7eUVBQWhDLGdDQUFnQzs7Ozs7O1lDVjdDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSx5QkFBUztZQUFBLGlCQUFZO1lBQ2hDLDBDQUNFO1lBRGlDLDJJQUFtQixtQkFBZSxJQUFDO1lBQ3BFLHFDQUF5QjtZQUFBLG9CQUFJO1lBQUEsaUJBQWE7WUFDMUMscUNBQXlCO1lBQUEsb0JBQUk7WUFBQSxpQkFBYTtZQUMxQyxxQ0FBeUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFhO1lBQzFDLHNDQUF5QjtZQUFBLHFCQUFJO1lBQUEsaUJBQWE7WUFDMUMsc0NBQXlCO1lBQUEscUJBQUk7WUFBQSxpQkFBYTtZQUMxQyxzQ0FBeUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFhO1lBQzVDLGlCQUFhO1lBQ2YsaUJBQWlCO1lBRWpCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSxrQ0FBaUI7WUFBQSxpQkFBWTtZQUN4QyxvQ0FJNEM7WUFDOUMsaUJBQWlCOzs7WUFQRCxnQkFBaUM7WUFBakMsc0NBQWlDOzsyQ0RaakQ7Q0FvQkMsQUFmRCxJQWVDO1NBVlksZ0NBQWdDO21DQUFoQyxnQ0FBZ0M7Y0FMNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2FBQzFEOztrQkFJRSxTQUFTO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RleHRhcmVhQXV0b3NpemV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmUsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEB0aXRsZSBBdXRvLXJlc2l6aW5nIHRleHRhcmVhICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgQFZpZXdDaGlsZCgnYXV0b3NpemUnKSBhdXRvc2l6ZTogQ2RrVGV4dGFyZWFBdXRvc2l6ZTtcblxuICB0cmlnZ2VyUmVzaXplKCkge1xuICAgIC8vIFdhaXQgZm9yIGNoYW5nZXMgdG8gYmUgYXBwbGllZCwgdGhlbiB0cmlnZ2VyIHRleHRhcmVhIHJlc2l6ZS5cbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYXV0b3NpemUucmVzaXplVG9GaXRDb250ZW50KHRydWUpKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZvbnQgc2l6ZTwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCAjZm9udFNpemUgdmFsdWU9XCIxNnB4XCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJ0cmlnZ2VyUmVzaXplKClcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjEwcHhcIj4xMHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTJweFwiPjEycHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxNHB4XCI+MTRweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE2cHhcIj4xNnB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMThweFwiPjE4cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIyMHB4XCI+MjBweDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIFtzdHlsZS5mb250U2l6ZV09XCJmb250U2l6ZS52YWx1ZVwiPlxuICA8bWF0LWxhYmVsPkF1dG9zaXplIHRleHRhcmVhPC9tYXQtbGFiZWw+XG4gIDx0ZXh0YXJlYSBtYXRJbnB1dFxuICAgICAgICAgICAgY2RrVGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgICAgI2F1dG9zaXplPVwiY2RrVGV4dGFyZWFBdXRvc2l6ZVwiXG4gICAgICAgICAgICBjZGtBdXRvc2l6ZU1pblJvd3M9XCIxXCJcbiAgICAgICAgICAgIGNka0F1dG9zaXplTWF4Um93cz1cIjVcIj48L3RleHRhcmVhPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==