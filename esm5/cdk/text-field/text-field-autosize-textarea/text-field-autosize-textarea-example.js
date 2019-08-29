import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
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
                    template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n",
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    TextFieldAutosizeTextareaExample.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    TextFieldAutosizeTextareaExample.propDecorators = {
        autosize: [{ type: ViewChild, args: ['autosize', { static: false },] }]
    };
    return TextFieldAutosizeTextareaExample;
}());
export { TextFieldAutosizeTextareaExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEMsb0NBQW9DO0FBQ3BDO0lBTUUsMENBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUl2Qyx3REFBYSxHQUFiO1FBQUEsaUJBSUM7UUFIQyxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsc3hCQUEwRDs7aUJBRTNEOzs7O2dCQVJrQixNQUFNOzs7MkJBWXRCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQU94Qyx1Q0FBQztDQUFBLEFBZkQsSUFlQztTQVZZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVGV4dGFyZWFBdXRvc2l6ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtDb21wb25lbnQsIE5nWm9uZSwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQHRpdGxlIEF1dG8tcmVzaXppbmcgdGV4dGFyZWEgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b3NpemVUZXh0YXJlYUV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICBAVmlld0NoaWxkKCdhdXRvc2l6ZScsIHtzdGF0aWM6IGZhbHNlfSkgYXV0b3NpemU6IENka1RleHRhcmVhQXV0b3NpemU7XG5cbiAgdHJpZ2dlclJlc2l6ZSgpIHtcbiAgICAvLyBXYWl0IGZvciBjaGFuZ2VzIHRvIGJlIGFwcGxpZWQsIHRoZW4gdHJpZ2dlciB0ZXh0YXJlYSByZXNpemUuXG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmF1dG9zaXplLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSk7XG4gIH1cbn1cbiJdfQ==