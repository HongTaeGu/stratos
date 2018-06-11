import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';

import { IServiceInstance } from '../../../../../../core/cf-api-svc.types';
import { ServicesWallService } from '../../../../../../features/services/services/services-wall.service';
import { AppState } from '../../../../../../store/app-state';
import { APIResource } from '../../../../../../store/types/api.types';
import { ServiceActionHelperService } from '../../../../../data-services/service-action-helper.service';
import { AppChip } from '../../../../chips/chips.component';
import { MetaCardMenuItem } from '../../../list-cards/meta-card/meta-card-base/meta-card.component';
import { CardCell } from '../../../list.types';

@Component({
  selector: 'app-service-instance-card',
  templateUrl: './service-instance-card.component.html',
  styleUrls: ['./service-instance-card.component.scss'],
  providers: [
    ServicesWallService
  ]
})
export class ServiceInstanceCardComponent extends CardCell<APIResource<IServiceInstance>> {
  serviceInstanceEntity: APIResource<IServiceInstance>;
  cfGuid: string;
  cardMenu: MetaCardMenuItem[];

  serviceInstanceTags: AppChip[];
  hasMultipleBindings = new BehaviorSubject(true);

  @Input('row')
  set row(row) {
    if (row) {
      this.serviceInstanceEntity = row;
      this.serviceInstanceTags = row.entity.tags.map(t => ({
        value: t
      }));
      this.cfGuid = row.entity.cfGuid;
      this.hasMultipleBindings.next(!(row.entity.service_bindings.length > 0));
    }
  }

  constructor(
    private store: Store<AppState>,
    private servicesWallService: ServicesWallService,
    private serviceActionHelperService: ServiceActionHelperService
  ) {
    super();


  }

  ngOnInit() {

    this.serviceInstanceTags = this.row.entity.tags.map(t => ({
      value: t
    }));

    this.cardMenu = [
      {
        label: 'Edit',
        action: this.edit,
      },
      {
        label: 'Unbind',
        action: this.detach,
        disabled: observableOf(this.row.entity.service_bindings.length === 0)
      },
      {
        label: 'Delete',
        action: this.delete
      }
    ];

    this.cfGuid = this.row.entity.cfGuid;
  }

  detach = () => {
    this.serviceActionHelperService.detachServiceBinding(this.row.entity.service_bindings, this.row.metadata.guid, this.row.entity.cfGuid);
  }


  delete = () => this.serviceActionHelperService.deleteServiceInstance(
    this.serviceInstanceEntity.metadata.guid,
    this.serviceInstanceEntity.entity.cfGuid
  )

  edit = () => this.serviceActionHelperService.editServiceBinding(
    this.serviceInstanceEntity.metadata.guid,
    this.serviceInstanceEntity.entity.cfGuid
  )

}
