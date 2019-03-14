import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
/** @title Focusing with a specific FocusOrigin */
var FocusMonitorFocusViaExample = /** @class */ (function () {
    function FocusMonitorFocusViaExample(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.origin = this.formatOrigin(null);
    }
    FocusMonitorFocusViaExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe(function (origin) { return _this.ngZone.run(function () {
            _this.origin = _this.formatOrigin(origin);
            _this.cdr.markForCheck();
        }); });
    };
    FocusMonitorFocusViaExample.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    };
    FocusMonitorFocusViaExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    tslib_1.__decorate([
        ViewChild('monitored'),
        tslib_1.__metadata("design:type", ElementRef)
    ], FocusMonitorFocusViaExample.prototype, "monitoredEl", void 0);
    FocusMonitorFocusViaExample = tslib_1.__decorate([
        Component({
            selector: 'focus-monitor-focus-via-example',
            template: "<div class=\"example-focus-monitor\">\n  <button #monitored>1. Focus Monitored Element ({{origin}})</button>\n  <button #unmonitored>2. Not Monitored</button>\n</div>\n\n<mat-form-field>\n  <mat-label>Simulated focus origin</mat-label>\n  <mat-select #simulatedOrigin value=\"mouse\">\n    <mat-option value=\"mouse\">Mouse</mat-option>\n    <mat-option value=\"keyboard\">Keyboard</mat-option>\n    <mat-option value=\"touch\">Touch</mat-option>\n    <mat-option value=\"program\">Programmatic</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">\n  Focus button #1\n</button>\n<button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">\n  Focus button #2\n</button>\n",
            styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor button:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field,\nbutton {\n  margin-right: 12px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [FocusMonitor,
            ChangeDetectorRef,
            NgZone])
    ], FocusMonitorFocusViaExample);
    return FocusMonitorFocusViaExample;
}());
export { FocusMonitorFocusViaExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsa0RBQWtEO0FBTWxEO0lBS0UscUNBQW1CLFlBQTBCLEVBQ3pCLEdBQXNCLEVBQ3RCLE1BQWM7UUFGZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmxDLFdBQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBSUksQ0FBQztJQUV0QyxxREFBZSxHQUFmO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3RDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUhtQixDQUduQixDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0RBQVksR0FBWixVQUFhLE1BQW1CO1FBQzlCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQXRCdUI7UUFBdkIsU0FBUyxDQUFDLFdBQVcsQ0FBQzswQ0FBYyxVQUFVO29FQUFjO0lBRGxELDJCQUEyQjtRQUx2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUNBQWlDO1lBQzNDLHl3QkFBbUQ7O1NBRXBELENBQUM7aURBTWlDLFlBQVk7WUFDcEIsaUJBQWlCO1lBQ2QsTUFBTTtPQVB2QiwyQkFBMkIsQ0F3QnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXhCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRm9jdXNpbmcgd2l0aCBhIHNwZWNpZmljIEZvY3VzT3JpZ2luICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdtb25pdG9yZWQnKSBtb25pdG9yZWRFbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgb3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5tb25pdG9yZWRFbClcbiAgICAgICAgLnN1YnNjcmliZShvcmlnaW4gPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMubW9uaXRvcmVkRWwpO1xuICB9XG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG59XG4iXX0=