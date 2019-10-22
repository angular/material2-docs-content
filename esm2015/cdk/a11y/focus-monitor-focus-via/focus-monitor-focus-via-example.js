/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
const _c0 = ["monitored"];
const _c1 = ["monitored", ""];
const _c2 = ["unmonitored", ""];
const _c3 = ["simulatedOrigin", ""];
/**
 * \@title Focusing with a specific FocusOrigin
 */
export class FocusMonitorFocusViaExample {
    /**
     * @param {?} focusMonitor
     * @param {?} _cdr
     * @param {?} _ngZone
     */
    constructor(focusMonitor, _cdr, _ngZone) {
        this.focusMonitor = focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.origin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this._ngZone.run((/**
         * @return {?}
         */
        () => {
            this.origin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorFocusViaExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-focus-via-example',
                templateUrl: 'focus-monitor-focus-via-example.html',
                styleUrls: ['focus-monitor-focus-via-example.css']
            },] },
];
/** @nocollapse */
FocusMonitorFocusViaExample.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
FocusMonitorFocusViaExample.propDecorators = {
    monitoredEl: [{ type: ViewChild, args: ['monitored', { static: false },] }]
};
/** @nocollapse */ FocusMonitorFocusViaExample.ngFactoryDef = function FocusMonitorFocusViaExample_Factory(t) { return new (t || FocusMonitorFocusViaExample)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ FocusMonitorFocusViaExample.ngComponentDef = i0.ɵɵdefineComponent({ type: FocusMonitorFocusViaExample, selectors: [["focus-monitor-focus-via-example"]], viewQuery: function FocusMonitorFocusViaExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.monitoredEl = _t.first);
    } }, decls: 24, vars: 1, consts: [[1, "example-focus-monitor"], ["value", "mouse"], ["value", "keyboard"], ["value", "touch"], ["value", "program"], [3, "click"]], template: function FocusMonitorFocusViaExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", null, _c1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", null, _c2);
        i0.ɵɵtext(6, "2. Not Monitored");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field");
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Simulated focus origin");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-select", 1, _c3);
        i0.ɵɵelementStart(12, "mat-option", 1);
        i0.ɵɵtext(13, "Mouse");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-option", 2);
        i0.ɵɵtext(15, "Keyboard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-option", 3);
        i0.ɵɵtext(17, "Touch");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-option", 4);
        i0.ɵɵtext(19, "Programmatic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "button", 5);
        i0.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_20_listener($event) { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(2); const _r2 = i0.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r0, _r2.value); });
        i0.ɵɵtext(21, " Focus button #1\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 5);
        i0.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(5); const _r2 = i0.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r1, _r2.value); });
        i0.ɵɵtext(23, " Focus button #2\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("1. Focus Monitored Element (", ctx.origin, ")");
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatSelect, i4.MatOption], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(FocusMonitorFocusViaExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-focus-via-example',
                templateUrl: 'focus-monitor-focus-via-example.html',
                styleUrls: ['focus-monitor-focus-via-example.css']
            }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { monitoredEl: [{
            type: ViewChild,
            args: ['monitored', { static: false }]
        }] });
