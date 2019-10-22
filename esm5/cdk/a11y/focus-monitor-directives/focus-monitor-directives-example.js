import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
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
                    templateUrl: 'focus-monitor-directives-example.html',
                    styleUrls: ['focus-monitor-directives-example.css']
                },] },
    ];
    /** @nocollapse */
    FocusMonitorDirectivesExample.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    FocusMonitorDirectivesExample.ngFactoryDef = function FocusMonitorDirectivesExample_Factory(t) { return new (t || FocusMonitorDirectivesExample)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    FocusMonitorDirectivesExample.ngComponentDef = i0.ɵɵdefineComponent({ type: FocusMonitorDirectivesExample, selectors: [["focus-monitor-directives-example"]], decls: 11, vars: 2, consts: [[1, "example-focus-monitor"], ["cdkMonitorSubtreeFocus", "", 3, "cdkFocusChange"]], template: function FocusMonitorDirectivesExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_button_cdkFocusChange_1_listener($event) { ctx.elementOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_div_cdkFocusChange_4_listener($event) { ctx.subtreeOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button");
            i0.ɵɵtext(8, "Child Button 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button");
            i0.ɵɵtext(10, "Child Button 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Focus Monitored Element (", ctx.elementOrigin, ") ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Focus Monitored Subtree (", ctx.subtreeOrigin, ")");
        } }, directives: [i1.CdkMonitorFocus], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return FocusMonitorDirectivesExample;
}());
export { FocusMonitorDirectivesExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(FocusMonitorDirectivesExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-directives-example',
                templateUrl: 'focus-monitor-directives-example.html',
                styleUrls: ['focus-monitor-directives-example.css']
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2ExMXkvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFbkUsZ0RBQWdEO0FBQ2hEO0lBU0UsdUNBQW9CLE9BQWUsRUFBVSxJQUF1QjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFIcEUsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUrQixDQUFDO0lBR3hFLG9EQUFZLEdBQVosVUFBYSxNQUFtQjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzRUFBc0U7SUFDdEUsb0RBQVksR0FBWjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7b0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2lCQUNwRDs7OztnQkFQcUMsTUFBTTtnQkFBcEMsaUJBQWlCOztzSEFRWiw2QkFBNkI7Z0ZBQTdCLDZCQUE2QjtZQ1QxQyw4QkFDRTtZQUFBLGlDQUVFO1lBRE0sK0lBQWtDLHdCQUFvQixTQUFFLGtCQUFjLElBQUM7WUFDN0UsWUFDRjtZQUFBLGlCQUFTO1lBQ1gsaUJBQU07WUFFTiw4QkFDRTtZQUFBLDhCQUVFO1lBREcsNElBQWtDLHdCQUFvQixTQUFFLGtCQUFjLElBQUM7WUFDMUUseUJBQUc7WUFBQSxZQUEyQztZQUFBLGlCQUFJO1lBQ2xELDhCQUFRO1lBQUEsOEJBQWM7WUFBQSxpQkFBUztZQUMvQiw4QkFBUTtZQUFBLCtCQUFjO1lBQUEsaUJBQVM7WUFDakMsaUJBQU07WUFDUixpQkFBTTs7WUFYRixlQUNGO1lBREUsNEVBQ0Y7WUFNSyxlQUEyQztZQUEzQywwRUFBMkM7O3dDRFZsRDtDQXdCQyxBQXBCRCxJQW9CQztTQWZZLDZCQUE2QjttQ0FBN0IsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGZvY3VzIHdpdGggRm9jdXNNb25pdG9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSB7XG4gIGVsZW1lbnRPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcbiAgc3VidHJlZU9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lLCBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgdGhlIGZhY3QgdGhhdCAoY2RrRm9jdXNDaGFuZ2UpIGVtaXRzIG91dHNpZGUgTmdab25lLlxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxidXR0b24gY2RrTW9uaXRvclN1YnRyZWVGb2N1c1xuICAgICAgICAgIChjZGtGb2N1c0NoYW5nZSk9XCJlbGVtZW50T3JpZ2luID0gZm9ybWF0T3JpZ2luKCRldmVudCk7IG1hcmtGb3JDaGVjaygpXCI+XG4gICAgRm9jdXMgTW9uaXRvcmVkIEVsZW1lbnQgKHt7ZWxlbWVudE9yaWdpbn19KVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxkaXYgY2RrTW9uaXRvclN1YnRyZWVGb2N1c1xuICAgICAgIChjZGtGb2N1c0NoYW5nZSk9XCJzdWJ0cmVlT3JpZ2luID0gZm9ybWF0T3JpZ2luKCRldmVudCk7IG1hcmtGb3JDaGVjaygpXCI+XG4gICAgPHA+Rm9jdXMgTW9uaXRvcmVkIFN1YnRyZWUgKHt7c3VidHJlZU9yaWdpbn19KTwvcD5cbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAxPC9idXR0b24+XG4gICAgPGJ1dHRvbj5DaGlsZCBCdXR0b24gMjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19