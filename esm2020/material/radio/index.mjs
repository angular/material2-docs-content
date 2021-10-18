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
RadioExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RadioExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, declarations: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample], imports: [ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule], exports: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample] });
RadioExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, imports: [[ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ReactiveFormsModule, CommonModule, MatRadioModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUV4RSxNQUFNLFFBQVEsR0FBRyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFRbEYsTUFBTSxPQUFPLG1CQUFtQjs7d0hBQW5CLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGlCQVJkLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixhQUdwRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsYUFIeEQsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CO3lIQVFuRSxtQkFBbUIsWUFMckIsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQzttR0FLOUQsbUJBQW1CO2tCQU4vQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDO29CQUN6RSxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge1JhZGlvTmdNb2RlbEV4YW1wbGV9IGZyb20gJy4vcmFkaW8tbmctbW9kZWwvcmFkaW8tbmctbW9kZWwtZXhhbXBsZSc7XG5pbXBvcnQge1JhZGlvT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtSYWRpb0hhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3JhZGlvLWhhcm5lc3MvcmFkaW8taGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtSYWRpb0hhcm5lc3NFeGFtcGxlLCBSYWRpb05nTW9kZWxFeGFtcGxlLCBSYWRpb092ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1JhZGlvSGFybmVzc0V4YW1wbGUsIFJhZGlvTmdNb2RlbEV4YW1wbGUsIFJhZGlvT3ZlcnZpZXdFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JlYWN0aXZlRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0UmFkaW9Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==