if (false) {
    /** @type {?} */
    FocusMonitorFocusViaExample.prototype.monitoredEl;
    /** @type {?} */
    FocusMonitorFocusViaExample.prototype.origin;
    /** @type {?} */
    FocusMonitorFocusViaExample.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorFocusViaExample.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorFocusViaExample.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhL2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBYyxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBUXZCLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQUt0QyxZQUFtQixZQUEwQixFQUN6QixJQUF1QixFQUN2QixPQUFlO1FBRmhCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFKbkMsV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJSyxDQUFDOzs7O0lBRXZDLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3RDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFtQjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQ7Ozs7WUFoQk8sWUFBWTtZQUdsQixpQkFBaUI7WUFHakIsTUFBTTs7OzBCQVlMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzs4R0FENUIsMkJBQTJCOzBFQUEzQiwyQkFBMkI7Ozs7Ozs7UUNqQnhDLDhCQUNFO1FBQUEseUNBQW1CO1FBQUEsWUFBdUM7UUFBQSxpQkFBUztRQUNuRSx5Q0FBcUI7UUFBQSxnQ0FBZ0I7UUFBQSxpQkFBUztRQUNoRCxpQkFBTTtRQUVOLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSxzQ0FBc0I7UUFBQSxpQkFBWTtRQUM3QywyQ0FDRTtRQUFBLHNDQUEwQjtRQUFBLHNCQUFLO1FBQUEsaUJBQWE7UUFDNUMsc0NBQTZCO1FBQUEseUJBQVE7UUFBQSxpQkFBYTtRQUNsRCxzQ0FBMEI7UUFBQSxzQkFBSztRQUFBLGlCQUFhO1FBQzVDLHNDQUE0QjtRQUFBLDZCQUFZO1FBQUEsaUJBQWE7UUFDdkQsaUJBQWE7UUFDZixpQkFBaUI7UUFFakIsa0NBQ0U7UUFETSxxTUFBUyx5Q0FBdUQsSUFBQztRQUN2RSxtQ0FDRjtRQUFBLGlCQUFTO1FBQ1Qsa0NBQ0U7UUFETSxxTUFBUyx5Q0FBeUQsSUFBQztRQUN6RSxtQ0FDRjtRQUFBLGlCQUFTOztRQW5CWSxlQUF1QztRQUF2QyxzRUFBdUM7O21DRGdCL0MsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDs7a0JBRUUsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzs7O0lBQXZDLGtEQUE4RTs7SUFFOUUsNkNBQWlDOztJQUVyQixtREFBaUM7Ozs7O0lBQ2pDLDJDQUErQjs7Ozs7SUFDL0IsOENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3IsIEZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEZvY3VzaW5nIHdpdGggYSBzcGVjaWZpYyBGb2N1c09yaWdpbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbW9uaXRvcmVkJywge3N0YXRpYzogZmFsc2V9KSBtb25pdG9yZWRFbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgb3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLm1vbml0b3JlZEVsKVxuICAgICAgICAuc3Vic2NyaWJlKG9yaWdpbiA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLm1vbml0b3JlZEVsKTtcbiAgfVxuXG4gIGZvcm1hdE9yaWdpbihvcmlnaW46IEZvY3VzT3JpZ2luKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3JpZ2luID8gb3JpZ2luICsgJyBmb2N1c2VkJyA6ICdibHVycmVkJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8YnV0dG9uICNtb25pdG9yZWQ+MS4gRm9jdXMgTW9uaXRvcmVkIEVsZW1lbnQgKHt7b3JpZ2lufX0pPC9idXR0b24+XG4gIDxidXR0b24gI3VubW9uaXRvcmVkPjIuIE5vdCBNb25pdG9yZWQ8L2J1dHRvbj5cbjwvZGl2PlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2ltdWxhdGVkIGZvY3VzIG9yaWdpbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCAjc2ltdWxhdGVkT3JpZ2luIHZhbHVlPVwibW91c2VcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm1vdXNlXCI+TW91c2U8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJrZXlib2FyZFwiPktleWJvYXJkPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidG91Y2hcIj5Ub3VjaDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInByb2dyYW1cIj5Qcm9ncmFtbWF0aWM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxidXR0b24gKGNsaWNrKT1cImZvY3VzTW9uaXRvci5mb2N1c1ZpYShtb25pdG9yZWQsIHNpbXVsYXRlZE9yaWdpbi52YWx1ZSlcIj5cbiAgRm9jdXMgYnV0dG9uICMxXG48L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cImZvY3VzTW9uaXRvci5mb2N1c1ZpYSh1bm1vbml0b3JlZCwgc2ltdWxhdGVkT3JpZ2luLnZhbHVlKVwiPlxuICBGb2N1cyBidXR0b24gIzJcbjwvYnV0dG9uPlxuIl19