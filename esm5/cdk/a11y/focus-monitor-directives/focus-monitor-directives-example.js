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
    FocusMonitorDirectivesExample.decorators = [
        { type: Component, args: [{
                    selector: 'focus-monitor-directives-example',
                    template: "<div class=\"example-focus-monitor\">\n  <button cdkMonitorSubtreeFocus\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\n    Focus Monitored Element ({{elementOrigin}})\n  </button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div cdkMonitorSubtreeFocus\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n",
                    styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    FocusMonitorDirectivesExample.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    return FocusMonitorDirectivesExample;
}());
export { FocusMonitorDirectivesExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2ExMXkvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5FLGdEQUFnRDtBQUNoRDtJQVNFLHVDQUFvQixPQUFlLEVBQVUsSUFBdUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQW1CO1FBSHBFLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFK0IsQ0FBQztJQUd4RSxvREFBWSxHQUFaLFVBQWEsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLG9EQUFZLEdBQVo7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxnaUJBQW9EOztpQkFFckQ7Ozs7Z0JBUHFDLE1BQU07Z0JBQXBDLGlCQUFpQjs7SUF1QnpCLG9DQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FmWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBmb2N1cyB3aXRoIEZvY3VzTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUge1xuICBlbGVtZW50T3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG4gIHN1YnRyZWVPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuXG4gIGZvcm1hdE9yaWdpbihvcmlnaW46IEZvY3VzT3JpZ2luKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3JpZ2luID8gb3JpZ2luICsgJyBmb2N1c2VkJyA6ICdibHVycmVkJztcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIHRoZSBmYWN0IHRoYXQgKGNka0ZvY3VzQ2hhbmdlKSBlbWl0cyBvdXRzaWRlIE5nWm9uZS5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxufVxuIl19