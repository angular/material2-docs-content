import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCustomStepperWithoutFormExample, CustomStepper, } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
import { CdkLinearStepperWithFormExample, CustomLinearStepper, } from './cdk-linear-stepper-with-form/cdk-linear-stepper-with-form-example';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export { CdkCustomStepperWithoutFormExample, CustomStepper, CdkLinearStepperWithFormExample, CustomLinearStepper, };
const EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
    CdkLinearStepperWithFormExample,
    CustomLinearStepper,
];
export class CdkStepperExamplesModule {
}
CdkStepperExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkStepperExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkStepperExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkStepperExamplesModule, declarations: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper], imports: [CdkStepperModule, CommonModule, ReactiveFormsModule], exports: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper] });
CdkStepperExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkStepperExamplesModule, imports: [CdkStepperModule, CommonModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkStepperExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkStepperModule, CommonModule, ReactiveFormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsR0FDZCxNQUFNLDJFQUEyRSxDQUFDO0FBQ25GLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsbUJBQW1CLEdBQ3BCLE1BQU0scUVBQXFFLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsYUFBYSxFQUNiLCtCQUErQixFQUMvQixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0NBQ3BCLENBQUM7QUFPRixNQUFNLE9BQU8sd0JBQXdCOzs0SEFBeEIsd0JBQXdCOzZIQUF4Qix3QkFBd0IsaUJBWG5DLGtDQUFrQztRQUNsQyxhQUFhO1FBQ2IsK0JBQStCO1FBQy9CLG1CQUFtQixhQUlULGdCQUFnQixFQUFFLFlBQVksRUFBRSxtQkFBbUIsYUFQN0Qsa0NBQWtDO1FBQ2xDLGFBQWE7UUFDYiwrQkFBK0I7UUFDL0IsbUJBQW1COzZIQVFSLHdCQUF3QixZQUp6QixnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsbUJBQW1CO2tHQUlsRCx3QkFBd0I7a0JBTHBDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFDO29CQUM5RCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlcixcbn0gZnJvbSAnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtMaW5lYXJTdGVwcGVyV2l0aEZvcm1FeGFtcGxlLFxuICBDdXN0b21MaW5lYXJTdGVwcGVyLFxufSBmcm9tICcuL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0vY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQge1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxuICBDZGtMaW5lYXJTdGVwcGVyV2l0aEZvcm1FeGFtcGxlLFxuICBDdXN0b21MaW5lYXJTdGVwcGVyLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUsXG4gIEN1c3RvbVN0ZXBwZXIsXG4gIENka0xpbmVhclN0ZXBwZXJXaXRoRm9ybUV4YW1wbGUsXG4gIEN1c3RvbUxpbmVhclN0ZXBwZXIsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrU3RlcHBlck1vZHVsZSwgQ29tbW9uTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1N0ZXBwZXJFeGFtcGxlc01vZHVsZSB7fVxuIl19