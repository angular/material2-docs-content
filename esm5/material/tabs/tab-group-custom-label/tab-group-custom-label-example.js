import { Component } from '@angular/core';
/**
 * @title Using tabs with a custom label template
 */
var TabGroupCustomLabelExample = /** @class */ (function () {
    function TabGroupCustomLabelExample() {
    }
    TabGroupCustomLabelExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-custom-label-example',
                    template: "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n",
                    styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"]
                }] }
    ];
    return TabGroupCustomLabelExample;
}());
export { TabGroupCustomLabelExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWN1c3RvbS1sYWJlbC90YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLeUMsQ0FBQzs7Z0JBTHpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQywwakJBQWtEOztpQkFFbkQ7O0lBQ3dDLGlDQUFDO0NBQUEsQUFMMUMsSUFLMEM7U0FBN0IsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBVc2luZyB0YWJzIHdpdGggYSBjdXN0b20gbGFiZWwgdGVtcGxhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQ3VzdG9tTGFiZWxFeGFtcGxlIHt9XG4iXX0=