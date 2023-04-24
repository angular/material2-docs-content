import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
    `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
    `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
/**
 * @title SVG icons
 */
class IconSvgExample {
    constructor(iconRegistry, sanitizer) {
        // Note that we provide the icon here as a string literal here due to a limitation in
        // Stackblitz. If you want to provide the icon from a URL, you can use:
        // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
        iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: IconSvgExample, deps: [{ token: i1.MatIconRegistry }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: IconSvgExample, selector: "icon-svg-example", ngImport: i0, template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n", dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
export { IconSvgExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: IconSvgExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-svg-example', template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUV2RCxNQUFNLFlBQVksR0FDaEI7Ozt3RkFHc0Y7SUFDdEYsaUZBQWlGO0lBQ2pGOztDQUVELENBQUM7QUFFRjs7R0FFRztBQUNILE1BSWEsY0FBYztJQUN6QixZQUFZLFlBQTZCLEVBQUUsU0FBdUI7UUFDaEUscUZBQXFGO1FBQ3JGLHVFQUF1RTtRQUN2RSxnR0FBZ0c7UUFDaEcsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO21IQU5VLGNBQWM7dUdBQWQsY0FBYyx3RENyQjNCLCtHQUNBOztTRG9CYSxjQUFjO2dHQUFkLGNBQWM7a0JBSjFCLFNBQVM7K0JBQ0Usa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtNYXRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5jb25zdCBUSFVNQlVQX0lDT04gPVxuICBgXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIj5cbiAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgIDxwYXRoIGQ9XCJNMSAyMWg0VjlIMXYxMnptMjItMTFjMC0xLjEtLjktMi0yLTJoLTYuMzFsLjk1LTQuNTcuMDMtLjMyYzAtLjQxLS4xNy0uNzktLmAgK1xuICBgNDQtMS4wNkwxNC4xNyAxIDcuNTkgNy41OUM3LjIyIDcuOTUgNyA4LjQ1IDcgOXYxMGMwIDEuMS45IDIgMiAyaDljLjgzIDAgMS41NC0uNWAgK1xuICBgMS44NC0xLjIybDMuMDItNy4wNWMuMDktLjIzLjE0LS40Ny4xNC0uNzN2LTEuOTFsLS4wMS0uMDFMMjMgMTB6XCIvPlxuICA8L3N2Zz5cbmA7XG5cbi8qKlxuICogQHRpdGxlIFNWRyBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY29uLXN2Zy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpY29uLXN2Zy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uU3ZnRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKGljb25SZWdpc3RyeTogTWF0SWNvblJlZ2lzdHJ5LCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBwcm92aWRlIHRoZSBpY29uIGhlcmUgYXMgYSBzdHJpbmcgbGl0ZXJhbCBoZXJlIGR1ZSB0byBhIGxpbWl0YXRpb24gaW5cbiAgICAvLyBTdGFja2JsaXR6LiBJZiB5b3Ugd2FudCB0byBwcm92aWRlIHRoZSBpY29uIGZyb20gYSBVUkwsIHlvdSBjYW4gdXNlOlxuICAgIC8vIGBpY29uUmVnaXN0cnkuYWRkU3ZnSWNvbigndGh1bWJzLXVwJywgc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnaWNvbi5zdmcnKSk7YFxuICAgIGljb25SZWdpc3RyeS5hZGRTdmdJY29uTGl0ZXJhbCgndGh1bWJzLXVwJywgc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFRIVU1CVVBfSUNPTikpO1xuICB9XG59XG4iLCI8bWF0LWljb24gc3ZnSWNvbj1cInRodW1icy11cFwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSB0aHVtYnMgdXAgU1ZHIGljb25cIj48L21hdC1pY29uPlxuIl19