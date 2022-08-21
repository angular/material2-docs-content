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
MdcFormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: MdcFormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdcFormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: MdcFormFieldExamplesModule, declarations: [MdcFormFieldCustomControlExample, MyTelInput], imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule], exports: [MdcFormFieldCustomControlExample, MyTelInput] });
MdcFormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: MdcFormFieldExamplesModule, imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: MdcFormFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
                    declarations: [...EXAMPLES, MyTelInput],
                    exports: [...EXAMPLES, MyTelInput],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCxnQ0FBZ0MsRUFDaEMsVUFBVSxHQUNYLE1BQU0sbUVBQW1FLENBQUM7O0FBRTNFLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUV0RCxNQUFNLFFBQVEsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFPcEQsTUFBTSxPQUFPLDBCQUEwQjs7NEhBQTFCLDBCQUEwQjs2SEFBMUIsMEJBQTBCLGlCQVByQixnQ0FBZ0MsRUFJcEIsVUFBVSxhQUQ1QixZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixhQUg5RCxnQ0FBZ0MsRUFLekIsVUFBVTs2SEFFdEIsMEJBQTBCLFlBSjNCLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsbUJBQW1CO2dHQUluRSwwQkFBMEI7a0JBTHRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztvQkFDL0UsWUFBWSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxVQUFVLENBQUM7aUJBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtcbiAgTWRjRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIE15VGVsSW5wdXQsXG59IGZyb20gJy4vbWRjLWZvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJztcblxuZXhwb3J0IHtNZGNGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSwgTXlUZWxJbnB1dH07XG5cbmNvbnN0IEVYQU1QTEVTID0gW01kY0Zvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxuICBleHBvcnRzOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxufSlcbmV4cG9ydCBjbGFzcyBNZGNGb3JtRmllbGRFeGFtcGxlc01vZHVsZSB7fVxuIl19