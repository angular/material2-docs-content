import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
var _c0 = ["element"];
var _c1 = ["subtree"];
var _c2 = ["element", ""];
var _c3 = ["subtree", ""];
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
    return FocusMonitorOverviewExample;
}());
export { FocusMonitorOverviewExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBYyxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXZCLGdEQUFnRDtBQUNoRDtJQVlFLHFDQUFvQixhQUEyQixFQUMzQixJQUF1QixFQUN2QixPQUFlO1FBRmYsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUxuQyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBSUYsQ0FBQztJQUV2QyxxREFBZSxHQUFmO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxFQUhtQixDQUduQixDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzthQUN6QyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNwQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsRUFIbUIsQ0FHbkIsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxrREFBWSxHQUFaLFVBQWEsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2lCQUNsRDs7OztnQkFoQk8sWUFBWTtnQkFHbEIsaUJBQWlCO2dCQUdqQixNQUFNOzs7MEJBWUwsU0FBUyxTQUFDLFNBQVM7MEJBQ25CLFNBQVMsU0FBQyxTQUFTOzswR0FGVCwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7Ozs7Ozs7WUNqQnhDLDhCQUNFO1lBQUEseUNBQWlCO1lBQUEsWUFBMkM7WUFBQSxpQkFBUztZQUN2RSxpQkFBTTtZQUVOLDhCQUNFO1lBQUEsc0NBQ0U7WUFBQSx5QkFBRztZQUFBLFlBQTJDO1lBQUEsaUJBQUk7WUFDbEQsOEJBQVE7WUFBQSwrQkFBYztZQUFBLGlCQUFTO1lBQy9CLCtCQUFRO1lBQUEsK0JBQWM7WUFBQSxpQkFBUztZQUNqQyxpQkFBTTtZQUNSLGlCQUFNOztZQVRhLGVBQTJDO1lBQTNDLDBFQUEyQztZQUt2RCxlQUEyQztZQUEzQywwRUFBMkM7O3NDRE5sRDtDQWlEQyxBQXJDRCxJQXFDQztTQWhDWSwyQkFBMkI7bUNBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7O2tCQUVFLFNBQVM7bUJBQUMsU0FBUzs7a0JBQ25CLFNBQVM7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNNb25pdG9yLCBGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGZvY3VzIHdpdGggRm9jdXNNb25pdG9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdlbGVtZW50JykgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3N1YnRyZWUnKSBzdWJ0cmVlOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBlbGVtZW50T3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG4gIHN1YnRyZWVPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudClcbiAgICAgICAgLnN1YnNjcmliZShvcmlnaW4gPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50T3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4ob3JpZ2luKTtcbiAgICAgICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pKTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLnN1YnRyZWUsIHRydWUpXG4gICAgICAgIC5zdWJzY3JpYmUob3JpZ2luID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3VidHJlZU9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5zdWJ0cmVlKTtcbiAgfVxuXG4gIGZvcm1hdE9yaWdpbihvcmlnaW46IEZvY3VzT3JpZ2luKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3JpZ2luID8gb3JpZ2luICsgJyBmb2N1c2VkJyA6ICdibHVycmVkJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8YnV0dG9uICNlbGVtZW50PkZvY3VzIE1vbml0b3JlZCBFbGVtZW50ICh7e2VsZW1lbnRPcmlnaW59fSk8L2J1dHRvbj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxkaXYgI3N1YnRyZWU+XG4gICAgPHA+Rm9jdXMgTW9uaXRvcmVkIFN1YnRyZWUgKHt7c3VidHJlZU9yaWdpbn19KTwvcD5cbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAxPC9idXR0b24+XG4gICAgPGJ1dHRvbj5DaGlsZCBCdXR0b24gMjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19