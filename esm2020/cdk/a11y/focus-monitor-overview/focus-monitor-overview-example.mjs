import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/** @title Monitoring focus with FocusMonitor */
export class FocusMonitorOverviewExample {
    constructor(_focusMonitor, _cdr, _ngZone) {
        this._focusMonitor = _focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.element)
            .subscribe(origin => this._ngZone.run(() => {
            this.elementOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
        this._focusMonitor.monitor(this.subtree, true)
            .subscribe(origin => this._ngZone.run(() => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.element);
        this._focusMonitor.stopMonitoring(this.subtree);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: FocusMonitorOverviewExample, deps: [{ token: i1.FocusMonitor }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
FocusMonitorOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: FocusMonitorOverviewExample, selector: "focus-monitor-overview-example", viewQueries: [{ propertyName: "element", first: true, predicate: ["element"], descendants: true }, { propertyName: "subtree", first: true, predicate: ["subtree"], descendants: true }], ngImport: i0, template: "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n", styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: FocusMonitorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'focus-monitor-overview-example', template: "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n", styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, propDecorators: { element: [{
                type: ViewChild,
                args: ['element']
            }], subtree: [{
                type: ViewChild,
                args: ['subtree']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2ExMXkvZm9jdXMtbW9uaXRvci1vdmVydmlldy9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7O0FBRXZCLGdEQUFnRDtBQU1oRCxNQUFNLE9BQU8sMkJBQTJCO0lBT3RDLFlBQW9CLGFBQTJCLEVBQzNCLElBQXVCLEVBQ3ZCLE9BQWU7UUFGZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBTG5DLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJRixDQUFDO0lBRXZDLGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDekMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFtQjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELENBQUM7O2dJQS9CVSwyQkFBMkI7b0hBQTNCLDJCQUEyQiwrUENqQnhDLHlVQVdBO21HRE1hLDJCQUEyQjtrQkFMdkMsU0FBUzsrQkFDRSxnQ0FBZ0M7d0pBS3BCLE9BQU87c0JBQTVCLFNBQVM7dUJBQUMsU0FBUztnQkFDRSxPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBmb2N1cyB3aXRoIEZvY3VzTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdzdWJ0cmVlJykgc3VidHJlZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuICBzdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnQpXG4gICAgICAgIC5zdWJzY3JpYmUob3JpZ2luID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KSk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5zdWJ0cmVlLCB0cnVlKVxuICAgICAgICAuc3Vic2NyaWJlKG9yaWdpbiA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN1YnRyZWVPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihvcmlnaW4pO1xuICAgICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuc3VidHJlZSk7XG4gIH1cblxuICBmb3JtYXRPcmlnaW4ob3JpZ2luOiBGb2N1c09yaWdpbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9yaWdpbiA/IG9yaWdpbiArICcgZm9jdXNlZCcgOiAnYmx1cnJlZCc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cbiAgPGJ1dHRvbiAjZWxlbWVudD5Gb2N1cyBNb25pdG9yZWQgRWxlbWVudCAoe3tlbGVtZW50T3JpZ2lufX0pPC9idXR0b24+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8ZGl2ICNzdWJ0cmVlPlxuICAgIDxwPkZvY3VzIE1vbml0b3JlZCBTdWJ0cmVlICh7e3N1YnRyZWVPcmlnaW59fSk8L3A+XG4gICAgPGJ1dHRvbj5DaGlsZCBCdXR0b24gMTwvYnV0dG9uPlxuICAgIDxidXR0b24+Q2hpbGQgQnV0dG9uIDI8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==