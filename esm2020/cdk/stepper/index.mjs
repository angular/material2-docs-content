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
CdkStepperExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkStepperExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkStepperExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkStepperExamplesModule, declarations: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper], imports: [CdkStepperModule, CommonModule, ReactiveFormsModule], exports: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper] });
CdkStepperExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkStepperExamplesModule, imports: [[CdkStepperModule, CommonModule, ReactiveFormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkStepperExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkStepperModule, CommonModule, ReactiveFormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsR0FDZCxNQUFNLDJFQUEyRSxDQUFDO0FBQ25GLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsbUJBQW1CLEdBQ3BCLE1BQU0scUVBQXFFLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsYUFBYSxFQUNiLCtCQUErQixFQUMvQixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0NBQ3BCLENBQUM7QUFPRixNQUFNLE9BQU8sd0JBQXdCOzs2SEFBeEIsd0JBQXdCOzhIQUF4Qix3QkFBd0IsaUJBWG5DLGtDQUFrQztRQUNsQyxhQUFhO1FBQ2IsK0JBQStCO1FBQy9CLG1CQUFtQixhQUlULGdCQUFnQixFQUFFLFlBQVksRUFBRSxtQkFBbUIsYUFQN0Qsa0NBQWtDO1FBQ2xDLGFBQWE7UUFDYiwrQkFBK0I7UUFDL0IsbUJBQW1COzhIQVFSLHdCQUF3QixZQUoxQixDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxtQkFBbUIsQ0FBQzttR0FJbkQsd0JBQXdCO2tCQUxwQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztvQkFDOUQsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrU3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUsXG4gIEN1c3RvbVN0ZXBwZXIsXG59IGZyb20gJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrTGluZWFyU3RlcHBlcldpdGhGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tTGluZWFyU3RlcHBlcixcbn0gZnJvbSAnLi9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IHtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlcixcbiAgQ2RrTGluZWFyU3RlcHBlcldpdGhGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tTGluZWFyU3RlcHBlcixcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxuICBDZGtMaW5lYXJTdGVwcGVyV2l0aEZvcm1FeGFtcGxlLFxuICBDdXN0b21MaW5lYXJTdGVwcGVyLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Nka1N0ZXBwZXJNb2R1bGUsIENvbW1vbk1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTdGVwcGVyRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==