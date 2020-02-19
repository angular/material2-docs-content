import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldCustomControlExample, MyTelInput } from './mdc-form-field-custom-control/form-field-custom-control-example';
import * as i0 from "@angular/core";
export { FormFieldCustomControlExample, MyTelInput, };
var EXAMPLES = [
    FormFieldCustomControlExample,
];
var MdcFormFieldExamplesModule = /** @class */ (function () {
    function MdcFormFieldExamplesModule() {
    }
    MdcFormFieldExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatFormFieldModule,
                        MatIconModule,
                        ReactiveFormsModule,
                    ],
                    declarations: __spread(EXAMPLES, [MyTelInput]),
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    MdcFormFieldExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MdcFormFieldExamplesModule });
    MdcFormFieldExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MdcFormFieldExamplesModule_Factory(t) { return new (t || MdcFormFieldExamplesModule)(); }, imports: [[
                CommonModule,
                MatFormFieldModule,
                MatIconModule,
                ReactiveFormsModule,
            ]] });
    return MdcFormFieldExamplesModule;
}());
export { MdcFormFieldExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdcFormFieldExamplesModule, { declarations: [FormFieldCustomControlExample,
        MyTelInput], imports: [CommonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule], exports: [FormFieldCustomControlExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MdcFormFieldExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ],
                declarations: __spread(EXAMPLES, [MyTelInput]),
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLFVBQVUsRUFDWCxNQUFNLG1FQUFtRSxDQUFDOztBQUUzRSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLFVBQVUsR0FDWCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7Q0FDOUIsQ0FBQztBQUVGO0lBQUE7S0FZQzs7Z0JBWkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksV0FBTSxRQUFRLEdBQUUsVUFBVSxFQUFDO29CQUN2QyxPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztrRUFDWSwwQkFBMEI7dUlBQTFCLDBCQUEwQixrQkFWNUI7Z0JBQ1AsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsbUJBQW1CO2FBQ3BCO3FDQXpCSDtDQStCQyxBQVpELElBWUM7U0FEWSwwQkFBMEI7d0ZBQTFCLDBCQUEwQixtQkFkckMsNkJBQTZCO1FBVUQsVUFBVSxhQUxwQyxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUIsYUFSckIsNkJBQTZCO2tEQWNsQiwwQkFBMEI7Y0FYdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksV0FBTSxRQUFRLEdBQUUsVUFBVSxFQUFDO2dCQUN2QyxPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge1xuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgTXlUZWxJbnB1dFxufSBmcm9tICcuL21kYy1mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBNeVRlbElucHV0LFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5FWEFNUExFUywgTXlUZWxJbnB1dF0sXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBNZGNGb3JtRmllbGRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=