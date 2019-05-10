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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90b29sdGlwLWF1dG8taGlkZS90b29sdGlwLWF1dG8taGlkZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQzs7R0FFRztBQU1IO0lBTEE7UUFNRSxvQkFBZSxHQUFzQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUhZLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDRyQkFBNkM7O1NBRTlDLENBQUM7T0FDVyxzQkFBc0IsQ0FHbEM7SUFBRCw2QkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VG9vbHRpcFBvc2l0aW9ufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGRlbW9uc3RyYXRlcyBhdXRvLWhpZGluZyB3aGVuIGl0IGNsaXBzIG91dCBvZiBpdHMgc2Nyb2xsaW5nIGNvbnRhaW5lci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBBdXRvSGlkZUV4YW1wbGUge1xuICBwb3NpdGlvbk9wdGlvbnM6IFRvb2x0aXBQb3NpdGlvbltdID0gWydiZWxvdycsICdhYm92ZScsICdsZWZ0JywgJ3JpZ2h0J107XG4gIHBvc2l0aW9uID0gbmV3IEZvcm1Db250cm9sKHRoaXMucG9zaXRpb25PcHRpb25zWzBdKTtcbn1cbiJdfQ==