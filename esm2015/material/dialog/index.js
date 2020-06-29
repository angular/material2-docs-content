import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { DialogContentExample, DialogContentExampleDialog } from './dialog-content/dialog-content-example';
import { DialogDataExample, DialogDataExampleDialog } from './dialog-data/dialog-data-example';
import { DialogElementsExample, DialogElementsExampleDialog } from './dialog-elements/dialog-elements-example';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog-overview/dialog-overview-example';
import * as i0 from "@angular/core";
export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogOverviewExample, DialogOverviewExampleDialog, };
const EXAMPLES = [
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
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
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DialogExamplesModule, { declarations: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogOverviewExample,
        DialogOverviewExampleDialog], imports: [CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        FormsModule], exports: [DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
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
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzNCLE1BQU0seUNBQXlDLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDN0YsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUM1QixNQUFNLDJDQUEyQyxDQUFDOztBQUVuRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLDJCQUEyQixHQUM1QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsMkJBQTJCO0NBQzVCLENBQUM7QUFjRixNQUFNLE9BQU8sb0JBQW9COzt3REFBcEIsb0JBQW9CO3VIQUFwQixvQkFBb0Isa0JBWHRCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsY0FBYztZQUNkLFdBQVc7U0FDWjt3RkFLVSxvQkFBb0IsbUJBdEIvQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsMkJBQTJCLGFBS3pCLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLGNBQWM7UUFDZCxXQUFXLGFBaEJiLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQiwyQkFBMkI7a0RBZWhCLG9CQUFvQjtjQVpoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2dcbn0gZnJvbSAnLi9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlJztcbmltcG9ydCB7RGlhbG9nRGF0YUV4YW1wbGUsIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nfSBmcm9tICcuL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2dcbn0gZnJvbSAnLi9kaWFsb2ctZWxlbWVudHMvZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2dcbn0gZnJvbSAnLi9kaWFsb2ctb3ZlcnZpZXcvZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0RhdGFFeGFtcGxlLFxuICBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2csXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlLFxuICBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRGF0YUV4YW1wbGUsXG4gIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGUsXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=