import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CdkTableFlexBasicExample } from './cdk-table-flex-basic/cdk-table-flex-basic-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
import * as i0 from "@angular/core";
export { CdkTableBasicExample, CdkTableFlexBasicExample, };
const EXAMPLES = [
    CdkTableBasicExample,
    CdkTableFlexBasicExample,
];
export class CdkTableExamplesModule {
}
CdkTableExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTableExamplesModule });
CdkTableExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); }, imports: [[
            CdkTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
        CdkTableFlexBasicExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableFlexBasicExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableExamplesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRS9FLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDekIsQ0FBQztBQVVGLE1BQU0sT0FBTyxzQkFBc0I7OzBEQUF0QixzQkFBc0I7MkhBQXRCLHNCQUFzQixrQkFQeEI7WUFDUCxjQUFjO1NBQ2Y7d0ZBS1Usc0JBQXNCLG1CQVpqQyxvQkFBb0I7UUFDcEIsd0JBQXdCLGFBS3RCLGNBQWMsYUFOaEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtrREFXYixzQkFBc0I7Y0FSbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1RhYmxlRmxleEJhc2ljRXhhbXBsZX0gZnJvbSAnLi9jZGstdGFibGUtZmxleC1iYXNpYy9jZGstdGFibGUtZmxleC1iYXNpYy1leGFtcGxlJztcbmltcG9ydCB7Q2RrVGFibGVCYXNpY0V4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWJhc2ljL2Nkay10YWJsZS1iYXNpYy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrVGFibGVCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlRmxleEJhc2ljRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtUYWJsZUJhc2ljRXhhbXBsZSxcbiAgQ2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1RhYmxlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=