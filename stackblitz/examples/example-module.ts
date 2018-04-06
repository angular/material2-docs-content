
/* tslint:disable */
/** DO NOT MANUALLY EDIT THIS FILE, IT IS GENERATED VIA GULP 'build-examples-module' */
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ExampleMaterialModule} from './material-module';
import {AutocompleteAutoActiveFirstOptionExample} from './autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example';
import {AutocompleteDisplayExample} from './autocomplete-display/autocomplete-display-example';
import {AutocompleteFilterExample} from './autocomplete-filter/autocomplete-filter-example';
import {AutocompleteOverviewExample} from './autocomplete-overview/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './autocomplete-simple/autocomplete-simple-example';
import {BottomSheetOverviewExampleSheet,BottomSheetOverviewExample} from './bottom-sheet-overview/bottom-sheet-overview-example';
import {ButtonOverviewExample} from './button-overview/button-overview-example';
import {ButtonToggleExclusiveExample} from './button-toggle-exclusive/button-toggle-exclusive-example';
import {ButtonToggleOverviewExample} from './button-toggle-overview/button-toggle-overview-example';
import {ButtonTypesExample} from './button-types/button-types-example';
import {CardFancyExample} from './card-fancy/card-fancy-example';
import {CardOverviewExample} from './card-overview/card-overview-example';
import {CdkTableBasicExample} from './cdk-table-basic/cdk-table-basic-example';
import {CdkTreeFlatExample} from './cdk-tree-flat/cdk-tree-flat-example';
import {CdkTreeNestedExample} from './cdk-tree-nested/cdk-tree-nested-example';
import {CheckboxConfigurableExample} from './checkbox-configurable/checkbox-configurable-example';
import {CheckboxOverviewExample} from './checkbox-overview/checkbox-overview-example';
import {ChipsAutocompleteExample} from './chips-autocomplete/chips-autocomplete-example';
import {ChipsInputExample} from './chips-input/chips-input-example';
import {ChipsOverviewExample} from './chips-overview/chips-overview-example';
import {ChipsStackedExample} from './chips-stacked/chips-stacked-example';
import {DatepickerApiExample} from './datepicker-api/datepicker-api-example';
import {DatepickerColorExample} from './datepicker-color/datepicker-color-example';
import {DatepickerCustomIconExample} from './datepicker-custom-icon/datepicker-custom-icon-example';
import {DatepickerDisabledExample} from './datepicker-disabled/datepicker-disabled-example';
import {DatepickerEventsExample} from './datepicker-events/datepicker-events-example';
import {DatepickerFilterExample} from './datepicker-filter/datepicker-filter-example';
import {DatepickerFormatsExample} from './datepicker-formats/datepicker-formats-example';
import {DatepickerLocaleExample} from './datepicker-locale/datepicker-locale-example';
import {DatepickerMinMaxExample} from './datepicker-min-max/datepicker-min-max-example';
import {DatepickerMomentExample} from './datepicker-moment/datepicker-moment-example';
import {DatepickerOverviewExample} from './datepicker-overview/datepicker-overview-example';
import {DatepickerStartViewExample} from './datepicker-start-view/datepicker-start-view-example';
import {DatepickerTouchExample} from './datepicker-touch/datepicker-touch-example';
import {DatepickerValueExample} from './datepicker-value/datepicker-value-example';
import {DatepickerViewsSelectionExample} from './datepicker-views-selection/datepicker-views-selection-example';
import {DialogContentExampleDialog,DialogContentExample} from './dialog-content/dialog-content-example';
import {DialogDataExampleDialog,DialogDataExample} from './dialog-data/dialog-data-example';
import {DialogElementsExampleDialog,DialogElementsExample} from './dialog-elements/dialog-elements-example';
import {DialogOverviewExampleDialog,DialogOverviewExample} from './dialog-overview/dialog-overview-example';
import {DividerOverviewExample} from './divider-overview/divider-overview-example';
import {ElevationOverviewExample} from './elevation-overview/elevation-overview-example';
import {ExpansionExpandCollapseAllExample} from './expansion-expand-collapse-all/expansion-expand-collapse-all-example';
import {ExpansionOverviewExample} from './expansion-overview/expansion-overview-example';
import {ExpansionStepsExample} from './expansion-steps/expansion-steps-example';
import {FocusMonitorDirectivesExample} from './focus-monitor-directives/focus-monitor-directives-example';
import {FocusMonitorFocusViaExample} from './focus-monitor-focus-via/focus-monitor-focus-via-example';
import {FocusMonitorOverviewExample} from './focus-monitor-overview/focus-monitor-overview-example';
import {FormFieldAppearanceExample} from './form-field-appearance/form-field-appearance-example';
import {MyTelInput,FormFieldCustomControlExample} from './form-field-custom-control/form-field-custom-control-example';
import {FormFieldErrorExample} from './form-field-error/form-field-error-example';
import {FormFieldHintExample} from './form-field-hint/form-field-hint-example';
import {FormFieldLabelExample} from './form-field-label/form-field-label-example';
import {FormFieldOverviewExample} from './form-field-overview/form-field-overview-example';
import {FormFieldPrefixSuffixExample} from './form-field-prefix-suffix/form-field-prefix-suffix-example';
import {FormFieldThemingExample} from './form-field-theming/form-field-theming-example';
import {GridListDynamicExample} from './grid-list-dynamic/grid-list-dynamic-example';
import {GridListOverviewExample} from './grid-list-overview/grid-list-overview-example';
import {IconOverviewExample} from './icon-overview/icon-overview-example';
import {IconSvgExample} from './icon-svg/icon-svg-example';
import {InputClearableExample} from './input-clearable/input-clearable-example';
import {InputErrorStateMatcherExample} from './input-error-state-matcher/input-error-state-matcher-example';
import {InputErrorsExample} from './input-errors/input-errors-example';
import {InputFormExample} from './input-form/input-form-example';
import {InputHintExample} from './input-hint/input-hint-example';
import {InputOverviewExample} from './input-overview/input-overview-example';
import {InputPrefixSuffixExample} from './input-prefix-suffix/input-prefix-suffix-example';
import {ListOverviewExample} from './list-overview/list-overview-example';
import {ListSectionsExample} from './list-sections/list-sections-example';
import {ListSelectionExample} from './list-selection/list-selection-example';
import {MenuIconsExample} from './menu-icons/menu-icons-example';
import {MenuOverviewExample} from './menu-overview/menu-overview-example';
import {NestedMenuExample} from './nested-menu/nested-menu-example';
import {PaginatorConfigurableExample} from './paginator-configurable/paginator-configurable-example';
import {PaginatorOverviewExample} from './paginator-overview/paginator-overview-example';
import {ProgressBarBufferExample} from './progress-bar-buffer/progress-bar-buffer-example';
import {ProgressBarConfigurableExample} from './progress-bar-configurable/progress-bar-configurable-example';
import {ProgressBarDeterminateExample} from './progress-bar-determinate/progress-bar-determinate-example';
import {ProgressBarIndeterminateExample} from './progress-bar-indeterminate/progress-bar-indeterminate-example';
import {ProgressBarQueryExample} from './progress-bar-query/progress-bar-query-example';
import {ProgressSpinnerConfigurableExample} from './progress-spinner-configurable/progress-spinner-configurable-example';
import {ProgressSpinnerOverviewExample} from './progress-spinner-overview/progress-spinner-overview-example';
import {RadioNgModelExample} from './radio-ng-model/radio-ng-model-example';
import {RadioOverviewExample} from './radio-overview/radio-overview-example';
import {SelectCustomTriggerExample} from './select-custom-trigger/select-custom-trigger-example';
import {SelectDisabledExample} from './select-disabled/select-disabled-example';
import {SelectErrorStateMatcherExample} from './select-error-state-matcher/select-error-state-matcher-example';
import {SelectFormExample} from './select-form/select-form-example';
import {SelectHintErrorExample} from './select-hint-error/select-hint-error-example';
import {SelectMultipleExample} from './select-multiple/select-multiple-example';
import {SelectNoRippleExample} from './select-no-ripple/select-no-ripple-example';
import {SelectOptgroupExample} from './select-optgroup/select-optgroup-example';
import {SelectOverviewExample} from './select-overview/select-overview-example';
import {SelectPanelClassExample} from './select-panel-class/select-panel-class-example';
import {SelectResetExample} from './select-reset/select-reset-example';
import {SelectValueBindingExample} from './select-value-binding/select-value-binding-example';
import {SidenavAutosizeExample} from './sidenav-autosize/sidenav-autosize-example';
import {SidenavBackdropExample} from './sidenav-backdrop/sidenav-backdrop-example';
import {SidenavDisableCloseExample} from './sidenav-disable-close/sidenav-disable-close-example';
import {SidenavDrawerOverviewExample} from './sidenav-drawer-overview/sidenav-drawer-overview-example';
import {SidenavFixedExample} from './sidenav-fixed/sidenav-fixed-example';
import {SidenavModeExample} from './sidenav-mode/sidenav-mode-example';
import {SidenavOpenCloseExample} from './sidenav-open-close/sidenav-open-close-example';
import {SidenavOverviewExample} from './sidenav-overview/sidenav-overview-example';
import {SidenavPositionExample} from './sidenav-position/sidenav-position-example';
import {SidenavResponsiveExample} from './sidenav-responsive/sidenav-responsive-example';
import {SlideToggleConfigurableExample} from './slide-toggle-configurable/slide-toggle-configurable-example';
import {SlideToggleFormsExample} from './slide-toggle-forms/slide-toggle-forms-example';
import {SlideToggleOverviewExample} from './slide-toggle-overview/slide-toggle-overview-example';
import {SliderConfigurableExample} from './slider-configurable/slider-configurable-example';
import {SliderFormattingExample} from './slider-formatting/slider-formatting-example';
import {SliderOverviewExample} from './slider-overview/slider-overview-example';
import {PizzaPartyComponent,SnackBarComponentExample} from './snack-bar-component/snack-bar-component-example';
import {SnackBarOverviewExample} from './snack-bar-overview/snack-bar-overview-example';
import {SnackBarPositionExample} from './snack-bar-position/snack-bar-position-example';
import {SortOverviewExample} from './sort-overview/sort-overview-example';
import {StepperEditableExample} from './stepper-editable/stepper-editable-example';
import {StepperOptionalExample} from './stepper-optional/stepper-optional-example';
import {StepperOverviewExample} from './stepper-overview/stepper-overview-example';
import {TableBasicExample} from './table-basic/table-basic-example';
import {TableFilteringExample} from './table-filtering/table-filtering-example';
import {TableHttpExample} from './table-http/table-http-example';
import {TableNativeOnlyExample} from './table-native-only/table-native-only-example';
import {TableOverviewExample} from './table-overview/table-overview-example';
import {TablePaginationExample} from './table-pagination/table-pagination-example';
import {TableSelectionExample} from './table-selection/table-selection-example';
import {TableSortingExample} from './table-sorting/table-sorting-example';
import {TabsOverviewExample} from './tabs-overview/tabs-overview-example';
import {TabsTemplateLabelExample} from './tabs-template-label/tabs-template-label-example';
import {TextFieldAutofillDirectiveExample} from './text-field-autofill-directive/text-field-autofill-directive-example';
import {TextFieldAutofillMonitorExample} from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import {TextFieldAutosizeTextareaExample} from './text-field-autosize-textarea/text-field-autosize-textarea-example';
import {ToolbarMultirowExample} from './toolbar-multirow/toolbar-multirow-example';
import {ToolbarOverviewExample} from './toolbar-overview/toolbar-overview-example';
import {TooltipDelayExample} from './tooltip-delay/tooltip-delay-example';
import {TooltipManualExample} from './tooltip-manual/tooltip-manual-example';
import {TooltipModifiedDefaultsExample} from './tooltip-modified-defaults/tooltip-modified-defaults-example';
import {TooltipOverviewExample} from './tooltip-overview/tooltip-overview-example';
import {TooltipPositionExample} from './tooltip-position/tooltip-position-example';
import {TreeChecklistExample} from './tree-checklist/tree-checklist-example';
import {TreeDynamicExample} from './tree-dynamic/tree-dynamic-example';
import {TreeFlatOverviewExample} from './tree-flat-overview/tree-flat-overview-example';
import {TreeLoadmoreExample} from './tree-loadmore/tree-loadmore-example';
import {TreeNestedOverviewExample} from './tree-nested-overview/tree-nested-overview-example';

