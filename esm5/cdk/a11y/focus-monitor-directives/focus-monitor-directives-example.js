import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
/** @title Monitoring focus with FocusMonitor */
var FocusMonitorDirectivesExample = /** @class */ (function () {
    function FocusMonitorDirectivesExample(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    FocusMonitorDirectivesExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    FocusMonitorDirectivesExample.prototype.markForCheck = function () {
        var _this = this;
        this._ngZone.run(function () { return _this._cdr.markForCheck(); });
    };
    FocusMonitorDirectivesExample = tslib_1.__decorate([
        Component({
            selector: 'focus-monitor-directives-example',
            template: "<div class=\"example-focus-monitor\">\n  <button cdkMonitorSubtreeFocus\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\n    Focus Monitored Element ({{elementOrigin}})\n  </button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div cdkMonitorSubtreeFocus\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n",
            styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [NgZone, ChangeDetectorRef])
    ], FocusMonitorDirectivesExample);
    return FocusMonitorDirectivesExample;
}());
export { FocusMonitorDirectivesExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2ExMXkvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVuRSxnREFBZ0Q7QUFNaEQ7SUFJRSx1Q0FBb0IsT0FBZSxFQUFVLElBQXVCO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUhwRSxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRStCLENBQUM7SUFHeEUsb0RBQVksR0FBWixVQUFhLE1BQW1CO1FBQzlCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSxvREFBWSxHQUFaO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFkVSw2QkFBNkI7UUFMekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtDQUFrQztZQUM1QyxnaUJBQW9EOztTQUVyRCxDQUFDO2lEQUs2QixNQUFNLEVBQWdCLGlCQUFpQjtPQUp6RCw2QkFBNkIsQ0FlekM7SUFBRCxvQ0FBQztDQUFBLEFBZkQsSUFlQztTQWZZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGZvY3VzIHdpdGggRm9jdXNNb25pdG9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSB7XG4gIGVsZW1lbnRPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcbiAgc3VidHJlZU9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lLCBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgdGhlIGZhY3QgdGhhdCAoY2RrRm9jdXNDaGFuZ2UpIGVtaXRzIG91dHNpZGUgTmdab25lLlxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG59XG4iXX0=