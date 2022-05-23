import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkSelectionColumnExample } from './cdk-selection-column/cdk-selection-column-example';
import { CdkSelectionListExample } from './cdk-selection-list/cdk-selection-list-example';
import * as i0 from "@angular/core";
export { CdkSelectionColumnExample, CdkSelectionListExample };
const EXAMPLES = [CdkSelectionListExample, CdkSelectionColumnExample];
export class CdkSelectionExamplesModule {
}
CdkSelectionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkSelectionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkSelectionExamplesModule, declarations: [CdkSelectionListExample, CdkSelectionColumnExample], imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [CdkSelectionListExample, CdkSelectionColumnExample] });
CdkSelectionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkSelectionExamplesModule, imports: [CdkSelectionModule,
        CdkTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: CdkSelectionExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CdkSelectionModule,
                        CdkTableModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTdELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQUMseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQztBQUU1RCxNQUFNLFFBQVEsR0FBRyxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFjdEUsTUFBTSxPQUFPLDBCQUEwQjs7NEhBQTFCLDBCQUEwQjs2SEFBMUIsMEJBQTBCLGlCQWRyQix1QkFBdUIsRUFBRSx5QkFBeUIsYUFJaEUsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFUSCx1QkFBdUIsRUFBRSx5QkFBeUI7NkhBY3ZELDBCQUEwQixZQVZuQyxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGlCQUFpQjtnR0FLUiwwQkFBMEI7a0JBWnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixpQkFBaUI7cUJBQ2xCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1NlbGVjdGlvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbmltcG9ydCB7Q2RrU2VsZWN0aW9uQ29sdW1uRXhhbXBsZX0gZnJvbSAnLi9jZGstc2VsZWN0aW9uLWNvbHVtbi9jZGstc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlJztcbmltcG9ydCB7Q2RrU2VsZWN0aW9uTGlzdEV4YW1wbGV9IGZyb20gJy4vY2RrLXNlbGVjdGlvbi1saXN0L2Nkay1zZWxlY3Rpb24tbGlzdC1leGFtcGxlJztcblxuZXhwb3J0IHtDZGtTZWxlY3Rpb25Db2x1bW5FeGFtcGxlLCBDZGtTZWxlY3Rpb25MaXN0RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0Nka1NlbGVjdGlvbkxpc3RFeGFtcGxlLCBDZGtTZWxlY3Rpb25Db2x1bW5FeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1NlbGVjdGlvbk1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1NlbGVjdGlvbkV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=