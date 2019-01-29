import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
var TooltipAutoHideExample = /** @class */ (function () {
    function TooltipAutoHideExample() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    TooltipAutoHideExample = tslib_1.__decorate([
        Component({
            selector: 'tooltip-auto-hide-example',
            template: "<mat-form-field>\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdk-scrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n",
            styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"]
        })
    ], TooltipAutoHideExample);
    return TooltipAutoHideExample;
}());
export { TooltipAutoHideExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90b29sdGlwLWF1dG8taGlkZS90b29sdGlwLWF1dG8taGlkZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQzs7R0FFRztBQU1IO0lBTEE7UUFNRSxvQkFBZSxHQUFzQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUhZLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDRyQkFBNkM7O1NBRTlDLENBQUM7T0FDVyxzQkFBc0IsQ0FHbEM7SUFBRCw2QkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VG9vbHRpcFBvc2l0aW9ufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBkZW1vbnN0cmF0ZXMgYXV0by1oaWRpbmcgd2hlbiBpdCBjbGlwcyBvdXQgb2YgaXRzIHNjcm9sbGluZyBjb250YWluZXIuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWF1dG8taGlkZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQXV0b0hpZGVFeGFtcGxlIHtcbiAgcG9zaXRpb25PcHRpb25zOiBUb29sdGlwUG9zaXRpb25bXSA9IFsnYmVsb3cnLCAnYWJvdmUnLCAnbGVmdCcsICdyaWdodCddO1xuICBwb3NpdGlvbiA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLnBvc2l0aW9uT3B0aW9uc1swXSk7XG59XG4iXX0=