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
CdkTableExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: CdkTableExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTableExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: CdkTableExamplesModule, declarations: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample] });
CdkTableExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: CdkTableExamplesModule, imports: [[CdkTableModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: CdkTableExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkTableModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBQ25HLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzNCLENBQUM7QUFPRixNQUFNLE9BQU8sc0JBQXNCOzswSEFBdEIsc0JBQXNCOzJIQUF0QixzQkFBc0IsaUJBWGpDLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBCQUEwQixhQUloQixjQUFjLGFBUHhCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBCQUEwQjsySEFRZixzQkFBc0IsWUFKeEIsQ0FBQyxjQUFjLENBQUM7a0dBSWQsc0JBQXNCO2tCQUxsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1mbGV4LWJhc2ljL2Nkay10YWJsZS1mbGV4LWJhc2ljLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUYWJsZUJhc2ljRXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtYmFzaWMvY2RrLXRhYmxlLWJhc2ljLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUYWJsZUZpeGVkTGF5b3V0RXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtZml4ZWQtbGF5b3V0L2Nkay10YWJsZS1maXhlZC1sYXlvdXQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RhYmxlUmVjeWNsZVJvd3NFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1yZWN5Y2xlLXJvd3MvY2RrLXRhYmxlLXJlY3ljbGUtcm93cy1leGFtcGxlJztcbmV4cG9ydCB7XG4gIENka1RhYmxlQmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUZsZXhCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlRml4ZWRMYXlvdXRFeGFtcGxlLFxuICBDZGtUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtUYWJsZUJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUZpeGVkTGF5b3V0RXhhbXBsZSxcbiAgQ2RrVGFibGVSZWN5Y2xlUm93c0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrVGFibGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGVFeGFtcGxlc01vZHVsZSB7fVxuIl19