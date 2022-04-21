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
import { DialogAnimationsExample, DialogAnimationsExampleDialog, } from './dialog-animations/dialog-animations-example';
import * as i0 from "@angular/core";
export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogFromMenuExample, DialogFromMenuExampleDialog, DialogHarnessExample, DialogOverviewExample, DialogOverviewExampleDialog, DialogAnimationsExample, DialogAnimationsExampleDialog, };
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
    DialogAnimationsExample,
    DialogAnimationsExampleDialog,
];
export class DialogExamplesModule {
}
DialogExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogExamplesModule, declarations: [DialogContentExample,
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
        DialogAnimationsExample,
        DialogAnimationsExampleDialog], imports: [CommonModule,
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
        DialogOverviewExampleDialog,
        DialogAnimationsExample,
        DialogAnimationsExampleDialog] });
DialogExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            MatMenuModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DialogExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsR0FDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixHQUM1QixNQUFNLDZDQUE2QyxDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsNkJBQTZCLEdBQzlCLE1BQU0sK0NBQStDLENBQUM7O0FBRXZELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQixxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzNCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2Qiw2QkFBNkIsR0FDOUIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsNkJBQTZCO0NBQzlCLENBQUM7QUFjRixNQUFNLE9BQU8sb0JBQW9COzt5SEFBcEIsb0JBQW9COzBIQUFwQixvQkFBb0IsaUJBM0IvQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2Qiw2QkFBNkIsYUFLM0IsWUFBWTtRQUNaLGVBQWU7UUFDZixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWE7UUFDYixXQUFXLGFBdEJiLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLDZCQUE2QjswSEFlbEIsb0JBQW9CLFlBWHRCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixXQUFXO1NBQ1o7bUdBSVUsb0JBQW9CO2tCQVpoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250ZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtEaWFsb2dEYXRhRXhhbXBsZSwgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2d9IGZyb20gJy4vZGlhbG9nLWRhdGEvZGlhbG9nLWRhdGEtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dFbGVtZW50c0V4YW1wbGUsXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9kaWFsb2ctZWxlbWVudHMvZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7XG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZSxcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlJztcbmltcG9ydCB7RGlhbG9nSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vZGlhbG9nLWhhcm5lc3MvZGlhbG9nLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dBbmltYXRpb25zRXhhbXBsZSxcbiAgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vZGlhbG9nLWFuaW1hdGlvbnMvZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlLFxuICBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRGF0YUV4YW1wbGUsXG4gIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGUsXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0hhcm5lc3NFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGUsXG4gIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlRGlhbG9nLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlLFxuICBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRGF0YUV4YW1wbGUsXG4gIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGUsXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0hhcm5lc3NFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGUsXG4gIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlRGlhbG9nLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFeGFtcGxlc01vZHVsZSB7fVxuIl19