import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Tooltip with a custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    TooltipPositionExample = tslib_1.__decorate([
        Component({
            selector: 'tooltip-position-example',
            template: "<mat-form-field class=\"example-user-input\">\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n",
            styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
        })
    ], TooltipPositionExample);
    return TooltipPositionExample;
}());
export { TooltipPositionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3Rvb2x0aXAtcG9zaXRpb24vdG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQzs7R0FFRztBQU1IO0lBTEE7UUFNRSxvQkFBZSxHQUFzQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUYsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBSFksc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsb2hCQUE0Qzs7U0FFN0MsQ0FBQztPQUNXLHNCQUFzQixDQUdsQztJQUFELDZCQUFDO0NBQUEsQUFIRCxJQUdDO1NBSFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUb29sdGlwUG9zaXRpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHdpdGggYSBjdXN0b20gcG9zaXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBQb3NpdGlvbkV4YW1wbGUge1xuICBwb3NpdGlvbk9wdGlvbnM6IFRvb2x0aXBQb3NpdGlvbltdID0gWydhZnRlcicsICdiZWZvcmUnLCAnYWJvdmUnLCAnYmVsb3cnLCAnbGVmdCcsICdyaWdodCddO1xuICBwb3NpdGlvbiA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLnBvc2l0aW9uT3B0aW9uc1swXSk7XG59XG4iXX0=