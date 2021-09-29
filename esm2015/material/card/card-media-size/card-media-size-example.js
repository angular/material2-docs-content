import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
/**
 * @title Card with media size
 */
export class CardMediaSizeExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardMediaSizeExample.ɵfac = function CardMediaSizeExample_Factory(t) { return new (t || CardMediaSizeExample)(); };
CardMediaSizeExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardMediaSizeExample, selectors: [["card-media-size-example"]], decls: 36, vars: 4, consts: [[1, "example-card"], ["mat-card-sm-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-md-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-lg-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], ["mat-card-xl-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"]], template: function CardMediaSizeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-title-group");
        i0.ɵɵelementStart(2, "mat-card-title");
        i0.ɵɵtext(3, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-card-subtitle");
        i0.ɵɵtext(5, "Small");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "img", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-card-content");
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-card", 0);
        i0.ɵɵelementStart(10, "mat-card-title-group");
        i0.ɵɵelementStart(11, "mat-card-title");
        i0.ɵɵtext(12, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-card-subtitle");
        i0.ɵɵtext(14, "Medium");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-card-content");
        i0.ɵɵtext(17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-card", 0);
        i0.ɵɵelementStart(19, "mat-card-title-group");
        i0.ɵɵelementStart(20, "mat-card-title");
        i0.ɵɵtext(21, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-card-subtitle");
        i0.ɵɵtext(23, "Large");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-card-content");
        i0.ɵɵtext(26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "mat-card", 0);
        i0.ɵɵelementStart(28, "mat-card-title-group");
        i0.ɵɵelementStart(29, "mat-card-title");
        i0.ɵɵtext(30, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "mat-card-subtitle");
        i0.ɵɵtext(32, "Extra large");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "img", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "mat-card-content");
        i0.ɵɵtext(35);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
    } }, directives: [i1.MatCard, i1.MatCardTitleGroup, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardSmImage, i1.MatCardContent, i1.MatCardMdImage, i1.MatCardLgImage, i1.MatCardXlImage], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin-bottom: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardMediaSizeExample, [{
        type: Component,
        args: [{ selector: 'card-media-size-example', template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Small</mat-card-subtitle>\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Medium</mat-card-subtitle>\n    <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Large</mat-card-subtitle>\n    <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Extra large</mat-card-subtitle>\n    <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtbWVkaWEtc2l6ZS9jYXJkLW1lZGlhLXNpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1tZWRpYS1zaXplL2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQUxqQztRQU1FLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7O3dGQUpZLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDVGpDLG1DQUErQjtRQUM3Qiw0Q0FBc0I7UUFDcEIsc0NBQWdCO1FBQUEseUJBQVM7UUFBQSxpQkFBaUI7UUFDMUMseUNBQW1CO1FBQUEscUJBQUs7UUFBQSxpQkFBb0I7UUFDNUMseUJBQXlGO1FBQzNGLGlCQUF1QjtRQUN2Qix3Q0FBa0I7UUFDaEIsWUFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBVztRQUVYLG1DQUErQjtRQUM3Qiw2Q0FBc0I7UUFDcEIsdUNBQWdCO1FBQUEsMEJBQVM7UUFBQSxpQkFBaUI7UUFDMUMsMENBQW1CO1FBQUEsdUJBQU07UUFBQSxpQkFBb0I7UUFDN0MsMEJBQXlGO1FBQzNGLGlCQUF1QjtRQUN2Qix5Q0FBa0I7UUFDaEIsYUFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBVztRQUVYLG9DQUErQjtRQUM3Qiw2Q0FBc0I7UUFDcEIsdUNBQWdCO1FBQUEsMEJBQVM7UUFBQSxpQkFBaUI7UUFDMUMsMENBQW1CO1FBQUEsc0JBQUs7UUFBQSxpQkFBb0I7UUFDNUMsMEJBQXlGO1FBQzNGLGlCQUF1QjtRQUN2Qix5Q0FBa0I7UUFDaEIsYUFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBVztRQUVYLG9DQUErQjtRQUM3Qiw2Q0FBc0I7UUFDcEIsdUNBQWdCO1FBQUEsMEJBQVM7UUFBQSxpQkFBaUI7UUFDMUMsMENBQW1CO1FBQUEsNEJBQVc7UUFBQSxpQkFBb0I7UUFDbEQsMEJBQXlGO1FBQzNGLGlCQUF1QjtRQUN2Qix5Q0FBa0I7UUFDaEIsYUFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBVzs7UUFuQ1AsZUFDRjtRQURFLDZDQUNGO1FBVUUsZUFDRjtRQURFLDZDQUNGO1FBVUUsZUFDRjtRQURFLDZDQUNGO1FBVUUsZUFDRjtRQURFLDZDQUNGOzt1RkRoQ1csb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggbWVkaWEgc2l6ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLW1lZGlhLXNpemUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLW1lZGlhLXNpemUtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTWVkaWFTaXplRXhhbXBsZSB7XG4gIGxvbmdUZXh0ID0gYFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2dcbiAgZnJvbSBKYXBhbi4gQSBzbWFsbCwgYWdpbGUgZG9nIHRoYXQgY29wZXMgdmVyeSB3ZWxsIHdpdGggbW91bnRhaW5vdXMgdGVycmFpbiwgdGhlIFNoaWJhIEludSB3YXNcbiAgb3JpZ2luYWxseSBicmVkIGZvciBodW50aW5nLmA7XG59XG4iLCI8IS0tIENhcmRzIHdpdGggbWVkaWEgYXJlYSAtLT5cbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxuICA8bWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPlNtYWxsPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICA8aW1nIG1hdC1jYXJkLXNtLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiA+XG4gIDwvbWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIHt7bG9uZ1RleHR9fVxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5NZWRpdW08L21hdC1jYXJkLXN1YnRpdGxlPlxuICAgIDxpbWcgbWF0LWNhcmQtbWQtaW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmEyLmpwZ1wiID5cbiAgPC9tYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAge3tsb25nVGV4dH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxuICA8bWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPkxhcmdlPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICA8aW1nIG1hdC1jYXJkLWxnLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiA+XG4gIDwvbWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIHt7bG9uZ1RleHR9fVxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5FeHRyYSBsYXJnZTwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgPGltZyBtYXQtY2FyZC14bC1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgPlxuICA8L21hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICB7e2xvbmdUZXh0fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD4iXX0=