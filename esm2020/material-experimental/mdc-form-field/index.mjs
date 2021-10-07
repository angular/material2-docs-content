import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MdcFormFieldCustomControlExample, MyTelInput } from './mdc-form-field-custom-control/form-field-custom-control-example';
import * as i0 from "@angular/core";
export { MdcFormFieldCustomControlExample, MyTelInput, };
const EXAMPLES = [
    MdcFormFieldCustomControlExample,
];
export class MdcFormFieldExamplesModule {
}
MdcFormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdcFormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, declarations: [MdcFormFieldCustomControlExample, MyTelInput], imports: [CommonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule], exports: [MdcFormFieldCustomControlExample, MyTelInput] });
MdcFormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, imports: [[
            CommonModule,
            MatFormFieldModule,
            MatIconModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCxnQ0FBZ0MsRUFDaEMsVUFBVSxFQUNYLE1BQU0sbUVBQW1FLENBQUM7O0FBRTNFLE9BQU8sRUFDTCxnQ0FBZ0MsRUFDaEMsVUFBVSxHQUNYLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGdDQUFnQztDQUNqQyxDQUFDO0FBYUYsTUFBTSxPQUFPLDBCQUEwQjs7K0hBQTFCLDBCQUEwQjtnSUFBMUIsMEJBQTBCLGlCQWRyQyxnQ0FBZ0MsRUFVSixVQUFVLGFBTHBDLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQixhQVJyQixnQ0FBZ0MsRUFXVCxVQUFVO2dJQUd0QiwwQkFBMEIsWUFWNUI7WUFDUCxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixtQkFBbUI7U0FDcEI7bUdBS1UsMEJBQTBCO2tCQVh0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUNsQyxlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge1xuICBNZGNGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgTXlUZWxJbnB1dFxufSBmcm9tICcuL21kYy1mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIE1kY0Zvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBNeVRlbElucHV0LFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIE1kY0Zvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5FWEFNUExFUywgTXlUZWxJbnB1dF0sXG4gIGV4cG9ydHM6IFsuLi5FWEFNUExFUywgTXlUZWxJbnB1dF0sXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1kY0Zvcm1GaWVsZEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==