import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule } from '@angular/material/legacy-menu';
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
DialogExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, declarations: [DialogContentExample,
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
        MatLegacyButtonModule,
        MatLegacyDialogModule,
        MatLegacyInputModule,
        MatLegacyMenuModule,
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
DialogExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, imports: [CommonModule,
        MatLegacyButtonModule,
        MatLegacyDialogModule,
        MatLegacyInputModule,
        MatLegacyMenuModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyButtonModule,
                        MatLegacyDialogModule,
                        MatLegacyInputModule,
                        MatLegacyMenuModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEdBQzNCLE1BQU0seUNBQXlDLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDN0YsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsR0FDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixHQUM1QixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLE1BQU0sNkNBQTZDLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qiw2QkFBNkIsR0FDOUIsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFdkQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQiwwQkFBMEIsRUFDMUIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzNCLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDM0Isb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDM0IsdUJBQXVCLEVBQ3ZCLDZCQUE2QixHQUM5QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7Q0FDOUIsQ0FBQztBQWNGLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkEzQi9CLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLDZCQUE2QixhQUszQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLFdBQVcsYUF0QmIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsNkJBQTZCO2tIQWVsQixvQkFBb0IsWUFWN0IsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixXQUFXOzJGQUtGLG9CQUFvQjtrQkFaaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeUJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQge01hdExlZ2FjeURpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWRpYWxvZyc7XG5pbXBvcnQge01hdExlZ2FjeUlucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHtNYXRMZWdhY3lNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktbWVudSc7XG5pbXBvcnQge1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vZGlhbG9nLWNvbnRlbnQvZGlhbG9nLWNvbnRlbnQtZXhhbXBsZSc7XG5pbXBvcnQge0RpYWxvZ0RhdGFFeGFtcGxlLCBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZ30gZnJvbSAnLi9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlJztcbmltcG9ydCB7XG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxufSBmcm9tICcuL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9kaWFsb2ctb3ZlcnZpZXcvZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGlhbG9nRnJvbU1lbnVFeGFtcGxlLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2csXG59IGZyb20gJy4vZGlhbG9nLWZyb20tbWVudS9kaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUnO1xuaW1wb3J0IHtEaWFsb2dIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7XG4gIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlLFxuICBEaWFsb2dBbmltYXRpb25zRXhhbXBsZURpYWxvZyxcbn0gZnJvbSAnLi9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dEYXRhRXhhbXBsZSxcbiAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nSGFybmVzc0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dBbmltYXRpb25zRXhhbXBsZSxcbiAgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2csXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dEYXRhRXhhbXBsZSxcbiAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dGcm9tTWVudUV4YW1wbGUsXG4gIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nSGFybmVzc0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dBbmltYXRpb25zRXhhbXBsZSxcbiAgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2csXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lEaWFsb2dNb2R1bGUsXG4gICAgTWF0TGVnYWN5SW5wdXRNb2R1bGUsXG4gICAgTWF0TGVnYWN5TWVudU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0V4YW1wbGVzTW9kdWxlIHt9XG4iXX0=