export interface LiveExample {
  title: string;
  component: any;
  additionalFiles?: string[];
  selectorName?: string;
}

export const EXAMPLE_COMPONENTS: {[key: string]: LiveExample} = {
  'autocomplete-auto-active-first-option': {
    title: 'Highlight the first autocomplete option',
    component: AutocompleteAutoActiveFirstOptionExample
  },
  'autocomplete-display': {
    title: 'Display value autocomplete',
    component: AutocompleteDisplayExample
  },
  'autocomplete-filter': {
    title: 'Filter autocomplete',
    component: AutocompleteFilterExample
  },
  'autocomplete-overview': {
    title: 'Autocomplete overview',
    component: AutocompleteOverviewExample
  },
  'autocomplete-simple': {
    title: 'Simple autocomplete',
    component: AutocompleteSimpleExample
  },
  'bottom-sheet-overview': {
    title: 'Bottom Sheet Overview',
    component: BottomSheetOverviewExample,
    additionalFiles: ["bottom-sheet-overview-example-sheet.html"],
    selectorName: 'BottomSheetOverviewExample, BottomSheetOverviewExampleSheet'
  },
  'button-overview': {
    title: 'Basic buttons',
    component: ButtonOverviewExample
  },
  'button-toggle-exclusive': {
    title: 'Exclusive selection',
    component: ButtonToggleExclusiveExample
  },
  'button-toggle-overview': {
    title: 'Basic button-toggles',
    component: ButtonToggleOverviewExample
  },
  'button-types': {
    title: 'Button varieties',
    component: ButtonTypesExample
  },
  'card-fancy': {
    title: 'Card with multiple sections',
    component: CardFancyExample
  },
  'card-overview': {
    title: 'Basic cards',
    component: CardOverviewExample
  },
  'cdk-table-basic': {
    title: 'Basic CDK data-table',
    component: CdkTableBasicExample
  },
  'cdk-tree-flat': {
    title: 'Tree with flat nodes',
    component: CdkTreeFlatExample
  },
  'cdk-tree-nested': {
    title: 'Tree with nested nodes',
    component: CdkTreeNestedExample
  },
  'checkbox-configurable': {
    title: 'Configurable checkbox',
    component: CheckboxConfigurableExample
  },
  'checkbox-overview': {
    title: 'Basic checkboxes',
    component: CheckboxOverviewExample
  },
  'chips-autocomplete': {
    title: 'Chips Autocomplete',
    component: ChipsAutocompleteExample
  },
  'chips-input': {
    title: 'Chips with input',
    component: ChipsInputExample
  },
  'chips-overview': {
    title: 'Basic chips',
    component: ChipsOverviewExample
  },
  'chips-stacked': {
    title: 'Stacked chips',
    component: ChipsStackedExample
  },
  'datepicker-api': {
    title: 'Datepicker open method',
    component: DatepickerApiExample
  },
  'datepicker-color': {
    title: 'Datepicker palette colors',
    component: DatepickerColorExample
  },
  'datepicker-custom-icon': {
    title: 'Datepicker with custom icon',
    component: DatepickerCustomIconExample
  },
  'datepicker-disabled': {
    title: 'Disabled datepicker',
    component: DatepickerDisabledExample
  },
  'datepicker-events': {
    title: 'Datepicker input and change events',
    component: DatepickerEventsExample
  },
  'datepicker-filter': {
    title: 'Datepicker with filter validation',
    component: DatepickerFilterExample
  },
  'datepicker-formats': {
    title: 'Datepicker with custom formats',
    component: DatepickerFormatsExample
  },
  'datepicker-locale': {
    title: 'Datepicker with different locale',
    component: DatepickerLocaleExample
  },
  'datepicker-min-max': {
    title: 'Datepicker with min & max validation',
    component: DatepickerMinMaxExample
  },
  'datepicker-moment': {
    title: 'Datepicker that uses Moment.js dates',
    component: DatepickerMomentExample
  },
  'datepicker-overview': {
    title: 'Basic datepicker',
    component: DatepickerOverviewExample
  },
  'datepicker-start-view': {
    title: 'Datepicker start date',
    component: DatepickerStartViewExample
  },
  'datepicker-touch': {
    title: 'Datepicker touch UI',
    component: DatepickerTouchExample
  },
  'datepicker-value': {
    title: 'Datepicker selected value',
    component: DatepickerValueExample
  },
  'datepicker-views-selection': {
    title: 'Datepicker emulating a Year and month picker',
    component: DatepickerViewsSelectionExample
  },
  'dialog-content': {
    title: 'Dialog with header, scrollable content and actions',
    component: DialogContentExample,
    additionalFiles: ["dialog-content-example-dialog.html"],
    selectorName: 'DialogContentExample, DialogContentExampleDialog'
  },
  'dialog-data': {
    title: 'Injecting data when opening a dialog',
    component: DialogDataExample,
    additionalFiles: ["dialog-data-example-dialog.html"],
    selectorName: 'DialogDataExample, DialogDataExampleDialog'
  },
  'dialog-elements': {
    title: 'Dialog elements',
    component: DialogElementsExample,
    additionalFiles: ["dialog-elements-example-dialog.html"],
    selectorName: 'DialogElementsExample, DialogElementsExampleDialog'
  },
  'dialog-overview': {
    title: 'Dialog Overview',
    component: DialogOverviewExample,
    additionalFiles: ["dialog-overview-example-dialog.html"],
    selectorName: 'DialogOverviewExample, DialogOverviewExampleDialog'
  },
  'divider-overview': {
    title: 'Basic divider',
    component: DividerOverviewExample
  },
  'elevation-overview': {
    title: 'Elevation CSS classes',
    component: ElevationOverviewExample
  },
  'expansion-expand-collapse-all': {
    title: 'Accordion with expand/collapse all toggles',
    component: ExpansionExpandCollapseAllExample
  },
  'expansion-overview': {
    title: 'Basic expansion panel',
    component: ExpansionOverviewExample
  },
  'expansion-steps': {
    title: 'Expansion panel as accordion',
    component: ExpansionStepsExample
  },
  'focus-monitor-directives': {
    title: 'Monitoring focus with FocusMonitor',
    component: FocusMonitorDirectivesExample
  },
  'focus-monitor-focus-via': {
    title: 'Focusing with a specific FocusOrigin',
    component: FocusMonitorFocusViaExample
  },
  'focus-monitor-overview': {
    title: 'Monitoring focus with FocusMonitor',
    component: FocusMonitorOverviewExample
  },
  'form-field-appearance': {
    title: 'Form field appearance variants',
    component: FormFieldAppearanceExample
  },
  'form-field-custom-control': {
    title: 'Form field with custom telephone number input control.',
    component: FormFieldCustomControlExample,
    additionalFiles: ["form-field-custom-control-example.html"],
    selectorName: 'FormFieldCustomControlExample, MyTelInput'
  },
  'form-field-error': {
    title: 'Form field with error messages',
    component: FormFieldErrorExample
  },
  'form-field-hint': {
    title: 'Form field with hints',
    component: FormFieldHintExample
  },
  'form-field-label': {
    title: 'Form field with label',
    component: FormFieldLabelExample
  },
  'form-field-overview': {
    title: 'Simple form field',
    component: FormFieldOverviewExample
  },
  'form-field-prefix-suffix': {
    title: 'Form field with prefix & suffix',
    component: FormFieldPrefixSuffixExample
  },
  'form-field-theming': {
    title: 'Form field theming',
    component: FormFieldThemingExample
  },
  'grid-list-dynamic': {
    title: 'Dynamic grid-list',
    component: GridListDynamicExample
  },
  'grid-list-overview': {
    title: 'Basic grid-list',
    component: GridListOverviewExample
  },
  'icon-overview': {
    title: 'Basic icons',
    component: IconOverviewExample
  },
  'icon-svg': {
    title: 'SVG icons',
    component: IconSvgExample
  },
  'input-clearable': {
    title: 'Input with a clear button',
    component: InputClearableExample
  },
  'input-error-state-matcher': {
    title: 'Input with a custom ErrorStateMatcher',
    component: InputErrorStateMatcherExample
  },
  'input-errors': {
    title: 'Input with error messages',
    component: InputErrorsExample
  },
  'input-form': {
    title: 'Inputs in a form',
    component: InputFormExample
  },
  'input-hint': {
    title: 'Input with hints',
    component: InputHintExample
  },
  'input-overview': {
    title: 'Basic Inputs',
    component: InputOverviewExample
  },
  'input-prefix-suffix': {
    title: 'Inputs with prefixes and suffixes',
    component: InputPrefixSuffixExample
  },
  'list-overview': {
    title: 'Basic list',
    component: ListOverviewExample
  },
  'list-sections': {
    title: 'List with sections',
    component: ListSectionsExample
  },
  'list-selection': {
    title: 'List with selection',
    component: ListSelectionExample
  },
  'menu-icons': {
    title: 'Menu with icons',
    component: MenuIconsExample
  },
  'menu-overview': {
    title: 'Basic menu',
    component: MenuOverviewExample
  },
  'nested-menu': {
    title: 'Nested menu',
    component: NestedMenuExample
  },
  'paginator-configurable': {
    title: 'Configurable paginator',
    component: PaginatorConfigurableExample
  },
  'paginator-overview': {
    title: 'Paginator',
    component: PaginatorOverviewExample
  },
  'progress-bar-buffer': {
    title: 'Buffer progress-bar',
    component: ProgressBarBufferExample
  },
  'progress-bar-configurable': {
    title: 'Configurable progress-bar',
    component: ProgressBarConfigurableExample
  },
  'progress-bar-determinate': {
    title: 'Determinate progress-bar',
    component: ProgressBarDeterminateExample
  },
  'progress-bar-indeterminate': {
    title: 'Indeterminate progress-bar',
    component: ProgressBarIndeterminateExample
  },
  'progress-bar-query': {
    title: 'Query progress-bar',
    component: ProgressBarQueryExample
  },
  'progress-spinner-configurable': {
    title: 'Configurable progress spinner',
    component: ProgressSpinnerConfigurableExample
  },
  'progress-spinner-overview': {
    title: 'Basic progress-spinner',
    component: ProgressSpinnerOverviewExample
  },
  'radio-ng-model': {
    title: 'Radios with ngModel',
    component: RadioNgModelExample
  },
  'radio-overview': {
    title: 'Basic radios',
    component: RadioOverviewExample
  },
  'select-custom-trigger': {
    title: 'Select with custom trigger text',
    component: SelectCustomTriggerExample
  },
  'select-disabled': {
    title: 'Disabled select',
    component: SelectDisabledExample
  },
  'select-error-state-matcher': {
    title: 'Select with a custom ErrorStateMatcher',
    component: SelectErrorStateMatcherExample
  },
  'select-form': {
    title: 'Select in a form',
    component: SelectFormExample
  },
  'select-hint-error': {
    title: 'Select with form field features',
    component: SelectHintErrorExample
  },
  'select-multiple': {
    title: 'Select with multiple selection',
    component: SelectMultipleExample
  },
  'select-no-ripple': {
    title: 'Select with no option ripple',
    component: SelectNoRippleExample
  },
  'select-optgroup': {
    title: 'Select with option groups',
    component: SelectOptgroupExample
  },
  'select-overview': {
    title: 'Basic select',
    component: SelectOverviewExample
  },
  'select-panel-class': {
    title: 'Select with custom panel styling',
    component: SelectPanelClassExample
  },
  'select-reset': {
    title: 'Select with reset option',
    component: SelectResetExample
  },
  'select-value-binding': {
    title: 'Select with 2-way value binding',
    component: SelectValueBindingExample
  },
  'sidenav-autosize': {
    title: 'Autosize sidenav',
    component: SidenavAutosizeExample
  },
  'sidenav-backdrop': {
    title: 'Drawer with explicit backdrop setting',
    component: SidenavBackdropExample
  },
  'sidenav-disable-close': {
    title: 'Sidenav with custom escape and backdrop click behavior',
    component: SidenavDisableCloseExample
  },
  'sidenav-drawer-overview': {
    title: 'Basic drawer',
    component: SidenavDrawerOverviewExample
  },
  'sidenav-fixed': {
    title: 'Fixed sidenav',
    component: SidenavFixedExample
  },
  'sidenav-mode': {
    title: 'Sidenav with configurable mode',
    component: SidenavModeExample
  },
  'sidenav-open-close': {
    title: 'Sidenav open & close behavior',
    component: SidenavOpenCloseExample
  },
  'sidenav-overview': {
    title: 'Basic sidenav',
    component: SidenavOverviewExample
  },
  'sidenav-position': {
    title: 'Implicit main content with two sidenavs',
    component: SidenavPositionExample
  },
  'sidenav-responsive': {
    title: 'Responsive sidenav',
    component: SidenavResponsiveExample
  },
  'slide-toggle-configurable': {
    title: 'Configurable slide-toggle',
    component: SlideToggleConfigurableExample
  },
  'slide-toggle-forms': {
    title: 'Slide-toggle with forms',
    component: SlideToggleFormsExample
  },
  'slide-toggle-overview': {
    title: 'Basic slide-toggles',
    component: SlideToggleOverviewExample
  },
  'slider-configurable': {
    title: 'Configurable slider',
    component: SliderConfigurableExample
  },
  'slider-formatting': {
    title: 'Slider with custom thumb label formatting.',
    component: SliderFormattingExample
  },
  'slider-overview': {
    title: 'Basic slider',
    component: SliderOverviewExample
  },
  'snack-bar-component': {
    title: 'Snack-bar with a custom component',
    component: SnackBarComponentExample,
    additionalFiles: ["snack-bar-component-example-snack.html"],
    selectorName: 'SnackBarComponentExample, PizzaPartyComponent'
  },
  'snack-bar-overview': {
    title: 'Basic snack-bar',
    component: SnackBarOverviewExample
  },
  'snack-bar-position': {
    title: 'Snack-bar with configurable position',
    component: SnackBarPositionExample
  },
  'sort-overview': {
    title: 'Sorting overview',
    component: SortOverviewExample
  },
  'stepper-editable': {
    title: 'Stepper with editable steps',
    component: StepperEditableExample
  },
  'stepper-optional': {
    title: 'Stepper with optional steps',
    component: StepperOptionalExample
  },
  'stepper-overview': {
    title: 'Stepper overview',
    component: StepperOverviewExample
  },
  'table-basic': {
    title: 'Basic table',
    component: TableBasicExample
  },
  'table-filtering': {
    title: 'Table with filtering',
    component: TableFilteringExample
  },
  'table-http': {
    title: 'Table retrieving data through HTTP',
    component: TableHttpExample
  },
  'table-native-only': {
    title: 'Native `<table>` that only applies the Material styles',
    component: TableNativeOnlyExample
  },
  'table-overview': {
    title: 'Data table with sorting, pagination, and filtering.',
    component: TableOverviewExample
  },
  'table-pagination': {
    title: 'Table with pagination',
    component: TablePaginationExample
  },
  'table-selection': {
    title: 'Table with selection',
    component: TableSelectionExample
  },
  'table-sorting': {
    title: 'Table with sorting',
    component: TableSortingExample
  },
  'tabs-overview': {
    title: 'Basic tabs',
    component: TabsOverviewExample
  },
  'tabs-template-label': {
    title: 'Complex Example',
    component: TabsTemplateLabelExample
  },
  'text-field-autofill-directive': {
    title: 'Monitoring autofill state with cdkAutofill',
    component: TextFieldAutofillDirectiveExample
  },
  'text-field-autofill-monitor': {
    title: 'Monitoring autofill state with AutofillMonitor',
    component: TextFieldAutofillMonitorExample
  },
  'text-field-autosize-textarea': {
    title: 'Auto-resizing textarea',
    component: TextFieldAutosizeTextareaExample
  },
  'toolbar-multirow': {
    title: 'Multi-row toolbar',
    component: ToolbarMultirowExample
  },
  'toolbar-overview': {
    title: 'Basic toolbar',
    component: ToolbarOverviewExample
  },
  'tooltip-delay': {
    title: 'Tooltip with a show and hide delay',
    component: TooltipDelayExample
  },
  'tooltip-manual': {
    title: 'Tooltip that can be manually shown/hidden.',
    component: TooltipManualExample
  },
  'tooltip-modified-defaults': {
    title: 'Tooltip with a show and hide delay',
    component: TooltipModifiedDefaultsExample
  },
  'tooltip-overview': {
    title: 'Basic tooltip',
    component: TooltipOverviewExample
  },
  'tooltip-position': {
    title: 'Tooltip with custom position',
    component: TooltipPositionExample
  },
  'tree-checklist': {
    title: 'Tree with checkboxes',
    component: TreeChecklistExample
  },
  'tree-dynamic': {
    title: 'Tree with dynamic data',
    component: TreeDynamicExample
  },
  'tree-flat-overview': {
    title: 'Tree with flat nodes',
    component: TreeFlatOverviewExample
  },
  'tree-loadmore': {
    title: 'Tree with partially loaded data',
    component: TreeLoadmoreExample
  },
  'tree-nested-overview': {
    title: 'Tree with nested nodes',
    component: TreeNestedOverviewExample
  },
};

