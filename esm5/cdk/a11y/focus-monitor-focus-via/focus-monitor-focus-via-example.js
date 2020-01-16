import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
var _c0 = ["monitored"];
/** @title Focusing with a specific FocusOrigin */
var FocusMonitorFocusViaExample = /** @class */ (function () {
    function FocusMonitorFocusViaExample(focusMonitor, _cdr, _ngZone) {
        this.focusMonitor = focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.origin = this.formatOrigin(null);
    }
    FocusMonitorFocusViaExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe(function (origin) { return _this._ngZone.run(function () {
            _this.origin = _this.formatOrigin(origin);
            _this._cdr.markForCheck();
        }); });
    };
    FocusMonitorFocusViaExample.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    };
    FocusMonitorFocusViaExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    FocusMonitorFocusViaExample.ɵfac = function FocusMonitorFocusViaExample_Factory(t) { return new (t || FocusMonitorFocusViaExample)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    FocusMonitorFocusViaExample.ɵcmp = i0.ɵɵdefineComponent({ type: FocusMonitorFocusViaExample, selectors: [["focus-monitor-focus-via-example"]], viewQuery: function FocusMonitorFocusViaExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monitoredEl = _t.first);
        } }, decls: 24, vars: 1, consts: [[1, "example-focus-monitor"], ["monitored", ""], ["unmonitored", ""], ["value", "mouse"], ["simulatedOrigin", ""], ["value", "keyboard"], ["value", "touch"], ["value", "program"], [3, "click"]], template: function FocusMonitorFocusViaExample_Template(rf, ctx) { if (rf & 1) {
            var _r3 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", null, 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", null, 2);
            i0.ɵɵtext(6, "2. Not Monitored");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Simulated focus origin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-select", 3, 4);
            i0.ɵɵelementStart(12, "mat-option", 3);
            i0.ɵɵtext(13, "Mouse");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-option", 5);
            i0.ɵɵtext(15, "Keyboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-option", 6);
            i0.ɵɵtext(17, "Touch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-option", 7);
            i0.ɵɵtext(19, "Programmatic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 8);
            i0.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_20_listener($event) { i0.ɵɵrestoreView(_r3); var _r0 = i0.ɵɵreference(2); var _r2 = i0.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r0, _r2.value); });
            i0.ɵɵtext(21, " Focus button #1\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 8);
            i0.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r3); var _r1 = i0.ɵɵreference(5); var _r2 = i0.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r1, _r2.value); });
            i0.ɵɵtext(23, " Focus button #2\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("1. Focus Monitored Element (", ctx.origin, ")");
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatSelect, i4.MatOption], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return FocusMonitorFocusViaExample;
}());
export { FocusMonitorFocusViaExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FocusMonitorFocusViaExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-focus-via-example',
                templateUrl: 'focus-monitor-focus-via-example.html',
                styleUrls: ['focus-monitor-focus-via-example.css']
            }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { monitoredEl: [{
            type: ViewChild,
            args: ['monitored']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhL2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBYyxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXZCLGtEQUFrRDtBQUNsRDtJQVVFLHFDQUFtQixZQUEwQixFQUN6QixJQUF1QixFQUN2QixPQUFlO1FBRmhCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFKbkMsV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJSyxDQUFDO0lBRXZDLHFEQUFlLEdBQWY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdEMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDcEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEVBSG1CLENBR25CLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxrREFBWSxHQUFaLFVBQWEsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDOzBHQXZCVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7Ozs7OztZQ2pCeEMsOEJBQ0U7WUFBQSx1Q0FBbUI7WUFBQSxZQUF1QztZQUFBLGlCQUFTO1lBQ25FLHVDQUFxQjtZQUFBLGdDQUFnQjtZQUFBLGlCQUFTO1lBQ2hELGlCQUFNO1lBRU4sc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLHNDQUFzQjtZQUFBLGlCQUFZO1lBQzdDLHlDQUNFO1lBQUEsc0NBQTBCO1lBQUEsc0JBQUs7WUFBQSxpQkFBYTtZQUM1QyxzQ0FBNkI7WUFBQSx5QkFBUTtZQUFBLGlCQUFhO1lBQ2xELHNDQUEwQjtZQUFBLHNCQUFLO1lBQUEsaUJBQWE7WUFDNUMsc0NBQTRCO1lBQUEsNkJBQVk7WUFBQSxpQkFBYTtZQUN2RCxpQkFBYTtZQUNmLGlCQUFpQjtZQUVqQixrQ0FDRTtZQURNLGlNQUFTLHlDQUF1RCxJQUFDO1lBQ3ZFLG1DQUNGO1lBQUEsaUJBQVM7WUFDVCxrQ0FDRTtZQURNLGlNQUFTLHlDQUF5RCxJQUFDO1lBQ3pFLG1DQUNGO1lBQUEsaUJBQVM7O1lBbkJZLGVBQXVDO1lBQXZDLHNFQUF1Qzs7c0NERDVEO0NBeUNDLEFBN0JELElBNkJDO1NBeEJZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDs7a0JBRUUsU0FBUzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3IsIEZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEZvY3VzaW5nIHdpdGggYSBzcGVjaWZpYyBGb2N1c09yaWdpbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbW9uaXRvcmVkJykgbW9uaXRvcmVkRWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIG9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5tb25pdG9yZWRFbClcbiAgICAgICAgLnN1YnNjcmliZShvcmlnaW4gPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihvcmlnaW4pO1xuICAgICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5tb25pdG9yZWRFbCk7XG4gIH1cblxuICBmb3JtYXRPcmlnaW4ob3JpZ2luOiBGb2N1c09yaWdpbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9yaWdpbiA/IG9yaWdpbiArICcgZm9jdXNlZCcgOiAnYmx1cnJlZCc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cbiAgPGJ1dHRvbiAjbW9uaXRvcmVkPjEuIEZvY3VzIE1vbml0b3JlZCBFbGVtZW50ICh7e29yaWdpbn19KTwvYnV0dG9uPlxuICA8YnV0dG9uICN1bm1vbml0b3JlZD4yLiBOb3QgTW9uaXRvcmVkPC9idXR0b24+XG48L2Rpdj5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNpbXVsYXRlZCBmb2N1cyBvcmlnaW48L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgI3NpbXVsYXRlZE9yaWdpbiB2YWx1ZT1cIm1vdXNlXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJtb3VzZVwiPk1vdXNlPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwia2V5Ym9hcmRcIj5LZXlib2FyZDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRvdWNoXCI+VG91Y2g8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwcm9ncmFtXCI+UHJvZ3JhbW1hdGljPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIChjbGljayk9XCJmb2N1c01vbml0b3IuZm9jdXNWaWEobW9uaXRvcmVkLCBzaW11bGF0ZWRPcmlnaW4udmFsdWUpXCI+XG4gIEZvY3VzIGJ1dHRvbiAjMVxuPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJmb2N1c01vbml0b3IuZm9jdXNWaWEodW5tb25pdG9yZWQsIHNpbXVsYXRlZE9yaWdpbi52YWx1ZSlcIj5cbiAgRm9jdXMgYnV0dG9uICMyXG48L2J1dHRvbj5cbiJdfQ==