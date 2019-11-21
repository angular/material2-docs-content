import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
var _c0 = ["element"];
var _c1 = ["subtree"];
/** @title Monitoring focus with FocusMonitor */
var FocusMonitorOverviewExample = /** @class */ (function () {
    function FocusMonitorOverviewExample(_focusMonitor, _cdr, _ngZone) {
        this._focusMonitor = _focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    FocusMonitorOverviewExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._focusMonitor.monitor(this.element)
            .subscribe(function (origin) { return _this._ngZone.run(function () {
            _this.elementOrigin = _this.formatOrigin(origin);
            _this._cdr.markForCheck();
        }); });
        this._focusMonitor.monitor(this.subtree, true)
            .subscribe(function (origin) { return _this._ngZone.run(function () {
            _this.subtreeOrigin = _this.formatOrigin(origin);
            _this._cdr.markForCheck();
        }); });
    };
    FocusMonitorOverviewExample.prototype.ngOnDestroy = function () {
        this._focusMonitor.stopMonitoring(this.element);
        this._focusMonitor.stopMonitoring(this.subtree);
    };
    FocusMonitorOverviewExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    FocusMonitorOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'focus-monitor-overview-example',
                    templateUrl: 'focus-monitor-overview-example.html',
                    styleUrls: ['focus-monitor-overview-example.css']
                },] },
    ];
    /** @nocollapse */
    FocusMonitorOverviewExample.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    FocusMonitorOverviewExample.propDecorators = {
        element: [{ type: ViewChild, args: ['element',] }],
        subtree: [{ type: ViewChild, args: ['subtree',] }]
    };
    FocusMonitorOverviewExample.ɵfac = function FocusMonitorOverviewExample_Factory(t) { return new (t || FocusMonitorOverviewExample)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    FocusMonitorOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FocusMonitorOverviewExample, selectors: [["focus-monitor-overview-example"]], viewQuery: function FocusMonitorOverviewExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.subtree = _t.first);
        } }, decls: 13, vars: 2, consts: [[1, "example-focus-monitor"], ["element", ""], ["subtree", ""]], template: function FocusMonitorOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", null, 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 0);
            i0.ɵɵelementStart(5, "div", null, 2);
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
    return FocusMonitorOverviewExample;
}());
export { FocusMonitorOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FocusMonitorOverviewExample, [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2ExMXkvZm9jdXMtbW9uaXRvci1vdmVydmlldy9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkIsZ0RBQWdEO0FBQ2hEO0lBWUUscUNBQW9CLGFBQTJCLEVBQzNCLElBQXVCLEVBQ3ZCLE9BQWU7UUFGZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBTG5DLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJRixDQUFDO0lBRXZDLHFEQUFlLEdBQWY7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDcEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEVBSG1CLENBR25CLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxFQUhtQixDQUduQixDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGtEQUFZLEdBQVosVUFBYSxNQUFtQjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztvQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7aUJBQ2xEOzs7O2dCQWhCTyxZQUFZO2dCQUdsQixpQkFBaUI7Z0JBR2pCLE1BQU07OzswQkFZTCxTQUFTLFNBQUMsU0FBUzswQkFDbkIsU0FBUyxTQUFDLFNBQVM7OzBHQUZULDJCQUEyQjtvRUFBM0IsMkJBQTJCOzs7Ozs7OztZQ2pCeEMsOEJBQ0U7WUFBQSx1Q0FBaUI7WUFBQSxZQUEyQztZQUFBLGlCQUFTO1lBQ3ZFLGlCQUFNO1lBRU4sOEJBQ0U7WUFBQSxvQ0FDRTtZQUFBLHlCQUFHO1lBQUEsWUFBMkM7WUFBQSxpQkFBSTtZQUNsRCw4QkFBUTtZQUFBLCtCQUFjO1lBQUEsaUJBQVM7WUFDL0IsK0JBQVE7WUFBQSwrQkFBYztZQUFBLGlCQUFTO1lBQ2pDLGlCQUFNO1lBQ1IsaUJBQU07O1lBVGEsZUFBMkM7WUFBM0MsMEVBQTJDO1lBS3ZELGVBQTJDO1lBQTNDLDBFQUEyQzs7c0NETmxEO0NBaURDLEFBckNELElBcUNDO1NBaENZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7a0JBRUUsU0FBUzttQkFBQyxTQUFTOztrQkFDbkIsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3IsIEZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgZm9jdXMgd2l0aCBGb2N1c01vbml0b3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzTW9uaXRvck92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnQnKSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnc3VidHJlZScpIHN1YnRyZWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIGVsZW1lbnRPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcbiAgc3VidHJlZU9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50KVxuICAgICAgICAuc3Vic2NyaWJlKG9yaWdpbiA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihvcmlnaW4pO1xuICAgICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSkpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuc3VidHJlZSwgdHJ1ZSlcbiAgICAgICAgLnN1YnNjcmliZShvcmlnaW4gPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4ob3JpZ2luKTtcbiAgICAgICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLnN1YnRyZWUpO1xuICB9XG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxidXR0b24gI2VsZW1lbnQ+Rm9jdXMgTW9uaXRvcmVkIEVsZW1lbnQgKHt7ZWxlbWVudE9yaWdpbn19KTwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cbiAgPGRpdiAjc3VidHJlZT5cbiAgICA8cD5Gb2N1cyBNb25pdG9yZWQgU3VidHJlZSAoe3tzdWJ0cmVlT3JpZ2lufX0pPC9wPlxuICAgIDxidXR0b24+Q2hpbGQgQnV0dG9uIDE8L2J1dHRvbj5cbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAyPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=