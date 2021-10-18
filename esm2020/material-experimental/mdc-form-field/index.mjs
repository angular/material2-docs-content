import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MdcFormFieldCustomControlExample, MyTelInput, } from './mdc-form-field-custom-control/form-field-custom-control-example';
import * as i0 from "@angular/core";
export { MdcFormFieldCustomControlExample, MyTelInput };
const EXAMPLES = [MdcFormFieldCustomControlExample];
export class MdcFormFieldExamplesModule {
}
MdcFormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdcFormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, declarations: [MdcFormFieldCustomControlExample, MyTelInput], imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule], exports: [MdcFormFieldCustomControlExample, MyTelInput] });
MdcFormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, imports: [[CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MdcFormFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
                    declarations: [...EXAMPLES, MyTelInput],
                    exports: [...EXAMPLES, MyTelInput],
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCxnQ0FBZ0MsRUFDaEMsVUFBVSxHQUNYLE1BQU0sbUVBQW1FLENBQUM7O0FBRTNFLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUV0RCxNQUFNLFFBQVEsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFRcEQsTUFBTSxPQUFPLDBCQUEwQjs7K0hBQTFCLDBCQUEwQjtnSUFBMUIsMEJBQTBCLGlCQVJyQixnQ0FBZ0MsRUFJcEIsVUFBVSxhQUQ1QixZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixhQUg5RCxnQ0FBZ0MsRUFLekIsVUFBVTtnSUFHdEIsMEJBQTBCLFlBTDVCLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQzttR0FLcEUsMEJBQTBCO2tCQU50QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7b0JBQy9FLFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUNsQyxlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge1xuICBNZGNGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgTXlUZWxJbnB1dCxcbn0gZnJvbSAnLi9tZGMtZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnO1xuXG5leHBvcnQge01kY0Zvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLCBNeVRlbElucHV0fTtcblxuY29uc3QgRVhBTVBMRVMgPSBbTWRjRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5FWEFNUExFUywgTXlUZWxJbnB1dF0sXG4gIGV4cG9ydHM6IFsuLi5FWEFNUExFUywgTXlUZWxJbnB1dF0sXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1kY0Zvcm1GaWVsZEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=