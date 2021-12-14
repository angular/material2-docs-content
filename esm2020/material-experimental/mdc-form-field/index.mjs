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
MdcFormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdcFormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, declarations: [MdcFormFieldCustomControlExample, MyTelInput], imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule], exports: [MdcFormFieldCustomControlExample, MyTelInput] });
MdcFormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, imports: [[CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
                    declarations: [...EXAMPLES, MyTelInput],
                    exports: [...EXAMPLES, MyTelInput],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCxnQ0FBZ0MsRUFDaEMsVUFBVSxHQUNYLE1BQU0sbUVBQW1FLENBQUM7O0FBRTNFLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUV0RCxNQUFNLFFBQVEsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFPcEQsTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjt3SEFBMUIsMEJBQTBCLGlCQVByQixnQ0FBZ0MsRUFJcEIsVUFBVSxhQUQ1QixZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixhQUg5RCxnQ0FBZ0MsRUFLekIsVUFBVTt3SEFFdEIsMEJBQTBCLFlBSjVCLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQzsyRkFJcEUsMEJBQTBCO2tCQUx0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7b0JBQy9FLFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO2lCQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7XG4gIE1kY0Zvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBNeVRlbElucHV0LFxufSBmcm9tICcuL21kYy1mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZSc7XG5cbmV4cG9ydCB7TWRjRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsIE15VGVsSW5wdXR9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtNZGNGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBNeVRlbElucHV0XSxcbiAgZXhwb3J0czogWy4uLkVYQU1QTEVTLCBNeVRlbElucHV0XSxcbn0pXG5leHBvcnQgY2xhc3MgTWRjRm9ybUZpZWxkRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==