/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * \@title Dialog with header, scrollable content and actions
 */
export class DialogContentExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log(`Dialog result: ${result}`);
        }));
    }
}
DialogContentExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example',
                templateUrl: 'dialog-content-example.html',
                styleUrls: ['dialog-content-example.css'],
            },] },
];
/** @nocollapse */
DialogContentExample.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ DialogContentExample.ɵfac = function DialogContentExample_Factory(t) { return new (t || DialogContentExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
/** @nocollapse */ DialogContentExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener($event) { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogContentExample, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example',
                templateUrl: 'dialog-content-example.html',
                styleUrls: ['dialog-content-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
if (false) {
    /** @type {?} */
    DialogContentExample.prototype.dialog;
}
export class DialogContentExampleDialog {
}
DialogContentExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            },] },
];
/** @nocollapse */ DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
/** @nocollapse */ DialogContentExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1, "Install Angular");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-content", 1);
        i0.ɵɵelementStart(3, "h3");
        i0.ɵɵtext(4, "Develop across all platforms");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h3");
        i0.ɵɵtext(8, "Speed & Performance");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "h3");
        i0.ɵɵtext(12, "Incredible tooling");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵtext(14, "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "h3");
        i0.ɵɵtext(16, "Loved by millions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p");
        i0.ɵɵtext(18, "From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h3");
        i0.ɵɵtext(20, "What is Angular?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22, "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "h3");
        i0.ɵɵtext(24, "Architecture overview");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p");
        i0.ɵɵtext(26, "Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "p");
        i0.ɵɵtext(28, "The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "p");
        i0.ɵɵtext(30, "Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "p");
        i0.ɵɵtext(32, "Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "p");
        i0.ɵɵtext(34, "Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "p");
        i0.ɵɵtext(36, "The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "p");
        i0.ɵɵtext(38, "The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵtext(40, "An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "mat-dialog-actions", 2);
        i0.ɵɵelementStart(42, "button", 3);
        i0.ɵɵtext(43, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "button", 4);
        i0.ɵɵtext(45, "Install");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(44);
        i0.ɵɵproperty("mat-dialog-close", true);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogContentExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250ZW50LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQVVuRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7O0lBRXhDLFVBQVU7O2NBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBRTlELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQzs7OztZQVRPLFNBQVM7O3dGQVVKLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDWGpDLGlDQUEwQztRQUF2Qix1R0FBUyxnQkFBWSxJQUFDO1FBQUMsMkJBQVc7UUFBQSxpQkFBUzs7a0REV2pELG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUM7Ozs7SUFFYSxzQ0FBd0I7O0FBZXRDLE1BQU0sT0FBTywwQkFBMEI7OztZQUp0QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQzthQUNsRDs7b0dBQ1ksMEJBQTBCOytEQUExQiwwQkFBMEI7UUUzQnZDLDZCQUFxQjtRQUFBLCtCQUFlO1FBQUEsaUJBQUs7UUFDekMsNkNBQ0U7UUFBQSwwQkFBSTtRQUFBLDRDQUE0QjtRQUFBLGlCQUFLO1FBQ3JDLHlCQUFHO1FBQUEsa01BQ3FGO1FBQUEsaUJBQUk7UUFFNUYsMEJBQUk7UUFBQSxtQ0FBdUI7UUFBQSxpQkFBSztRQUNoQyx5QkFBRztRQUFBLDZSQUVxRjtRQUFBLGlCQUFJO1FBRTVGLDJCQUFJO1FBQUEsbUNBQWtCO1FBQUEsaUJBQUs7UUFDM0IsMEJBQUc7UUFBQSw2V0FHaUU7UUFBQSxpQkFBSTtRQUV4RSwyQkFBSTtRQUFBLGtDQUFpQjtRQUFBLGlCQUFLO1FBQzFCLDBCQUFHO1FBQUEscUtBQzBEO1FBQUEsaUJBQUk7UUFFakUsMkJBQUk7UUFBQSxpQ0FBZ0I7UUFBQSxpQkFBSztRQUV6QiwwQkFBRztRQUFBLDZVQUd3RDtRQUFBLGlCQUFJO1FBRS9ELDJCQUFJO1FBQUEsc0NBQXFCO1FBQUEsaUJBQUs7UUFFOUIsMEJBQUc7UUFBQSxxUUFFd0Q7UUFBQSxpQkFBSTtRQUUvRCwwQkFBRztRQUFBLCtWQUd3RDtRQUFBLGlCQUFJO1FBRS9ELDBCQUFHO1FBQUEsdU1BQ3NGO1FBQUEsaUJBQUk7UUFFN0YsMEJBQUc7UUFBQSxtT0FFcUI7UUFBQSxpQkFBSTtRQUU1QiwwQkFBRztRQUFBLCtKQUNpRDtRQUFBLGlCQUFJO1FBRXhELDBCQUFHO1FBQUEsMFBBRWdEO1FBQUEsaUJBQUk7UUFFdkQsMEJBQUc7UUFBQSw4SkFDNkM7UUFBQSxpQkFBSTtRQUVwRCwwQkFBRztRQUFBLHVQQUVnRDtRQUFBLGlCQUFJO1FBQ3pELGlCQUFxQjtRQUNyQiw4Q0FDRTtRQUFBLGtDQUFvQztRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDbkQsa0NBQTZEO1FBQUEsd0JBQU87UUFBQSxpQkFBUztRQUMvRSxpQkFBcUI7O1FBREEsZ0JBQXlCO1FBQXpCLHVDQUF5Qjs7a0RGbkNqQywwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIHdpdGggaGVhZGVyLCBzY3JvbGxhYmxlIGNvbnRlbnQgYW5kIGFjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1jb250ZW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRlbnRFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBEaWFsb2cgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG4iLCI8aDIgbWF0LWRpYWxvZy10aXRsZT5JbnN0YWxsIEFuZ3VsYXI8L2gyPlxuPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+XG4gIDxoMz5EZXZlbG9wIGFjcm9zcyBhbGwgcGxhdGZvcm1zPC9oMz5cbiAgPHA+TGVhcm4gb25lIHdheSB0byBidWlsZCBhcHBsaWNhdGlvbnMgd2l0aCBBbmd1bGFyIGFuZCByZXVzZSB5b3VyIGNvZGUgYW5kIGFiaWxpdGllcyB0byBidWlsZFxuICAgIGFwcHMgZm9yIGFueSBkZXBsb3ltZW50IHRhcmdldC4gRm9yIHdlYiwgbW9iaWxlIHdlYiwgbmF0aXZlIG1vYmlsZSBhbmQgbmF0aXZlIGRlc2t0b3AuPC9wPlxuXG4gIDxoMz5TcGVlZCAmYW1wOyBQZXJmb3JtYW5jZTwvaDM+XG4gIDxwPkFjaGlldmUgdGhlIG1heGltdW0gc3BlZWQgcG9zc2libGUgb24gdGhlIFdlYiBQbGF0Zm9ybSB0b2RheSwgYW5kIHRha2UgaXQgZnVydGhlciwgdmlhIFdlYlxuICAgIFdvcmtlcnMgYW5kIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gQW5ndWxhciBwdXRzIHlvdSBpbiBjb250cm9sIG92ZXIgc2NhbGFiaWxpdHkuIE1lZXQgaHVnZVxuICAgIGRhdGEgcmVxdWlyZW1lbnRzIGJ5IGJ1aWxkaW5nIGRhdGEgbW9kZWxzIG9uIFJ4SlMsIEltbXV0YWJsZS5qcyBvciBhbm90aGVyIHB1c2gtbW9kZWwuPC9wPlxuXG4gIDxoMz5JbmNyZWRpYmxlIHRvb2xpbmc8L2gzPlxuICA8cD5CdWlsZCBmZWF0dXJlcyBxdWlja2x5IHdpdGggc2ltcGxlLCBkZWNsYXJhdGl2ZSB0ZW1wbGF0ZXMuIEV4dGVuZCB0aGUgdGVtcGxhdGUgbGFuZ3VhZ2Ugd2l0aFxuICAgIHlvdXIgb3duIGNvbXBvbmVudHMgYW5kIHVzZSBhIHdpZGUgYXJyYXkgb2YgZXhpc3RpbmcgY29tcG9uZW50cy4gR2V0IGltbWVkaWF0ZSBBbmd1bGFyLXNwZWNpZmljXG4gICAgaGVscCBhbmQgZmVlZGJhY2sgd2l0aCBuZWFybHkgZXZlcnkgSURFIGFuZCBlZGl0b3IuIEFsbCB0aGlzIGNvbWVzIHRvZ2V0aGVyIHNvIHlvdSBjYW4gZm9jdXNcbiAgICBvbiBidWlsZGluZyBhbWF6aW5nIGFwcHMgcmF0aGVyIHRoYW4gdHJ5aW5nIHRvIG1ha2UgdGhlIGNvZGUgd29yay48L3A+XG5cbiAgPGgzPkxvdmVkIGJ5IG1pbGxpb25zPC9oMz5cbiAgPHA+RnJvbSBwcm90b3R5cGUgdGhyb3VnaCBnbG9iYWwgZGVwbG95bWVudCwgQW5ndWxhciBkZWxpdmVycyB0aGUgcHJvZHVjdGl2aXR5IGFuZCBzY2FsYWJsZVxuICAgIGluZnJhc3RydWN0dXJlIHRoYXQgc3VwcG9ydHMgR29vZ2xlJ3MgbGFyZ2VzdCBhcHBsaWNhdGlvbnMuPC9wPlxuXG4gIDxoMz5XaGF0IGlzIEFuZ3VsYXI/PC9oMz5cblxuICA8cD5Bbmd1bGFyIGlzIGEgcGxhdGZvcm0gdGhhdCBtYWtlcyBpdCBlYXN5IHRvIGJ1aWxkIGFwcGxpY2F0aW9ucyB3aXRoIHRoZSB3ZWIuIEFuZ3VsYXJcbiAgICBjb21iaW5lcyBkZWNsYXJhdGl2ZSB0ZW1wbGF0ZXMsIGRlcGVuZGVuY3kgaW5qZWN0aW9uLCBlbmQgdG8gZW5kIHRvb2xpbmcsIGFuZCBpbnRlZ3JhdGVkXG4gICAgYmVzdCBwcmFjdGljZXMgdG8gc29sdmUgZGV2ZWxvcG1lbnQgY2hhbGxlbmdlcy4gQW5ndWxhciBlbXBvd2VycyBkZXZlbG9wZXJzIHRvIGJ1aWxkXG4gICAgYXBwbGljYXRpb25zIHRoYXQgbGl2ZSBvbiB0aGUgd2ViLCBtb2JpbGUsIG9yIHRoZSBkZXNrdG9wPC9wPlxuXG4gIDxoMz5BcmNoaXRlY3R1cmUgb3ZlcnZpZXc8L2gzPlxuXG4gIDxwPkFuZ3VsYXIgaXMgYSBwbGF0Zm9ybSBhbmQgZnJhbWV3b3JrIGZvciBidWlsZGluZyBjbGllbnQgYXBwbGljYXRpb25zIGluIEhUTUwgYW5kIFR5cGVTY3JpcHQuXG4gIEFuZ3VsYXIgaXMgaXRzZWxmIHdyaXR0ZW4gaW4gVHlwZVNjcmlwdC4gSXQgaW1wbGVtZW50cyBjb3JlIGFuZCBvcHRpb25hbCBmdW5jdGlvbmFsaXR5IGFzIGFcbiAgc2V0IG9mIFR5cGVTY3JpcHQgbGlicmFyaWVzIHRoYXQgeW91IGltcG9ydCBpbnRvIHlvdXIgYXBwcy48L3A+XG5cbiAgPHA+VGhlIGJhc2ljIGJ1aWxkaW5nIGJsb2NrcyBvZiBhbiBBbmd1bGFyIGFwcGxpY2F0aW9uIGFyZSBOZ01vZHVsZXMsIHdoaWNoIHByb3ZpZGUgYSBjb21waWxhdGlvblxuICBjb250ZXh0IGZvciBjb21wb25lbnRzLiBOZ01vZHVsZXMgY29sbGVjdCByZWxhdGVkIGNvZGUgaW50byBmdW5jdGlvbmFsIHNldHM7IGFuIEFuZ3VsYXIgYXBwIGlzXG4gIGRlZmluZWQgYnkgYSBzZXQgb2YgTmdNb2R1bGVzLiBBbiBhcHAgYWx3YXlzIGhhcyBhdCBsZWFzdCBhIHJvb3QgbW9kdWxlIHRoYXQgZW5hYmxlc1xuICBib290c3RyYXBwaW5nLCBhbmQgdHlwaWNhbGx5IGhhcyBtYW55IG1vcmUgZmVhdHVyZSBtb2R1bGVzLjwvcD5cblxuICA8cD5Db21wb25lbnRzIGRlZmluZSB2aWV3cywgd2hpY2ggYXJlIHNldHMgb2Ygc2NyZWVuIGVsZW1lbnRzIHRoYXQgQW5ndWxhciBjYW4gY2hvb3NlIGFtb25nIGFuZFxuICBtb2RpZnkgYWNjb3JkaW5nIHRvIHlvdXIgcHJvZ3JhbSBsb2dpYyBhbmQgZGF0YS4gRXZlcnkgYXBwIGhhcyBhdCBsZWFzdCBhIHJvb3QgY29tcG9uZW50LjwvcD5cblxuICA8cD5Db21wb25lbnRzIHVzZSBzZXJ2aWNlcywgd2hpY2ggcHJvdmlkZSBzcGVjaWZpYyBmdW5jdGlvbmFsaXR5IG5vdCBkaXJlY3RseSByZWxhdGVkIHRvIHZpZXdzLlxuICBTZXJ2aWNlIHByb3ZpZGVycyBjYW4gYmUgaW5qZWN0ZWQgaW50byBjb21wb25lbnRzIGFzIGRlcGVuZGVuY2llcywgbWFraW5nIHlvdXIgY29kZSBtb2R1bGFyLFxuICByZXVzYWJsZSwgYW5kIGVmZmljaWVudC48L3A+XG5cbiAgPHA+Qm90aCBjb21wb25lbnRzIGFuZCBzZXJ2aWNlcyBhcmUgc2ltcGx5IGNsYXNzZXMsIHdpdGggZGVjb3JhdG9ycyB0aGF0IG1hcmsgdGhlaXIgdHlwZSBhbmRcbiAgcHJvdmlkZSBtZXRhZGF0YSB0aGF0IHRlbGxzIEFuZ3VsYXIgaG93IHRvIHVzZSB0aGVtLjwvcD5cblxuICA8cD5UaGUgbWV0YWRhdGEgZm9yIGEgY29tcG9uZW50IGNsYXNzIGFzc29jaWF0ZXMgaXQgd2l0aCBhIHRlbXBsYXRlIHRoYXQgZGVmaW5lcyBhIHZpZXcuIEFcbiAgdGVtcGxhdGUgY29tYmluZXMgb3JkaW5hcnkgSFRNTCB3aXRoIEFuZ3VsYXIgZGlyZWN0aXZlcyBhbmQgYmluZGluZyBtYXJrdXAgdGhhdCBhbGxvdyBBbmd1bGFyXG4gIHRvIG1vZGlmeSB0aGUgSFRNTCBiZWZvcmUgcmVuZGVyaW5nIGl0IGZvciBkaXNwbGF5LjwvcD5cblxuICA8cD5UaGUgbWV0YWRhdGEgZm9yIGEgc2VydmljZSBjbGFzcyBwcm92aWRlcyB0aGUgaW5mb3JtYXRpb24gQW5ndWxhciBuZWVkcyB0byBtYWtlIGl0IGF2YWlsYWJsZVxuICB0byBjb21wb25lbnRzIHRocm91Z2ggRGVwZW5kZW5jeSBJbmplY3Rpb24gKERJKS48L3A+XG5cbiAgPHA+QW4gYXBwJ3MgY29tcG9uZW50cyB0eXBpY2FsbHkgZGVmaW5lIG1hbnkgdmlld3MsIGFycmFuZ2VkIGhpZXJhcmNoaWNhbGx5LiBBbmd1bGFyIHByb3ZpZGVzXG4gIHRoZSBSb3V0ZXIgc2VydmljZSB0byBoZWxwIHlvdSBkZWZpbmUgbmF2aWdhdGlvbiBwYXRocyBhbW9uZyB2aWV3cy4gVGhlIHJvdXRlciBwcm92aWRlc1xuICBzb3BoaXN0aWNhdGVkIGluLWJyb3dzZXIgbmF2aWdhdGlvbmFsIGNhcGFiaWxpdGllcy48L3A+XG48L21hdC1kaWFsb2ctY29udGVudD5cbjxtYXQtZGlhbG9nLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U+Q2FuY2VsPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJ0cnVlXCIgY2RrRm9jdXNJbml0aWFsPkluc3RhbGw8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuIl19