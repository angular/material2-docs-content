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
const EXAMPLES = [
    PopoverEditCellSpanMatTableExample,
    PopoverEditMatTableExample,
    PopoverEditMatTableFlexExample,
    PopoverEditTabOutMatTableExample,
];
export class PopoverEditExamplesModule {
}
PopoverEditExamplesModule.ɵfac = function PopoverEditExamplesModule_Factory(t) { return new (t || PopoverEditExamplesModule)(); };
PopoverEditExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PopoverEditExamplesModule });
PopoverEditExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverEditExamplesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0sbUVBQW1FLENBQUM7QUFDM0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLGdDQUFnQyxFQUNqQyxNQUFNLHlFQUF5RSxDQUFDOztBQUVqRixPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsZ0NBQWdDLEdBQ2pDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLGdDQUFnQztDQUNqQyxDQUFDO0FBbUJGLE1BQU0sT0FBTyx5QkFBeUI7O2tHQUF6Qix5QkFBeUI7MkVBQXpCLHlCQUF5QjsrRUFoQjNCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGNBQWM7WUFDZCxhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsV0FBVztTQUNaO3VGQUtVLHlCQUF5QjtjQWpCckMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7O3dGQUNZLHlCQUF5QixtQkF2QnBDLGtDQUFrQztRQUNsQywwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLGdDQUFnQyxhQUs5QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsY0FBYztRQUNkLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxXQUFXLGFBakJiLGtDQUFrQztRQUNsQywwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFBvcG92ZXJFZGl0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtcbiAgUG9wb3ZlckVkaXRDZWxsU3Bhbk1hdFRhYmxlRXhhbXBsZVxufSBmcm9tICcuL3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUZsZXhFeGFtcGxlXG59IGZyb20gJy4vcG9wb3Zlci1lZGl0LW1hdC10YWJsZS1mbGV4L3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZmxleC1leGFtcGxlJztcbmltcG9ydCB7UG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGV9IGZyb20gJy4vcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUG9wb3ZlckVkaXRUYWJPdXRNYXRUYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9wb3BvdmVyLWVkaXQtdGFiLW91dC1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LXRhYi1vdXQtbWF0LXRhYmxlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyRWRpdENlbGxTcGFuTWF0VGFibGVFeGFtcGxlLFxuICBQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUZsZXhFeGFtcGxlLFxuICBQb3BvdmVyRWRpdFRhYk91dE1hdFRhYmxlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQb3BvdmVyRWRpdENlbGxTcGFuTWF0VGFibGVFeGFtcGxlLFxuICBQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUZsZXhFeGFtcGxlLFxuICBQb3BvdmVyRWRpdFRhYk91dE1hdFRhYmxlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRQb3BvdmVyRWRpdE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJFZGl0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19