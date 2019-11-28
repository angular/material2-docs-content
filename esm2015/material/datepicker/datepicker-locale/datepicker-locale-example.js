/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-locale/datepicker-locale-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/datepicker";
import * as i5 from "@angular/material/button";
/**
 * \@title Datepicker with different locale
 */
export class DatepickerLocaleExample {
    /**
     * @param {?} _adapter
     */
    constructor(_adapter) {
        this._adapter = _adapter;
    }
    /**
     * @return {?}
     */
    french() {
        this._adapter.setLocale('fr');
    }
}
DatepickerLocaleExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-locale-example',
                templateUrl: 'datepicker-locale-example.html',
                styleUrls: ['datepicker-locale-example.css'],
                providers: [
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            },] },
];
/** @nocollapse */
DatepickerLocaleExample.ctorParameters = () => [
    { type: DateAdapter }
];
/** @nocollapse */ DatepickerLocaleExample.ɵfac = function DatepickerLocaleExample_Factory(t) { return new (t || DatepickerLocaleExample)(i0.ɵɵdirectiveInject(i1.DateAdapter)); };
/** @nocollapse */ DatepickerLocaleExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerLocaleExample, selectors: [["datepicker-locale-example"]], features: [i0.ɵɵProvidersFeature([
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ])], decls: 7, vars: 2, consts: [["matInput", "", "placeholder", "Different locale", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp", ""], ["mat-button", "", 3, "click"]], template: function DatepickerLocaleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelement(1, "input", 0);
        i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
        i0.ɵɵelement(3, "mat-datepicker", null, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵlistener("click", function DatepickerLocaleExample_Template_button_click_5_listener($event) { return ctx.french(); });
        i0.ɵɵtext(6, "Dynamically switch to French");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r15 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matDatepicker", _r15);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r15);
    } }, directives: [i2.MatFormField, i3.MatInput, i4.MatDatepickerInput, i4.MatDatepickerToggle, i2.MatSuffix, i4.MatDatepicker, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerLocaleExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-locale-example',
                templateUrl: 'datepicker-locale-example.html',
                styleUrls: ['datepicker-locale-example.css'],
                providers: [
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], function () { return [{ type: i1.DateAdapter }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatepickerLocaleExample.prototype._adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQiwrQkFBK0IsR0FDaEMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7O0FBdUJ0RixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBQ2xDLFlBQW9CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUcsQ0FBQzs7OztJQUVsRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsU0FBUyxFQUFFO29CQUNULDZGQUE2RjtvQkFDN0YsaUZBQWlGO29CQUNqRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztvQkFFN0MsK0ZBQStGO29CQUMvRiwrRkFBK0Y7b0JBQy9GLDZEQUE2RDtvQkFDN0Q7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQztxQkFDekQ7b0JBQ0QsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO2lCQUMvRDthQUNGOzs7O1lBdEJPLFdBQVc7OzhGQXVCTix1QkFBdUI7NERBQXZCLHVCQUF1QiwrRUFoQnZCO1lBQ1QsNkZBQTZGO1lBQzdGLGlGQUFpRjtZQUNqRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztZQUU3QywrRkFBK0Y7WUFDL0YsK0ZBQStGO1lBQy9GLDZEQUE2RDtZQUM3RDtnQkFDRSxPQUFPLEVBQUUsV0FBVztnQkFDcEIsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO2FBQ3pEO1lBQ0QsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO1NBQy9EO1FDM0JILHNDQUNFO1FBQUEsMkJBQ0E7UUFBQSwyQ0FBb0U7UUFDcEUsMENBQXFDO1FBQ3ZDLGlCQUFpQjtRQUVqQixpQ0FBc0M7UUFBbkIsMEdBQVMsWUFBUSxJQUFDO1FBQUMsNENBQTRCO1FBQUEsaUJBQVM7OztRQUx6RCxlQUFvQjtRQUFwQixvQ0FBb0I7UUFDSCxlQUFVO1FBQVYsMEJBQVU7O2tERDJCaEMsdUJBQXVCO2NBcEJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLFNBQVMsRUFBRTtvQkFDVCw2RkFBNkY7b0JBQzdGLGlGQUFpRjtvQkFDakYsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7b0JBRTdDLCtGQUErRjtvQkFDL0YsK0ZBQStGO29CQUMvRiw2REFBNkQ7b0JBQzdEO3dCQUNFLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7cUJBQ3pEO29CQUNELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztpQkFDL0Q7YUFDRjs7Ozs7OztJQUVhLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1BVF9NT01FTlRfREFURV9GT1JNQVRTLFxuICBNb21lbnREYXRlQWRhcHRlcixcbiAgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggZGlmZmVyZW50IGxvY2FsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIFRoZSBsb2NhbGUgd291bGQgdHlwaWNhbGx5IGJlIHByb3ZpZGVkIG9uIHRoZSByb290IG1vZHVsZSBvZiB5b3VyIGFwcGxpY2F0aW9uLiBXZSBkbyBpdCBhdFxuICAgIC8vIHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAnamEtSlAnfSxcblxuICAgIC8vIGBNb21lbnREYXRlQWRhcHRlcmAgYW5kIGBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU2AgY2FuIGJlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnkgaW1wb3J0aW5nXG4gICAgLy8gYE1hdE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXIgYXBwbGljYXRpb25zIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWxcbiAgICAvLyBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge1xuICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsXG4gICAgICBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TXVxuICAgIH0sXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU30sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJMb2NhbGVFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55Pikge31cblxuICBmcmVuY2goKSB7XG4gICAgdGhpcy5fYWRhcHRlci5zZXRMb2NhbGUoJ2ZyJyk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwXCIgcGxhY2Vob2xkZXI9XCJEaWZmZXJlbnQgbG9jYWxlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHBcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNkcD48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJmcmVuY2goKVwiPkR5bmFtaWNhbGx5IHN3aXRjaCB0byBGcmVuY2g8L2J1dHRvbj5cbiJdfQ==