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
        autosize: [{ type: ViewChild, args: ['autosize', { static: false },] }]
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
            args: ['autosize', { static: false }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQUVwQyxvQ0FBb0M7QUFDcEM7SUFNRSwwQ0FBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBSXZDLHdEQUFhLEdBQWI7UUFBQSxpQkFJQztRQUhDLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxXQUFXLEVBQUUsNkNBQTZDO29CQUMxRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQztpQkFDMUQ7Ozs7Z0JBUmtCLE1BQU07OzsyQkFZdEIsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O29IQUgzQixnQ0FBZ0M7eUVBQWhDLGdDQUFnQzs7Ozs7O1lDVjdDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSx5QkFBUztZQUFBLGlCQUFZO1lBQ2hDLDBDQUNFO1lBRGlDLDJJQUFtQixtQkFBZSxJQUFDO1lBQ3BFLHFDQUF5QjtZQUFBLG9CQUFJO1lBQUEsaUJBQWE7WUFDMUMscUNBQXlCO1lBQUEsb0JBQUk7WUFBQSxpQkFBYTtZQUMxQyxxQ0FBeUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFhO1lBQzFDLHNDQUF5QjtZQUFBLHFCQUFJO1lBQUEsaUJBQWE7WUFDMUMsc0NBQXlCO1lBQUEscUJBQUk7WUFBQSxpQkFBYTtZQUMxQyxzQ0FBeUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFhO1lBQzVDLGlCQUFhO1lBQ2YsaUJBQWlCO1lBRWpCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSxrQ0FBaUI7WUFBQSxpQkFBWTtZQUN4QyxvQ0FJNEM7WUFDOUMsaUJBQWlCOzs7WUFQRCxnQkFBaUM7WUFBakMsc0NBQWlDOzsyQ0RaakQ7Q0FvQkMsQUFmRCxJQWVDO1NBVlksZ0NBQWdDO21DQUFoQyxnQ0FBZ0M7Y0FMNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2FBQzFEOztrQkFJRSxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RleHRhcmVhQXV0b3NpemV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmUsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEB0aXRsZSBBdXRvLXJlc2l6aW5nIHRleHRhcmVhICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgQFZpZXdDaGlsZCgnYXV0b3NpemUnLCB7c3RhdGljOiBmYWxzZX0pIGF1dG9zaXplOiBDZGtUZXh0YXJlYUF1dG9zaXplO1xuXG4gIHRyaWdnZXJSZXNpemUoKSB7XG4gICAgLy8gV2FpdCBmb3IgY2hhbmdlcyB0byBiZSBhcHBsaWVkLCB0aGVuIHRyaWdnZXIgdGV4dGFyZWEgcmVzaXplLlxuICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hdXRvc2l6ZS5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+Rm9udCBzaXplPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICNmb250U2l6ZSB2YWx1ZT1cIjE2cHhcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cInRyaWdnZXJSZXNpemUoKVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTBweFwiPjEwcHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxMnB4XCI+MTJweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE0cHhcIj4xNHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTZweFwiPjE2cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxOHB4XCI+MThweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjIwcHhcIj4yMHB4PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgW3N0eWxlLmZvbnRTaXplXT1cImZvbnRTaXplLnZhbHVlXCI+XG4gIDxtYXQtbGFiZWw+QXV0b3NpemUgdGV4dGFyZWE8L21hdC1sYWJlbD5cbiAgPHRleHRhcmVhIG1hdElucHV0XG4gICAgICAgICAgICBjZGtUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgICAjYXV0b3NpemU9XCJjZGtUZXh0YXJlYUF1dG9zaXplXCJcbiAgICAgICAgICAgIGNka0F1dG9zaXplTWluUm93cz1cIjFcIlxuICAgICAgICAgICAgY2RrQXV0b3NpemVNYXhSb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19