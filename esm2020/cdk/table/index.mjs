import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CdkTableFlexBasicExample } from './cdk-table-flex-basic/cdk-table-flex-basic-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
import { CdkTableFixedLayoutExample } from './cdk-table-fixed-layout/cdk-table-fixed-layout-example';
import { CdkTableRecycleRowsExample } from './cdk-table-recycle-rows/cdk-table-recycle-rows-example';
import * as i0 from "@angular/core";
export { CdkTableBasicExample, CdkTableFlexBasicExample, CdkTableFixedLayoutExample, CdkTableRecycleRowsExample, };
const EXAMPLES = [
    CdkTableBasicExample,
    CdkTableFlexBasicExample,
    CdkTableFixedLayoutExample,
    CdkTableRecycleRowsExample,
];
export class CdkTableExamplesModule {
}
CdkTableExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkTableExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTableExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkTableExamplesModule, declarations: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample] });
CdkTableExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkTableExamplesModule, imports: [[CdkTableModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CdkTableExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkTableModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBQ25HLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzNCLENBQUM7QUFRRixNQUFNLE9BQU8sc0JBQXNCOzt3SEFBdEIsc0JBQXNCO3lIQUF0QixzQkFBc0IsaUJBWmpDLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBCQUEwQixhQUloQixjQUFjLGFBUHhCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBCQUEwQjt5SEFTZixzQkFBc0IsWUFMeEIsQ0FBQyxjQUFjLENBQUM7Z0dBS2Qsc0JBQXNCO2tCQU5sQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1RhYmxlRmxleEJhc2ljRXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtZmxleC1iYXNpYy9jZGstdGFibGUtZmxleC1iYXNpYy1leGFtcGxlJztcbmltcG9ydCB7Q2RrVGFibGVCYXNpY0V4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWJhc2ljL2Nkay10YWJsZS1iYXNpYy1leGFtcGxlJztcbmltcG9ydCB7Q2RrVGFibGVGaXhlZExheW91dEV4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWZpeGVkLWxheW91dC9jZGstdGFibGUtZml4ZWQtbGF5b3V0LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtcmVjeWNsZS1yb3dzL2Nkay10YWJsZS1yZWN5Y2xlLXJvd3MtZXhhbXBsZSc7XG5leHBvcnQge1xuICBDZGtUYWJsZUJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUZpeGVkTGF5b3V0RXhhbXBsZSxcbiAgQ2RrVGFibGVSZWN5Y2xlUm93c0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrVGFibGVCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlRmxleEJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGaXhlZExheW91dEV4YW1wbGUsXG4gIENka1RhYmxlUmVjeWNsZVJvd3NFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Nka1RhYmxlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RhYmxlRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==