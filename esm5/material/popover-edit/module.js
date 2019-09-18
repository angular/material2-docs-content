import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { PopoverEditCellSpanMatTableExample } from './popover-edit-cell-span-mat-table/popover-edit-cell-span-mat-table-example';
import { PopoverEditMatTableFlexExample } from './popover-edit-mat-table-flex/popover-edit-mat-table-flex-example';
import { PopoverEditMatTableExample } from './popover-edit-mat-table/popover-edit-mat-table-example';
import { PopoverEditTabOutMatTableExample } from './popover-edit-tab-out-mat-table/popover-edit-tab-out-mat-table-example';
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
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatPopoverEditModule,
                        MatSnackBarModule,
                        MatTableModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return PopoverEditExamplesModule;
}());
export { PopoverEditExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3BvcG92ZXItZWRpdC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0sbUVBQW1FLENBQUM7QUFDM0UsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLGdDQUFnQyxFQUNqQyxNQUFNLHlFQUF5RSxDQUFDO0FBRWpGLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsMEJBQTBCLEVBQzFCLDhCQUE4QixFQUM5QixnQ0FBZ0MsR0FDakMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0NBQ2pDLENBQUM7QUFFRjtJQUFBO0lBY0EsQ0FBQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQsZ0NBQUM7Q0FBQSxBQWRELElBY0M7U0FEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0UG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7XG4gIFBvcG92ZXJFZGl0Q2VsbFNwYW5NYXRUYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFBvcG92ZXJFZGl0TWF0VGFibGVGbGV4RXhhbXBsZVxufSBmcm9tICcuL3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZmxleC9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWZsZXgtZXhhbXBsZSc7XG5pbXBvcnQge1BvcG92ZXJFZGl0TWF0VGFibGVFeGFtcGxlfSBmcm9tICcuL3BvcG92ZXItZWRpdC1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LW1hdC10YWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFBvcG92ZXJFZGl0VGFiT3V0TWF0VGFibGVFeGFtcGxlXG59IGZyb20gJy4vcG9wb3Zlci1lZGl0LXRhYi1vdXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC10YWItb3V0LW1hdC10YWJsZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUG9wb3ZlckVkaXRDZWxsU3Bhbk1hdFRhYmxlRXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGUsXG4gIFBvcG92ZXJFZGl0TWF0VGFibGVGbGV4RXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRUYWJPdXRNYXRUYWJsZUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUG9wb3ZlckVkaXRDZWxsU3Bhbk1hdFRhYmxlRXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGUsXG4gIFBvcG92ZXJFZGl0TWF0VGFibGVGbGV4RXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRUYWJPdXRNYXRUYWJsZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UG9wb3ZlckVkaXRNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRWRpdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==