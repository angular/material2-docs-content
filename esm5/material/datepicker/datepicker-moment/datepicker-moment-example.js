import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
var moment = _rollupMoment || _moment;
/** @title Datepicker that uses Moment.js dates */
var DatepickerMomentExample = /** @class */ (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment([2017, 0, 1]));
    }
    DatepickerMomentExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-moment-example',
                    templateUrl: 'datepicker-moment-example.html',
                    styleUrls: ['datepicker-moment-example.css'],
                    providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ],
                },] },
    ];
    DatepickerMomentExample.ɵfac = function DatepickerMomentExample_Factory(t) { return new (t || DatepickerMomentExample)(); };
    DatepickerMomentExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMomentExample, selectors: [["datepicker-moment-example"]], features: [i0.ɵɵProvidersFeature([
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
            ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Moment.js datepicker", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerMomentExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelement(1, "input", 0);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(3, "mat-datepicker", null, 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r17 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r17)("formControl", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r17);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerMomentExample;
}());
export { DatepickerMomentExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerMomentExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-moment-example',
                templateUrl: 'datepicker-moment-example.html',
                styleUrls: ['datepicker-moment-example.css'],
                providers: [
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb21lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1tb21lbnQvZGF0ZXBpY2tlci1tb21lbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1tb21lbnQvZGF0ZXBpY2tlci1tb21lbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzVGLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFdEYsZ0ZBQWdGO0FBQ2hGLDZGQUE2RjtBQUM3RixpR0FBaUc7QUFDakcsMkJBQTJCO0FBQzNCLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLGdEQUFnRDtBQUNoRCxPQUFPLEVBQUMsT0FBTyxJQUFJLGFBQWEsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7O0FBRWhELElBQU0sTUFBTSxHQUFHLGFBQWEsSUFBSSxPQUFPLENBQUM7QUFFeEMsa0RBQWtEO0FBQ2xEO0lBQUE7UUFhRSwrREFBK0Q7UUFDL0QsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlDOztnQkFmQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQzVDLFNBQVMsRUFBRTt3QkFDVCwrRkFBK0Y7d0JBQy9GLCtGQUErRjt3QkFDL0YsNkRBQTZEO3dCQUM3RCxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFDO3dCQUM1RSxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7cUJBQy9EO2lCQUNGOztrR0FDWSx1QkFBdUI7Z0VBQXZCLHVCQUF1QiwrRUFSdkI7Z0JBQ1QsK0ZBQStGO2dCQUMvRiwrRkFBK0Y7Z0JBQy9GLDZEQUE2RDtnQkFDN0QsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQztnQkFDNUUsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO2FBQy9EO1lDMUJILHNDQUNFO1lBQUEsMkJBQ0E7WUFBQSwyQ0FBb0U7WUFDcEUsMENBQXFDO1lBQ3ZDLGlCQUFpQjs7O1lBSEMsZUFBb0I7WUFBcEIsb0NBQW9CLHlCQUFBO1lBQ0gsZUFBVTtZQUFWLDBCQUFVOztrQ0RGN0M7Q0ErQkMsQUFmRCxJQWVDO1NBSFksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FabkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxTQUFTLEVBQUU7b0JBQ1QsK0ZBQStGO29CQUMvRiwrRkFBK0Y7b0JBQy9GLDZEQUE2RDtvQkFDN0QsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQztvQkFDNUUsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO2lCQUMvRDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNQVRfTU9NRU5UX0RBVEVfRk9STUFUUywgTW9tZW50RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHJvbGx1cCBpcyB1c2VkLCBtb21lbnQgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgZGlmZmVyZW50bHkuXG4vLyBTaW5jZSBNb21lbnQuanMgZG9lc24ndCBoYXZlIGEgZGVmYXVsdCBleHBvcnQsIHdlIG5vcm1hbGx5IG5lZWQgdG8gaW1wb3J0IHVzaW5nIHRoZSBgKiBhc2Bcbi8vIHN5bnRheC4gSG93ZXZlciwgcm9sbHVwIGNyZWF0ZXMgYSBzeW50aGV0aWMgZGVmYXVsdCBtb2R1bGUgYW5kIHdlIHRodXMgbmVlZCB0byBpbXBvcnQgaXQgdXNpbmdcbi8vIHRoZSBgZGVmYXVsdCBhc2Agc3ludGF4LlxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQge2RlZmF1bHQgYXMgX3JvbGx1cE1vbWVudH0gZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9tZW50ID0gX3JvbGx1cE1vbWVudCB8fCBfbW9tZW50O1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgdGhhdCB1c2VzIE1vbWVudC5qcyBkYXRlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1tb21lbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1tb21lbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItbW9tZW50LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIGBNb21lbnREYXRlQWRhcHRlcmAgYW5kIGBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU2AgY2FuIGJlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnkgaW1wb3J0aW5nXG4gICAgLy8gYE1hdE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXIgYXBwbGljYXRpb25zIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWxcbiAgICAvLyBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge3Byb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdfSxcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck1vbWVudEV4YW1wbGUge1xuICAvLyBEYXRlcGlja2VyIHRha2VzIGBNb21lbnRgIG9iamVjdHMgaW5zdGVhZCBvZiBgRGF0ZWAgb2JqZWN0cy5cbiAgZGF0ZSA9IG5ldyBGb3JtQ29udHJvbChtb21lbnQoWzIwMTcsIDAsIDFdKSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcFwiIHBsYWNlaG9sZGVyPVwiTW9tZW50LmpzIGRhdGVwaWNrZXJcIiBbZm9ybUNvbnRyb2xdPVwiZGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImRwXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjZHA+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=