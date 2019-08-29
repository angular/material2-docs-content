import { Component } from '@angular/core';
/**
 * @title Tab group with dynamic height based on tab contents
 */
var TabGroupDynamicHeightExample = /** @class */ (function () {
    function TabGroupDynamicHeightExample() {
    }
    TabGroupDynamicHeightExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-dynamic-height-example',
                    template: "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n",
                    styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"]
                }] }
    ];
    return TabGroupDynamicHeightExample;
}());
export { TabGroupDynamicHeightExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLMkMsQ0FBQzs7Z0JBTDNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1Qyw0VUFBb0Q7O2lCQUVyRDs7SUFDMEMsbUNBQUM7Q0FBQSxBQUw1QyxJQUs0QztTQUEvQiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGR5bmFtaWMgaGVpZ2h0IGJhc2VkIG9uIHRhYiBjb250ZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBEeW5hbWljSGVpZ2h0RXhhbXBsZSB7fVxuIl19