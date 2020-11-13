import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { DialogContentExample, DialogContentExampleDialog } from './dialog-content/dialog-content-example';
import { DialogDataExample, DialogDataExampleDialog } from './dialog-data/dialog-data-example';
import { DialogElementsExample, DialogElementsExampleDialog } from './dialog-elements/dialog-elements-example';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog-overview/dialog-overview-example';
import { DialogFromMenuExample, DialogFromMenuExampleDialog } from './dialog-from-menu/dialog-from-menu-example';
import * as i0 from "@angular/core";
export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogFromMenuExample, DialogFromMenuExampleDialog, DialogOverviewExample, DialogOverviewExampleDialog, };
const EXAMPLES = [
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogFromMenuExample,
    DialogFromMenuExampleDialog,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
];
export class DialogExamplesModule {
}
DialogExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: DialogExamplesModule });
DialogExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DialogExamplesModule_Factory(t) { return new (t || DialogExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            MatMenuModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DialogExamplesModule, { declarations: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogFromMenuExample,
        DialogFromMenuExampleDialog,
        DialogOverviewExample,
        DialogOverviewExampleDialog], imports: [CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatMenuModule,
        FormsModule], exports: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogFromMenuExample,
        DialogFromMenuExampleDialog,
        DialogOverviewExample,
        DialogOverviewExampleDialog] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatInputModule,
                    MatMenuModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMzQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzVCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUM1QixNQUFNLDZDQUE2QyxDQUFDOztBQUVyRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQixxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDJCQUEyQjtDQUM1QixDQUFDO0FBZUYsTUFBTSxPQUFPLG9CQUFvQjs7d0RBQXBCLG9CQUFvQjt1SEFBcEIsb0JBQW9CLGtCQVp0QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGNBQWM7WUFDZCxhQUFhO1lBQ2IsV0FBVztTQUNaO3dGQUtVLG9CQUFvQixtQkF6Qi9CLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLDJCQUEyQixhQUt6QixZQUFZO1FBQ1osZUFBZTtRQUNmLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLFdBQVcsYUFuQmIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsMkJBQTJCO2tEQWdCaEIsb0JBQW9CO2NBYmhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxhQUFhO29CQUNiLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7XG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlLFxuICBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZ1xufSBmcm9tICcuL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250ZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtEaWFsb2dEYXRhRXhhbXBsZSwgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2d9IGZyb20gJy4vZGlhbG9nLWRhdGEvZGlhbG9nLWRhdGEtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dFbGVtZW50c0V4YW1wbGUsXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZ1xufSBmcm9tICcuL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZ1xufSBmcm9tICcuL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZ1xufSBmcm9tICcuL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dEYXRhRXhhbXBsZSxcbiAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dEYXRhRXhhbXBsZSxcbiAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0V4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==