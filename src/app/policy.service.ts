import { Policy } from './policy.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class PolicyService {

  private collectionName: string = 'policies';
  constructor(private angularFirestore: AngularFirestore) { }

  getPolicies() {
    return this.angularFirestore.collection(this.collectionName).snapshotChanges();
  }

  createPolicy(policy: Policy) {
    return this.angularFirestore.collection(this.collectionName).add(policy);
  }

  updatePolicy(policy: Policy) {
    delete policy.id;
    this.angularFirestore.doc('policies/' + policy.id).update(policy);
  }

  deletePolicy(id: string) {
    this.angularFirestore.doc('policies/' + id).delete();
  }
}
