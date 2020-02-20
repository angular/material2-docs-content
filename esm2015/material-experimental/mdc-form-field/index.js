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
export class MdcFormFieldExamplesModule {
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdcFormFieldExamplesModule, { declarations: [FormFieldCustomControlExample,
        MyTelInput], imports: [CommonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule], exports: [FormFieldCustomControlExample,
        MyTelInput] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixVQUFVLEVBQ1gsTUFBTSxtRUFBbUUsQ0FBQzs7QUFFM0UsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixVQUFVLEdBQ1gsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7Q0FDOUI7QUFhRCxNQUFNLE9BQU8sMEJBQTBCOzs7WUFYdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO2dCQUNsQyxlQUFlLEVBQUUsUUFBUTthQUMxQjs7OERBQ1ksMEJBQTBCO21JQUExQiwwQkFBMEIsa0JBVjVCO1lBQ1AsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsbUJBQW1CO1NBQ3BCO3dGQUtVLDBCQUEwQixtQkFkckMsNkJBQTZCO1FBVUQsVUFBVSxhQUxwQyxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUIsYUFSckIsNkJBQTZCO1FBV04sVUFBVTtrREFHdEIsMEJBQTBCO2NBWHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxVQUFVLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztnQkFDbEMsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge1xuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgTXlUZWxJbnB1dFxufSBmcm9tICcuL21kYy1mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBNeVRlbElucHV0LFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5FWEFNUExFUywgTXlUZWxJbnB1dF0sXG4gIGV4cG9ydHM6IFsuLi5FWEFNUExFUywgTXlUZWxJbnB1dF0sXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1kY0Zvcm1GaWVsZEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==