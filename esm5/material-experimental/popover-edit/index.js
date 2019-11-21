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
                },] },
    ];
    PopoverEditExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PopoverEditExamplesModule });
    PopoverEditExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PopoverEditExamplesModule_Factory(t) { return new (t || PopoverEditExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatInputModule,
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
        PopoverEditTabOutMatTableExample], imports: [MatButtonModule,
        MatIconModule,
        MatInputModule,
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLG1FQUFtRSxDQUFDO0FBQzNFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFDTCxnQ0FBZ0MsRUFDakMsTUFBTSx5RUFBeUUsQ0FBQzs7QUFFakYsT0FBTyxFQUNMLGtDQUFrQyxFQUNsQywwQkFBMEIsRUFDMUIsOEJBQThCLEVBQzlCLGdDQUFnQyxHQUNqQyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7Q0FDakMsQ0FBQztBQUVGO0lBQUE7S0FjQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O2lFQUNZLHlCQUF5QjtxSUFBekIseUJBQXlCLGtCQVozQjtnQkFDUCxlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxvQkFBb0I7Z0JBQ3BCLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxXQUFXO2FBQ1o7b0NBMUNIO0NBK0NDLEFBZEQsSUFjQztTQURZLHlCQUF5Qjt3RkFBekIseUJBQXlCLG1CQW5CcEMsa0NBQWtDO1FBQ2xDLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsZ0NBQWdDLGFBSzlCLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLFdBQVcsYUFkYixrQ0FBa0M7UUFDbEMsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5QixnQ0FBZ0M7a0RBZ0JyQix5QkFBeUI7Y0FickMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtcbiAgUG9wb3ZlckVkaXRDZWxsU3Bhbk1hdFRhYmxlRXhhbXBsZVxufSBmcm9tICcuL3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlL3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUZsZXhFeGFtcGxlXG59IGZyb20gJy4vcG9wb3Zlci1lZGl0LW1hdC10YWJsZS1mbGV4L3BvcG92ZXItZWRpdC1tYXQtdGFibGUtZmxleC1leGFtcGxlJztcbmltcG9ydCB7UG9wb3ZlckVkaXRNYXRUYWJsZUV4YW1wbGV9IGZyb20gJy4vcG9wb3Zlci1lZGl0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtbWF0LXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUG9wb3ZlckVkaXRUYWJPdXRNYXRUYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9wb3BvdmVyLWVkaXQtdGFiLW91dC1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LXRhYi1vdXQtbWF0LXRhYmxlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyRWRpdENlbGxTcGFuTWF0VGFibGVFeGFtcGxlLFxuICBQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUZsZXhFeGFtcGxlLFxuICBQb3BvdmVyRWRpdFRhYk91dE1hdFRhYmxlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQb3BvdmVyRWRpdENlbGxTcGFuTWF0VGFibGVFeGFtcGxlLFxuICBQb3BvdmVyRWRpdE1hdFRhYmxlRXhhbXBsZSxcbiAgUG9wb3ZlckVkaXRNYXRUYWJsZUZsZXhFeGFtcGxlLFxuICBQb3BvdmVyRWRpdFRhYk91dE1hdFRhYmxlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRQb3BvdmVyRWRpdE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJFZGl0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19