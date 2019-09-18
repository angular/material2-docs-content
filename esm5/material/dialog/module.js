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
export { DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogOverviewExample, DialogOverviewExampleDialog, };
var EXAMPLES = [
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
];
var DialogExamplesModule = /** @class */ (function () {
    function DialogExamplesModule() {
    }
    DialogExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatDialogModule,
                        MatInputModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: [
                        DialogContentExampleDialog,
                        DialogDataExampleDialog,
                        DialogElementsExampleDialog,
                        DialogOverviewExampleDialog,
                    ]
                },] }
    ];
    return DialogExamplesModule;
}());
export { DialogExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzNCLE1BQU0seUNBQXlDLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDN0YsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDNUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUM1QixNQUFNLDJDQUEyQyxDQUFDO0FBRW5ELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLDJCQUEyQixFQUMzQixxQkFBcUIsRUFDckIsMkJBQTJCLEdBQzVCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiwyQkFBMkI7Q0FDNUIsQ0FBQztBQUVGO0lBQUE7SUFrQkEsQ0FBQzs7Z0JBbEJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFO3dCQUNmLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLDJCQUEyQjtxQkFDNUI7aUJBQ0Y7O0lBRUQsMkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQURZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nXG59IGZyb20gJy4vZGlhbG9nLWNvbnRlbnQvZGlhbG9nLWNvbnRlbnQtZXhhbXBsZSc7XG5pbXBvcnQge0RpYWxvZ0RhdGFFeGFtcGxlLCBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZ30gZnJvbSAnLi9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlJztcbmltcG9ydCB7XG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nXG59IGZyb20gJy4vZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlJztcbmltcG9ydCB7XG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nXG59IGZyb20gJy4vZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRGlhbG9nQ29udGVudEV4YW1wbGUsXG4gIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dEYXRhRXhhbXBsZSxcbiAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICBEaWFsb2dPdmVydmlld0V4YW1wbGUsXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBEaWFsb2dDb250ZW50RXhhbXBsZSxcbiAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG4gIERpYWxvZ0RhdGFFeGFtcGxlLFxuICBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyxcbiAgRGlhbG9nRWxlbWVudHNFeGFtcGxlLFxuICBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2csXG4gIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSxcbiAgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2csXG4gICAgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csXG4gICAgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nLFxuICAgIERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=