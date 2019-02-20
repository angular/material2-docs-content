/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * \@title Select with custom panel styling
 */
export class SelectPanelClassExample {
    constructor() {
        this.panelColor = new FormControl('red');
    }
}
SelectPanelClassExample.decorators = [
    { type: Component, args: [{
                selector: 'select-panel-class-example',
                template: "<mat-form-field>\n  <mat-label>Panel color</mat-label>\n  <mat-select [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: ViewEncapsulation.None,
                styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    SelectPanelClassExample.prototype.panelColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2VsZWN0LXBhbmVsLWNsYXNzL3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWEzQyxNQUFNLE9BQU8sdUJBQXVCO0lBUnBDO1FBU0UsZUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQVZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0Qyw0V0FBOEM7OztnQkFJOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O0lBRUMsNkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU2VsZWN0IHdpdGggY3VzdG9tIHBhbmVsIHN0eWxpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuY3NzJ10sXG4gIC8vIEVuY2Fwc3VsYXRpb24gaGFzIHRvIGJlIGRpc2FibGVkIGluIG9yZGVyIGZvciB0aGVcbiAgLy8gY29tcG9uZW50IHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBzZWxlY3QgcGFuZWwuXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFBhbmVsQ2xhc3NFeGFtcGxlIHtcbiAgcGFuZWxDb2xvciA9IG5ldyBGb3JtQ29udHJvbCgncmVkJyk7XG59XG4iXX0=