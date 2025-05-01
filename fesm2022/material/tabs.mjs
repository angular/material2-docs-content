import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3$1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * @title Tab group with aligned labels
 */
class TabGroupAlignExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupAlignExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupAlignExample, isStandalone: true, selector: "tab-group-align-example", ngImport: i0, template: "<!-- #docregion align-start -->\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupAlignExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-align-example', imports: [MatTabsModule], template: "<!-- #docregion align-start -->\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-stretch-tabs=\"false\" mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
        }] });

/**
 * @title Tab group animations
 */
class TabGroupAnimationsExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupAnimationsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupAnimationsExample, isStandalone: true, selector: "tab-group-animations-example", ngImport: i0, template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-animations-example', imports: [MatTabsModule], template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
        }] });

/**
 * @title Tab group with asynchronously loading tab contents
 */
class TabGroupAsyncExample {
    asyncTabs;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupAsyncExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0-next.5", type: TabGroupAsyncExample, isStandalone: true, selector: "tab-group-async-example", ngImport: i0, template: "@if ((asyncTabs | async) === null) {\n  Loading tabs...\n}\n\n<mat-tab-group>\n  @for (tab of asyncTabs | async; track tab) {\n    <mat-tab>\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n      {{tab.content}}\n    </mat-tab>\n  }\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupAsyncExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-async-example', imports: [MatTabsModule, AsyncPipe], template: "@if ((asyncTabs | async) === null) {\n  Loading tabs...\n}\n\n<mat-tab-group>\n  @for (tab of asyncTabs | async; track tab) {\n    <mat-tab>\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n      {{tab.content}}\n    </mat-tab>\n  }\n</mat-tab-group>\n" }]
        }], ctorParameters: () => [] });

/**
 * @title Basic use of the tab group
 */
class TabGroupBasicExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupBasicExample, isStandalone: true, selector: "tab-group-basic-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-basic-example', imports: [MatTabsModule], template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Using tabs with a custom label template
 */
class TabGroupCustomLabelExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupCustomLabelExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupCustomLabelExample, isStandalone: true, selector: "tab-group-custom-label-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupCustomLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-custom-label-example', imports: [MatTabsModule, MatIconModule], template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"] }]
        }] });

/**
 * @title Tab group with dynamic height based on tab contents
 */
class TabGroupDynamicHeightExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupDynamicHeightExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupDynamicHeightExample, isStandalone: true, selector: "tab-group-dynamic-height-example", ngImport: i0, template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupDynamicHeightExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-height-example', imports: [MatTabsModule], template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Tab group with dynamically changing tabs
 */
class TabGroupDynamicExample {
    tabs = ['First', 'Second', 'Third'];
    selected = new FormControl(0);
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
        this.selected.setValue(index);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0-next.5", type: TabGroupDynamicExample, isStandalone: true, selector: "tab-group-dynamic-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button matButton=\"elevated\"\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  @for (tab of tabs; track tab; let index = $index) {\n    <mat-tab [label]=\"tab\">\n      Contents for {{tab}} tab\n\n      <button matButton=\"elevated\"\n              class=\"example-delete-tab-button\"\n              [disabled]=\"tabs.length === 1\"\n              (click)=\"removeTab(index)\">\n        Delete Tab\n      </button>\n    </mat-tab>\n  }\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$2.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-example', imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatTabsModule,
                    ], template: "<mat-form-field>\n  <mat-label>Selected tab index</mat-label>\n  <input matInput type=\"number\" [formControl]=\"selected\">\n</mat-form-field>\n\n<div>\n  <button matButton=\"elevated\"\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  @for (tab of tabs; track tab; let index = $index) {\n    <mat-tab [label]=\"tab\">\n      Contents for {{tab}} tab\n\n      <button matButton=\"elevated\"\n              class=\"example-delete-tab-button\"\n              [disabled]=\"tabs.length === 1\"\n              (click)=\"removeTab(index)\">\n        Delete Tab\n      </button>\n    </mat-tab>\n  }\n</mat-tab-group>\n", styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatTabGroupHarness
 */
class TabGroupHarnessExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupHarnessExample, isStandalone: true, selector: "tab-group-harness-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\n    <span class=\"test-tab-content\">Your personal information</span>\n  </mat-tab>\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\n    <span class=\"test-tab-content\">Privacy settings</span>\n  </mat-tab>\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\n    <span class=\"test-tab-content\">How to update profile picture</span>\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-harness-example', imports: [MatTabsModule], template: "<mat-tab-group>\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\n    <span class=\"test-tab-content\">Your personal information</span>\n  </mat-tab>\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\n    <span class=\"test-tab-content\">Privacy settings</span>\n  </mat-tab>\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\n    <span class=\"test-tab-content\">How to update profile picture</span>\n  </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group with headers below the content
 */
class TabGroupHeaderBelowExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupHeaderBelowExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupHeaderBelowExample, isStandalone: true, selector: "tab-group-header-below-example", ngImport: i0, template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupHeaderBelowExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-header-below-example', imports: [MatTabsModule], template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group with ink bar fit to content
 */
class TabGroupInkBarExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupInkBarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupInkBarExample, isStandalone: true, selector: "tab-group-ink-bar-example", ngImport: i0, template: "<mat-tab-group fitInkBarToContent>\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupInkBarExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-ink-bar-example', imports: [MatTabsModule], template: "<mat-tab-group fitInkBarToContent>\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n  <mat-tab label=\"Fourth\" disabled>Content 4</mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
class TabGroupLazyLoadedExample {
    tabLoadTimes = [];
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupLazyLoadedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupLazyLoadedExample, isStandalone: true, selector: "tab-group-lazy-loaded-example", ngImport: i0, template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabContent, selector: "[matTabContent]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupLazyLoadedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-lazy-loaded-example', imports: [MatTabsModule, DatePipe], template: "<mat-tab-group>\n<!-- #docregion mat-tab-content -->\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n<!-- #enddocregion mat-tab-content -->\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group with paginated tabs
 */
class TabGroupPaginatedExample {
    lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupPaginatedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0-next.5", type: TabGroupPaginatedExample, isStandalone: true, selector: "tab-group-paginated-example", ngImport: i0, template: "<mat-tab-group>\n  @for (tab of lotsOfTabs; track tab) {\n    <mat-tab [label]=\"tab\">Content</mat-tab>\n  }\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupPaginatedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-paginated-example', imports: [MatTabsModule], template: "<mat-tab-group>\n  @for (tab of lotsOfTabs; track tab) {\n    <mat-tab [label]=\"tab\">Content</mat-tab>\n  }\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
class TabGroupPreserveContentExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupPreserveContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupPreserveContentExample, isStandalone: true, selector: "tab-group-preserve-content-example", ngImport: i0, template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      style=\"border: 0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupPreserveContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-preserve-content-example', imports: [MatTabsModule], template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      style=\"border: 0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n" }]
        }] });

/**
 * @title Tab group with stretched labels
 */
class TabGroupStretchedExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupStretchedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-next.5", type: TabGroupStretchedExample, isStandalone: true, selector: "tab-group-stretched-example", ngImport: i0, template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass", "id"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "mat-align-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor", "aria-label", "aria-labelledby"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabGroupStretchedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-stretched-example', imports: [MatTabsModule], template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"] }]
        }] });

/**
 * @title Basic use of the tab nav bar
 */
class TabNavBarBasicExample {
    links = ['First', 'Second', 'Third'];
    activeLink = this.links[0];
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabNavBarBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0-next.5", type: TabNavBarBasicExample, isStandalone: true, selector: "tab-nav-bar-basic-example", ngImport: i0, template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [tabPanel]=\"tabPanel\">\n  @for (link of links; track link) {\n    <a mat-tab-link\n      (click)=\"activeLink = link\"\n      [active]=\"activeLink == link\"> {{link}} </a>\n  }\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button matButton=\"elevated\" class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["fitInkBarToContent", "mat-stretch-tabs", "animationDuration", "backgroundColor", "disableRipple", "color", "tabPanel"], exportAs: ["matTabNavBar", "matTabNav"] }, { kind: "component", type: i1.MatTabNavPanel, selector: "mat-tab-nav-panel", inputs: ["id"], exportAs: ["matTabNavPanel"] }, { kind: "component", type: i1.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["active", "disabled", "disableRipple", "tabIndex", "id"], exportAs: ["matTabLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$2.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.5", ngImport: i0, type: TabNavBarBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-nav-bar-basic-example', imports: [MatTabsModule, MatButtonModule], template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [tabPanel]=\"tabPanel\">\n  @for (link of links; track link) {\n    <a mat-tab-link\n      (click)=\"activeLink = link\"\n      [active]=\"activeLink == link\"> {{link}} </a>\n  }\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button matButton=\"elevated\" class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"] }]
        }] });

export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupHarnessExample, TabGroupHeaderBelowExample, TabGroupInkBarExample, TabGroupLazyLoadedExample, TabGroupPaginatedExample, TabGroupPreserveContentExample, TabGroupStretchedExample, TabNavBarBasicExample };
//# sourceMappingURL=tabs.mjs.map
