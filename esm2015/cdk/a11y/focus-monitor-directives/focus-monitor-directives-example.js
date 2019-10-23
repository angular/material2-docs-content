/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/**
 * \@title Monitoring focus with FocusMonitor
 */
export class FocusMonitorDirectivesExample {
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
/*@__PURE__*/ i0.ɵsetClassMetadata(FocusMonitorDirectivesExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-directives-example',
                templateUrl: 'focus-monitor-directives-example.html',
                styleUrls: ['focus-monitor-directives-example.css']
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2ExMXkvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUW5FLE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBSXhDLFlBQW9CLE9BQWUsRUFBVSxJQUF1QjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFIcEUsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUrQixDQUFDOzs7OztJQUd4RSxZQUFZLENBQUMsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOzs7O1lBUHFDLE1BQU07WUFBcEMsaUJBQWlCOzswR0FRWiw2QkFBNkI7a0VBQTdCLDZCQUE2QjtRQ1QxQyw4QkFDRTtRQUFBLGlDQUVFO1FBRE0sK0lBQWtDLHdCQUFvQixTQUFFLGtCQUFjLElBQUM7UUFDN0UsWUFDRjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07UUFFTiw4QkFDRTtRQUFBLDhCQUVFO1FBREcsNElBQWtDLHdCQUFvQixTQUFFLGtCQUFjLElBQUM7UUFDMUUseUJBQUc7UUFBQSxZQUEyQztRQUFBLGlCQUFJO1FBQ2xELDhCQUFRO1FBQUEsOEJBQWM7UUFBQSxpQkFBUztRQUMvQiw4QkFBUTtRQUFBLCtCQUFjO1FBQUEsaUJBQVM7UUFDakMsaUJBQU07UUFDUixpQkFBTTs7UUFYRixlQUNGO1FBREUsNEVBQ0Y7UUFNSyxlQUEyQztRQUEzQywwRUFBMkM7O21DRERyQyw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOzs7O0lBRUMsc0RBQXdDOztJQUN4QyxzREFBd0M7Ozs7O0lBRTVCLGdEQUF1Qjs7Ozs7SUFBRSw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBmb2N1cyB3aXRoIEZvY3VzTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUge1xuICBlbGVtZW50T3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG4gIHN1YnRyZWVPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuXG4gIGZvcm1hdE9yaWdpbihvcmlnaW46IEZvY3VzT3JpZ2luKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3JpZ2luID8gb3JpZ2luICsgJyBmb2N1c2VkJyA6ICdibHVycmVkJztcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIHRoZSBmYWN0IHRoYXQgKGNka0ZvY3VzQ2hhbmdlKSBlbWl0cyBvdXRzaWRlIE5nWm9uZS5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8YnV0dG9uIGNka01vbml0b3JTdWJ0cmVlRm9jdXNcbiAgICAgICAgICAoY2RrRm9jdXNDaGFuZ2UpPVwiZWxlbWVudE9yaWdpbiA9IGZvcm1hdE9yaWdpbigkZXZlbnQpOyBtYXJrRm9yQ2hlY2soKVwiPlxuICAgIEZvY3VzIE1vbml0b3JlZCBFbGVtZW50ICh7e2VsZW1lbnRPcmlnaW59fSlcbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9jdXMtbW9uaXRvclwiPlxuICA8ZGl2IGNka01vbml0b3JTdWJ0cmVlRm9jdXNcbiAgICAgICAoY2RrRm9jdXNDaGFuZ2UpPVwic3VidHJlZU9yaWdpbiA9IGZvcm1hdE9yaWdpbigkZXZlbnQpOyBtYXJrRm9yQ2hlY2soKVwiPlxuICAgIDxwPkZvY3VzIE1vbml0b3JlZCBTdWJ0cmVlICh7e3N1YnRyZWVPcmlnaW59fSk8L3A+XG4gICAgPGJ1dHRvbj5DaGlsZCBCdXR0b24gMTwvYnV0dG9uPlxuICAgIDxidXR0b24+Q2hpbGQgQnV0dG9uIDI8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==