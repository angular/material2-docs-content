import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import { RadioHarnessExample } from './radio-harness/radio-harness-example';
import * as i0 from "@angular/core";
export { RadioHarnessExample, RadioNgModelExample, RadioOverviewExample };
const EXAMPLES = [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample];
export class RadioExamplesModule {
}
RadioExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: RadioExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RadioExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-rc.0", ngImport: i0, type: RadioExamplesModule, declarations: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample], imports: [ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule], exports: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample] });
RadioExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: RadioExamplesModule, imports: [ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: RadioExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUV4RSxNQUFNLFFBQVEsR0FBRyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPbEYsTUFBTSxPQUFPLG1CQUFtQjs7cUhBQW5CLG1CQUFtQjtzSEFBbkIsbUJBQW1CLGlCQVBkLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixhQUdwRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsYUFIeEQsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO3NIQU9uRSxtQkFBbUIsWUFKcEIsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxXQUFXO2dHQUk3RCxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUM7b0JBQ3pFLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtSYWRpb05nTW9kZWxFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnO1xuaW1wb3J0IHtSYWRpb092ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7UmFkaW9IYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9yYWRpby1oYXJuZXNzL3JhZGlvLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7UmFkaW9IYXJuZXNzRXhhbXBsZSwgUmFkaW9OZ01vZGVsRXhhbXBsZSwgUmFkaW9PdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtSYWRpb0hhcm5lc3NFeGFtcGxlLCBSYWRpb05nTW9kZWxFeGFtcGxlLCBSYWRpb092ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdFJhZGlvTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0V4YW1wbGVzTW9kdWxlIHt9XG4iXX0=