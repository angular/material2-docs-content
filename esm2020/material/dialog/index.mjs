import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { DialogContentExample, DialogContentExampleDialog, } from './dialog-content/dialog-content-example';
import { DialogDataExample, DialogDataExampleDialog } from './dialog-data/dialog-data-example';
import { DialogElementsExample, DialogElementsExampleDialog, } from './dialog-elements/dialog-elements-example';
import { DialogOverviewExample, DialogOverviewExampleDialog, } from './dialog-overview/dialog-overview-example';
import { DialogFromMenuExample, DialogFromMenuExampleDialog, } from './dialog-from-menu/dialog-from-menu-example';
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
DialogExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DialogExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DialogExamplesModule, declarations: [DialogContentExample,
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
        DialogOverviewExampleDialog] });
DialogExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DialogExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            MatMenuModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DialogExamplesModule, decorators: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsR0FDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixHQUM1QixNQUFNLDZDQUE2QyxDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLDJCQUEyQixHQUM1QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0NBQzVCLENBQUM7QUFjRixNQUFNLE9BQU8sb0JBQW9COzt3SEFBcEIsb0JBQW9CO3lIQUFwQixvQkFBb0IsaUJBekIvQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsMkJBQTJCLGFBS3pCLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2IsV0FBVyxhQXBCYixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsMkJBQTJCO3lIQWVoQixvQkFBb0IsWUFYdEI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1lBQ2QsYUFBYTtZQUNiLFdBQVc7U0FDWjtrR0FJVSxvQkFBb0I7a0JBWmhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vZGlhbG9nLWNvbnRlbnQvZGlhbG9nLWNvbnRlbnQtZXhhbXBsZSc7XG5pbXBvcnQge0RpYWxvZ0RhdGFFeGFtcGxlLCBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZ30gZnJvbSAnLi9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlJztcbmltcG9ydCB7XG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9kaWFsb2ctb3ZlcnZpZXcvZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vZGlhbG9nLWZyb20tbWVudS9kaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUnO1xuaW1wb3J0IHtEaWFsb2dIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dEYXRhRXhhbXBsZSxcbiAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nSGFybmVzc0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlLFxuICBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRGF0YUV4YW1wbGUsXG4gIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGUsXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0hhcm5lc3NFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==