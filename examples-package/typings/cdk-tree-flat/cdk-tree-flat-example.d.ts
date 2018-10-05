import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export declare class FileNode {
    children: FileNode[];
    filename: string;
    type: any;
}
/** Flat node with expandable and level information */
export declare class FileFlatNode {
    expandable: boolean;
    filename: string;
    level: number;
    type: any;
    constructor(expandable: boolean, filename: string, level: number, type: any);
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export declare class FileDatabase {
    dataChange: BehaviorSubject<FileNode[]>;
    readonly data: FileNode[];
    constructor();
    initialize(): void;
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    buildFileTree(obj: {
        [key: string]: any;
    }, level: number): FileNode[];
}
/**
 * @title Tree with flat nodes
 */
export declare class CdkTreeFlatExample {
    treeControl: FlatTreeControl<FileFlatNode>;
    treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
    dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
    constructor(database: FileDatabase);
    hasChild: (_: number, _nodeData: FileFlatNode) => boolean;
    transformer: (node: FileNode, level: number) => FileFlatNode;
    private _getLevel;
    private _isExpandable;
    private _getChildren;
}
