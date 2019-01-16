/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
/**
 * \@title Focusing with a specific FocusOrigin
 */
export class FocusMonitorFocusViaExample {
    /**
     * @param {?} focusMonitor
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.origin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe(origin => this.ngZone.run(() => {
            this.origin = this.formatOrigin(origin);
            this.cdr.markForCheck();
        }));
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
                template: "<div class=\"example-focus-monitor\">\n  <button #monitored>1. Focus Monitored Element ({{origin}})</button>\n  <button #unmonitored>2. Not Monitored</button>\n</div>\n\n<mat-form-field>\n  <mat-label>Simulated focus origin</mat-label>\n  <mat-select #simulatedOrigin value=\"mouse\">\n    <mat-option value=\"mouse\">Mouse</mat-option>\n    <mat-option value=\"keyboard\">Keyboard</mat-option>\n    <mat-option value=\"touch\">Touch</mat-option>\n    <mat-option value=\"program\">Programmatic</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">\n  Focus button #1\n</button>\n<button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">\n  Focus button #2\n</button>\n",
                styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor button:focus {\n  box-shadow: 0 0 30px cyan;\n}\n"]
            }] }
];
/** @nocollapse */
FocusMonitorFocusViaExample.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
FocusMonitorFocusViaExample.propDecorators = {
    monitoredEl: [{ type: ViewChild, args: ['monitored',] }]
};
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
    FocusMonitorFocusViaExample.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorFocusViaExample.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFHTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7Ozs7QUFRdkIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBS3RDLFlBQW1CLFlBQTBCLEVBQ3pCLEdBQXNCLEVBQ3RCLE1BQWM7UUFGZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmxDLFdBQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBSUksQ0FBQzs7OztJQUV0QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN0QyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQW1CO1FBQzlCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEQsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyx5d0JBQW1EOzthQUVwRDs7OztZQWhCTyxZQUFZO1lBRWxCLGlCQUFpQjtZQUdqQixNQUFNOzs7MEJBYUwsU0FBUyxTQUFDLFdBQVc7Ozs7SUFBdEIsa0RBQTZEOztJQUU3RCw2Q0FBaUM7O0lBRXJCLG1EQUFpQzs7Ozs7SUFDakMsMENBQThCOzs7OztJQUM5Qiw2Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb2N1c2luZyB3aXRoIGEgc3BlY2lmaWMgRm9jdXNPcmlnaW4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbW9uaXRvcmVkJykgbW9uaXRvcmVkRWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIG9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5tb25pdG9yZWRFbClcbiAgICAgICAgLnN1YnNjcmliZShvcmlnaW4gPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMubW9uaXRvcmVkRWwpO1xuICB9XG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG59XG4iXX0=