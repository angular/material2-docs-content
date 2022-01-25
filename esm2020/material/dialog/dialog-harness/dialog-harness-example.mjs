import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
/**
 * @title Testing with MatDialogHarness
 */
export class DialogHarnessExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(config) {
        return this.dialog.open(this.dialogTemplate, config);
    }
}
DialogHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: DialogHarnessExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-rc.1", type: DialogHarnessExample, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; }, propDecorators: { dialogTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXBFOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFxQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUxQyxJQUFJLENBQUMsTUFBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O3NIQVBVLG9CQUFvQjswR0FBcEIsb0JBQW9CLDhHQUNwQixXQUFXLGdEQ1h4QiwyREFHQTtnR0RPYSxvQkFBb0I7a0JBSmhDLFNBQVM7K0JBQ0Usd0JBQXdCO2dHQUlWLGNBQWM7c0JBQXJDLFNBQVM7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWd9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXREaWFsb2dIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0hhcm5lc3NFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgZGlhbG9nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3Blbihjb25maWc/OiBNYXREaWFsb2dDb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3Blbih0aGlzLmRpYWxvZ1RlbXBsYXRlLCBjb25maWcpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+XG4gIEhlbGxvIGZyb20gdGhlIGRpYWxvZyFcbjwvbmctdGVtcGxhdGU+XG4iXX0=