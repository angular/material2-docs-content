import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Tab group with dynamic height based on tab contents
 */
var TabGroupDynamicHeightExample = /** @class */ (function () {
    function TabGroupDynamicHeightExample() {
    }
    TabGroupDynamicHeightExample = tslib_1.__decorate([
        Component({
            selector: 'tab-group-dynamic-height-example',
            template: "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n",
            styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"]
        })
    ], TabGroupDynamicHeightExample);
    return TabGroupDynamicHeightExample;
}());
export { TabGroupDynamicHeightExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFNSDtJQUFBO0lBQTJDLENBQUM7SUFBL0IsNEJBQTRCO1FBTHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQ0FBa0M7WUFDNUMsNFVBQW9EOztTQUVyRCxDQUFDO09BQ1csNEJBQTRCLENBQUc7SUFBRCxtQ0FBQztDQUFBLEFBQTVDLElBQTRDO1NBQS9CLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggZHluYW1pYyBoZWlnaHQgYmFzZWQgb24gdGFiIGNvbnRlbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cER5bmFtaWNIZWlnaHRFeGFtcGxlIHt9XG4iXX0=