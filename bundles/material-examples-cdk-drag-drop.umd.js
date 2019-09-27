(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/drag-drop'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/drag-drop', ['exports', '@angular/cdk/drag-drop', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/cdk/portal'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.dragDrop = {}), global.ng.cdk.dragDrop, global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.cdk.portal));
}(this, function (exports, dragDrop, overlay, common, core, portal) { 'use strict';

    /**
     * @title Drag&Drop position locking
     */
    var CdkDragDropAxisLockExample = /** @class */ (function () {
        function CdkDragDropAxisLockExample() {
        }
        CdkDragDropAxisLockExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-axis-lock-example',
                        template: "<div class=\"example-box\" cdkDragLockAxis=\"y\" cdkDrag>\n  I can only be dragged up/down\n</div>\n\n<div class=\"example-box\" cdkDragLockAxis=\"x\" cdkDrag>\n  I can only be dragged left/right\n</div>\n",
                        styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
                    }] }
        ];
        return CdkDragDropAxisLockExample;
    }());

    /**
     * @title Drag&Drop boundary
     */
    var CdkDragDropBoundaryExample = /** @class */ (function () {
        function CdkDragDropBoundaryExample() {
        }
        CdkDragDropBoundaryExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-boundary-example',
                        template: "<div class=\"example-boundary\">\n  <div class=\"example-box\" cdkDragBoundary=\".example-boundary\" cdkDrag>\n    I can only be dragged within the dotted container\n  </div>\n</div>\n\n",
                        styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n"]
                    }] }
        ];
        return CdkDragDropBoundaryExample;
    }());

    /**
     * @title Drag&Drop connected sorting group
     */
    var CdkDragDropConnectedSortingGroupExample = /** @class */ (function () {
        function CdkDragDropConnectedSortingGroupExample() {
            this.todo = [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ];
            this.done = [
                'Get up',
                'Brush teeth',
                'Take a shower',
                'Check e-mail',
                'Walk dog'
            ];
        }
        CdkDragDropConnectedSortingGroupExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        CdkDragDropConnectedSortingGroupExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-connected-sorting-group-example',
                        template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>To do</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"todo\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Done</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"done\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropConnectedSortingGroupExample;
    }());

    /**
     * @title Drag&Drop connected sorting
     */
    var CdkDragDropConnectedSortingExample = /** @class */ (function () {
        function CdkDragDropConnectedSortingExample() {
            this.todo = [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ];
            this.done = [
                'Get up',
                'Brush teeth',
                'Take a shower',
                'Check e-mail',
                'Walk dog'
            ];
        }
        CdkDragDropConnectedSortingExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        CdkDragDropConnectedSortingExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-connected-sorting-example',
                        template: "<div class=\"example-container\">\n  <h2>To do</h2>\n\n  <div\n    cdkDropList\n    #todoList=\"cdkDropList\"\n    [cdkDropListData]=\"todo\"\n    [cdkDropListConnectedTo]=\"[doneList]\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Done</h2>\n\n  <div\n    cdkDropList\n    #doneList=\"cdkDropList\"\n    [cdkDropListData]=\"done\"\n    [cdkDropListConnectedTo]=\"[todoList]\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n  </div>\n</div>\n\n",
                        styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropConnectedSortingExample;
    }());

    /**
     * @title Drag&Drop custom placeholer
     */
    var CdkDragDropCustomPlaceholderExample = /** @class */ (function () {
        function CdkDragDropCustomPlaceholderExample() {
            this.movies = [
                'Episode I - The Phantom Menace',
                'Episode II - Attack of the Clones',
                'Episode III - Revenge of the Sith',
                'Episode IV - A New Hope',
                'Episode V - The Empire Strikes Back',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode VIII - The Last Jedi'
            ];
        }
        CdkDragDropCustomPlaceholderExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        CdkDragDropCustomPlaceholderExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-custom-placeholder-example',
                        template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n    {{movie}}\n  </div>\n</div>\n",
                        styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropCustomPlaceholderExample;
    }());

    /**
     * @title Drag&Drop custom preview
     */
    var CdkDragDropCustomPreviewExample = /** @class */ (function () {
        function CdkDragDropCustomPreviewExample() {
            // tslint:disable:max-line-length
            this.movies = [
                {
                    title: 'Episode I - The Phantom Menace',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
                },
                {
                    title: 'Episode II - Attack of the Clones',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
                },
                {
                    title: 'Episode III - Revenge of the Sith',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
                },
                {
                    title: 'Episode IV - A New Hope',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
                },
                {
                    title: 'Episode V - The Empire Strikes Back',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
                },
                {
                    title: 'Episode VI - Return of the Jedi',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
                },
                {
                    title: 'Episode VII - The Force Awakens',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
                },
                {
                    title: 'Episode VIII - The Last Jedi',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
                }
            ];
        }
        // tslint:enable:max-line-length
        CdkDragDropCustomPreviewExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        CdkDragDropCustomPreviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-custom-preview-example',
                        template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    {{movie.title}}\n    <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n  </div>\n</div>\n",
                        styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropCustomPreviewExample;
    }());

    /**
     * @title Delayed dragging
     */
    var CdkDragDropDelayExample = /** @class */ (function () {
        function CdkDragDropDelayExample() {
        }
        CdkDragDropDelayExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-delay-example',
                        template: "<div class=\"example-box\" cdkDrag [cdkDragStartDelay]=\"1000\">\n  Dragging starts after one second\n</div>\n",
                        styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
                    }] }
        ];
        return CdkDragDropDelayExample;
    }());

    /**
     * @title Drag&Drop disabled sorting
     */
    var CdkDragDropDisabledSortingExample = /** @class */ (function () {
        function CdkDragDropDisabledSortingExample() {
            this.items = [
                'Carrots',
                'Tomatoes',
                'Onions',
                'Apples',
                'Avocados'
            ];
            this.basket = [
                'Oranges',
                'Bananas',
                'Cucumbers'
            ];
        }
        CdkDragDropDisabledSortingExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        CdkDragDropDisabledSortingExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-disabled-sorting-example',
                        template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>Available items</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"items\"\n      class=\"example-list\"\n      cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of items\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Shopping basket</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"basket\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of basket\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropDisabledSortingExample;
    }());

    /**
     * @title Drag&Drop disabled
     */
    var CdkDragDropDisabledExample = /** @class */ (function () {
        function CdkDragDropDisabledExample() {
            this.items = [
                { value: 'I can be dragged', disabled: false },
                { value: 'I cannot be dragged', disabled: true },
                { value: 'I can also be dragged', disabled: false }
            ];
        }
        CdkDragDropDisabledExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.items, event.previousIndex, event.currentIndex);
        };
        CdkDragDropDisabledExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-disabled-example',
                        template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div\n    class=\"example-box\"\n    *ngFor=\"let item of items\"\n    cdkDrag\n    [cdkDragDisabled]=\"item.disabled\">{{item.value}}</div>\n</div>\n",
                        styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled {\n  background: #ccc;\n  cursor: default;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropDisabledExample;
    }());

    /**
     * @title Drag&Drop enter predicate
     */
    var CdkDragDropEnterPredicateExample = /** @class */ (function () {
        function CdkDragDropEnterPredicateExample() {
            this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            this.even = [10];
        }
        CdkDragDropEnterPredicateExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        /** Predicate function that only allows even numbers to be dropped into a list. */
        CdkDragDropEnterPredicateExample.prototype.evenPredicate = function (item) {
            return item.data % 2 === 0;
        };
        /** Predicate function that doesn't allow items to be dropped into a list. */
        CdkDragDropEnterPredicateExample.prototype.noReturnPredicate = function () {
            return false;
        };
        CdkDragDropEnterPredicateExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-enter-predicate-example',
                        template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of all\"\n      [cdkDragData]=\"number\"\n      cdkDrag>{{number}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of even\"\n      cdkDrag\n      [cdkDragData]=\"number\">{{number}}</div>\n  </div>\n</div>\n\n",
                        styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropEnterPredicateExample;
    }());

    /**
     * @title Programmatically setting the free drag position
     */
    var CdkDragDropFreeDragPositionExample = /** @class */ (function () {
        function CdkDragDropFreeDragPositionExample() {
            this.dragPosition = { x: 0, y: 0 };
        }
        CdkDragDropFreeDragPositionExample.prototype.changePosition = function () {
            this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
        };
        CdkDragDropFreeDragPositionExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-free-drag-position-example',
                        template: "<p>\n  <button (click)=\"changePosition()\">Change element position</button>\n</p>\n\n<div class=\"example-box\" cdkDrag [cdkDragFreeDragPosition]=\"dragPosition\">\n  Drag me around\n</div>\n",
                        styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
                    }] }
        ];
        return CdkDragDropFreeDragPositionExample;
    }());

    /**
     * @title Drag&Drop with a handle
     */
    var CdkDragDropHandleExample = /** @class */ (function () {
        function CdkDragDropHandleExample() {
        }
        CdkDragDropHandleExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-handle-example',
                        template: "<div class=\"example-box\" cdkDrag>\n  I can only be dragged using the handle\n\n  <div class=\"example-handle\" cdkDragHandle>\n    <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n      <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n    </svg>\n  </div>\n</div>\n",
                        styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-handle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n"]
                    }] }
        ];
        return CdkDragDropHandleExample;
    }());

    /**
     * @title Drag&Drop horizontal sorting
     */
    var CdkDragDropHorizontalSortingExample = /** @class */ (function () {
        function CdkDragDropHorizontalSortingExample() {
            this.timePeriods = [
                'Bronze age',
                'Iron age',
                'Middle ages',
                'Early modern period',
                'Long nineteenth century'
            ];
        }
        CdkDragDropHorizontalSortingExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
        };
        CdkDragDropHorizontalSortingExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-horizontal-sorting-example',
                        template: "<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div>\n</div>\n",
                        styles: [".example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropHorizontalSortingExample;
    }());

    /**
     * @title Basic Drag&Drop
     */
    var CdkDragDropOverviewExample = /** @class */ (function () {
        function CdkDragDropOverviewExample() {
        }
        CdkDragDropOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-overview-example',
                        template: "<div class=\"example-box\" cdkDrag>\n  Drag me around\n</div>\n",
                        styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
                    }] }
        ];
        return CdkDragDropOverviewExample;
    }());

    /**
     * @title Drag&Drop with alternate root element
     */
    var CdkDragDropRootElementExample = /** @class */ (function () {
        function CdkDragDropRootElementExample(_overlay, _viewContainerRef) {
            this._overlay = _overlay;
            this._viewContainerRef = _viewContainerRef;
        }
        CdkDragDropRootElementExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._portal = new portal.TemplatePortal(this._dialogTemplate, this._viewContainerRef);
            this._overlayRef = this._overlay.create({
                positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
                hasBackdrop: true
            });
            this._overlayRef.backdropClick().subscribe(function () { return _this._overlayRef.detach(); });
        };
        CdkDragDropRootElementExample.prototype.ngOnDestroy = function () {
            this._overlayRef.dispose();
        };
        CdkDragDropRootElementExample.prototype.openDialog = function () {
            this._overlayRef.attach(this._portal);
        };
        CdkDragDropRootElementExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-root-element-example',
                        template: "<button (click)=\"openDialog()\">Open a draggable dialog</button>\n\n<ng-template>\n  <div class=\"example-dialog-content\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\">\n    Drag the dialog around!\n  </div>\n</ng-template>\n",
                        styles: [".example-dialog-content {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        CdkDragDropRootElementExample.ctorParameters = function () { return [
            { type: overlay.Overlay },
            { type: core.ViewContainerRef }
        ]; };
        CdkDragDropRootElementExample.propDecorators = {
            _dialogTemplate: [{ type: core.ViewChild, args: [core.TemplateRef, { static: false },] }]
        };
        return CdkDragDropRootElementExample;
    }());

    /**
     * @title Drag&Drop sorting
     */
    var CdkDragDropSortingExample = /** @class */ (function () {
        function CdkDragDropSortingExample() {
            this.movies = [
                'Episode I - The Phantom Menace',
                'Episode II - Attack of the Clones',
                'Episode III - Revenge of the Sith',
                'Episode IV - A New Hope',
                'Episode V - The Empire Strikes Back',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode VIII - The Last Jedi'
            ];
        }
        CdkDragDropSortingExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        CdkDragDropSortingExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-drag-drop-sorting-example',
                        template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div>\n</div>\n",
                        styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                    }] }
        ];
        return CdkDragDropSortingExample;
    }());

    var EXAMPLES = [
        CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample,
    ];
    var CdkDragDropExamplesModule = /** @class */ (function () {
        function CdkDragDropExamplesModule() {
        }
        CdkDragDropExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            dragDrop.DragDropModule,
                            overlay.OverlayModule,
                            common.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkDragDropExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkDragDropAxisLockExample = CdkDragDropAxisLockExample;
    exports.CdkDragDropBoundaryExample = CdkDragDropBoundaryExample;
    exports.CdkDragDropConnectedSortingExample = CdkDragDropConnectedSortingExample;
    exports.CdkDragDropConnectedSortingGroupExample = CdkDragDropConnectedSortingGroupExample;
    exports.CdkDragDropCustomPlaceholderExample = CdkDragDropCustomPlaceholderExample;
    exports.CdkDragDropCustomPreviewExample = CdkDragDropCustomPreviewExample;
    exports.CdkDragDropDelayExample = CdkDragDropDelayExample;
    exports.CdkDragDropDisabledExample = CdkDragDropDisabledExample;
    exports.CdkDragDropDisabledSortingExample = CdkDragDropDisabledSortingExample;
    exports.CdkDragDropEnterPredicateExample = CdkDragDropEnterPredicateExample;
    exports.CdkDragDropFreeDragPositionExample = CdkDragDropFreeDragPositionExample;
    exports.CdkDragDropHandleExample = CdkDragDropHandleExample;
    exports.CdkDragDropHorizontalSortingExample = CdkDragDropHorizontalSortingExample;
    exports.CdkDragDropOverviewExample = CdkDragDropOverviewExample;
    exports.CdkDragDropRootElementExample = CdkDragDropRootElementExample;
    exports.CdkDragDropSortingExample = CdkDragDropSortingExample;
    exports.CdkDragDropExamplesModule = CdkDragDropExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-drag-drop.umd.js.map
