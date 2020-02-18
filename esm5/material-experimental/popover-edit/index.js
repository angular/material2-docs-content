import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { PopoverEditCellSpanMatTableExample } from './popover-edit-cell-span-mat-table/popover-edit-cell-span-mat-table-example';
import { PopoverEditMatTableFlexExample } from './popover-edit-mat-table-flex/popover-edit-mat-table-flex-example';
import { PopoverEditMatTableExample } from './popover-edit-mat-table/popover-edit-mat-table-example';
import { PopoverEditTabOutMatTableExample } from './popover-edit-tab-out-mat-table/popover-edit-tab-out-mat-table-example';
import * as i0 from "@angular/core";
export { PopoverEditCellSpanMatTableExample, PopoverEditMatTableExample, PopoverEditMatTableFlexExample, PopoverEditTabOutMatTableExample, };
var EXAMPLES = [
    PopoverEditCellSpanMatTableExample,
    PopoverEditMatTableExample,
    PopoverEditMatTableFlexExample,
    PopoverEditTabOutMatTableExample,
];
var PopoverEditExamplesModule = /** @class */ (function () {
    function PopoverEditExamplesModule() {
    }
    PopoverEditExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatPopoverEditModule,
                        MatSnackBarModule,
                        MatTableModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    PopoverEditExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PopoverEditExamplesModule });
    PopoverEditExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PopoverEditExamplesModule_Factory(t) { return new (t || PopoverEditExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatPopoverEditModule,
                MatSnackBarModule,
                MatTableModule,
                FormsModule,
            ]] });
    return PopoverEditExamplesModule;
}());
export { PopoverEditExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverEditExamplesModule, { declarations: [PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatPopoverEditModule,
        MatSnackBarModule,
        MatTableModule,
        FormsModule], exports: [PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatPopoverEditModule,
                    MatSnackBarModule,
                    MatTableModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0sbUVBQW1FLENBQUM7QUFDM0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLGdDQUFnQyxFQUNqQyxNQUFNLHlFQUF5RSxDQUFDOztBQUVqRixPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsZ0NBQWdDLEdBQ2pDLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLGdDQUFnQztDQUNqQyxDQUFDO0FBRUY7SUFBQTtLQWtCQzs7Z0JBbEJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7aUVBQ1kseUJBQXlCO3FJQUF6Qix5QkFBeUIsa0JBaEIzQjtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixvQkFBb0I7Z0JBQ3BCLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxXQUFXO2FBQ1o7b0NBaERIO0NBc0RDLEFBbEJELElBa0JDO1NBRFkseUJBQXlCO3dGQUF6Qix5QkFBeUIsbUJBdkJwQyxrQ0FBa0M7UUFDbEMsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QixnQ0FBZ0MsYUFLOUIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsV0FBVyxhQWpCYixrQ0FBa0M7UUFDbEMsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QixnQ0FBZ0M7a0RBb0JyQix5QkFBeUI7Y0FqQnJDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0UG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge1xuICBQb3BvdmVyRWRpdENlbGxTcGFuTWF0VGFibGVFeGFtcGxlXG59IGZyb20gJy4vcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQb3BvdmVyRWRpdE1hdFRhYmxlRmxleEV4YW1wbGVcbn0gZnJvbSAnLi9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWZsZXgvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS1mbGV4LWV4YW1wbGUnO1xuaW1wb3J0IHtQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZX0gZnJvbSAnLi9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQb3BvdmVyRWRpdFRhYk91dE1hdFRhYmxlRXhhbXBsZVxufSBmcm9tICcuL3BvcG92ZXItZWRpdC10YWItb3V0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtdGFiLW91dC1tYXQtdGFibGUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFBvcG92ZXJFZGl0Q2VsbFNwYW5NYXRUYWJsZUV4YW1wbGUsXG4gIFBvcG92ZXJFZGl0TWF0VGFibGVFeGFtcGxlLFxuICBQb3BvdmVyRWRpdE1hdFRhYmxlRmxleEV4YW1wbGUsXG4gIFBvcG92ZXJFZGl0VGFiT3V0TWF0VGFibGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFBvcG92ZXJFZGl0Q2VsbFNwYW5NYXRUYWJsZUV4YW1wbGUsXG4gIFBvcG92ZXJFZGl0TWF0VGFibGVFeGFtcGxlLFxuICBQb3BvdmVyRWRpdE1hdFRhYmxlRmxleEV4YW1wbGUsXG4gIFBvcG92ZXJFZGl0VGFiT3V0TWF0VGFibGVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdFBvcG92ZXJFZGl0TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=