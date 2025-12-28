import { inject, Signal, signal } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, onSnapshot, query, QueryFieldFilterConstraint, setDoc, updateDoc, writeBatch, type QuerySnapshot, type DocumentData, type DocumentSnapshot } from '@angular/fire/firestore';
import { EntityBase } from './model';

export class FirestoreBaseDataService<T extends EntityBase> {
	private firestore: Firestore = inject(Firestore);
	private static SERVERS_COLLECTION = 'servers';
	private collection = collection(this.firestore, FirestoreBaseDataService.SERVERS_COLLECTION);
	private document = doc(this.collection, FirestoreBaseDataService.SERVERS_COLLECTION);

	private _entity$$ = signal<T[]>(null as unknown as T[]);

	public get entity$$(): Signal<T[]> {
		return this._entity$$.asReadonly();
	}

	private _query$$ = signal<T[]>(null as unknown as T[]);

	public get query$$(): Signal<T[]> {
		return this._query$$.asReadonly();
	}

	public constructor(private collectionName?: string, private documentName?: string) {
		collectionName ? this.collection = collection(this.firestore, collectionName) : null;
		documentName ? this.document = doc(this.collection, documentName) : null;
	}

	public list(documentName?: string, fieldName?: string): Signal<T[]> {
		onSnapshot(
			query(this.collection),
			(querySnapshot: QuerySnapshot<DocumentData>) => {
				const entities: T[] = [];
				querySnapshot.forEach((doc: DocumentSnapshot<DocumentData>) => {
					entities.push(doc.data() as T);
				});
				this._entity$$.set(entities);
			},
			(error: any) => {
				console.error('Firestore snapshot listener error:', error);
				console.error('Error code:', error.code);
				console.error('Error message:', error.message);
			}
		);
		return this._entity$$.asReadonly();
	}

	public queryData(...queryExp: QueryFieldFilterConstraint[]): Promise<T[]> {
		const q = query(this.collection, ...queryExp);
		return new Promise<T[]>((resolve, reject) => {
			getDocs(q).then((querySnapshot: QuerySnapshot<DocumentData>) => {
				const entities: T[] = [];
				querySnapshot.forEach((doc: DocumentSnapshot<DocumentData>) => {
					entities.push(doc.data() as T);
				});
				resolve(entities);
			});
		});
	}

	public add(entity: T, documentName?: string): Promise<unknown> {
		if (documentName) {
			setDoc(doc(this.collection, documentName), entity);
		}
		return addDoc(this.collection, entity);
	}

	public update<F>(docid: string, entity?: T, path?: string, field?: F): Promise<unknown> {
		const serversRef = doc(this.collection, docid);
		let result;
		if (path) {
			result = updateDoc(serversRef, `${path}`, field !== undefined ? field : entity);
		} else {
			result = updateDoc(serversRef, entity as object);
		}
		return result;
	}

	public batchUpdate<F>(entity?: T, path?: string, field?: F): void {
		getDocs(this.collection).then((snapshot: QuerySnapshot<DocumentData>) => {
			const batch = writeBatch(this.firestore);
			snapshot.forEach((docSnapshot: DocumentSnapshot<DocumentData>) => {
				this.update(docSnapshot.id, entity, path, field);
			});

			batch.commit().then(() => {
				console.log('All documents updated successfully');
			}).catch((error: any) => {
				console.error('Error updating documents:', error);
			});
		});
	}

	public delete(documentName?: string): Promise<void> {
		return deleteDoc(this.getDocument(documentName));
	}

	private getDocument = (documentName?: string) => documentName ? doc(this.collection, documentName) : this.document;
}
