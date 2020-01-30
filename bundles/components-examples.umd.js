(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/material/form-field'), require('@angular/components-examples/cdk-experimental/popover-edit'), require('@angular/components-examples/cdk/a11y'), require('@angular/components-examples/cdk/clipboard'), require('@angular/components-examples/cdk/drag-drop'), require('@angular/components-examples/cdk/platform'), require('@angular/components-examples/cdk/portal'), require('@angular/components-examples/cdk/scrolling'), require('@angular/components-examples/cdk/stepper'), require('@angular/components-examples/cdk/table'), require('@angular/components-examples/cdk/text-field'), require('@angular/components-examples/cdk/tree'), require('@angular/components-examples/material-experimental/popover-edit'), require('@angular/components-examples/material/autocomplete'), require('@angular/components-examples/material/badge'), require('@angular/components-examples/material/bottom-sheet'), require('@angular/components-examples/material/button-toggle'), require('@angular/components-examples/material/button'), require('@angular/components-examples/material/card'), require('@angular/components-examples/material/checkbox'), require('@angular/components-examples/material/chips'), require('@angular/components-examples/material/core'), require('@angular/components-examples/material/datepicker'), require('@angular/components-examples/material/dialog'), require('@angular/components-examples/material/divider'), require('@angular/components-examples/material/expansion'), require('@angular/components-examples/material/form-field'), require('@angular/components-examples/material/grid-list'), require('@angular/components-examples/material/icon'), require('@angular/components-examples/material/input'), require('@angular/components-examples/material/list'), require('@angular/components-examples/material/menu'), require('@angular/components-examples/material/paginator'), require('@angular/components-examples/material/progress-bar'), require('@angular/components-examples/material/progress-spinner'), require('@angular/components-examples/material/radio'), require('@angular/components-examples/material/select'), require('@angular/components-examples/material/sidenav'), require('@angular/components-examples/material/slide-toggle'), require('@angular/components-examples/material/slider'), require('@angular/components-examples/material/snack-bar'), require('@angular/components-examples/material/sort'), require('@angular/components-examples/material/stepper'), require('@angular/components-examples/material/table'), require('@angular/components-examples/material/tabs'), require('@angular/components-examples/material/toolbar'), require('@angular/components-examples/material/tooltip'), require('@angular/components-examples/material/tree')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples', ['exports', 'tslib', '@angular/core', '@angular/material/form-field', '@angular/components-examples/cdk-experimental/popover-edit', '@angular/components-examples/cdk/a11y', '@angular/components-examples/cdk/clipboard', '@angular/components-examples/cdk/drag-drop', '@angular/components-examples/cdk/platform', '@angular/components-examples/cdk/portal', '@angular/components-examples/cdk/scrolling', '@angular/components-examples/cdk/stepper', '@angular/components-examples/cdk/table', '@angular/components-examples/cdk/text-field', '@angular/components-examples/cdk/tree', '@angular/components-examples/material-experimental/popover-edit', '@angular/components-examples/material/autocomplete', '@angular/components-examples/material/badge', '@angular/components-examples/material/bottom-sheet', '@angular/components-examples/material/button-toggle', '@angular/components-examples/material/button', '@angular/components-examples/material/card', '@angular/components-examples/material/checkbox', '@angular/components-examples/material/chips', '@angular/components-examples/material/core', '@angular/components-examples/material/datepicker', '@angular/components-examples/material/dialog', '@angular/components-examples/material/divider', '@angular/components-examples/material/expansion', '@angular/components-examples/material/form-field', '@angular/components-examples/material/grid-list', '@angular/components-examples/material/icon', '@angular/components-examples/material/input', '@angular/components-examples/material/list', '@angular/components-examples/material/menu', '@angular/components-examples/material/paginator', '@angular/components-examples/material/progress-bar', '@angular/components-examples/material/progress-spinner', '@angular/components-examples/material/radio', '@angular/components-examples/material/select', '@angular/components-examples/material/sidenav', '@angular/components-examples/material/slide-toggle', '@angular/components-examples/material/slider', '@angular/components-examples/material/snack-bar', '@angular/components-examples/material/sort', '@angular/components-examples/material/stepper', '@angular/components-examples/material/table', '@angular/components-examples/material/tabs', '@angular/components-examples/material/toolbar', '@angular/components-examples/material/tooltip', '@angular/components-examples/material/tree'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = {}), global.tslib, global.ng.core, global.ng.material.formField, global.ng.componentsExamples.cdkExperimental.popoverEdit, global.ng.componentsExamples.cdk.a11y, global.ng.componentsExamples.cdk.clipboard, global.ng.componentsExamples.cdk.dragDrop, global.ng.componentsExamples.cdk.platform, global.ng.componentsExamples.cdk.portal, global.ng.componentsExamples.cdk.scrolling, global.ng.componentsExamples.cdk.stepper, global.ng.componentsExamples.cdk.table, global.ng.componentsExamples.cdk.textField, global.ng.componentsExamples.cdk.tree, global.ng.componentsExamples.materialExperimental.popoverEdit, global.ng.componentsExamples.material.autocomplete, global.ng.componentsExamples.material.badge, global.ng.componentsExamples.material.bottomSheet, global.ng.componentsExamples.material.buttonToggle, global.ng.componentsExamples.material.button, global.ng.componentsExamples.material.card, global.ng.componentsExamples.material.checkbox, global.ng.componentsExamples.material.chips, global.ng.componentsExamples.material.core, global.ng.componentsExamples.material.datepicker, global.ng.componentsExamples.material.dialog, global.ng.componentsExamples.material.divider, global.ng.componentsExamples.material.expansion, global.ng.componentsExamples.material.formField, global.ng.componentsExamples.material.gridList, global.ng.componentsExamples.material.icon, global.ng.componentsExamples.material.input, global.ng.componentsExamples.material.list, global.ng.componentsExamples.material.menu, global.ng.componentsExamples.material.paginator, global.ng.componentsExamples.material.progressBar, global.ng.componentsExamples.material.progressSpinner, global.ng.componentsExamples.material.radio, global.ng.componentsExamples.material.select, global.ng.componentsExamples.material.sidenav, global.ng.componentsExamples.material.slideToggle, global.ng.componentsExamples.material.slider, global.ng.componentsExamples.material.snackBar, global.ng.componentsExamples.material.sort, global.ng.componentsExamples.material.stepper, global.ng.componentsExamples.material.table, global.ng.componentsExamples.material.tabs, global.ng.componentsExamples.material.toolbar, global.ng.componentsExamples.material.tooltip, global.ng.componentsExamples.material.tree));
}(this, (function (exports, tslib, i0, formField, popoverEdit, a11y, clipboard, dragDrop, platform, portal, scrolling, stepper, table, textField, tree, popoverEdit$1, autocomplete, badge, bottomSheet, buttonToggle, button, card, checkbox, chips, core, datepicker, dialog, divider, expansion, formField$1, gridList, icon, input, list, menu, paginator, progressBar, progressSpinner, radio, select, sidenav, slideToggle, slider, snackBar, sort, stepper$1, table$1, tabs, toolbar, tooltip, tree$1) { 'use strict';

    /**
     ******************************************************************************
     * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
     *
     * IMPORTANT: Due to a bug with the bazel ng_module rule, this file is now
     * checked into the repository. Please rebuild the example module by running
     * the following command: "yarn gulp build-examples-module"
     *
     * BUG: https://github.com/angular/angular/issues/30259
     ******************************************************************************/
    var EXAMPLE_COMPONENTS = {
        "cdk-popover-edit-cdk-table-flex": {
            "title": "CDK Popover Edit on a flex cdk-table.",
            "component": popoverEdit.CdkPopoverEditCdkTableFlexExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-popover-edit-cdk-table": {
            "title": "CDK Popover Edit on a CDK data-table",
            "component": popoverEdit.CdkPopoverEditCdkTableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-popover-edit-cell-span-vanilla-table": {
            "title": "CDK Popover Edit spanning multiple columns on an HTML data-table",
            "component": popoverEdit.CdkPopoverEditCellSpanVanillaTableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-popover-edit-tab-out-vanilla-table": {
            "title": "CDK Popover Edit with spreadsheet-like configuration on an HTML data-table",
            "component": popoverEdit.CdkPopoverEditTabOutVanillaTableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-popover-edit-vanilla-table": {
            "title": "CDK Popover Edit on an HTML data-table",
            "component": popoverEdit.CdkPopoverEditVanillaTableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "focus-monitor-directives": {
            "title": "Monitoring focus with FocusMonitor",
            "component": a11y.FocusMonitorDirectivesExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "focus-monitor-focus-via": {
            "title": "Focusing with a specific FocusOrigin",
            "component": a11y.FocusMonitorFocusViaExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "focus-monitor-overview": {
            "title": "Monitoring focus with FocusMonitor",
            "component": a11y.FocusMonitorOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-clipboard-overview": {
            "title": "Clipboard overview",
            "component": clipboard.CdkClipboardOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-axis-lock": {
            "title": "Drag&Drop position locking",
            "component": dragDrop.CdkDragDropAxisLockExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-boundary": {
            "title": "Drag&Drop boundary",
            "component": dragDrop.CdkDragDropBoundaryExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-connected-sorting-group": {
            "title": "Drag&Drop connected sorting group",
            "component": dragDrop.CdkDragDropConnectedSortingGroupExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-connected-sorting": {
            "title": "Drag&Drop connected sorting",
            "component": dragDrop.CdkDragDropConnectedSortingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-custom-placeholder": {
            "title": "Drag&Drop custom placeholer",
            "component": dragDrop.CdkDragDropCustomPlaceholderExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-custom-preview": {
            "title": "Drag&Drop custom preview",
            "component": dragDrop.CdkDragDropCustomPreviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-delay": {
            "title": "Delayed dragging",
            "component": dragDrop.CdkDragDropDelayExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-disabled-sorting": {
            "title": "Drag&Drop disabled sorting",
            "component": dragDrop.CdkDragDropDisabledSortingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-disabled": {
            "title": "Drag&Drop disabled",
            "component": dragDrop.CdkDragDropDisabledExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-enter-predicate": {
            "title": "Drag&Drop enter predicate",
            "component": dragDrop.CdkDragDropEnterPredicateExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-free-drag-position": {
            "title": "Programmatically setting the free drag position",
            "component": dragDrop.CdkDragDropFreeDragPositionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-handle": {
            "title": "Drag&Drop with a handle",
            "component": dragDrop.CdkDragDropHandleExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-horizontal-sorting": {
            "title": "Drag&Drop horizontal sorting",
            "component": dragDrop.CdkDragDropHorizontalSortingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-overview": {
            "title": "Basic Drag&Drop",
            "component": dragDrop.CdkDragDropOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-root-element": {
            "title": "Drag&Drop with alternate root element",
            "component": dragDrop.CdkDragDropRootElementExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-drag-drop-sorting": {
            "title": "Drag&Drop sorting",
            "component": dragDrop.CdkDragDropSortingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-platform-overview": {
            "title": "Platform overview",
            "component": platform.CdkPlatformOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-portal-overview": {
            "title": "Portal overview",
            "component": portal.CdkPortalOverviewExample,
            "additionalFiles": [],
            "selectorName": "CdkPortalOverviewExample, ComponentPortalExample"
        },
        "cdk-virtual-scroll-context": {
            "title": "Virtual scroll context variables",
            "component": scrolling.CdkVirtualScrollContextExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-virtual-scroll-custom-strategy": {
            "title": "Virtual scroll with a custom strategy",
            "component": scrolling.CdkVirtualScrollCustomStrategyExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-virtual-scroll-data-source": {
            "title": "Virtual scroll with a custom data source",
            "component": scrolling.CdkVirtualScrollDataSourceExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-virtual-scroll-dl": {
            "title": "Virtual scrolling `<dl>`",
            "component": scrolling.CdkVirtualScrollDlExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-virtual-scroll-fixed-buffer": {
            "title": "Fixed size virtual scroll with custom buffer parameters",
            "component": scrolling.CdkVirtualScrollFixedBufferExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-virtual-scroll-horizontal": {
            "title": "Horizontal virtual scroll",
            "component": scrolling.CdkVirtualScrollHorizontalExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-virtual-scroll-overview": {
            "title": "Basic virtual scroll",
            "component": scrolling.CdkVirtualScrollOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-virtual-scroll-template-cache": {
            "title": "Virtual scroll with no template caching",
            "component": scrolling.CdkVirtualScrollTemplateCacheExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-custom-stepper-without-form": {
            "title": "A custom CDK stepper without a form",
            "component": stepper.CdkCustomStepperWithoutFormExample,
            "additionalFiles": [
                "./example-custom-stepper.html",
                "./example-custom-stepper.css"
            ],
            "selectorName": "CdkCustomStepperWithoutFormExample, CustomStepper"
        },
        "cdk-table-basic-flex": {
            "title": "Basic use of `<cdk-table>` (uses display flex)",
            "component": table.CdkTableBasicFlexExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-table-basic": {
            "title": "Basic CDK data-table",
            "component": table.CdkTableBasicExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "text-field-autofill-directive": {
            "title": "Monitoring autofill state with cdkAutofill",
            "component": textField.TextFieldAutofillDirectiveExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "text-field-autofill-monitor": {
            "title": "Monitoring autofill state with AutofillMonitor",
            "component": textField.TextFieldAutofillMonitorExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "text-field-autosize-textarea": {
            "title": "Auto-resizing textarea",
            "component": textField.TextFieldAutosizeTextareaExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-tree-flat": {
            "title": "Tree with flat nodes",
            "component": tree.CdkTreeFlatExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "cdk-tree-nested": {
            "title": "Tree with nested nodes",
            "component": tree.CdkTreeNestedExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "popover-edit-cell-span-mat-table": {
            "title": "Material Popover Edit spanning multiple columns on a Material data-table",
            "component": popoverEdit$1.PopoverEditCellSpanMatTableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "popover-edit-mat-table-flex": {
            "title": "Material Popover Edit on a flex Material data-table",
            "component": popoverEdit$1.PopoverEditMatTableFlexExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "popover-edit-mat-table": {
            "title": "Material Popover Edit on a Material data-table",
            "component": popoverEdit$1.PopoverEditMatTableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "popover-edit-tab-out-mat-table": {
            "title": "Material Popover Edit with spreadsheet-like configuration on a Material data-table",
            "component": popoverEdit$1.PopoverEditTabOutMatTableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "autocomplete-auto-active-first-option": {
            "title": "Highlight the first autocomplete option",
            "component": autocomplete.AutocompleteAutoActiveFirstOptionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "autocomplete-display": {
            "title": "Display value autocomplete",
            "component": autocomplete.AutocompleteDisplayExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "autocomplete-filter": {
            "title": "Filter autocomplete",
            "component": autocomplete.AutocompleteFilterExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "autocomplete-optgroup": {
            "title": "Option groups autocomplete",
            "component": autocomplete.AutocompleteOptgroupExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "autocomplete-overview": {
            "title": "Autocomplete overview",
            "component": autocomplete.AutocompleteOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "autocomplete-plain-input": {
            "title": "Plain input autocomplete",
            "component": autocomplete.AutocompletePlainInputExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "autocomplete-simple": {
            "title": "Simple autocomplete",
            "component": autocomplete.AutocompleteSimpleExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "badge-overview": {
            "title": "Badge overview",
            "component": badge.BadgeOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "bottom-sheet-overview": {
            "title": "Bottom Sheet Overview",
            "component": bottomSheet.BottomSheetOverviewExample,
            "additionalFiles": [
                "bottom-sheet-overview-example-sheet.html"
            ],
            "selectorName": "BottomSheetOverviewExample, BottomSheetOverviewExampleSheet"
        },
        "button-toggle-appearance": {
            "title": "Button toggle appearance",
            "component": buttonToggle.ButtonToggleAppearanceExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "button-toggle-exclusive": {
            "title": "Exclusive selection",
            "component": buttonToggle.ButtonToggleExclusiveExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "button-toggle-overview": {
            "title": "Basic button-toggles",
            "component": buttonToggle.ButtonToggleOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "button-overview": {
            "title": "Basic buttons",
            "component": button.ButtonOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "button-types": {
            "title": "Button varieties",
            "component": button.ButtonTypesExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "card-fancy": {
            "title": "Card with multiple sections",
            "component": card.CardFancyExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "card-overview": {
            "title": "Basic cards",
            "component": card.CardOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "checkbox-configurable": {
            "title": "Configurable checkbox",
            "component": checkbox.CheckboxConfigurableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "checkbox-overview": {
            "title": "Basic checkboxes",
            "component": checkbox.CheckboxOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "chips-autocomplete": {
            "title": "Chips Autocomplete",
            "component": chips.ChipsAutocompleteExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "chips-drag-drop": {
            "title": "Chips Drag and Drop",
            "component": chips.ChipsDragDropExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "chips-input": {
            "title": "Chips with input",
            "component": chips.ChipsInputExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "chips-overview": {
            "title": "Basic chips",
            "component": chips.ChipsOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "chips-stacked": {
            "title": "Stacked chips",
            "component": chips.ChipsStackedExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "elevation-overview": {
            "title": "Elevation CSS classes",
            "component": core.ElevationOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "ripple-overview": {
            "title": "MatRipple basic usage",
            "component": core.RippleOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-api": {
            "title": "Datepicker open method",
            "component": datepicker.DatepickerApiExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-color": {
            "title": "Datepicker palette colors",
            "component": datepicker.DatepickerColorExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-custom-header": {
            "title": "Datepicker with custom calendar header",
            "component": datepicker.DatepickerCustomHeaderExample,
            "additionalFiles": [],
            "selectorName": "DatepickerCustomHeaderExample, ExampleHeader"
        },
        "datepicker-custom-icon": {
            "title": "Datepicker with custom icon",
            "component": datepicker.DatepickerCustomIconExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-date-class": {
            "title": "Datepicker with custom date classes",
            "component": datepicker.DatepickerDateClassExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-disabled": {
            "title": "Disabled datepicker",
            "component": datepicker.DatepickerDisabledExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-events": {
            "title": "Datepicker input and change events",
            "component": datepicker.DatepickerEventsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-filter": {
            "title": "Datepicker with filter validation",
            "component": datepicker.DatepickerFilterExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-formats": {
            "title": "Datepicker with custom formats",
            "component": datepicker.DatepickerFormatsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-locale": {
            "title": "Datepicker with different locale",
            "component": datepicker.DatepickerLocaleExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-min-max": {
            "title": "Datepicker with min & max validation",
            "component": datepicker.DatepickerMinMaxExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-moment": {
            "title": "Datepicker that uses Moment.js dates",
            "component": datepicker.DatepickerMomentExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-overview": {
            "title": "Basic datepicker",
            "component": datepicker.DatepickerOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-start-view": {
            "title": "Datepicker start date",
            "component": datepicker.DatepickerStartViewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-touch": {
            "title": "Datepicker touch UI",
            "component": datepicker.DatepickerTouchExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-value": {
            "title": "Datepicker selected value",
            "component": datepicker.DatepickerValueExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "datepicker-views-selection": {
            "title": "Datepicker emulating a Year and month picker",
            "component": datepicker.DatepickerViewsSelectionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "dialog-content": {
            "title": "Dialog with header, scrollable content and actions",
            "component": dialog.DialogContentExample,
            "additionalFiles": [
                "dialog-content-example-dialog.html"
            ],
            "selectorName": "DialogContentExample, DialogContentExampleDialog"
        },
        "dialog-data": {
            "title": "Injecting data when opening a dialog",
            "component": dialog.DialogDataExample,
            "additionalFiles": [
                "dialog-data-example-dialog.html"
            ],
            "selectorName": "DialogDataExample, DialogDataExampleDialog"
        },
        "dialog-elements": {
            "title": "Dialog elements",
            "component": dialog.DialogElementsExample,
            "additionalFiles": [
                "dialog-elements-example-dialog.html"
            ],
            "selectorName": "DialogElementsExample, DialogElementsExampleDialog"
        },
        "dialog-overview": {
            "title": "Dialog Overview",
            "component": dialog.DialogOverviewExample,
            "additionalFiles": [
                "dialog-overview-example-dialog.html"
            ],
            "selectorName": "DialogOverviewExample, DialogOverviewExampleDialog"
        },
        "divider-overview": {
            "title": "Basic divider",
            "component": divider.DividerOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "expansion-expand-collapse-all": {
            "title": "Accordion with expand/collapse all toggles",
            "component": expansion.ExpansionExpandCollapseAllExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "expansion-overview": {
            "title": "Basic expansion panel",
            "component": expansion.ExpansionOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "expansion-steps": {
            "title": "Expansion panel as accordion",
            "component": expansion.ExpansionStepsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "form-field-appearance": {
            "title": "Form field appearance variants",
            "component": formField$1.FormFieldAppearanceExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "form-field-custom-control": {
            "title": "Form field with custom telephone number input control.",
            "component": formField$1.FormFieldCustomControlExample,
            "additionalFiles": [
                "example-tel-input-example.html",
                "example-tel-input-example.css"
            ],
            "selectorName": "FormFieldCustomControlExample, MyTelInput"
        },
        "form-field-error": {
            "title": "Form field with error messages",
            "component": formField$1.FormFieldErrorExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "form-field-hint": {
            "title": "Form field with hints",
            "component": formField$1.FormFieldHintExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "form-field-label": {
            "title": "Form field with label",
            "component": formField$1.FormFieldLabelExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "form-field-overview": {
            "title": "Simple form field",
            "component": formField$1.FormFieldOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "form-field-prefix-suffix": {
            "title": "Form field with prefix & suffix",
            "component": formField$1.FormFieldPrefixSuffixExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "form-field-theming": {
            "title": "Form field theming",
            "component": formField$1.FormFieldThemingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "grid-list-dynamic": {
            "title": "Dynamic grid-list",
            "component": gridList.GridListDynamicExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "grid-list-overview": {
            "title": "Basic grid-list",
            "component": gridList.GridListOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "icon-overview": {
            "title": "Basic icons",
            "component": icon.IconOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "icon-svg": {
            "title": "SVG icons",
            "component": icon.IconSvgExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "input-clearable": {
            "title": "Input with a clear button",
            "component": input.InputClearableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "input-error-state-matcher": {
            "title": "Input with a custom ErrorStateMatcher",
            "component": input.InputErrorStateMatcherExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "input-errors": {
            "title": "Input with error messages",
            "component": input.InputErrorsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "input-form": {
            "title": "Inputs in a form",
            "component": input.InputFormExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "input-hint": {
            "title": "Input with hints",
            "component": input.InputHintExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "input-overview": {
            "title": "Basic Inputs",
            "component": input.InputOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "input-prefix-suffix": {
            "title": "Inputs with prefixes and suffixes",
            "component": input.InputPrefixSuffixExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "list-overview": {
            "title": "Basic list",
            "component": list.ListOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "list-sections": {
            "title": "List with sections",
            "component": list.ListSectionsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "list-selection": {
            "title": "List with selection",
            "component": list.ListSelectionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "menu-icons": {
            "title": "Menu with icons",
            "component": menu.MenuIconsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "menu-overview": {
            "title": "Basic menu",
            "component": menu.MenuOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "menu-position": {
            "title": "Menu positioning",
            "component": menu.MenuPositionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "nested-menu": {
            "title": "Nested menu",
            "component": menu.NestedMenuExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "paginator-configurable": {
            "title": "Configurable paginator",
            "component": paginator.PaginatorConfigurableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "paginator-overview": {
            "title": "Paginator",
            "component": paginator.PaginatorOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "progress-bar-buffer": {
            "title": "Buffer progress-bar",
            "component": progressBar.ProgressBarBufferExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "progress-bar-configurable": {
            "title": "Configurable progress-bar",
            "component": progressBar.ProgressBarConfigurableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "progress-bar-determinate": {
            "title": "Determinate progress-bar",
            "component": progressBar.ProgressBarDeterminateExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "progress-bar-indeterminate": {
            "title": "Indeterminate progress-bar",
            "component": progressBar.ProgressBarIndeterminateExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "progress-bar-query": {
            "title": "Query progress-bar",
            "component": progressBar.ProgressBarQueryExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "progress-spinner-configurable": {
            "title": "Configurable progress spinner",
            "component": progressSpinner.ProgressSpinnerConfigurableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "progress-spinner-overview": {
            "title": "Basic progress-spinner",
            "component": progressSpinner.ProgressSpinnerOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "radio-ng-model": {
            "title": "Radios with ngModel",
            "component": radio.RadioNgModelExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "radio-overview": {
            "title": "Basic radios",
            "component": radio.RadioOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-custom-trigger": {
            "title": "Select with custom trigger text",
            "component": select.SelectCustomTriggerExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-disabled": {
            "title": "Disabled select",
            "component": select.SelectDisabledExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-error-state-matcher": {
            "title": "Select with a custom ErrorStateMatcher",
            "component": select.SelectErrorStateMatcherExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-form": {
            "title": "Select in a form",
            "component": select.SelectFormExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-hint-error": {
            "title": "Select with form field features",
            "component": select.SelectHintErrorExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-initial-value": {
            "title": "Basic select with initial value and no form",
            "component": select.SelectInitialValueExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-multiple": {
            "title": "Select with multiple selection",
            "component": select.SelectMultipleExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-no-ripple": {
            "title": "Select with no option ripple",
            "component": select.SelectNoRippleExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-optgroup": {
            "title": "Select with option groups",
            "component": select.SelectOptgroupExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-overview": {
            "title": "Basic select",
            "component": select.SelectOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-panel-class": {
            "title": "Select with custom panel styling",
            "component": select.SelectPanelClassExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-reactive-form": {
            "title": "Select in a reactive form",
            "component": select.SelectReactiveFormExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-reset": {
            "title": "Select with reset option",
            "component": select.SelectResetExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "select-value-binding": {
            "title": "Select with 2-way value binding",
            "component": select.SelectValueBindingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-autosize": {
            "title": "Autosize sidenav",
            "component": sidenav.SidenavAutosizeExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-backdrop": {
            "title": "Drawer with explicit backdrop setting",
            "component": sidenav.SidenavBackdropExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-disable-close": {
            "title": "Sidenav with custom escape and backdrop click behavior",
            "component": sidenav.SidenavDisableCloseExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-drawer-overview": {
            "title": "Basic drawer",
            "component": sidenav.SidenavDrawerOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-fixed": {
            "title": "Fixed sidenav",
            "component": sidenav.SidenavFixedExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-mode": {
            "title": "Sidenav with configurable mode",
            "component": sidenav.SidenavModeExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-open-close": {
            "title": "Sidenav open & close behavior",
            "component": sidenav.SidenavOpenCloseExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-overview": {
            "title": "Basic sidenav",
            "component": sidenav.SidenavOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-position": {
            "title": "Implicit main content with two sidenavs",
            "component": sidenav.SidenavPositionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sidenav-responsive": {
            "title": "Responsive sidenav",
            "component": sidenav.SidenavResponsiveExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "slide-toggle-configurable": {
            "title": "Configurable slide-toggle",
            "component": slideToggle.SlideToggleConfigurableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "slide-toggle-forms": {
            "title": "Slide-toggle with forms",
            "component": slideToggle.SlideToggleFormsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "slide-toggle-overview": {
            "title": "Basic slide-toggles",
            "component": slideToggle.SlideToggleOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "slider-configurable": {
            "title": "Configurable slider",
            "component": slider.SliderConfigurableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "slider-formatting": {
            "title": "Slider with custom thumb label formatting.",
            "component": slider.SliderFormattingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "slider-overview": {
            "title": "Basic slider",
            "component": slider.SliderOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "snack-bar-component": {
            "title": "Snack-bar with a custom component",
            "component": snackBar.SnackBarComponentExample,
            "additionalFiles": [
                "snack-bar-component-example-snack.html"
            ],
            "selectorName": "SnackBarComponentExample, PizzaPartyComponent"
        },
        "snack-bar-overview": {
            "title": "Basic snack-bar",
            "component": snackBar.SnackBarOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "snack-bar-position": {
            "title": "Snack-bar with configurable position",
            "component": snackBar.SnackBarPositionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "sort-overview": {
            "title": "Sorting overview",
            "component": sort.SortOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "stepper-editable": {
            "title": "Stepper with editable steps",
            "component": stepper$1.StepperEditableExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "stepper-errors": {
            "title": "Stepper that displays errors in the steps",
            "component": stepper$1.StepperErrorsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "stepper-label-position-bottom": {
            "title": "Stepper label bottom position",
            "component": stepper$1.StepperLabelPositionBottomExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "stepper-optional": {
            "title": "Stepper with optional steps",
            "component": stepper$1.StepperOptionalExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "stepper-overview": {
            "title": "Stepper overview",
            "component": stepper$1.StepperOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "stepper-states": {
            "title": "Stepper with customized states",
            "component": stepper$1.StepperStatesExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "stepper-vertical": {
            "title": "Stepper vertical",
            "component": stepper$1.StepperVerticalExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-basic-flex": {
            "title": "Basic use of `<mat-table>` (uses display flex)",
            "component": table$1.TableBasicFlexExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-basic": {
            "title": "Basic use of `<table mat-table>`",
            "component": table$1.TableBasicExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-dynamic-columns": {
            "title": "Table dynamically changing the columns displayed",
            "component": table$1.TableDynamicColumnsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-expandable-rows": {
            "title": "Table with expandable rows",
            "component": table$1.TableExpandableRowsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-filtering": {
            "title": "Table with filtering",
            "component": table$1.TableFilteringExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-footer-row": {
            "title": "Footer row table",
            "component": table$1.TableFooterRowExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-http": {
            "title": "Table retrieving data through HTTP",
            "component": table$1.TableHttpExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-multiple-header-footer": {
            "title": "Table with multiple header and footer rows",
            "component": table$1.TableMultipleHeaderFooterExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-overview": {
            "title": "Data table with sorting, pagination, and filtering.",
            "component": table$1.TableOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-pagination": {
            "title": "Table with pagination",
            "component": table$1.TablePaginationExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-row-context": {
            "title": "Table showing each row context properties.",
            "component": table$1.TableRowContextExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-selection": {
            "title": "Table with selection",
            "component": table$1.TableSelectionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-sorting": {
            "title": "Table with sorting",
            "component": table$1.TableSortingExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-sticky-columns": {
            "title": "Table with sticky columns",
            "component": table$1.TableStickyColumnsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-sticky-complex-flex": {
            "title": "Flex-layout tables with toggle-able sticky headers, footers, and columns",
            "component": table$1.TableStickyComplexFlexExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-sticky-complex": {
            "title": "Tables with toggle-able sticky headers, footers, and columns",
            "component": table$1.TableStickyComplexExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-sticky-footer": {
            "title": "Table with a sticky footer",
            "component": table$1.TableStickyFooterExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-sticky-header": {
            "title": "Table with sticky header",
            "component": table$1.TableStickyHeaderExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-text-column-advanced": {
            "title": "Use of 'mat-text-column' with various configurations of the interface.",
            "component": table$1.TableTextColumnAdvancedExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-text-column": {
            "title": "Use of `mat-text-column` which can be used for simple columns that only need to display\na text value for the header and cells.",
            "component": table$1.TableTextColumnExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "table-wrapped": {
            "title": "Table example that shows how to wrap a table component for definition and behavior reuse.",
            "component": table$1.TableWrappedExample,
            "additionalFiles": [
                "wrapper-table.html"
            ],
            "selectorName": "TableWrappedExample, WrapperTable"
        },
        "tab-group-align": {
            "title": "Tab group with aligned labels",
            "component": tabs.TabGroupAlignExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-animations": {
            "title": "Tab group animations",
            "component": tabs.TabGroupAnimationsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-async": {
            "title": "Tab group with asynchronously loading tab contents",
            "component": tabs.TabGroupAsyncExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-basic": {
            "title": "Basic use of the tab group",
            "component": tabs.TabGroupBasicExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-custom-label": {
            "title": "Using tabs with a custom label template",
            "component": tabs.TabGroupCustomLabelExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-dynamic-height": {
            "title": "Tab group with dynamic height based on tab contents",
            "component": tabs.TabGroupDynamicHeightExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-dynamic": {
            "title": "Tab group with dynamically changing tabs",
            "component": tabs.TabGroupDynamicExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-header-below": {
            "title": "Tab group with the headers on the bottom",
            "component": tabs.TabGroupHeaderBelowExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-lazy-loaded": {
            "title": "Tab group where the tab content is loaded lazily (when activated)",
            "component": tabs.TabGroupLazyLoadedExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-stretched": {
            "title": "Tab group with stretched labels",
            "component": tabs.TabGroupStretchedExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-group-theme": {
            "title": "Customizing the theme options on the tab group",
            "component": tabs.TabGroupThemeExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tab-nav-bar-basic": {
            "title": "Basic use of the tab nav bar",
            "component": tabs.TabNavBarBasicExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "toolbar-multirow": {
            "title": "Multi-row toolbar",
            "component": toolbar.ToolbarMultirowExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "toolbar-overview": {
            "title": "Basic toolbar",
            "component": toolbar.ToolbarOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-auto-hide": {
            "title": "Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.",
            "component": tooltip.TooltipAutoHideExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-custom-class": {
            "title": "Tooltip that can have a custom class applied.",
            "component": tooltip.TooltipCustomClassExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-delay": {
            "title": "Tooltip with a show and hide delay",
            "component": tooltip.TooltipDelayExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-disabled": {
            "title": "Tooltip that can be disabled",
            "component": tooltip.TooltipDisabledExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-manual": {
            "title": "Tooltip that can be manually shown/hidden.",
            "component": tooltip.TooltipManualExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-message": {
            "title": "Tooltip with a changing message",
            "component": tooltip.TooltipMessageExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-modified-defaults": {
            "title": "Tooltip with a show and hide delay",
            "component": tooltip.TooltipModifiedDefaultsExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-overview": {
            "title": "Basic tooltip",
            "component": tooltip.TooltipOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tooltip-position": {
            "title": "Tooltip with a custom position",
            "component": tooltip.TooltipPositionExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tree-checklist": {
            "title": "Tree with checkboxes",
            "component": tree$1.TreeChecklistExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tree-dynamic": {
            "title": "Tree with dynamic data",
            "component": tree$1.TreeDynamicExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tree-flat-overview": {
            "title": "Tree with flat nodes",
            "component": tree$1.TreeFlatOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tree-loadmore": {
            "title": "Tree with partially loaded data",
            "component": tree$1.TreeLoadmoreExample,
            "additionalFiles": [],
            "selectorName": ""
        },
        "tree-nested-overview": {
            "title": "Tree with nested nodes",
            "component": tree$1.TreeNestedOverviewExample,
            "additionalFiles": [],
            "selectorName": ""
        }
    };
    var EXAMPLE_MODULES = [popoverEdit.CdkPopoverEditExamplesModule,
        a11y.CdkA11yExamplesModule,
        clipboard.CdkClipboardExamplesModule,
        dragDrop.CdkDragDropExamplesModule,
        platform.CdkPlatformExamplesModule,
        portal.CdkPortalExamplesModule,
        scrolling.CdkScrollingExamplesModule,
        stepper.CdkStepperExamplesModule,
        table.CdkTableExamplesModule,
        textField.CdkTextFieldExamplesModule,
        tree.CdkTreeExamplesModule,
        popoverEdit$1.PopoverEditExamplesModule,
        autocomplete.AutocompleteExamplesModule,
        badge.BadgeExamplesModule,
        bottomSheet.BottomSheetExamplesModule,
        buttonToggle.ButtonToggleExamplesModule,
        button.ButtonExamplesModule,
        card.CardExamplesModule,
        checkbox.CheckboxExamplesModule,
        chips.ChipsExamplesModule,
        core.CoreExamplesModule,
        datepicker.DatepickerExamplesModule,
        dialog.DialogExamplesModule,
        divider.DividerExamplesModule,
        expansion.ExpansionExamplesModule,
        formField$1.FormFieldExamplesModule,
        gridList.GridListExamplesModule,
        icon.IconExamplesModule,
        input.InputExamplesModule,
        list.ListExamplesModule,
        menu.MenuExamplesModule,
        paginator.PaginatorExamplesModule,
        progressBar.ProgressBarExamplesModule,
        progressSpinner.ProgressSpinnerExamplesModule,
        radio.RadioExamplesModule,
        select.SelectExamplesModule,
        sidenav.SidenavExamplesModule,
        slideToggle.SlideToggleExamplesModule,
        slider.SliderExamplesModule,
        snackBar.SnackBarExamplesModule,
        sort.SortExamplesModule,
        stepper$1.StepperExamplesModule,
        table$1.TableExamplesModule,
        tabs.TabGroupExamplesModule,
        toolbar.ToolbarExamplesModule,
        tooltip.TooltipExamplesModule,
        tree$1.TreeExamplesModule];
    var EXAMPLE_LIST = [popoverEdit.CdkPopoverEditCdkTableFlexExample,
        popoverEdit.CdkPopoverEditCdkTableExample,
        popoverEdit.CdkPopoverEditCellSpanVanillaTableExample,
        popoverEdit.CdkPopoverEditTabOutVanillaTableExample,
        popoverEdit.CdkPopoverEditVanillaTableExample,
        a11y.FocusMonitorDirectivesExample,
        a11y.FocusMonitorFocusViaExample,
        a11y.FocusMonitorOverviewExample,
        clipboard.CdkClipboardOverviewExample,
        dragDrop.CdkDragDropAxisLockExample,
        dragDrop.CdkDragDropBoundaryExample,
        dragDrop.CdkDragDropConnectedSortingGroupExample,
        dragDrop.CdkDragDropConnectedSortingExample,
        dragDrop.CdkDragDropCustomPlaceholderExample,
        dragDrop.CdkDragDropCustomPreviewExample,
        dragDrop.CdkDragDropDelayExample,
        dragDrop.CdkDragDropDisabledSortingExample,
        dragDrop.CdkDragDropDisabledExample,
        dragDrop.CdkDragDropEnterPredicateExample,
        dragDrop.CdkDragDropFreeDragPositionExample,
        dragDrop.CdkDragDropHandleExample,
        dragDrop.CdkDragDropHorizontalSortingExample,
        dragDrop.CdkDragDropOverviewExample,
        dragDrop.CdkDragDropRootElementExample,
        dragDrop.CdkDragDropSortingExample,
        platform.CdkPlatformOverviewExample,
        portal.CdkPortalOverviewExample,
        portal.ComponentPortalExample,
        scrolling.CdkVirtualScrollContextExample,
        scrolling.CdkVirtualScrollCustomStrategyExample,
        scrolling.CdkVirtualScrollDataSourceExample,
        scrolling.CdkVirtualScrollDlExample,
        scrolling.CdkVirtualScrollFixedBufferExample,
        scrolling.CdkVirtualScrollHorizontalExample,
        scrolling.CdkVirtualScrollOverviewExample,
        scrolling.CdkVirtualScrollTemplateCacheExample,
        stepper.CdkCustomStepperWithoutFormExample,
        stepper.CustomStepper,
        table.CdkTableBasicFlexExample,
        table.CdkTableBasicExample,
        textField.TextFieldAutofillDirectiveExample,
        textField.TextFieldAutofillMonitorExample,
        textField.TextFieldAutosizeTextareaExample,
        tree.CdkTreeFlatExample,
        tree.CdkTreeNestedExample,
        popoverEdit$1.PopoverEditCellSpanMatTableExample,
        popoverEdit$1.PopoverEditMatTableFlexExample,
        popoverEdit$1.PopoverEditMatTableExample,
        popoverEdit$1.PopoverEditTabOutMatTableExample,
        autocomplete.AutocompleteAutoActiveFirstOptionExample,
        autocomplete.AutocompleteDisplayExample,
        autocomplete.AutocompleteFilterExample,
        autocomplete.AutocompleteOptgroupExample,
        autocomplete.AutocompleteOverviewExample,
        autocomplete.AutocompletePlainInputExample,
        autocomplete.AutocompleteSimpleExample,
        badge.BadgeOverviewExample,
        bottomSheet.BottomSheetOverviewExample,
        bottomSheet.BottomSheetOverviewExampleSheet,
        buttonToggle.ButtonToggleAppearanceExample,
        buttonToggle.ButtonToggleExclusiveExample,
        buttonToggle.ButtonToggleOverviewExample,
        button.ButtonOverviewExample,
        button.ButtonTypesExample,
        card.CardFancyExample,
        card.CardOverviewExample,
        checkbox.CheckboxConfigurableExample,
        checkbox.CheckboxOverviewExample,
        chips.ChipsAutocompleteExample,
        chips.ChipsDragDropExample,
        chips.ChipsInputExample,
        chips.ChipsOverviewExample,
        chips.ChipsStackedExample,
        core.ElevationOverviewExample,
        core.RippleOverviewExample,
        datepicker.DatepickerApiExample,
        datepicker.DatepickerColorExample,
        datepicker.DatepickerCustomHeaderExample,
        datepicker.ExampleHeader,
        datepicker.DatepickerCustomIconExample,
        datepicker.DatepickerDateClassExample,
        datepicker.DatepickerDisabledExample,
        datepicker.DatepickerEventsExample,
        datepicker.DatepickerFilterExample,
        datepicker.DatepickerFormatsExample,
        datepicker.DatepickerLocaleExample,
        datepicker.DatepickerMinMaxExample,
        datepicker.DatepickerMomentExample,
        datepicker.DatepickerOverviewExample,
        datepicker.DatepickerStartViewExample,
        datepicker.DatepickerTouchExample,
        datepicker.DatepickerValueExample,
        datepicker.DatepickerViewsSelectionExample,
        dialog.DialogContentExample,
        dialog.DialogContentExampleDialog,
        dialog.DialogDataExample,
        dialog.DialogDataExampleDialog,
        dialog.DialogElementsExample,
        dialog.DialogElementsExampleDialog,
        dialog.DialogOverviewExample,
        dialog.DialogOverviewExampleDialog,
        divider.DividerOverviewExample,
        expansion.ExpansionExpandCollapseAllExample,
        expansion.ExpansionOverviewExample,
        expansion.ExpansionStepsExample,
        formField$1.FormFieldAppearanceExample,
        formField$1.FormFieldCustomControlExample,
        formField$1.MyTelInput,
        formField$1.FormFieldErrorExample,
        formField$1.FormFieldHintExample,
        formField$1.FormFieldLabelExample,
        formField$1.FormFieldOverviewExample,
        formField$1.FormFieldPrefixSuffixExample,
        formField$1.FormFieldThemingExample,
        gridList.GridListDynamicExample,
        gridList.GridListOverviewExample,
        icon.IconOverviewExample,
        icon.IconSvgExample,
        input.InputClearableExample,
        input.InputErrorStateMatcherExample,
        input.InputErrorsExample,
        input.InputFormExample,
        input.InputHintExample,
        input.InputOverviewExample,
        input.InputPrefixSuffixExample,
        list.ListOverviewExample,
        list.ListSectionsExample,
        list.ListSelectionExample,
        menu.MenuIconsExample,
        menu.MenuOverviewExample,
        menu.MenuPositionExample,
        menu.NestedMenuExample,
        paginator.PaginatorConfigurableExample,
        paginator.PaginatorOverviewExample,
        progressBar.ProgressBarBufferExample,
        progressBar.ProgressBarConfigurableExample,
        progressBar.ProgressBarDeterminateExample,
        progressBar.ProgressBarIndeterminateExample,
        progressBar.ProgressBarQueryExample,
        progressSpinner.ProgressSpinnerConfigurableExample,
        progressSpinner.ProgressSpinnerOverviewExample,
        radio.RadioNgModelExample,
        radio.RadioOverviewExample,
        select.SelectCustomTriggerExample,
        select.SelectDisabledExample,
        select.SelectErrorStateMatcherExample,
        select.SelectFormExample,
        select.SelectHintErrorExample,
        select.SelectInitialValueExample,
        select.SelectMultipleExample,
        select.SelectNoRippleExample,
        select.SelectOptgroupExample,
        select.SelectOverviewExample,
        select.SelectPanelClassExample,
        select.SelectReactiveFormExample,
        select.SelectResetExample,
        select.SelectValueBindingExample,
        sidenav.SidenavAutosizeExample,
        sidenav.SidenavBackdropExample,
        sidenav.SidenavDisableCloseExample,
        sidenav.SidenavDrawerOverviewExample,
        sidenav.SidenavFixedExample,
        sidenav.SidenavModeExample,
        sidenav.SidenavOpenCloseExample,
        sidenav.SidenavOverviewExample,
        sidenav.SidenavPositionExample,
        sidenav.SidenavResponsiveExample,
        slideToggle.SlideToggleConfigurableExample,
        slideToggle.SlideToggleFormsExample,
        slideToggle.SlideToggleOverviewExample,
        slider.SliderConfigurableExample,
        slider.SliderFormattingExample,
        slider.SliderOverviewExample,
        snackBar.SnackBarComponentExample,
        snackBar.PizzaPartyComponent,
        snackBar.SnackBarOverviewExample,
        snackBar.SnackBarPositionExample,
        sort.SortOverviewExample,
        stepper$1.StepperEditableExample,
        stepper$1.StepperErrorsExample,
        stepper$1.StepperLabelPositionBottomExample,
        stepper$1.StepperOptionalExample,
        stepper$1.StepperOverviewExample,
        stepper$1.StepperStatesExample,
        stepper$1.StepperVerticalExample,
        table$1.TableBasicFlexExample,
        table$1.TableBasicExample,
        table$1.TableDynamicColumnsExample,
        table$1.TableExpandableRowsExample,
        table$1.TableFilteringExample,
        table$1.TableFooterRowExample,
        table$1.TableHttpExample,
        table$1.TableMultipleHeaderFooterExample,
        table$1.TableOverviewExample,
        table$1.TablePaginationExample,
        table$1.TableRowContextExample,
        table$1.TableSelectionExample,
        table$1.TableSortingExample,
        table$1.TableStickyColumnsExample,
        table$1.TableStickyComplexFlexExample,
        table$1.TableStickyComplexExample,
        table$1.TableStickyFooterExample,
        table$1.TableStickyHeaderExample,
        table$1.TableTextColumnAdvancedExample,
        table$1.TableTextColumnExample,
        table$1.TableWrappedExample,
        table$1.WrapperTable,
        tabs.TabGroupAlignExample,
        tabs.TabGroupAnimationsExample,
        tabs.TabGroupAsyncExample,
        tabs.TabGroupBasicExample,
        tabs.TabGroupCustomLabelExample,
        tabs.TabGroupDynamicHeightExample,
        tabs.TabGroupDynamicExample,
        tabs.TabGroupHeaderBelowExample,
        tabs.TabGroupLazyLoadedExample,
        tabs.TabGroupStretchedExample,
        tabs.TabGroupThemeExample,
        tabs.TabNavBarBasicExample,
        toolbar.ToolbarMultirowExample,
        toolbar.ToolbarOverviewExample,
        tooltip.TooltipAutoHideExample,
        tooltip.TooltipCustomClassExample,
        tooltip.TooltipDelayExample,
        tooltip.TooltipDisabledExample,
        tooltip.TooltipManualExample,
        tooltip.TooltipMessageExample,
        tooltip.TooltipModifiedDefaultsExample,
        tooltip.TooltipOverviewExample,
        tooltip.TooltipPositionExample,
        tree$1.TreeChecklistExample,
        tree$1.TreeDynamicExample,
        tree$1.TreeFlatOverviewExample,
        tree$1.TreeLoadmoreExample,
        tree$1.TreeNestedOverviewExample];
    // Default MatFormField appearance to 'fill' as that is the new recommended approach and the
    // `legacy` and `standard` appearances are scheduled for deprecation in version 10.
    var ExampleModule = /** @class */ (function () {
        function ExampleModule() {
        }
        ExampleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: EXAMPLE_MODULES,
                        exports: EXAMPLE_MODULES,
                        providers: [
                            { provide: formField.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
                        ],
                    },] },
        ];
        ExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExampleModule });
        ExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExampleModule_Factory(t) { return new (t || ExampleModule)(); }, providers: [
                { provide: formField.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
            ], imports: [EXAMPLE_MODULES,
                popoverEdit.CdkPopoverEditExamplesModule,
                a11y.CdkA11yExamplesModule,
                clipboard.CdkClipboardExamplesModule,
                dragDrop.CdkDragDropExamplesModule,
                platform.CdkPlatformExamplesModule,
                portal.CdkPortalExamplesModule,
                scrolling.CdkScrollingExamplesModule,
                stepper.CdkStepperExamplesModule,
                table.CdkTableExamplesModule,
                textField.CdkTextFieldExamplesModule,
                tree.CdkTreeExamplesModule,
                popoverEdit$1.PopoverEditExamplesModule,
                autocomplete.AutocompleteExamplesModule,
                badge.BadgeExamplesModule,
                bottomSheet.BottomSheetExamplesModule,
                buttonToggle.ButtonToggleExamplesModule,
                button.ButtonExamplesModule,
                card.CardExamplesModule,
                checkbox.CheckboxExamplesModule,
                chips.ChipsExamplesModule,
                core.CoreExamplesModule,
                datepicker.DatepickerExamplesModule,
                dialog.DialogExamplesModule,
                divider.DividerExamplesModule,
                expansion.ExpansionExamplesModule,
                formField$1.FormFieldExamplesModule,
                gridList.GridListExamplesModule,
                icon.IconExamplesModule,
                input.InputExamplesModule,
                list.ListExamplesModule,
                menu.MenuExamplesModule,
                paginator.PaginatorExamplesModule,
                progressBar.ProgressBarExamplesModule,
                progressSpinner.ProgressSpinnerExamplesModule,
                radio.RadioExamplesModule,
                select.SelectExamplesModule,
                sidenav.SidenavExamplesModule,
                slideToggle.SlideToggleExamplesModule,
                slider.SliderExamplesModule,
                snackBar.SnackBarExamplesModule,
                sort.SortExamplesModule,
                stepper$1.StepperExamplesModule,
                table$1.TableExamplesModule,
                tabs.TabGroupExamplesModule,
                toolbar.ToolbarExamplesModule,
                tooltip.TooltipExamplesModule,
                tree$1.TreeExamplesModule] });
        return ExampleModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExampleModule, { imports: [popoverEdit.CdkPopoverEditExamplesModule,
            a11y.CdkA11yExamplesModule,
            clipboard.CdkClipboardExamplesModule,
            dragDrop.CdkDragDropExamplesModule,
            platform.CdkPlatformExamplesModule,
            portal.CdkPortalExamplesModule,
            scrolling.CdkScrollingExamplesModule,
            stepper.CdkStepperExamplesModule,
            table.CdkTableExamplesModule,
            textField.CdkTextFieldExamplesModule,
            tree.CdkTreeExamplesModule,
            popoverEdit$1.PopoverEditExamplesModule,
            autocomplete.AutocompleteExamplesModule,
            badge.BadgeExamplesModule,
            bottomSheet.BottomSheetExamplesModule,
            buttonToggle.ButtonToggleExamplesModule,
            button.ButtonExamplesModule,
            card.CardExamplesModule,
            checkbox.CheckboxExamplesModule,
            chips.ChipsExamplesModule,
            core.CoreExamplesModule,
            datepicker.DatepickerExamplesModule,
            dialog.DialogExamplesModule,
            divider.DividerExamplesModule,
            expansion.ExpansionExamplesModule,
            formField$1.FormFieldExamplesModule,
            gridList.GridListExamplesModule,
            icon.IconExamplesModule,
            input.InputExamplesModule,
            list.ListExamplesModule,
            menu.MenuExamplesModule,
            paginator.PaginatorExamplesModule,
            progressBar.ProgressBarExamplesModule,
            progressSpinner.ProgressSpinnerExamplesModule,
            radio.RadioExamplesModule,
            select.SelectExamplesModule,
            sidenav.SidenavExamplesModule,
            slideToggle.SlideToggleExamplesModule,
            slider.SliderExamplesModule,
            snackBar.SnackBarExamplesModule,
            sort.SortExamplesModule,
            stepper$1.StepperExamplesModule,
            table$1.TableExamplesModule,
            tabs.TabGroupExamplesModule,
            toolbar.ToolbarExamplesModule,
            tooltip.TooltipExamplesModule,
            tree$1.TreeExamplesModule], exports: [popoverEdit.CdkPopoverEditExamplesModule,
            a11y.CdkA11yExamplesModule,
            clipboard.CdkClipboardExamplesModule,
            dragDrop.CdkDragDropExamplesModule,
            platform.CdkPlatformExamplesModule,
            portal.CdkPortalExamplesModule,
            scrolling.CdkScrollingExamplesModule,
            stepper.CdkStepperExamplesModule,
            table.CdkTableExamplesModule,
            textField.CdkTextFieldExamplesModule,
            tree.CdkTreeExamplesModule,
            popoverEdit$1.PopoverEditExamplesModule,
            autocomplete.AutocompleteExamplesModule,
            badge.BadgeExamplesModule,
            bottomSheet.BottomSheetExamplesModule,
            buttonToggle.ButtonToggleExamplesModule,
            button.ButtonExamplesModule,
            card.CardExamplesModule,
            checkbox.CheckboxExamplesModule,
            chips.ChipsExamplesModule,
            core.CoreExamplesModule,
            datepicker.DatepickerExamplesModule,
            dialog.DialogExamplesModule,
            divider.DividerExamplesModule,
            expansion.ExpansionExamplesModule,
            formField$1.FormFieldExamplesModule,
            gridList.GridListExamplesModule,
            icon.IconExamplesModule,
            input.InputExamplesModule,
            list.ListExamplesModule,
            menu.MenuExamplesModule,
            paginator.PaginatorExamplesModule,
            progressBar.ProgressBarExamplesModule,
            progressSpinner.ProgressSpinnerExamplesModule,
            radio.RadioExamplesModule,
            select.SelectExamplesModule,
            sidenav.SidenavExamplesModule,
            slideToggle.SlideToggleExamplesModule,
            slider.SliderExamplesModule,
            snackBar.SnackBarExamplesModule,
            sort.SortExamplesModule,
            stepper$1.StepperExamplesModule,
            table$1.TableExamplesModule,
            tabs.TabGroupExamplesModule,
            toolbar.ToolbarExamplesModule,
            tooltip.TooltipExamplesModule,
            tree$1.TreeExamplesModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExampleModule, [{
            type: i0.NgModule,
            args: [{
                    imports: EXAMPLE_MODULES,
                    exports: EXAMPLE_MODULES,
                    providers: [
                        { provide: formField.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
                    ],
                }]
        }], null, null); })();

    /**
     * Example data with information about component name, selector, files used in example, and path to
     * examples.
     */
    var ExampleData = /** @class */ (function () {
        function ExampleData(example) {
            var _a;
            if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
                return;
            }
            var exampleConfig = EXAMPLE_COMPONENTS[example];
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
            this.selectorName = this.indexFilename = example + "-example";
            if (exampleConfig.additionalFiles) {
                (_a = this.exampleFiles).push.apply(_a, tslib.__spread(exampleConfig.additionalFiles));
            }
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
            this.componentName = exampleConfig.selectorName ||
                exampleName.replace(/[\-]+/g, '') + 'Example';
        }
        return ExampleData;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'CdkPopoverEditCdkTableExample', {
        enumerable: true,
        get: function () {
            return popoverEdit.CdkPopoverEditCdkTableExample;
        }
    });
    Object.defineProperty(exports, 'CdkPopoverEditCdkTableFlexExample', {
        enumerable: true,
        get: function () {
            return popoverEdit.CdkPopoverEditCdkTableFlexExample;
        }
    });
    Object.defineProperty(exports, 'CdkPopoverEditCellSpanVanillaTableExample', {
        enumerable: true,
        get: function () {
            return popoverEdit.CdkPopoverEditCellSpanVanillaTableExample;
        }
    });
    Object.defineProperty(exports, 'CdkPopoverEditTabOutVanillaTableExample', {
        enumerable: true,
        get: function () {
            return popoverEdit.CdkPopoverEditTabOutVanillaTableExample;
        }
    });
    Object.defineProperty(exports, 'CdkPopoverEditVanillaTableExample', {
        enumerable: true,
        get: function () {
            return popoverEdit.CdkPopoverEditVanillaTableExample;
        }
    });
    Object.defineProperty(exports, 'FocusMonitorDirectivesExample', {
        enumerable: true,
        get: function () {
            return a11y.FocusMonitorDirectivesExample;
        }
    });
    Object.defineProperty(exports, 'FocusMonitorFocusViaExample', {
        enumerable: true,
        get: function () {
            return a11y.FocusMonitorFocusViaExample;
        }
    });
    Object.defineProperty(exports, 'FocusMonitorOverviewExample', {
        enumerable: true,
        get: function () {
            return a11y.FocusMonitorOverviewExample;
        }
    });
    Object.defineProperty(exports, 'CdkClipboardOverviewExample', {
        enumerable: true,
        get: function () {
            return clipboard.CdkClipboardOverviewExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropAxisLockExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropAxisLockExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropBoundaryExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropBoundaryExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropConnectedSortingExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropConnectedSortingExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropConnectedSortingGroupExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropConnectedSortingGroupExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropCustomPlaceholderExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropCustomPlaceholderExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropCustomPreviewExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropCustomPreviewExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropDelayExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropDelayExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropDisabledExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropDisabledExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropDisabledSortingExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropDisabledSortingExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropEnterPredicateExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropEnterPredicateExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropFreeDragPositionExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropFreeDragPositionExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropHandleExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropHandleExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropHorizontalSortingExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropHorizontalSortingExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropOverviewExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropOverviewExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropRootElementExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropRootElementExample;
        }
    });
    Object.defineProperty(exports, 'CdkDragDropSortingExample', {
        enumerable: true,
        get: function () {
            return dragDrop.CdkDragDropSortingExample;
        }
    });
    Object.defineProperty(exports, 'CdkPlatformOverviewExample', {
        enumerable: true,
        get: function () {
            return platform.CdkPlatformOverviewExample;
        }
    });
    Object.defineProperty(exports, 'CdkPortalOverviewExample', {
        enumerable: true,
        get: function () {
            return portal.CdkPortalOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ComponentPortalExample', {
        enumerable: true,
        get: function () {
            return portal.ComponentPortalExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollContextExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollContextExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollCustomStrategyExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollCustomStrategyExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollDataSourceExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollDataSourceExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollDlExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollDlExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollFixedBufferExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollFixedBufferExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollHorizontalExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollHorizontalExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollOverviewExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollOverviewExample;
        }
    });
    Object.defineProperty(exports, 'CdkVirtualScrollTemplateCacheExample', {
        enumerable: true,
        get: function () {
            return scrolling.CdkVirtualScrollTemplateCacheExample;
        }
    });
    Object.defineProperty(exports, 'CdkCustomStepperWithoutFormExample', {
        enumerable: true,
        get: function () {
            return stepper.CdkCustomStepperWithoutFormExample;
        }
    });
    Object.defineProperty(exports, 'CustomStepper', {
        enumerable: true,
        get: function () {
            return stepper.CustomStepper;
        }
    });
    Object.defineProperty(exports, 'CdkTableBasicExample', {
        enumerable: true,
        get: function () {
            return table.CdkTableBasicExample;
        }
    });
    Object.defineProperty(exports, 'CdkTableBasicFlexExample', {
        enumerable: true,
        get: function () {
            return table.CdkTableBasicFlexExample;
        }
    });
    Object.defineProperty(exports, 'TextFieldAutofillDirectiveExample', {
        enumerable: true,
        get: function () {
            return textField.TextFieldAutofillDirectiveExample;
        }
    });
    Object.defineProperty(exports, 'TextFieldAutofillMonitorExample', {
        enumerable: true,
        get: function () {
            return textField.TextFieldAutofillMonitorExample;
        }
    });
    Object.defineProperty(exports, 'TextFieldAutosizeTextareaExample', {
        enumerable: true,
        get: function () {
            return textField.TextFieldAutosizeTextareaExample;
        }
    });
    Object.defineProperty(exports, 'CdkTreeFlatExample', {
        enumerable: true,
        get: function () {
            return tree.CdkTreeFlatExample;
        }
    });
    Object.defineProperty(exports, 'CdkTreeNestedExample', {
        enumerable: true,
        get: function () {
            return tree.CdkTreeNestedExample;
        }
    });
    Object.defineProperty(exports, 'PopoverEditCellSpanMatTableExample', {
        enumerable: true,
        get: function () {
            return popoverEdit$1.PopoverEditCellSpanMatTableExample;
        }
    });
    Object.defineProperty(exports, 'PopoverEditMatTableExample', {
        enumerable: true,
        get: function () {
            return popoverEdit$1.PopoverEditMatTableExample;
        }
    });
    Object.defineProperty(exports, 'PopoverEditMatTableFlexExample', {
        enumerable: true,
        get: function () {
            return popoverEdit$1.PopoverEditMatTableFlexExample;
        }
    });
    Object.defineProperty(exports, 'PopoverEditTabOutMatTableExample', {
        enumerable: true,
        get: function () {
            return popoverEdit$1.PopoverEditTabOutMatTableExample;
        }
    });
    Object.defineProperty(exports, 'AutocompleteAutoActiveFirstOptionExample', {
        enumerable: true,
        get: function () {
            return autocomplete.AutocompleteAutoActiveFirstOptionExample;
        }
    });
    Object.defineProperty(exports, 'AutocompleteDisplayExample', {
        enumerable: true,
        get: function () {
            return autocomplete.AutocompleteDisplayExample;
        }
    });
    Object.defineProperty(exports, 'AutocompleteFilterExample', {
        enumerable: true,
        get: function () {
            return autocomplete.AutocompleteFilterExample;
        }
    });
    Object.defineProperty(exports, 'AutocompleteOptgroupExample', {
        enumerable: true,
        get: function () {
            return autocomplete.AutocompleteOptgroupExample;
        }
    });
    Object.defineProperty(exports, 'AutocompleteOverviewExample', {
        enumerable: true,
        get: function () {
            return autocomplete.AutocompleteOverviewExample;
        }
    });
    Object.defineProperty(exports, 'AutocompletePlainInputExample', {
        enumerable: true,
        get: function () {
            return autocomplete.AutocompletePlainInputExample;
        }
    });
    Object.defineProperty(exports, 'AutocompleteSimpleExample', {
        enumerable: true,
        get: function () {
            return autocomplete.AutocompleteSimpleExample;
        }
    });
    Object.defineProperty(exports, 'BadgeOverviewExample', {
        enumerable: true,
        get: function () {
            return badge.BadgeOverviewExample;
        }
    });
    Object.defineProperty(exports, 'BottomSheetOverviewExample', {
        enumerable: true,
        get: function () {
            return bottomSheet.BottomSheetOverviewExample;
        }
    });
    Object.defineProperty(exports, 'BottomSheetOverviewExampleSheet', {
        enumerable: true,
        get: function () {
            return bottomSheet.BottomSheetOverviewExampleSheet;
        }
    });
    Object.defineProperty(exports, 'ButtonToggleAppearanceExample', {
        enumerable: true,
        get: function () {
            return buttonToggle.ButtonToggleAppearanceExample;
        }
    });
    Object.defineProperty(exports, 'ButtonToggleExclusiveExample', {
        enumerable: true,
        get: function () {
            return buttonToggle.ButtonToggleExclusiveExample;
        }
    });
    Object.defineProperty(exports, 'ButtonToggleOverviewExample', {
        enumerable: true,
        get: function () {
            return buttonToggle.ButtonToggleOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ButtonOverviewExample', {
        enumerable: true,
        get: function () {
            return button.ButtonOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ButtonTypesExample', {
        enumerable: true,
        get: function () {
            return button.ButtonTypesExample;
        }
    });
    Object.defineProperty(exports, 'CardFancyExample', {
        enumerable: true,
        get: function () {
            return card.CardFancyExample;
        }
    });
    Object.defineProperty(exports, 'CardOverviewExample', {
        enumerable: true,
        get: function () {
            return card.CardOverviewExample;
        }
    });
    Object.defineProperty(exports, 'CheckboxConfigurableExample', {
        enumerable: true,
        get: function () {
            return checkbox.CheckboxConfigurableExample;
        }
    });
    Object.defineProperty(exports, 'CheckboxOverviewExample', {
        enumerable: true,
        get: function () {
            return checkbox.CheckboxOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ChipsAutocompleteExample', {
        enumerable: true,
        get: function () {
            return chips.ChipsAutocompleteExample;
        }
    });
    Object.defineProperty(exports, 'ChipsDragDropExample', {
        enumerable: true,
        get: function () {
            return chips.ChipsDragDropExample;
        }
    });
    Object.defineProperty(exports, 'ChipsInputExample', {
        enumerable: true,
        get: function () {
            return chips.ChipsInputExample;
        }
    });
    Object.defineProperty(exports, 'ChipsOverviewExample', {
        enumerable: true,
        get: function () {
            return chips.ChipsOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ChipsStackedExample', {
        enumerable: true,
        get: function () {
            return chips.ChipsStackedExample;
        }
    });
    Object.defineProperty(exports, 'ElevationOverviewExample', {
        enumerable: true,
        get: function () {
            return core.ElevationOverviewExample;
        }
    });
    Object.defineProperty(exports, 'RippleOverviewExample', {
        enumerable: true,
        get: function () {
            return core.RippleOverviewExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerApiExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerApiExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerColorExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerColorExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerCustomHeaderExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerCustomHeaderExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerCustomIconExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerCustomIconExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerDateClassExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerDateClassExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerDisabledExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerDisabledExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerEventsExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerEventsExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerFilterExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerFilterExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerFormatsExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerFormatsExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerLocaleExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerLocaleExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerMinMaxExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerMinMaxExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerMomentExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerMomentExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerOverviewExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerOverviewExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerStartViewExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerStartViewExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerTouchExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerTouchExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerValueExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerValueExample;
        }
    });
    Object.defineProperty(exports, 'DatepickerViewsSelectionExample', {
        enumerable: true,
        get: function () {
            return datepicker.DatepickerViewsSelectionExample;
        }
    });
    Object.defineProperty(exports, 'ExampleHeader', {
        enumerable: true,
        get: function () {
            return datepicker.ExampleHeader;
        }
    });
    Object.defineProperty(exports, 'DialogContentExample', {
        enumerable: true,
        get: function () {
            return dialog.DialogContentExample;
        }
    });
    Object.defineProperty(exports, 'DialogContentExampleDialog', {
        enumerable: true,
        get: function () {
            return dialog.DialogContentExampleDialog;
        }
    });
    Object.defineProperty(exports, 'DialogDataExample', {
        enumerable: true,
        get: function () {
            return dialog.DialogDataExample;
        }
    });
    Object.defineProperty(exports, 'DialogDataExampleDialog', {
        enumerable: true,
        get: function () {
            return dialog.DialogDataExampleDialog;
        }
    });
    Object.defineProperty(exports, 'DialogElementsExample', {
        enumerable: true,
        get: function () {
            return dialog.DialogElementsExample;
        }
    });
    Object.defineProperty(exports, 'DialogElementsExampleDialog', {
        enumerable: true,
        get: function () {
            return dialog.DialogElementsExampleDialog;
        }
    });
    Object.defineProperty(exports, 'DialogOverviewExample', {
        enumerable: true,
        get: function () {
            return dialog.DialogOverviewExample;
        }
    });
    Object.defineProperty(exports, 'DialogOverviewExampleDialog', {
        enumerable: true,
        get: function () {
            return dialog.DialogOverviewExampleDialog;
        }
    });
    Object.defineProperty(exports, 'DividerOverviewExample', {
        enumerable: true,
        get: function () {
            return divider.DividerOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ExpansionExpandCollapseAllExample', {
        enumerable: true,
        get: function () {
            return expansion.ExpansionExpandCollapseAllExample;
        }
    });
    Object.defineProperty(exports, 'ExpansionOverviewExample', {
        enumerable: true,
        get: function () {
            return expansion.ExpansionOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ExpansionStepsExample', {
        enumerable: true,
        get: function () {
            return expansion.ExpansionStepsExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldAppearanceExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldAppearanceExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldCustomControlExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldCustomControlExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldErrorExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldErrorExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldHintExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldHintExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldLabelExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldLabelExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldOverviewExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldOverviewExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldPrefixSuffixExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldPrefixSuffixExample;
        }
    });
    Object.defineProperty(exports, 'FormFieldThemingExample', {
        enumerable: true,
        get: function () {
            return formField$1.FormFieldThemingExample;
        }
    });
    Object.defineProperty(exports, 'MyTelInput', {
        enumerable: true,
        get: function () {
            return formField$1.MyTelInput;
        }
    });
    Object.defineProperty(exports, 'GridListDynamicExample', {
        enumerable: true,
        get: function () {
            return gridList.GridListDynamicExample;
        }
    });
    Object.defineProperty(exports, 'GridListOverviewExample', {
        enumerable: true,
        get: function () {
            return gridList.GridListOverviewExample;
        }
    });
    Object.defineProperty(exports, 'IconOverviewExample', {
        enumerable: true,
        get: function () {
            return icon.IconOverviewExample;
        }
    });
    Object.defineProperty(exports, 'IconSvgExample', {
        enumerable: true,
        get: function () {
            return icon.IconSvgExample;
        }
    });
    Object.defineProperty(exports, 'InputClearableExample', {
        enumerable: true,
        get: function () {
            return input.InputClearableExample;
        }
    });
    Object.defineProperty(exports, 'InputErrorStateMatcherExample', {
        enumerable: true,
        get: function () {
            return input.InputErrorStateMatcherExample;
        }
    });
    Object.defineProperty(exports, 'InputErrorsExample', {
        enumerable: true,
        get: function () {
            return input.InputErrorsExample;
        }
    });
    Object.defineProperty(exports, 'InputFormExample', {
        enumerable: true,
        get: function () {
            return input.InputFormExample;
        }
    });
    Object.defineProperty(exports, 'InputHintExample', {
        enumerable: true,
        get: function () {
            return input.InputHintExample;
        }
    });
    Object.defineProperty(exports, 'InputOverviewExample', {
        enumerable: true,
        get: function () {
            return input.InputOverviewExample;
        }
    });
    Object.defineProperty(exports, 'InputPrefixSuffixExample', {
        enumerable: true,
        get: function () {
            return input.InputPrefixSuffixExample;
        }
    });
    Object.defineProperty(exports, 'ListOverviewExample', {
        enumerable: true,
        get: function () {
            return list.ListOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ListSectionsExample', {
        enumerable: true,
        get: function () {
            return list.ListSectionsExample;
        }
    });
    Object.defineProperty(exports, 'ListSelectionExample', {
        enumerable: true,
        get: function () {
            return list.ListSelectionExample;
        }
    });
    Object.defineProperty(exports, 'MenuIconsExample', {
        enumerable: true,
        get: function () {
            return menu.MenuIconsExample;
        }
    });
    Object.defineProperty(exports, 'MenuOverviewExample', {
        enumerable: true,
        get: function () {
            return menu.MenuOverviewExample;
        }
    });
    Object.defineProperty(exports, 'MenuPositionExample', {
        enumerable: true,
        get: function () {
            return menu.MenuPositionExample;
        }
    });
    Object.defineProperty(exports, 'NestedMenuExample', {
        enumerable: true,
        get: function () {
            return menu.NestedMenuExample;
        }
    });
    Object.defineProperty(exports, 'PaginatorConfigurableExample', {
        enumerable: true,
        get: function () {
            return paginator.PaginatorConfigurableExample;
        }
    });
    Object.defineProperty(exports, 'PaginatorOverviewExample', {
        enumerable: true,
        get: function () {
            return paginator.PaginatorOverviewExample;
        }
    });
    Object.defineProperty(exports, 'ProgressBarBufferExample', {
        enumerable: true,
        get: function () {
            return progressBar.ProgressBarBufferExample;
        }
    });
    Object.defineProperty(exports, 'ProgressBarConfigurableExample', {
        enumerable: true,
        get: function () {
            return progressBar.ProgressBarConfigurableExample;
        }
    });
    Object.defineProperty(exports, 'ProgressBarDeterminateExample', {
        enumerable: true,
        get: function () {
            return progressBar.ProgressBarDeterminateExample;
        }
    });
    Object.defineProperty(exports, 'ProgressBarIndeterminateExample', {
        enumerable: true,
        get: function () {
            return progressBar.ProgressBarIndeterminateExample;
        }
    });
    Object.defineProperty(exports, 'ProgressBarQueryExample', {
        enumerable: true,
        get: function () {
            return progressBar.ProgressBarQueryExample;
        }
    });
    Object.defineProperty(exports, 'ProgressSpinnerConfigurableExample', {
        enumerable: true,
        get: function () {
            return progressSpinner.ProgressSpinnerConfigurableExample;
        }
    });
    Object.defineProperty(exports, 'ProgressSpinnerOverviewExample', {
        enumerable: true,
        get: function () {
            return progressSpinner.ProgressSpinnerOverviewExample;
        }
    });
    Object.defineProperty(exports, 'RadioNgModelExample', {
        enumerable: true,
        get: function () {
            return radio.RadioNgModelExample;
        }
    });
    Object.defineProperty(exports, 'RadioOverviewExample', {
        enumerable: true,
        get: function () {
            return radio.RadioOverviewExample;
        }
    });
    Object.defineProperty(exports, 'SelectCustomTriggerExample', {
        enumerable: true,
        get: function () {
            return select.SelectCustomTriggerExample;
        }
    });
    Object.defineProperty(exports, 'SelectDisabledExample', {
        enumerable: true,
        get: function () {
            return select.SelectDisabledExample;
        }
    });
    Object.defineProperty(exports, 'SelectErrorStateMatcherExample', {
        enumerable: true,
        get: function () {
            return select.SelectErrorStateMatcherExample;
        }
    });
    Object.defineProperty(exports, 'SelectFormExample', {
        enumerable: true,
        get: function () {
            return select.SelectFormExample;
        }
    });
    Object.defineProperty(exports, 'SelectHintErrorExample', {
        enumerable: true,
        get: function () {
            return select.SelectHintErrorExample;
        }
    });
    Object.defineProperty(exports, 'SelectInitialValueExample', {
        enumerable: true,
        get: function () {
            return select.SelectInitialValueExample;
        }
    });
    Object.defineProperty(exports, 'SelectMultipleExample', {
        enumerable: true,
        get: function () {
            return select.SelectMultipleExample;
        }
    });
    Object.defineProperty(exports, 'SelectNoRippleExample', {
        enumerable: true,
        get: function () {
            return select.SelectNoRippleExample;
        }
    });
    Object.defineProperty(exports, 'SelectOptgroupExample', {
        enumerable: true,
        get: function () {
            return select.SelectOptgroupExample;
        }
    });
    Object.defineProperty(exports, 'SelectOverviewExample', {
        enumerable: true,
        get: function () {
            return select.SelectOverviewExample;
        }
    });
    Object.defineProperty(exports, 'SelectPanelClassExample', {
        enumerable: true,
        get: function () {
            return select.SelectPanelClassExample;
        }
    });
    Object.defineProperty(exports, 'SelectReactiveFormExample', {
        enumerable: true,
        get: function () {
            return select.SelectReactiveFormExample;
        }
    });
    Object.defineProperty(exports, 'SelectResetExample', {
        enumerable: true,
        get: function () {
            return select.SelectResetExample;
        }
    });
    Object.defineProperty(exports, 'SelectValueBindingExample', {
        enumerable: true,
        get: function () {
            return select.SelectValueBindingExample;
        }
    });
    Object.defineProperty(exports, 'SidenavAutosizeExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavAutosizeExample;
        }
    });
    Object.defineProperty(exports, 'SidenavBackdropExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavBackdropExample;
        }
    });
    Object.defineProperty(exports, 'SidenavDisableCloseExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavDisableCloseExample;
        }
    });
    Object.defineProperty(exports, 'SidenavDrawerOverviewExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavDrawerOverviewExample;
        }
    });
    Object.defineProperty(exports, 'SidenavFixedExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavFixedExample;
        }
    });
    Object.defineProperty(exports, 'SidenavModeExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavModeExample;
        }
    });
    Object.defineProperty(exports, 'SidenavOpenCloseExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavOpenCloseExample;
        }
    });
    Object.defineProperty(exports, 'SidenavOverviewExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavOverviewExample;
        }
    });
    Object.defineProperty(exports, 'SidenavPositionExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavPositionExample;
        }
    });
    Object.defineProperty(exports, 'SidenavResponsiveExample', {
        enumerable: true,
        get: function () {
            return sidenav.SidenavResponsiveExample;
        }
    });
    Object.defineProperty(exports, 'SlideToggleConfigurableExample', {
        enumerable: true,
        get: function () {
            return slideToggle.SlideToggleConfigurableExample;
        }
    });
    Object.defineProperty(exports, 'SlideToggleFormsExample', {
        enumerable: true,
        get: function () {
            return slideToggle.SlideToggleFormsExample;
        }
    });
    Object.defineProperty(exports, 'SlideToggleOverviewExample', {
        enumerable: true,
        get: function () {
            return slideToggle.SlideToggleOverviewExample;
        }
    });
    Object.defineProperty(exports, 'SliderConfigurableExample', {
        enumerable: true,
        get: function () {
            return slider.SliderConfigurableExample;
        }
    });
    Object.defineProperty(exports, 'SliderFormattingExample', {
        enumerable: true,
        get: function () {
            return slider.SliderFormattingExample;
        }
    });
    Object.defineProperty(exports, 'SliderOverviewExample', {
        enumerable: true,
        get: function () {
            return slider.SliderOverviewExample;
        }
    });
    Object.defineProperty(exports, 'PizzaPartyComponent', {
        enumerable: true,
        get: function () {
            return snackBar.PizzaPartyComponent;
        }
    });
    Object.defineProperty(exports, 'SnackBarComponentExample', {
        enumerable: true,
        get: function () {
            return snackBar.SnackBarComponentExample;
        }
    });
    Object.defineProperty(exports, 'SnackBarOverviewExample', {
        enumerable: true,
        get: function () {
            return snackBar.SnackBarOverviewExample;
        }
    });
    Object.defineProperty(exports, 'SnackBarPositionExample', {
        enumerable: true,
        get: function () {
            return snackBar.SnackBarPositionExample;
        }
    });
    Object.defineProperty(exports, 'SortOverviewExample', {
        enumerable: true,
        get: function () {
            return sort.SortOverviewExample;
        }
    });
    Object.defineProperty(exports, 'StepperEditableExample', {
        enumerable: true,
        get: function () {
            return stepper$1.StepperEditableExample;
        }
    });
    Object.defineProperty(exports, 'StepperErrorsExample', {
        enumerable: true,
        get: function () {
            return stepper$1.StepperErrorsExample;
        }
    });
    Object.defineProperty(exports, 'StepperLabelPositionBottomExample', {
        enumerable: true,
        get: function () {
            return stepper$1.StepperLabelPositionBottomExample;
        }
    });
    Object.defineProperty(exports, 'StepperOptionalExample', {
        enumerable: true,
        get: function () {
            return stepper$1.StepperOptionalExample;
        }
    });
    Object.defineProperty(exports, 'StepperOverviewExample', {
        enumerable: true,
        get: function () {
            return stepper$1.StepperOverviewExample;
        }
    });
    Object.defineProperty(exports, 'StepperStatesExample', {
        enumerable: true,
        get: function () {
            return stepper$1.StepperStatesExample;
        }
    });
    Object.defineProperty(exports, 'StepperVerticalExample', {
        enumerable: true,
        get: function () {
            return stepper$1.StepperVerticalExample;
        }
    });
    Object.defineProperty(exports, 'TableBasicExample', {
        enumerable: true,
        get: function () {
            return table$1.TableBasicExample;
        }
    });
    Object.defineProperty(exports, 'TableBasicFlexExample', {
        enumerable: true,
        get: function () {
            return table$1.TableBasicFlexExample;
        }
    });
    Object.defineProperty(exports, 'TableDynamicColumnsExample', {
        enumerable: true,
        get: function () {
            return table$1.TableDynamicColumnsExample;
        }
    });
    Object.defineProperty(exports, 'TableExpandableRowsExample', {
        enumerable: true,
        get: function () {
            return table$1.TableExpandableRowsExample;
        }
    });
    Object.defineProperty(exports, 'TableFilteringExample', {
        enumerable: true,
        get: function () {
            return table$1.TableFilteringExample;
        }
    });
    Object.defineProperty(exports, 'TableFooterRowExample', {
        enumerable: true,
        get: function () {
            return table$1.TableFooterRowExample;
        }
    });
    Object.defineProperty(exports, 'TableHttpExample', {
        enumerable: true,
        get: function () {
            return table$1.TableHttpExample;
        }
    });
    Object.defineProperty(exports, 'TableMultipleHeaderFooterExample', {
        enumerable: true,
        get: function () {
            return table$1.TableMultipleHeaderFooterExample;
        }
    });
    Object.defineProperty(exports, 'TableOverviewExample', {
        enumerable: true,
        get: function () {
            return table$1.TableOverviewExample;
        }
    });
    Object.defineProperty(exports, 'TablePaginationExample', {
        enumerable: true,
        get: function () {
            return table$1.TablePaginationExample;
        }
    });
    Object.defineProperty(exports, 'TableRowContextExample', {
        enumerable: true,
        get: function () {
            return table$1.TableRowContextExample;
        }
    });
    Object.defineProperty(exports, 'TableSelectionExample', {
        enumerable: true,
        get: function () {
            return table$1.TableSelectionExample;
        }
    });
    Object.defineProperty(exports, 'TableSortingExample', {
        enumerable: true,
        get: function () {
            return table$1.TableSortingExample;
        }
    });
    Object.defineProperty(exports, 'TableStickyColumnsExample', {
        enumerable: true,
        get: function () {
            return table$1.TableStickyColumnsExample;
        }
    });
    Object.defineProperty(exports, 'TableStickyComplexExample', {
        enumerable: true,
        get: function () {
            return table$1.TableStickyComplexExample;
        }
    });
    Object.defineProperty(exports, 'TableStickyComplexFlexExample', {
        enumerable: true,
        get: function () {
            return table$1.TableStickyComplexFlexExample;
        }
    });
    Object.defineProperty(exports, 'TableStickyFooterExample', {
        enumerable: true,
        get: function () {
            return table$1.TableStickyFooterExample;
        }
    });
    Object.defineProperty(exports, 'TableStickyHeaderExample', {
        enumerable: true,
        get: function () {
            return table$1.TableStickyHeaderExample;
        }
    });
    Object.defineProperty(exports, 'TableTextColumnAdvancedExample', {
        enumerable: true,
        get: function () {
            return table$1.TableTextColumnAdvancedExample;
        }
    });
    Object.defineProperty(exports, 'TableTextColumnExample', {
        enumerable: true,
        get: function () {
            return table$1.TableTextColumnExample;
        }
    });
    Object.defineProperty(exports, 'TableWrappedExample', {
        enumerable: true,
        get: function () {
            return table$1.TableWrappedExample;
        }
    });
    Object.defineProperty(exports, 'WrapperTable', {
        enumerable: true,
        get: function () {
            return table$1.WrapperTable;
        }
    });
    Object.defineProperty(exports, 'TabGroupAlignExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupAlignExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupAnimationsExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupAnimationsExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupAsyncExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupAsyncExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupBasicExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupBasicExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupCustomLabelExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupCustomLabelExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupDynamicExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupDynamicExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupDynamicHeightExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupDynamicHeightExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupHeaderBelowExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupHeaderBelowExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupLazyLoadedExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupLazyLoadedExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupStretchedExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupStretchedExample;
        }
    });
    Object.defineProperty(exports, 'TabGroupThemeExample', {
        enumerable: true,
        get: function () {
            return tabs.TabGroupThemeExample;
        }
    });
    Object.defineProperty(exports, 'TabNavBarBasicExample', {
        enumerable: true,
        get: function () {
            return tabs.TabNavBarBasicExample;
        }
    });
    Object.defineProperty(exports, 'ToolbarMultirowExample', {
        enumerable: true,
        get: function () {
            return toolbar.ToolbarMultirowExample;
        }
    });
    Object.defineProperty(exports, 'ToolbarOverviewExample', {
        enumerable: true,
        get: function () {
            return toolbar.ToolbarOverviewExample;
        }
    });
    Object.defineProperty(exports, 'TooltipAutoHideExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipAutoHideExample;
        }
    });
    Object.defineProperty(exports, 'TooltipCustomClassExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipCustomClassExample;
        }
    });
    Object.defineProperty(exports, 'TooltipDelayExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipDelayExample;
        }
    });
    Object.defineProperty(exports, 'TooltipDisabledExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipDisabledExample;
        }
    });
    Object.defineProperty(exports, 'TooltipManualExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipManualExample;
        }
    });
    Object.defineProperty(exports, 'TooltipMessageExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipMessageExample;
        }
    });
    Object.defineProperty(exports, 'TooltipModifiedDefaultsExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipModifiedDefaultsExample;
        }
    });
    Object.defineProperty(exports, 'TooltipOverviewExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipOverviewExample;
        }
    });
    Object.defineProperty(exports, 'TooltipPositionExample', {
        enumerable: true,
        get: function () {
            return tooltip.TooltipPositionExample;
        }
    });
    Object.defineProperty(exports, 'TreeChecklistExample', {
        enumerable: true,
        get: function () {
            return tree$1.TreeChecklistExample;
        }
    });
    Object.defineProperty(exports, 'TreeDynamicExample', {
        enumerable: true,
        get: function () {
            return tree$1.TreeDynamicExample;
        }
    });
    Object.defineProperty(exports, 'TreeFlatOverviewExample', {
        enumerable: true,
        get: function () {
            return tree$1.TreeFlatOverviewExample;
        }
    });
    Object.defineProperty(exports, 'TreeLoadmoreExample', {
        enumerable: true,
        get: function () {
            return tree$1.TreeLoadmoreExample;
        }
    });
    Object.defineProperty(exports, 'TreeNestedOverviewExample', {
        enumerable: true,
        get: function () {
            return tree$1.TreeNestedOverviewExample;
        }
    });
    exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
    exports.EXAMPLE_LIST = EXAMPLE_LIST;
    exports.EXAMPLE_MODULES = EXAMPLE_MODULES;
    exports.ExampleData = ExampleData;
    exports.ExampleModule = ExampleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples.umd.js.map
