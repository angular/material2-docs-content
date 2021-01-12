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
import { DialogHarnessExample } from './dialog-harness/dialog-harness-example';
import * as i0 from "@angular/core";
export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogFromMenuExample, DialogFromMenuExampleDialog, DialogHarnessExample, DialogOverviewExample, DialogOverviewExampleDialog, };
const EXAMPLES = [
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogFromMenuExample,
    DialogFromMenuExampleDialog,
    DialogHarnessExample,
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
        DialogHarnessExample,
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
        DialogHarnessExample,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMzQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzVCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUM1QixNQUFNLDZDQUE2QyxDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLDJCQUEyQixHQUM1QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0NBQzVCLENBQUM7QUFlRixNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0Isa0JBWnRCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixXQUFXO1NBQ1o7d0ZBS1Usb0JBQW9CLG1CQTFCL0Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDJCQUEyQixhQUt6QixZQUFZO1FBQ1osZUFBZTtRQUNmLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLFdBQVcsYUFwQmIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDJCQUEyQjtrREFnQmhCLG9CQUFvQjtjQWJoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2dcbn0gZnJvbSAnLi9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlJztcbmltcG9ydCB7RGlhbG9nRGF0YUV4YW1wbGUsIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nfSBmcm9tICcuL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2dcbn0gZnJvbSAnLi9kaWFsb2ctZWxlbWVudHMvZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2dcbn0gZnJvbSAnLi9kaWFsb2ctb3ZlcnZpZXcvZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2dcbn0gZnJvbSAnLi9kaWFsb2ctZnJvbS1tZW51L2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZSc7XG5pbXBvcnQge0RpYWxvZ0hhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0RhdGFFeGFtcGxlLFxuICBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZSxcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dIYXJuZXNzRXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dEYXRhRXhhbXBsZSxcbiAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nSGFybmVzc0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=