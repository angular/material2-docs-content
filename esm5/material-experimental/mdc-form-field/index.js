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
                declarations: __spread(EXAMPLES, [MyTelInput]),
                exports: __spread(EXAMPLES, [MyTelInput]),
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLFVBQVUsRUFDWCxNQUFNLG1FQUFtRSxDQUFDOztBQUUzRSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLFVBQVUsR0FDWCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7Q0FDOUIsQ0FBQztBQUVGO0lBQUE7S0FZQztrRUFEWSwwQkFBMEI7dUlBQTFCLDBCQUEwQixrQkFWNUI7Z0JBQ1AsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsbUJBQW1CO2FBQ3BCO3FDQXpCSDtDQStCQyxBQVpELElBWUM7U0FEWSwwQkFBMEI7d0ZBQTFCLDBCQUEwQixtQkFkckMsNkJBQTZCO1FBVUQsVUFBVSxhQUxwQyxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUIsYUFSckIsNkJBQTZCO1FBV04sVUFBVTtrREFHdEIsMEJBQTBCO2NBWHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLFdBQU0sUUFBUSxHQUFFLFVBQVUsRUFBQztnQkFDdkMsT0FBTyxXQUFNLFFBQVEsR0FBRSxVQUFVLEVBQUM7Z0JBQ2xDLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIE15VGVsSW5wdXRcbn0gZnJvbSAnLi9tZGMtZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgTXlUZWxJbnB1dCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxuICBleHBvcnRzOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBNZGNGb3JtRmllbGRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=