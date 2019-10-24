/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
const _c0 = ["element"];
const _c1 = ["subtree"];
const _c2 = ["element", ""];
const _c3 = ["subtree", ""];
/**
 * \@title Monitoring focus with FocusMonitor
 */
export class FocusMonitorOverviewExample {
    /**
     * @param {?} _focusMonitor
     * @param {?} _cdr
     * @param {?} _ngZone
     */
    constructor(_focusMonitor, _cdr, _ngZone) {
        this._focusMonitor = _focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.element)
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this._ngZone.run((/**
         * @return {?}
         */
        () => {
            this.elementOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }))));
        this._focusMonitor.monitor(this.subtree, true)
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this._ngZone.run((/**
         * @return {?}
         */
        () => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.element);
        this._focusMonitor.stopMonitoring(this.subtree);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-overview-example',
                templateUrl: 'focus-monitor-overview-example.html',
                styleUrls: ['focus-monitor-overview-example.css']
            },] },
];
/** @nocollapse */
FocusMonitorOverviewExample.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
FocusMonitorOverviewExample.propDecorators = {
    element: [{ type: ViewChild, args: ['element',] }],
    subtree: [{ type: ViewChild, args: ['subtree',] }]
};
/** @nocollapse */ FocusMonitorOverviewExample.ɵfac = function FocusMonitorOverviewExample_Factory(t) { return new (t || FocusMonitorOverviewExample)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ FocusMonitorOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FocusMonitorOverviewExample, selectors: [["focus-monitor-overview-example"]], viewQuery: function FocusMonitorOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.element = _t.first);
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.subtree = _t.first);
    } }, decls: 13, vars: 2, consts: [[1, "example-focus-monitor"]], template: function FocusMonitorOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", null, _c2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 0);
        i0.ɵɵelementStart(5, "div", null, _c3);
        i0.ɵɵelementStart(7, "p");
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button");
        i0.ɵɵtext(10, "Child Button 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button");
        i0.ɵɵtext(12, "Child Button 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Focus Monitored Element (", ctx.elementOrigin, ")");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("Focus Monitored Subtree (", ctx.subtreeOrigin, ")");
    } }, styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(FocusMonitorOverviewExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-overview-example',
                templateUrl: 'focus-monitor-overview-example.html',
                styleUrls: ['focus-monitor-overview-example.css']
            }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { element: [{
            type: ViewChild,
            args: ['element']
        }], subtree: [{
            type: ViewChild,
            args: ['subtree']
        }] });
if (false) {
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.element;
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.subtree;
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.elementOrigin;
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.subtreeOrigin;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVF2QixNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7SUFPdEMsWUFBb0IsYUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBZTtRQUZmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFMbkMsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUlGLENBQUM7Ozs7SUFFdkMsZUFBZTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ3pDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOzs7O1lBaEJPLFlBQVk7WUFHbEIsaUJBQWlCO1lBR2pCLE1BQU07OztzQkFZTCxTQUFTLFNBQUMsU0FBUztzQkFDbkIsU0FBUyxTQUFDLFNBQVM7O3NHQUZULDJCQUEyQjtnRUFBM0IsMkJBQTJCOzs7Ozs7OztRQ2pCeEMsOEJBQ0U7UUFBQSx5Q0FBaUI7UUFBQSxZQUEyQztRQUFBLGlCQUFTO1FBQ3ZFLGlCQUFNO1FBRU4sOEJBQ0U7UUFBQSxzQ0FDRTtRQUFBLHlCQUFHO1FBQUEsWUFBMkM7UUFBQSxpQkFBSTtRQUNsRCw4QkFBUTtRQUFBLCtCQUFjO1FBQUEsaUJBQVM7UUFDL0IsK0JBQVE7UUFBQSwrQkFBYztRQUFBLGlCQUFTO1FBQ2pDLGlCQUFNO1FBQ1IsaUJBQU07O1FBVGEsZUFBMkM7UUFBM0MsMEVBQTJDO1FBS3ZELGVBQTJDO1FBQTNDLDBFQUEyQzs7bUNEV3JDLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7O2tCQUVFLFNBQVM7bUJBQUMsU0FBUzs7a0JBQ25CLFNBQVM7bUJBQUMsU0FBUzs7OztJQURwQiw4Q0FBdUQ7O0lBQ3ZELDhDQUF1RDs7SUFFdkQsb0RBQXdDOztJQUN4QyxvREFBd0M7Ozs7O0lBRTVCLG9EQUFtQzs7Ozs7SUFDbkMsMkNBQStCOzs7OztJQUMvQiw4Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBmb2N1cyB3aXRoIEZvY3VzTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdzdWJ0cmVlJykgc3VidHJlZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuICBzdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnQpXG4gICAgICAgIC5zdWJzY3JpYmUob3JpZ2luID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KSk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5zdWJ0cmVlLCB0cnVlKVxuICAgICAgICAuc3Vic2NyaWJlKG9yaWdpbiA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN1YnRyZWVPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihvcmlnaW4pO1xuICAgICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuc3VidHJlZSk7XG4gIH1cblxuICBmb3JtYXRPcmlnaW4ob3JpZ2luOiBGb2N1c09yaWdpbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9yaWdpbiA/IG9yaWdpbiArICcgZm9jdXNlZCcgOiAnYmx1cnJlZCc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cbiAgPGJ1dHRvbiAjZWxlbWVudD5Gb2N1cyBNb25pdG9yZWQgRWxlbWVudCAoe3tlbGVtZW50T3JpZ2lufX0pPC9idXR0b24+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8ZGl2ICNzdWJ0cmVlPlxuICAgIDxwPkZvY3VzIE1vbml0b3JlZCBTdWJ0cmVlICh7e3N1YnRyZWVPcmlnaW59fSk8L3A+XG4gICAgPGJ1dHRvbj5DaGlsZCBCdXR0b24gMTwvYnV0dG9uPlxuICAgIDxidXR0b24+Q2hpbGQgQnV0dG9uIDI8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==