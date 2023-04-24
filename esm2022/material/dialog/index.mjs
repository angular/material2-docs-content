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
class DialogExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DialogExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DialogExamplesModule, declarations: [DialogContentExample,
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
            DialogAnimationsExampleDialog] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DialogExamplesModule, imports: [CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            MatMenuModule,
            FormsModule] }); }
}
export { DialogExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DialogExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsR0FDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixHQUM1QixNQUFNLDZDQUE2QyxDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsNkJBQTZCLEdBQzlCLE1BQU0sK0NBQStDLENBQUM7O0FBRXZELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQixxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzNCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2Qiw2QkFBNkIsR0FDOUIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsNkJBQTZCO0NBQzlCLENBQUM7QUFFRixNQVlhLG9CQUFvQjttSEFBcEIsb0JBQW9CO29IQUFwQixvQkFBb0IsaUJBM0IvQixvQkFBb0I7WUFDcEIsMEJBQTBCO1lBQzFCLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIscUJBQXFCO1lBQ3JCLDJCQUEyQjtZQUMzQixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLHVCQUF1QjtZQUN2Qiw2QkFBNkIsYUFLM0IsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixXQUFXLGFBdEJiLG9CQUFvQjtZQUNwQiwwQkFBMEI7WUFDMUIsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLHFCQUFxQjtZQUNyQiwyQkFBMkI7WUFDM0Isb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQiwyQkFBMkI7WUFDM0IsdUJBQXVCO1lBQ3ZCLDZCQUE2QjtvSEFlbEIsb0JBQW9CLFlBVjdCLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGNBQWM7WUFDZCxhQUFhO1lBQ2IsV0FBVzs7U0FLRixvQkFBb0I7Z0dBQXBCLG9CQUFvQjtrQkFaaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7XG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlLFxuICBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlJztcbmltcG9ydCB7RGlhbG9nRGF0YUV4YW1wbGUsIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nfSBmcm9tICcuL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlJztcbmltcG9ydCB7XG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9kaWFsb2ctZnJvbS1tZW51L2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZSc7XG5pbXBvcnQge0RpYWxvZ0hhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGUsXG4gIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2RpYWxvZy1hbmltYXRpb25zL2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0RhdGFFeGFtcGxlLFxuICBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZSxcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dIYXJuZXNzRXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlLFxuICBEaWFsb2dBbmltYXRpb25zRXhhbXBsZURpYWxvZyxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0RhdGFFeGFtcGxlLFxuICBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZSxcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dIYXJuZXNzRXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlLFxuICBEaWFsb2dBbmltYXRpb25zRXhhbXBsZURpYWxvZyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==