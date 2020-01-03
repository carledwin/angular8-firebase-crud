import { Component, OnInit } from '@angular/core';
import { PolicyService } from './../policy.service';
import { Policy } from './../policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  policies: Policy[];

  ngOnInit() {

    let policy: Policy = {
                      policyNumber: '345',
                      creationDate: new Date(),
                      effectiveDate: new Date(),
                      expireDate: new Date(),
                      paymentOption: 'Credito',
                      policyAmount: 777,
                      extraInfo:'Extra info'
                    };

    this.create(policy);

    this.policyService.getPolicies()
          .subscribe(data => {
            this.policies = data.map(element => {
                                  return { id: element.payload.doc.id,
                                            ...element.payload.doc.data()} as Policy;
                                });
          });
  }

  create(policy: Policy) {
    this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }
}
