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
RadioExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: RadioExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RadioExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: RadioExamplesModule, declarations: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample], imports: [ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule], exports: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample] });
RadioExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: RadioExamplesModule, imports: [[ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: RadioExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUV4RSxNQUFNLFFBQVEsR0FBRyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPbEYsTUFBTSxPQUFPLG1CQUFtQjs7dUhBQW5CLG1CQUFtQjt3SEFBbkIsbUJBQW1CLGlCQVBkLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixhQUdwRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsYUFIeEQsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO3dIQU9uRSxtQkFBbUIsWUFKckIsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQztrR0FJOUQsbUJBQW1CO2tCQUwvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDO29CQUN6RSxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7UmFkaW9OZ01vZGVsRXhhbXBsZX0gZnJvbSAnLi9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlJztcbmltcG9ydCB7UmFkaW9PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcmFkaW8tb3ZlcnZpZXcvcmFkaW8tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1JhZGlvSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vcmFkaW8taGFybmVzcy9yYWRpby1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1JhZGlvSGFybmVzc0V4YW1wbGUsIFJhZGlvTmdNb2RlbEV4YW1wbGUsIFJhZGlvT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbUmFkaW9IYXJuZXNzRXhhbXBsZSwgUmFkaW9OZ01vZGVsRXhhbXBsZSwgUmFkaW9PdmVydmlld0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBNYXRSYWRpb01vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9FeGFtcGxlc01vZHVsZSB7fVxuIl19