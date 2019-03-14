/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
/**
 * \@title Monitoring focus with FocusMonitor
 */
export class FocusMonitorOverviewExample {
    /**
     * @param {?} focusMonitor
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.element)
            .subscribe(origin => this.ngZone.run(() => {
            this.elementOrigin = this.formatOrigin(origin);
            this.cdr.markForCheck();
        }));
        this.focusMonitor.monitor(this.subtree, true)
            .subscribe(origin => this.ngZone.run(() => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.element);
        this.focusMonitor.stopMonitoring(this.subtree);
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
                template: "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n",
                styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"]
            }] }
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
    FocusMonitorOverviewExample.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7Ozs7QUFRdkIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBT3RDLFlBQW9CLFlBQTBCLEVBQzFCLEdBQXNCLEVBQ3RCLE1BQWM7UUFGZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJSCxDQUFDOzs7O0lBRXRDLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDeEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLG1WQUFrRDs7YUFFbkQ7Ozs7WUFoQk8sWUFBWTtZQUdsQixpQkFBaUI7WUFHakIsTUFBTTs7O3NCQVlMLFNBQVMsU0FBQyxTQUFTO3NCQUNuQixTQUFTLFNBQUMsU0FBUzs7OztJQURwQiw4Q0FBdUQ7O0lBQ3ZELDhDQUF1RDs7SUFFdkQsb0RBQXdDOztJQUN4QyxvREFBd0M7Ozs7O0lBRTVCLG1EQUFrQzs7Ozs7SUFDbEMsMENBQThCOzs7OztJQUM5Qiw2Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBmb2N1cyB3aXRoIEZvY3VzTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdzdWJ0cmVlJykgc3VidHJlZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuICBzdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudClcbiAgICAgICAgLnN1YnNjcmliZShvcmlnaW4gPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihvcmlnaW4pO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KSk7XG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLnN1YnRyZWUsIHRydWUpXG4gICAgICAgIC5zdWJzY3JpYmUob3JpZ2luID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4ob3JpZ2luKTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLnN1YnRyZWUpO1xuICB9XG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG59XG4iXX0=