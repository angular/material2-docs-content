import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CdkTableFlexBasicExample } from './cdk-table-flex-basic/cdk-table-flex-basic-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
import { CdkTableFixedLayoutExample, } from './cdk-table-fixed-layout/cdk-table-fixed-layout-example';
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
CdkTableExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkTableExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTableExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkTableExamplesModule, declarations: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample] });
CdkTableExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkTableExamplesModule, imports: [[
            CdkTableModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkTableExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CdkTableModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUNMLDBCQUEwQixHQUMzQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOztBQUNuRyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsMEJBQTBCLEdBQzNCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUMzQixDQUFDO0FBVUYsTUFBTSxPQUFPLHNCQUFzQjs7MkhBQXRCLHNCQUFzQjs0SEFBdEIsc0JBQXNCLGlCQWRqQyxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQiwwQkFBMEIsYUFLeEIsY0FBYyxhQVJoQixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQiwwQkFBMEI7NEhBV2Ysc0JBQXNCLFlBUHhCO1lBQ1AsY0FBYztTQUNmO21HQUtVLHNCQUFzQjtrQkFSbEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1mbGV4LWJhc2ljL2Nkay10YWJsZS1mbGV4LWJhc2ljLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUYWJsZUJhc2ljRXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtYmFzaWMvY2RrLXRhYmxlLWJhc2ljLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrVGFibGVGaXhlZExheW91dEV4YW1wbGUsXG59IGZyb20gJy4vY2RrLXRhYmxlLWZpeGVkLWxheW91dC9jZGstdGFibGUtZml4ZWQtbGF5b3V0LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtcmVjeWNsZS1yb3dzL2Nkay10YWJsZS1yZWN5Y2xlLXJvd3MtZXhhbXBsZSc7XG5leHBvcnQge1xuICBDZGtUYWJsZUJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUZpeGVkTGF5b3V0RXhhbXBsZSxcbiAgQ2RrVGFibGVSZWN5Y2xlUm93c0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrVGFibGVCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlRmxleEJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGaXhlZExheW91dEV4YW1wbGUsXG4gIENka1RhYmxlUmVjeWNsZVJvd3NFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=