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
CdkTableExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CdkTableExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTableExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CdkTableExamplesModule, declarations: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample] });
CdkTableExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CdkTableExamplesModule, imports: [CdkTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CdkTableExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkTableModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBQ25HLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzNCLENBQUM7QUFPRixNQUFNLE9BQU8sc0JBQXNCOzt3SEFBdEIsc0JBQXNCO3lIQUF0QixzQkFBc0IsaUJBWGpDLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBCQUEwQixhQUloQixjQUFjLGFBUHhCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBCQUEwQjt5SEFRZixzQkFBc0IsWUFKdkIsY0FBYztnR0FJYixzQkFBc0I7a0JBTGxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtUYWJsZUZsZXhCYXNpY0V4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWZsZXgtYmFzaWMvY2RrLXRhYmxlLWZsZXgtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RhYmxlQmFzaWNFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1iYXNpYy9jZGstdGFibGUtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RhYmxlRml4ZWRMYXlvdXRFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1maXhlZC1sYXlvdXQvY2RrLXRhYmxlLWZpeGVkLWxheW91dC1leGFtcGxlJztcbmltcG9ydCB7Q2RrVGFibGVSZWN5Y2xlUm93c0V4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLXJlY3ljbGUtcm93cy9jZGstdGFibGUtcmVjeWNsZS1yb3dzLWV4YW1wbGUnO1xuZXhwb3J0IHtcbiAgQ2RrVGFibGVCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlRmxleEJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGaXhlZExheW91dEV4YW1wbGUsXG4gIENka1RhYmxlUmVjeWNsZVJvd3NFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1RhYmxlQmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUZsZXhCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlRml4ZWRMYXlvdXRFeGFtcGxlLFxuICBDZGtUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDZGtUYWJsZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUYWJsZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=