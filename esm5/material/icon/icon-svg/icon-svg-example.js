import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
/**
 * @title SVG icons
 */
var IconSvgExample = /** @class */ (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    IconSvgExample.decorators = [
        { type: Component, args: [{
                    selector: 'icon-svg-example',
                    template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    /** @nocollapse */
    IconSvgExample.ctorParameters = function () { return [
        { type: MatIconRegistry },
        { type: DomSanitizer }
    ]; };
    return IconSvgExample;
}());
export { IconSvgExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2ljb24tc3ZnL2ljb24tc3ZnLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXZEOztHQUVHO0FBQ0g7SUFNRSx3QkFBWSxZQUE2QixFQUFFLFNBQXVCO1FBQ2hFLFlBQVksQ0FBQyxVQUFVLENBQ25CLFdBQVcsRUFDWCxTQUFTLENBQUMsOEJBQThCLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix5SEFBb0M7O2lCQUVyQzs7OztnQkFUTyxlQUFlO2dCQURmLFlBQVk7O0lBaUJwQixxQkFBQztDQUFBLEFBWEQsSUFXQztTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge01hdEljb25SZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbi8qKlxuICogQHRpdGxlIFNWRyBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY29uLXN2Zy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpY29uLXN2Zy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaWNvbi1zdmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvblN2Z0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICBpY29uUmVnaXN0cnkuYWRkU3ZnSWNvbihcbiAgICAgICAgJ3RodW1icy11cCcsXG4gICAgICAgIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2Fzc2V0cy9pbWcvZXhhbXBsZXMvdGh1bWJ1cC1pY29uLnN2ZycpKTtcbiAgfVxufVxuIl19