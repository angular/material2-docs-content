import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
/**
 * @title Testing with MatIconHarness
 */
class IconHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: IconHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: IconHarnessExample, isStandalone: true, selector: "icon-harness-example", ngImport: i0, template: "<mat-icon fontSet=\"fontIcons\" fontIcon=\"fontIcon\"></mat-icon>\n<mat-icon svgIcon=\"svgIcons:svgIcon\"></mat-icon>\n<mat-icon inline>ligature_icon</mat-icon>\n<mat-icon fontIcon=\"ligature_icon_by_attribute\"></mat-icon>\n", dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
export { IconHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: IconHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-harness-example', standalone: true, imports: [MatIconModule], template: "<mat-icon fontSet=\"fontIcons\" fontIcon=\"fontIcon\"></mat-icon>\n<mat-icon svgIcon=\"svgIcons:svgIcon\"></mat-icon>\n<mat-icon inline>ligature_icon</mat-icon>\n<mat-icon fontIcon=\"ligature_icon_by_attribute\"></mat-icon>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2ljb24taGFybmVzcy9pY29uLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1oYXJuZXNzL2ljb24taGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQUNILE1BTWEsa0JBQWtCOzhHQUFsQixrQkFBa0I7a0dBQWxCLGtCQUFrQixnRkNaL0IsbU9BSUEsMkNETVksYUFBYTs7U0FFWixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FFcEIsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEljb25IYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ljb24taGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpY29uLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEljb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uSGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtaWNvbiBmb250U2V0PVwiZm9udEljb25zXCIgZm9udEljb249XCJmb250SWNvblwiPjwvbWF0LWljb24+XG48bWF0LWljb24gc3ZnSWNvbj1cInN2Z0ljb25zOnN2Z0ljb25cIj48L21hdC1pY29uPlxuPG1hdC1pY29uIGlubGluZT5saWdhdHVyZV9pY29uPC9tYXQtaWNvbj5cbjxtYXQtaWNvbiBmb250SWNvbj1cImxpZ2F0dXJlX2ljb25fYnlfYXR0cmlidXRlXCI+PC9tYXQtaWNvbj5cbiJdfQ==