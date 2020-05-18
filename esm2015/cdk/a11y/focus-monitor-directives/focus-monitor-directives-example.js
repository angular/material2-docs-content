/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/a11y/focus-monitor-directives/focus-monitor-directives-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/**
 * \@title Monitoring focus with FocusMonitor
 */
let FocusMonitorDirectivesExample = /** @class */ (() => {
    /**
     * \@title Monitoring focus with FocusMonitor
     */
    class FocusMonitorDirectivesExample {
        /**
         * @param {?} _ngZone
         * @param {?} _cdr
         */
        constructor(_ngZone, _cdr) {
            this._ngZone = _ngZone;
            this._cdr = _cdr;
            this.elementOrigin = this.formatOrigin(null);
            this.subtreeOrigin = this.formatOrigin(null);
        }
        /**
         * @param {?} origin
         * @return {?}
         */
        formatOrigin(origin) {
            return origin ? origin + ' focused' : 'blurred';
        }
        // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
        /**
         * @return {?}
         */
        markForCheck() {
            this._ngZone.run((/**
             * @return {?}
             */
            () => this._cdr.markForCheck()));
        }
    }
    FocusMonitorDirectivesExample.decorators = [
        { type: Component, args: [{
                    selector: 'focus-monitor-directives-example',
                    templateUrl: 'focus-monitor-directives-example.html',
                    styleUrls: ['focus-monitor-directives-example.css']
                },] },
    ];
    /** @nocollapse */
    FocusMonitorDirectivesExample.ctorParameters = () => [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ];
    /** @nocollapse */ FocusMonitorDirectivesExample.ɵfac = function FocusMonitorDirectivesExample_Factory(t) { return new (t || FocusMonitorDirectivesExample)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ FocusMonitorDirectivesExample.ɵcmp = i0.ɵɵdefineComponent({ type: FocusMonitorDirectivesExample, selectors: [["focus-monitor-directives-example"]], decls: 11, vars: 2, consts: [[1, "example-focus-monitor"], ["cdkMonitorSubtreeFocus", "", 3, "cdkFocusChange"]], template: function FocusMonitorDirectivesExample_Template(rf, ctx) { if (rf & 1) {
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
})();
export { FocusMonitorDirectivesExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FocusMonitorDirectivesExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-directives-example',
                templateUrl: 'focus-monitor-directives-example.html',
                styleUrls: ['focus-monitor-directives-example.css']
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, null); })();
if (false) {
    /** @type {?} */
    FocusMonitorDirectivesExample.prototype.elementOrigin;
    /** @type {?} */
    FocusMonitorDirectivesExample.prototype.subtreeOrigin;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorDirectivesExample.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorDirectivesExample.prototype._cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFHbkU7Ozs7SUFBQSxNQUthLDZCQUE2Qjs7Ozs7UUFJeEMsWUFBb0IsT0FBZSxFQUFVLElBQXVCO1lBQWhELFlBQU8sR0FBUCxPQUFPLENBQVE7WUFBVSxTQUFJLEdBQUosSUFBSSxDQUFtQjtZQUhwRSxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRStCLENBQUM7Ozs7O1FBR3hFLFlBQVksQ0FBQyxNQUFtQjtZQUM5QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xELENBQUM7Ozs7O1FBR0QsWUFBWTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxDQUFDO1FBQ25ELENBQUM7OztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7b0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2lCQUNwRDs7OztnQkFQcUMsTUFBTTtnQkFBcEMsaUJBQWlCOztpSUFRWiw2QkFBNkI7eUZBQTdCLDZCQUE2QjtZQ1QxQyw4QkFDRTtZQUFBLGlDQUVFO1lBRE0sK0lBQWtDLHdCQUFvQixTQUFFLGtCQUFjLElBQUM7WUFDN0UsWUFDRjtZQUFBLGlCQUFTO1lBQ1gsaUJBQU07WUFFTiw4QkFDRTtZQUFBLDhCQUVFO1lBREcsNElBQWtDLHdCQUFvQixTQUFFLGtCQUFjLElBQUM7WUFDMUUseUJBQUc7WUFBQSxZQUEyQztZQUFBLGlCQUFJO1lBQ2xELDhCQUFRO1lBQUEsOEJBQWM7WUFBQSxpQkFBUztZQUMvQiw4QkFBUTtZQUFBLCtCQUFjO1lBQUEsaUJBQVM7WUFDakMsaUJBQU07WUFDUixpQkFBTTs7WUFYRixlQUNGO1lBREUsNEVBQ0Y7WUFNSyxlQUEyQztZQUEzQywwRUFBMkM7O3dDRFZsRDtLQXdCQztTQWZZLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRDs7OztJQUVDLHNEQUF3Qzs7SUFDeEMsc0RBQXdDOzs7OztJQUU1QixnREFBdUI7Ozs7O0lBQUUsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgZm9jdXMgd2l0aCBGb2N1c01vbml0b3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlIHtcbiAgZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuICBzdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cblxuICBmb3JtYXRPcmlnaW4ob3JpZ2luOiBGb2N1c09yaWdpbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9yaWdpbiA/IG9yaWdpbiArICcgZm9jdXNlZCcgOiAnYmx1cnJlZCc7XG4gIH1cblxuICAvLyBXb3JrYXJvdW5kIGZvciB0aGUgZmFjdCB0aGF0IChjZGtGb2N1c0NoYW5nZSkgZW1pdHMgb3V0c2lkZSBOZ1pvbmUuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cbiAgPGJ1dHRvbiBjZGtNb25pdG9yU3VidHJlZUZvY3VzXG4gICAgICAgICAgKGNka0ZvY3VzQ2hhbmdlKT1cImVsZW1lbnRPcmlnaW4gPSBmb3JtYXRPcmlnaW4oJGV2ZW50KTsgbWFya0ZvckNoZWNrKClcIj5cbiAgICBGb2N1cyBNb25pdG9yZWQgRWxlbWVudCAoe3tlbGVtZW50T3JpZ2lufX0pXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cbiAgPGRpdiBjZGtNb25pdG9yU3VidHJlZUZvY3VzXG4gICAgICAgKGNka0ZvY3VzQ2hhbmdlKT1cInN1YnRyZWVPcmlnaW4gPSBmb3JtYXRPcmlnaW4oJGV2ZW50KTsgbWFya0ZvckNoZWNrKClcIj5cbiAgICA8cD5Gb2N1cyBNb25pdG9yZWQgU3VidHJlZSAoe3tzdWJ0cmVlT3JpZ2lufX0pPC9wPlxuICAgIDxidXR0b24+Q2hpbGQgQnV0dG9uIDE8L2J1dHRvbj5cbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAyPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=