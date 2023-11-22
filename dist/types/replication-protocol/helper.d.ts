import type { BulkWriteRow, RxDocumentData, RxDocumentWriteData, RxStorageInstance, RxStorageInstanceReplicationState, RxStorageReplicationMeta, WithDeletedAndAttachments } from '../types/index.d.ts';
export declare function docStateToWriteDoc<RxDocType>(databaseInstanceToken: string, hasAttachments: boolean, keepMeta: boolean, docState: WithDeletedAndAttachments<RxDocType>, previous?: RxDocumentData<RxDocType>): RxDocumentWriteData<RxDocType>;
export declare function writeDocToDocState<RxDocType>(writeDoc: RxDocumentData<RxDocType>, keepAttachments: boolean, keepMeta: boolean): WithDeletedAndAttachments<RxDocType>;
export declare function stripAttachmentsDataFromMetaWriteRows<RxDocType>(state: RxStorageInstanceReplicationState<any>, rows: BulkWriteRow<RxStorageReplicationMeta<RxDocType, any>>[]): BulkWriteRow<RxStorageReplicationMeta<RxDocType, any>>[];
export declare function getUnderlyingPersistentStorage<RxDocType>(instance: RxStorageInstance<RxDocType, any, any, any>): RxStorageInstance<RxDocType, any, any, any>;
