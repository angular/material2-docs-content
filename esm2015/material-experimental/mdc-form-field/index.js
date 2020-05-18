/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material-experimental/mdc-form-field/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldCustomControlExample, MyTelInput } from './mdc-form-field-custom-control/form-field-custom-control-example';
import * as i0 from "@angular/core";
export { FormFieldCustomControlExample, MyTelInput, };
/** @type {?} */
const EXAMPLES = [
    FormFieldCustomControlExample,
];
let MdcFormFieldExamplesModule = /** @class */ (() => {
    class MdcFormFieldExamplesModule {
    }
    MdcFormFieldExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatFormFieldModule,
                        MatIconModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [...EXAMPLES, MyTelInput],
                    exports: [...EXAMPLES, MyTelInput],
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ MdcFormFieldExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MdcFormFieldExamplesModule });
    /** @nocollapse */ MdcFormFieldExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MdcFormFieldExamplesModule_Factory(t) { return new (t || MdcFormFieldExamplesModule)(); }, imports: [[
                CommonModule,
                MatFormFieldModule,
                MatIconModule,
                ReactiveFormsModule,
            ]] });
    return MdcFormFieldExamplesModule;
})();
export { MdcFormFieldExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdcFormFieldExamplesModule, { declarations: [FormFieldCustomControlExample, MyTelInput], imports: [CommonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule], exports: [FormFieldCustomControlExample, MyTelInput] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MdcFormFieldExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ],
                declarations: [...EXAMPLES, MyTelInput],
                exports: [...EXAMPLES, MyTelInput],
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixVQUFVLEVBQ1gsTUFBTSxtRUFBbUUsQ0FBQzs7QUFFM0UsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixVQUFVLEdBQ1gsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7Q0FDOUI7QUFFRDtJQUFBLE1BV2EsMEJBQTBCOzs7Z0JBWHRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxVQUFVLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztvQkFDbEMsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztxRkFDWSwwQkFBMEI7MEpBQTFCLDBCQUEwQixrQkFWNUI7Z0JBQ1AsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsbUJBQW1CO2FBQ3BCO3FDQXpCSDtLQStCQztTQURZLDBCQUEwQjt3RkFBMUIsMEJBQTBCLG1CQWRyQyw2QkFBNkIsRUFVRCxVQUFVLGFBTHBDLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQixhQVJyQiw2QkFBNkIsRUFXTixVQUFVO2tEQUd0QiwwQkFBMEI7Y0FYdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO2dCQUNsQyxlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7XG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBNeVRlbElucHV0XG59IGZyb20gJy4vbWRjLWZvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIE15VGVsSW5wdXQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBNeVRlbElucHV0XSxcbiAgZXhwb3J0czogWy4uLkVYQU1QTEVTLCBNeVRlbElucHV0XSxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWRjRm9ybUZpZWxkRXhhbXBsZXNNb2R1bGUge1xufVxuIl19