import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
/**
 * @title Select with custom panel styling
 */
var SelectPanelClassExample = /** @class */ (function () {
    function SelectPanelClassExample() {
        this.panelColor = new FormControl('red');
    }
    SelectPanelClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-panel-class-example',
                    templateUrl: 'select-panel-class-example.html',
                    styleUrls: ['select-panel-class-example.css'],
                    // Encapsulation has to be disabled in order for the
                    // component style to apply to the select panel.
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    SelectPanelClassExample.ɵfac = function SelectPanelClassExample_Factory(t) { return new (t || SelectPanelClassExample)(); };
    SelectPanelClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectPanelClassExample, selectors: [["select-panel-class-example"]], decls: 10, vars: 2, consts: [[3, "formControl", "panelClass"], ["value", "red"], ["value", "green"], ["value", "blue"]], template: function SelectPanelClassExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Panel color");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 0);
            i0.ɵɵelementStart(4, "mat-option", 1);
            i0.ɵɵtext(5, "Red");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-option", 2);
            i0.ɵɵtext(7, "Green");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-option", 3);
            i0.ɵɵtext(9, "Blue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate1("panelClass", "example-panel-", ctx.panelColor.value, "");
            i0.ɵɵproperty("formControl", ctx.panelColor);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption], styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"], encapsulation: 2 });
    return SelectPanelClassExample;
}());
export { SelectPanelClassExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectPanelClassExample, [{
        type: Component,
        args: [{
                selector: 'select-panel-class-example',
                templateUrl: 'select-panel-class-example.html',
                styleUrls: ['select-panel-class-example.css'],
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXBhbmVsLWNsYXNzL3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1wYW5lbC1jbGFzcy9zZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFM0M7O0dBRUc7QUFDSDtJQUFBO1FBU0UsZUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLG9EQUFvRDtvQkFDcEQsZ0RBQWdEO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O2tHQUNZLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDZHBDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSwyQkFBVztZQUFBLGlCQUFZO1lBQ2xDLHFDQUVFO1lBQUEscUNBQXdCO1lBQUEsbUJBQUc7WUFBQSxpQkFBYTtZQUN4QyxxQ0FBMEI7WUFBQSxxQkFBSztZQUFBLGlCQUFhO1lBQzVDLHFDQUF5QjtZQUFBLG9CQUFJO1lBQUEsaUJBQWE7WUFDNUMsaUJBQWE7WUFDZixpQkFBaUI7O1lBTEgsZUFBK0M7WUFBL0MsbUZBQStDO1lBRC9DLDRDQUEwQjs7a0NERnhDO0NBZ0JDLEFBVkQsSUFVQztTQUZZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBUm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0Msb0RBQW9EO2dCQUNwRCxnREFBZ0Q7Z0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU2VsZWN0IHdpdGggY3VzdG9tIHBhbmVsIHN0eWxpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuY3NzJ10sXG4gIC8vIEVuY2Fwc3VsYXRpb24gaGFzIHRvIGJlIGRpc2FibGVkIGluIG9yZGVyIGZvciB0aGVcbiAgLy8gY29tcG9uZW50IHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBzZWxlY3QgcGFuZWwuXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFBhbmVsQ2xhc3NFeGFtcGxlIHtcbiAgcGFuZWxDb2xvciA9IG5ldyBGb3JtQ29udHJvbCgncmVkJyk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+UGFuZWwgY29sb3I8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInBhbmVsQ29sb3JcIlxuICAgICAgICAgICAgICBwYW5lbENsYXNzPVwiZXhhbXBsZS1wYW5lbC17e3BhbmVsQ29sb3IudmFsdWV9fVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmVkXCI+UmVkPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZ3JlZW5cIj5HcmVlbjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImJsdWVcIj5CbHVlPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19