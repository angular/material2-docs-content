import * as tslib_1 from "tslib";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
/** @title Auto-resizing textarea */
var TextFieldAutosizeTextareaExample = /** @class */ (function () {
    function TextFieldAutosizeTextareaExample(ngZone) {
        this.ngZone = ngZone;
    }
    TextFieldAutosizeTextareaExample.prototype.triggerResize = function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(take(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    tslib_1.__decorate([
        ViewChild('autosize'),
        tslib_1.__metadata("design:type", CdkTextareaAutosize)
    ], TextFieldAutosizeTextareaExample.prototype, "autosize", void 0);
    TextFieldAutosizeTextareaExample = tslib_1.__decorate([
        Component({
            selector: 'text-field-autosize-textarea-example',
            template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"2\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [NgZone])
    ], TextFieldAutosizeTextareaExample);
    return TextFieldAutosizeTextareaExample;
}());
export { TextFieldAutosizeTextareaExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBDLG9DQUFvQztBQU1wQztJQUNFLDBDQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFJdEMsd0RBQWEsR0FBYjtRQUFBLGlCQUlDO1FBSEMsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0IsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQU5zQjtRQUF0QixTQUFTLENBQUMsVUFBVSxDQUFDOzBDQUFXLG1CQUFtQjtzRUFBQztJQUgxQyxnQ0FBZ0M7UUFMNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNDQUFzQztZQUNoRCxzeEJBQTBEOztTQUUzRCxDQUFDO2lEQUU0QixNQUFNO09BRHZCLGdDQUFnQyxDQVU1QztJQUFELHVDQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUZXh0YXJlYUF1dG9zaXplfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbXBvbmVudCwgTmdab25lLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgQXV0by1yZXNpemluZyB0ZXh0YXJlYSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgQFZpZXdDaGlsZCgnYXV0b3NpemUnKSBhdXRvc2l6ZTogQ2RrVGV4dGFyZWFBdXRvc2l6ZTtcblxuICB0cmlnZ2VyUmVzaXplKCkge1xuICAgIC8vIFdhaXQgZm9yIGNoYW5nZXMgdG8gYmUgYXBwbGllZCwgdGhlbiB0cmlnZ2VyIHRleHRhcmVhIHJlc2l6ZS5cbiAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hdXRvc2l6ZS5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xuICB9XG59XG4iXX0=