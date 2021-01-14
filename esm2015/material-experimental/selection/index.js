import { MatSelectionModule } from '@angular/material-experimental/selection';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectionColumnExample } from './mat-selection-column/mat-selection-column-example';
import { MatSelectionListExample } from './mat-selection-list/mat-selection-list-example';
import * as i0 from "@angular/core";
export { MatSelectionListExample, MatSelectionColumnExample, };
const EXAMPLES = [
    MatSelectionListExample,
    MatSelectionColumnExample,
];
export class MatSelectionExamplesModule {
}
MatSelectionExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatSelectionExamplesModule });
MatSelectionExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatSelectionExamplesModule_Factory(t) { return new (t || MatSelectionExamplesModule)(); }, imports: [[
            MatSelectionModule,
            MatTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatSelectionExamplesModule, { declarations: [MatSelectionListExample,
        MatSelectionColumnExample], imports: [MatSelectionModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule], exports: [MatSelectionListExample,
        MatSelectionColumnExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSelectionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatSelectionModule,
                    MatTableModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatCheckboxModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIseUJBQXlCLEdBQzFCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHVCQUF1QjtJQUN2Qix5QkFBeUI7Q0FDMUIsQ0FBQztBQWNGLE1BQU0sT0FBTywwQkFBMEI7OzhEQUExQiwwQkFBMEI7bUlBQTFCLDBCQUEwQixrQkFYNUI7WUFDUCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGlCQUFpQjtTQUNsQjt3RkFJVSwwQkFBMEIsbUJBaEJyQyx1QkFBdUI7UUFDdkIseUJBQXlCLGFBS3ZCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUJBQWlCLGFBWG5CLHVCQUF1QjtRQUN2Qix5QkFBeUI7dUZBZWQsMEJBQTBCO2NBWnRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXRTZWxlY3Rpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuaW1wb3J0IHtNYXRTZWxlY3Rpb25Db2x1bW5FeGFtcGxlfSBmcm9tICcuL21hdC1zZWxlY3Rpb24tY29sdW1uL21hdC1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUnO1xuaW1wb3J0IHtNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZX0gZnJvbSAnLi9tYXQtc2VsZWN0aW9uLWxpc3QvbWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZSxcbiAgTWF0U2VsZWN0aW9uQ29sdW1uRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZSxcbiAgTWF0U2VsZWN0aW9uQ29sdW1uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRTZWxlY3Rpb25Nb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3Rpb25FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=