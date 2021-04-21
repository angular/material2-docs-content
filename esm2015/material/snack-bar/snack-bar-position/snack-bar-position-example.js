import { Component } from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
/**
 * @title Snack-bar with configurable position
 */
export class SnackBarPositionExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    openSnackBar() {
        this._snackBar.open('Cannonball!!', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
SnackBarPositionExample.ɵfac = function SnackBarPositionExample_Factory(t) { return new (t || SnackBarPositionExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 24, vars: 2, consts: [[3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["value", "top"], ["value", "bottom"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Horizontal position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0);
        i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_3_listener($event) { return ctx.horizontalPosition = $event; });
        i0.ɵɵelementStart(4, "mat-option", 1);
        i0.ɵɵtext(5, "Start");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 2);
        i0.ɵɵtext(7, "Center");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 3);
        i0.ɵɵtext(9, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 4);
        i0.ɵɵtext(11, "Left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 5);
        i0.ɵɵtext(13, "Right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field");
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Vertical position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-select", 0);
        i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_17_listener($event) { return ctx.verticalPosition = $event; });
        i0.ɵɵelementStart(18, "mat-option", 6);
        i0.ɵɵtext(19, "Top");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-option", 7);
        i0.ɵɵtext(21, "Bottom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 8);
        i0.ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_22_listener() { return ctx.openSnackBar(); });
        i0.ɵɵtext(23, " Pool party!\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.horizontalPosition);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("value", ctx.verticalPosition);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatSelect, i4.MatOption, i5.MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarPositionExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-position-example',
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1wb3NpdGlvbi9zbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLFdBQVcsR0FHWixNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBRXJDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUFvQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBSDFDLHVCQUFrQixHQUFrQyxPQUFPLENBQUM7UUFDNUQscUJBQWdCLEdBQWdDLFFBQVEsQ0FBQztJQUVaLENBQUM7SUFFOUMsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUU7WUFDNUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhGQVhVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDZnBDLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSxtQ0FBbUI7UUFBQSxpQkFBWTtRQUMxQyxxQ0FDRTtRQURVLDZKQUE4QjtRQUN4QyxxQ0FBMEI7UUFBQSxxQkFBSztRQUFBLGlCQUFhO1FBQzVDLHFDQUEyQjtRQUFBLHNCQUFNO1FBQUEsaUJBQWE7UUFDOUMscUNBQXdCO1FBQUEsbUJBQUc7UUFBQSxpQkFBYTtRQUN4QyxzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUEwQjtRQUFBLHNCQUFLO1FBQUEsaUJBQWE7UUFDOUMsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIsdUNBQ0U7UUFBQSxrQ0FBVztRQUFBLGtDQUFpQjtRQUFBLGlCQUFZO1FBQ3hDLHNDQUNFO1FBRFUsNEpBQTRCO1FBQ3RDLHNDQUF3QjtRQUFBLG9CQUFHO1FBQUEsaUJBQWE7UUFDeEMsc0NBQTJCO1FBQUEsdUJBQU07UUFBQSxpQkFBYTtRQUNoRCxpQkFBYTtRQUNmLGlCQUFpQjtRQUVqQixrQ0FDRTtRQUR5QixxR0FBUyxrQkFBYyxJQUFDO1FBQ2pELCtCQUNGO1FBQUEsaUJBQVM7O1FBbEJLLGVBQThCO1FBQTlCLDhDQUE4QjtRQVU5QixnQkFBNEI7UUFBNUIsNENBQTRCOzt1RkRHN0IsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdFNuYWNrQmFyLFxuICBNYXRTbmFja0Jhckhvcml6b250YWxQb3NpdGlvbixcbiAgTWF0U25hY2tCYXJWZXJ0aWNhbFBvc2l0aW9uLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG4vKipcbiAqIEB0aXRsZSBTbmFjay1iYXIgd2l0aCBjb25maWd1cmFibGUgcG9zaXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyUG9zaXRpb25FeGFtcGxlIHtcbiAgaG9yaXpvbnRhbFBvc2l0aW9uOiBNYXRTbmFja0Jhckhvcml6b250YWxQb3NpdGlvbiA9ICdzdGFydCc7XG4gIHZlcnRpY2FsUG9zaXRpb246IE1hdFNuYWNrQmFyVmVydGljYWxQb3NpdGlvbiA9ICdib3R0b20nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbignQ2Fubm9uYmFsbCEhJywgJ1NwbGFzaCcsIHtcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogdGhpcy5ob3Jpem9udGFsUG9zaXRpb24sXG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiB0aGlzLnZlcnRpY2FsUG9zaXRpb24sXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5Ib3Jpem9udGFsIHBvc2l0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFsodmFsdWUpXT1cImhvcml6b250YWxQb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic3RhcnRcIj5TdGFydDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPkNlbnRlcjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVuZFwiPkVuZDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImxlZnRcIj5MZWZ0PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmlnaHRcIj5SaWdodDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5WZXJ0aWNhbCBwb3NpdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJ2ZXJ0aWNhbFBvc2l0aW9uXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0b3BcIj5Ub3A8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJib3R0b21cIj5Cb3R0b208L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIChjbGljayk9XCJvcGVuU25hY2tCYXIoKVwiIGFyaWEtbGFiZWw9XCJTaG93IGFuIGV4YW1wbGUgc25hY2stYmFyXCI+XG4gIFBvb2wgcGFydHkhXG48L2J1dHRvbj5cbiJdfQ==