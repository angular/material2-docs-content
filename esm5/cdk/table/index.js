import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CdkTableBasicFlexExample } from './cdk-table-basic-flex/cdk-table-basic-flex-example';
import { CdkTableBasicExample } from './cdk-table-basic/cdk-table-basic-example';
import * as i0 from "@angular/core";
export { CdkTableBasicExample, CdkTableBasicFlexExample, };
var EXAMPLES = [
    CdkTableBasicExample,
    CdkTableBasicFlexExample,
];
var CdkTableExamplesModule = /** @class */ (function () {
    function CdkTableExamplesModule() {
    }
    CdkTableExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTableExamplesModule });
    CdkTableExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); }, imports: [[
                CdkTableModule,
            ]] });
    return CdkTableExamplesModule;
}());
export { CdkTableExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
        CdkTableBasicFlexExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableBasicFlexExample] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRS9FLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDekIsQ0FBQztBQUVGO0lBQUE7S0FTQzs4REFEWSxzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkFQeEI7Z0JBQ1AsY0FBYzthQUNmO2lDQWxCSDtDQXdCQyxBQVRELElBU0M7U0FEWSxzQkFBc0I7d0ZBQXRCLHNCQUFzQixtQkFaakMsb0JBQW9CO1FBQ3BCLHdCQUF3QixhQUt0QixjQUFjLGFBTmhCLG9CQUFvQjtRQUNwQix3QkFBd0I7a0RBV2Isc0JBQXNCO2NBUmxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtUYWJsZUJhc2ljRmxleEV4YW1wbGV9IGZyb20gJy4vY2RrLXRhYmxlLWJhc2ljLWZsZXgvY2RrLXRhYmxlLWJhc2ljLWZsZXgtZXhhbXBsZSc7XG5pbXBvcnQge0Nka1RhYmxlQmFzaWNFeGFtcGxlfSBmcm9tICcuL2Nkay10YWJsZS1iYXNpYy9jZGstdGFibGUtYmFzaWMtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka1RhYmxlQmFzaWNFeGFtcGxlLFxuICBDZGtUYWJsZUJhc2ljRmxleEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrVGFibGVCYXNpY0V4YW1wbGUsXG4gIENka1RhYmxlQmFzaWNGbGV4RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RhYmxlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19