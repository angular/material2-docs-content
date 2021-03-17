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
CdkTableExamplesModule.ɵfac = function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); };
CdkTableExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkTableExamplesModule });
CdkTableExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CdkTableModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTableExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUNMLDBCQUEwQixHQUMzQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOztBQUNuRyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsMEJBQTBCLEdBQzNCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUMzQixDQUFDO0FBVUYsTUFBTSxPQUFPLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjt3RUFBdEIsc0JBQXNCOzRFQVB4QjtZQUNQLGNBQWM7U0FDZjt1RkFLVSxzQkFBc0I7Y0FSbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7O3dGQUNZLHNCQUFzQixtQkFkakMsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsMEJBQTBCLGFBS3hCLGNBQWMsYUFSaEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtUYWJsZUZsZXhCYXNpY0V4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWZsZXgtYmFzaWMvY2RrLXRhYmxlLWZsZXgtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RhYmxlQmFzaWNFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1iYXNpYy9jZGstdGFibGUtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtUYWJsZUZpeGVkTGF5b3V0RXhhbXBsZSxcbn0gZnJvbSAnLi9jZGstdGFibGUtZml4ZWQtbGF5b3V0L2Nkay10YWJsZS1maXhlZC1sYXlvdXQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RhYmxlUmVjeWNsZVJvd3NFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1yZWN5Y2xlLXJvd3MvY2RrLXRhYmxlLXJlY3ljbGUtcm93cy1leGFtcGxlJztcbmV4cG9ydCB7XG4gIENka1RhYmxlQmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUZsZXhCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlRml4ZWRMYXlvdXRFeGFtcGxlLFxuICBDZGtUYWJsZVJlY3ljbGVSb3dzRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtUYWJsZUJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUZpeGVkTGF5b3V0RXhhbXBsZSxcbiAgQ2RrVGFibGVSZWN5Y2xlUm93c0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUYWJsZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==