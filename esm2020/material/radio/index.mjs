import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import { RadioHarnessExample } from './radio-harness/radio-harness-example';
import * as i0 from "@angular/core";
export { RadioHarnessExample, RadioNgModelExample, RadioOverviewExample };
const EXAMPLES = [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample];
export class RadioExamplesModule {
}
RadioExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: RadioExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RadioExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: RadioExamplesModule, declarations: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample], imports: [ReactiveFormsModule, CommonModule, MatLegacyRadioModule, FormsModule], exports: [RadioHarnessExample, RadioNgModelExample, RadioOverviewExample] });
RadioExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: RadioExamplesModule, imports: [ReactiveFormsModule, CommonModule, MatLegacyRadioModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: RadioExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ReactiveFormsModule, CommonModule, MatLegacyRadioModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7O0FBRTFFLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO0FBRXhFLE1BQU0sUUFBUSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQU9sRixNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBUGQsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLGFBR3BFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxXQUFXLGFBSDlELG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjtpSEFPbkUsbUJBQW1CLFlBSnBCLG1CQUFtQixFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxXQUFXOzJGQUluRSxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFdBQVcsQ0FBQztvQkFDL0UsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeVJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcmFkaW8nO1xuaW1wb3J0IHtSYWRpb05nTW9kZWxFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnO1xuaW1wb3J0IHtSYWRpb092ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7UmFkaW9IYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9yYWRpby1oYXJuZXNzL3JhZGlvLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7UmFkaW9IYXJuZXNzRXhhbXBsZSwgUmFkaW9OZ01vZGVsRXhhbXBsZSwgUmFkaW9PdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtSYWRpb0hhcm5lc3NFeGFtcGxlLCBSYWRpb05nTW9kZWxFeGFtcGxlLCBSYWRpb092ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdExlZ2FjeVJhZGlvTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0V4YW1wbGVzTW9kdWxlIHt9XG4iXX0=