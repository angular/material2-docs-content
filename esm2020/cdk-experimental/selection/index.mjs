import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { CdkSelectionColumnExample } from './cdk-selection-column/cdk-selection-column-example';
import { CdkSelectionListExample } from './cdk-selection-list/cdk-selection-list-example';
import * as i0 from "@angular/core";
export { CdkSelectionColumnExample, CdkSelectionListExample };
const EXAMPLES = [CdkSelectionListExample, CdkSelectionColumnExample];
export class CdkSelectionExamplesModule {
}
CdkSelectionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkSelectionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkSelectionExamplesModule, declarations: [CdkSelectionListExample, CdkSelectionColumnExample], imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatLegacyCheckboxModule], exports: [CdkSelectionListExample, CdkSelectionColumnExample] });
CdkSelectionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkSelectionExamplesModule, imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatLegacyCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkSelectionExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CdkSelectionModule,
                        CdkTableModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatLegacyCheckboxModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQUMseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQztBQUU1RCxNQUFNLFFBQVEsR0FBRyxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFjdEUsTUFBTSxPQUFPLDBCQUEwQjs7OEhBQTFCLDBCQUEwQjsrSEFBMUIsMEJBQTBCLGlCQWRyQix1QkFBdUIsRUFBRSx5QkFBeUIsYUFJaEUsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQix1QkFBdUIsYUFUVCx1QkFBdUIsRUFBRSx5QkFBeUI7K0hBY3ZELDBCQUEwQixZQVZuQyxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHVCQUF1QjtrR0FLZCwwQkFBMEI7a0JBWnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQix1QkFBdUI7cUJBQ3hCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1NlbGVjdGlvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeUNoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2hlY2tib3gnO1xuXG5pbXBvcnQge0Nka1NlbGVjdGlvbkNvbHVtbkV4YW1wbGV9IGZyb20gJy4vY2RrLXNlbGVjdGlvbi1jb2x1bW4vY2RrLXNlbGVjdGlvbi1jb2x1bW4tZXhhbXBsZSc7XG5pbXBvcnQge0Nka1NlbGVjdGlvbkxpc3RFeGFtcGxlfSBmcm9tICcuL2Nkay1zZWxlY3Rpb24tbGlzdC9jZGstc2VsZWN0aW9uLWxpc3QtZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrU2VsZWN0aW9uQ29sdW1uRXhhbXBsZSwgQ2RrU2VsZWN0aW9uTGlzdEV4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtDZGtTZWxlY3Rpb25MaXN0RXhhbXBsZSwgQ2RrU2VsZWN0aW9uQ29sdW1uRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtTZWxlY3Rpb25Nb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2hlY2tib3hNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTZWxlY3Rpb25FeGFtcGxlc01vZHVsZSB7fVxuIl19