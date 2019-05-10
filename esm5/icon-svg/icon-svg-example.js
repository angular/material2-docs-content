import * as tslib_1 from "tslib";
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
    IconSvgExample = tslib_1.__decorate([
        Component({
            selector: 'icon-svg-example',
            template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatIconRegistry, DomSanitizer])
    ], IconSvgExample);
    return IconSvgExample;
}());
export { IconSvgExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9pY29uLXN2Zy9pY29uLXN2Zy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQ7O0dBRUc7QUFNSDtJQUNFLHdCQUFZLFlBQTZCLEVBQUUsU0FBdUI7UUFDaEUsWUFBWSxDQUFDLFVBQVUsQ0FDbkIsV0FBVyxFQUNYLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUxVLGNBQWM7UUFMMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qix5SEFBb0M7O1NBRXJDLENBQUM7aURBRTBCLGVBQWUsRUFBYSxZQUFZO09BRHZELGNBQWMsQ0FNMUI7SUFBRCxxQkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge01hdEljb25SZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbi8qKlxuICogQHRpdGxlIFNWRyBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY29uLXN2Zy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpY29uLXN2Zy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaWNvbi1zdmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvblN2Z0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICBpY29uUmVnaXN0cnkuYWRkU3ZnSWNvbihcbiAgICAgICAgJ3RodW1icy11cCcsXG4gICAgICAgIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2Fzc2V0cy9pbWcvZXhhbXBsZXMvdGh1bWJ1cC1pY29uLnN2ZycpKTtcbiAgfVxufVxuIl19