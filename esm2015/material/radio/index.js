import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import { RadioHarnessExample } from './radio-harness/radio-harness-example';
import * as i0 from "@angular/core";
export { RadioHarnessExample, RadioNgModelExample, RadioOverviewExample, };
const EXAMPLES = [
    RadioHarnessExample,
    RadioNgModelExample,
    RadioOverviewExample,
];
export class RadioExamplesModule {
}
RadioExamplesModule.ɵfac = function RadioExamplesModule_Factory(t) { return new (t || RadioExamplesModule)(); };
RadioExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RadioExamplesModule });
RadioExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            ReactiveFormsModule,
            CommonModule,
            MatRadioModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    ReactiveFormsModule,
                    CommonModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RadioExamplesModule, { declarations: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample], imports: [ReactiveFormsModule,
        CommonModule,
        MatRadioModule,
        FormsModule], exports: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsR0FDckIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDckIsQ0FBQztBQWFGLE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7cUVBQW5CLG1CQUFtQjt5RUFWckI7WUFDUCxtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1NBQ1o7dUZBS1UsbUJBQW1CO2NBWC9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSxtQkFBbUIsbUJBaEI5QixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQixhQUtsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGNBQWM7UUFDZCxXQUFXLGFBVmIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtSYWRpb05nTW9kZWxFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnO1xuaW1wb3J0IHtSYWRpb092ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7UmFkaW9IYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9yYWRpby1oYXJuZXNzL3JhZGlvLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFJhZGlvSGFybmVzc0V4YW1wbGUsXG4gIFJhZGlvTmdNb2RlbEV4YW1wbGUsXG4gIFJhZGlvT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFJhZGlvSGFybmVzc0V4YW1wbGUsXG4gIFJhZGlvTmdNb2RlbEV4YW1wbGUsXG4gIFJhZGlvT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=