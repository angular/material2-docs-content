import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i7 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$3 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i3 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import * as i5 from '@angular/material/form-field';

/**
 * @title Tab group with aligned labels
 */
class TabGroupAlignExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupAlignExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupAlignExample, selector: "tab-group-align-example", ngImport: i0, template: "<!-- #docregion align-start -->\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupAlignExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-align-example', template: "<!-- #docregion align-start -->\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
        }] });

/**
 * @title Tab group animations
 */
class TabGroupAnimationsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupAnimationsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupAnimationsExample, selector: "tab-group-animations-example", ngImport: i0, template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-animations-example', template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
        }] });

/**
 * @title Tab group with asynchronously loading tab contents
 */
class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((observer) => {
            setTimeout(() => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupAsyncExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupAsyncExample, selector: "tab-group-async-example", ngImport: i0, template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupAsyncExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-async-example', template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n" }]
        }], ctorParameters: function () { return []; } });

/**
 * @title Basic use of the tab group
 */
class TabGroupBasicExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupBasicExample, selector: "tab-group-basic-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-basic-example', template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Using tabs with a custom label template
 */
class TabGroupCustomLabelExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupCustomLabelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupCustomLabelExample, selector: "tab-group-custom-label-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1$2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupCustomLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-custom-label-example', template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"] }]
        }] });

/**
 * @title Tab group with dynamic height based on tab contents
 */
class TabGroupDynamicHeightExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupDynamicHeightExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupDynamicHeightExample, selector: "tab-group-dynamic-height-example", ngImport: i0, template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupDynamicHeightExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-height-example', template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatTabGroupHarness
 */
class TabGroupHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupHarnessExample, selector: "tab-group-harness-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\n    <span class=\"test-tab-content\">Your personal information</span>\n  </mat-tab>\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\n    <span class=\"test-tab-content\">Privacy settings</span>\n  </mat-tab>\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\n    <span class=\"test-tab-content\">How to update profile picture</span>\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-harness-example', template: "<mat-tab-group>\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\n    <span class=\"test-tab-content\">Your personal information</span>\n  </mat-tab>\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\n    <span class=\"test-tab-content\">Privacy settings</span>\n  </mat-tab>\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\n    <span class=\"test-tab-content\">How to update profile picture</span>\n  </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group with dynamically changing tabs
 */
class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupDynamicExample, selector: "tab-group-dynamic-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"] }]
        }] });

/**
 * @title Tab group with the headers on the bottom
 */
class TabGroupHeaderBelowExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupHeaderBelowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupHeaderBelowExample, selector: "tab-group-header-below-example", ngImport: i0, template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupHeaderBelowExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-header-below-example', template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupLazyLoadedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupLazyLoadedExample, selector: "tab-group-lazy-loaded-example", ngImport: i0, template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "directive", type: i1.MatTabContent, selector: "[matTabContent]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: i1$1.DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupLazyLoadedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-lazy-loaded-example', template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
class TabGroupPreserveContentExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupPreserveContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupPreserveContentExample, selector: "tab-group-preserve-content-example", ngImport: i0, template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupPreserveContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-preserve-content-example', template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group with stretched labels
 */
class TabGroupStretchedExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupStretchedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupStretchedExample, selector: "tab-group-stretched-example", ngImport: i0, template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupStretchedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-stretched-example', template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"] }]
        }] });

/**
 * @title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupThemeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupThemeExample, selector: "tab-group-theme-example", ngImport: i0, template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Color</span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Background Color</span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"], dependencies: [{ kind: "directive", type: i1$3.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1$3.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupThemeExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-theme-example', template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Color</span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Background Color</span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"] }]
        }] });

/**
 * @title Basic use of the tab nav bar
 */
class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabNavBarBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabNavBarBasicExample, selector: "tab-nav-bar-basic-example", ngImport: i0, template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabNavBar", "matTabNav"] }, { kind: "component", type: i1.MatTabNavPanel, selector: "mat-tab-nav-panel", inputs: ["id"], exportAs: ["matTabNavPanel"] }, { kind: "component", type: i1.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["disabled", "disableRipple", "tabIndex", "active", "id"], exportAs: ["matTabLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabNavBarBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-nav-bar-basic-example', template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"] }]
        }] });

/**
 * @title Tab group with paginated tabs
 */
class TabGroupPaginatedExample {
    constructor() {
        this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupPaginatedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupPaginatedExample, selector: "tab-group-paginated-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>", dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupPaginatedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-paginated-example', template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>" }]
        }] });

/**
 * @title Tab group with inverted tabs
 */
class TabGroupInvertedExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupInvertedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupInvertedExample, selector: "tab-group-inverted-example", ngImport: i0, template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>", dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupInvertedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-inverted-example', template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>" }]
        }] });

/**
 * @title Tab group with ink bar fit to content
 */
class TabGroupInkBarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupInkBarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: TabGroupInkBarExample, selector: "tab-group-ink-bar-example", ngImport: i0, template: "<mat-tab-group fitInkBarToContent>\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupInkBarExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-ink-bar-example', template: "<mat-tab-group fitInkBarToContent>\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\n</mat-tab-group>\n" }]
        }] });

const EXAMPLES = [
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicExample,
    TabGroupDynamicHeightExample,
    TabGroupHarnessExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
    TabGroupPreserveContentExample,
    TabGroupPaginatedExample,
    TabGroupInvertedExample,
    TabGroupInkBarExample,
];
class TabGroupExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupExamplesModule, declarations: [TabGroupAlignExample,
            TabGroupAnimationsExample,
            TabGroupAsyncExample,
            TabGroupBasicExample,
            TabGroupCustomLabelExample,
            TabGroupDynamicExample,
            TabGroupDynamicHeightExample,
            TabGroupHarnessExample,
            TabGroupHeaderBelowExample,
            TabGroupLazyLoadedExample,
            TabGroupStretchedExample,
            TabGroupThemeExample,
            TabNavBarBasicExample,
            TabGroupPreserveContentExample,
            TabGroupPaginatedExample,
            TabGroupInvertedExample,
            TabGroupInkBarExample], imports: [CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatTabsModule,
            ReactiveFormsModule], exports: [TabGroupAlignExample,
            TabGroupAnimationsExample,
            TabGroupAsyncExample,
            TabGroupBasicExample,
            TabGroupCustomLabelExample,
            TabGroupDynamicExample,
            TabGroupDynamicHeightExample,
            TabGroupHarnessExample,
            TabGroupHeaderBelowExample,
            TabGroupLazyLoadedExample,
            TabGroupStretchedExample,
            TabGroupThemeExample,
            TabNavBarBasicExample,
            TabGroupPreserveContentExample,
            TabGroupPaginatedExample,
            TabGroupInvertedExample,
            TabGroupInkBarExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupExamplesModule, imports: [CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatTabsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: TabGroupExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatInputModule,
                        MatTabsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupExamplesModule, TabGroupHarnessExample, TabGroupHeaderBelowExample, TabGroupInkBarExample, TabGroupInvertedExample, TabGroupLazyLoadedExample, TabGroupPaginatedExample, TabGroupPreserveContentExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample };
//# sourceMappingURL=tabs.mjs.map
