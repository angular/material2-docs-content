import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/text-field";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
const _c0 = ["first"];
const _c1 = ["last"];
function TextFieldAutofillMonitorExample_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
function TextFieldAutofillMonitorExample_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
/** @title Monitoring autofill state with AutofillMonitor */
export class TextFieldAutofillMonitorExample {
    constructor(_autofill) {
        this._autofill = _autofill;
    }
    ngAfterViewInit() {
        this._autofill.monitor(this.firstName)
            .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
        this._autofill.monitor(this.lastName)
            .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
    }
    ngOnDestroy() {
        this._autofill.stopMonitoring(this.firstName);
        this._autofill.stopMonitoring(this.lastName);
    }
}
TextFieldAutofillMonitorExample.ɵfac = function TextFieldAutofillMonitorExample_Factory(t) { return new (t || TextFieldAutofillMonitorExample)(i0.ɵɵdirectiveInject(i1.AutofillMonitor)); };
TextFieldAutofillMonitorExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutofillMonitorExample, selectors: [["text-field-autofill-monitor-example"]], viewQuery: function TextFieldAutofillMonitorExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, ElementRef);
        i0.ɵɵviewQuery(_c1, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.firstName = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lastName = _t.first);
    } }, decls: 15, vars: 2, consts: [[3, "submit"], ["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("submit", function TextFieldAutofillMonitorExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 1, 2);
        i0.ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field");
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Last name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 1, 4);
        i0.ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 5);
        i0.ɵɵtext(14, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NgIf, i5.MatButton, i2.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-monitor-example',
                templateUrl: './text-field-autofill-monitor-example.html',
                styleUrls: ['./text-field-autofill-monitor-example.css'],
            }]
    }], function () { return [{ type: i1.AutofillMonitor }]; }, { firstName: [{
            type: ViewChild,
            args: ['first', { read: ElementRef }]
        }], lastName: [{
            type: ViewChild,
            args: ['last', { read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFhLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ0dyRixnQ0FBc0M7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7SUFLNUQsZ0NBQXFDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7QUROL0QsNERBQTREO0FBTTVELE1BQU0sT0FBTywrQkFBK0I7SUFNMUMsWUFBb0IsU0FBMEI7UUFBMUIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFBRyxDQUFDO0lBRWxELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs4R0FsQlUsK0JBQStCO29FQUEvQiwrQkFBK0I7K0JBQ2YsVUFBVTsrQkFDWCxVQUFVOzs7Ozs7UUNYdEMsK0JBQ0U7UUFESSxrSEFBVSx1QkFBdUIsSUFBQztRQUN0QyxzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsMEJBQVU7UUFBQSxpQkFBWTtRQUNqQyw4QkFDQTtRQUFBLDBGQUE0RDtRQUM5RCxpQkFBaUI7UUFDakIsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLHlCQUFTO1FBQUEsaUJBQVk7UUFDaEMsK0JBQ0E7UUFBQSw0RkFBMkQ7UUFDN0QsaUJBQWlCO1FBQ2pCLGtDQUEwQjtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDM0MsaUJBQU87O1FBUlEsZUFBeUI7UUFBekIsOENBQXlCO1FBS3pCLGVBQXdCO1FBQXhCLDZDQUF3Qjs7dUZEQTFCLCtCQUErQjtjQUwzQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7a0VBRXlDLFNBQVM7a0JBQWhELFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUNDLFFBQVE7a0JBQTlDLFNBQVM7bUJBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0b2ZpbGxNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgd2l0aCBBdXRvZmlsbE1vbml0b3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b2ZpbGxNb25pdG9yRXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpcnN0Jywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBmaXJzdE5hbWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdsYXN0Jywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBsYXN0TmFtZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIGZpcnN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG4gIGxhc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRvZmlsbDogQXV0b2ZpbGxNb25pdG9yKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9hdXRvZmlsbC5tb25pdG9yKHRoaXMuZmlyc3ROYW1lKVxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5maXJzdE5hbWVBdXRvZmlsbGVkID0gZS5pc0F1dG9maWxsZWQpO1xuICAgIHRoaXMuX2F1dG9maWxsLm1vbml0b3IodGhpcy5sYXN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMubGFzdE5hbWVBdXRvZmlsbGVkID0gZS5pc0F1dG9maWxsZWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fYXV0b2ZpbGwuc3RvcE1vbml0b3JpbmcodGhpcy5maXJzdE5hbWUpO1xuICAgIHRoaXMuX2F1dG9maWxsLnN0b3BNb25pdG9yaW5nKHRoaXMubGFzdE5hbWUpO1xuICB9XG59XG4iLCI8Zm9ybSAoc3VibWl0KT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgI2ZpcnN0PlxuICAgIDxtYXQtaGludCAqbmdJZj1cImZpcnN0TmFtZUF1dG9maWxsZWRcIj5BdXRvZmlsbGVkITwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkxhc3QgbmFtZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAjbGFzdD5cbiAgICA8bWF0LWhpbnQgKm5nSWY9XCJsYXN0TmFtZUF1dG9maWxsZWRcIj5BdXRvZmlsbGVkITwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+U3VibWl0PC9idXR0b24+XG48L2Zvcm0+XG4iXX0=