export const EXAMPLE_LIST = [
  AutocompleteAutoActiveFirstOptionExample,
  AutocompleteDisplayExample,
  AutocompleteFilterExample,
  AutocompleteOverviewExample,
  AutocompleteSimpleExample,
  BottomSheetOverviewExampleSheet,BottomSheetOverviewExample,
  ButtonOverviewExample,
  ButtonToggleExclusiveExample,
  ButtonToggleOverviewExample,
  ButtonTypesExample,
  CardFancyExample,
  CardOverviewExample,
  CdkTableBasicExample,
  CdkTreeFlatExample,
  CdkTreeNestedExample,
  CheckboxConfigurableExample,
  CheckboxOverviewExample,
  ChipsAutocompleteExample,
  ChipsInputExample,
  ChipsOverviewExample,
  ChipsStackedExample,
  DatepickerApiExample,
  DatepickerColorExample,
  DatepickerCustomIconExample,
  DatepickerDisabledExample,
  DatepickerEventsExample,
  DatepickerFilterExample,
  DatepickerFormatsExample,
  DatepickerLocaleExample,
  DatepickerMinMaxExample,
  DatepickerMomentExample,
  DatepickerOverviewExample,
  DatepickerStartViewExample,
  DatepickerTouchExample,
  DatepickerValueExample,
  DatepickerViewsSelectionExample,
  DialogContentExampleDialog,DialogContentExample,
  DialogDataExampleDialog,DialogDataExample,
  DialogElementsExampleDialog,DialogElementsExample,
  DialogOverviewExampleDialog,DialogOverviewExample,
  DividerOverviewExample,
  ElevationOverviewExample,
  ExpansionExpandCollapseAllExample,
  ExpansionOverviewExample,
  ExpansionStepsExample,
  FocusMonitorDirectivesExample,
  FocusMonitorFocusViaExample,
  FocusMonitorOverviewExample,
  FormFieldAppearanceExample,
  MyTelInput,FormFieldCustomControlExample,
  FormFieldErrorExample,
  FormFieldHintExample,
  FormFieldLabelExample,
  FormFieldOverviewExample,
  FormFieldPrefixSuffixExample,
  FormFieldThemingExample,
  GridListDynamicExample,
  GridListOverviewExample,
  IconOverviewExample,
  IconSvgExample,
  InputClearableExample,
  InputErrorStateMatcherExample,
  InputErrorsExample,
  InputFormExample,
  InputHintExample,
  InputOverviewExample,
  InputPrefixSuffixExample,
  ListOverviewExample,
  ListSectionsExample,
  ListSelectionExample,
  MenuIconsExample,
  MenuOverviewExample,
  NestedMenuExample,
  PaginatorConfigurableExample,
  PaginatorOverviewExample,
  ProgressBarBufferExample,
  ProgressBarConfigurableExample,
  ProgressBarDeterminateExample,
  ProgressBarIndeterminateExample,
  ProgressBarQueryExample,
  ProgressSpinnerConfigurableExample,
  ProgressSpinnerOverviewExample,
  RadioNgModelExample,
  RadioOverviewExample,
  SelectCustomTriggerExample,
  SelectDisabledExample,
  SelectErrorStateMatcherExample,
  SelectFormExample,
  SelectHintErrorExample,
  SelectMultipleExample,
  SelectNoRippleExample,
  SelectOptgroupExample,
  SelectOverviewExample,
  SelectPanelClassExample,
  SelectResetExample,
  SelectValueBindingExample,
  SidenavAutosizeExample,
  SidenavBackdropExample,
  SidenavDisableCloseExample,
  SidenavDrawerOverviewExample,
  SidenavFixedExample,
  SidenavModeExample,
  SidenavOpenCloseExample,
  SidenavOverviewExample,
  SidenavPositionExample,
  SidenavResponsiveExample,
  SlideToggleConfigurableExample,
  SlideToggleFormsExample,
  SlideToggleOverviewExample,
  SliderConfigurableExample,
  SliderFormattingExample,
  SliderOverviewExample,
  PizzaPartyComponent,SnackBarComponentExample,
  SnackBarOverviewExample,
  SnackBarPositionExample,
  SortOverviewExample,
  StepperEditableExample,
  StepperOptionalExample,
  StepperOverviewExample,
  TableBasicExample,
  TableFilteringExample,
  TableHttpExample,
  TableNativeOnlyExample,
  TableOverviewExample,
  TablePaginationExample,
  TableSelectionExample,
  TableSortingExample,
  TabsOverviewExample,
  TabsTemplateLabelExample,
  TextFieldAutofillDirectiveExample,
  TextFieldAutofillMonitorExample,
  TextFieldAutosizeTextareaExample,
  ToolbarMultirowExample,
  ToolbarOverviewExample,
  TooltipDelayExample,
  TooltipManualExample,
  TooltipModifiedDefaultsExample,
  TooltipOverviewExample,
  TooltipPositionExample,
  TreeChecklistExample,
  TreeDynamicExample,
  TreeFlatOverviewExample,
  TreeLoadmoreExample,
  TreeNestedOverviewExample,
];

@NgModule({
  declarations: EXAMPLE_LIST,
  entryComponents: EXAMPLE_LIST,
  imports: [
    ExampleMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ExampleModule { }
