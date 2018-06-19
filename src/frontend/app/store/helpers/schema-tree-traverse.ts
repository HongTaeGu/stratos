import { RecursiveDelete } from '../effects/recusive-entity-delete.effect';
import { IRequestDataState } from '../types/entity.types';
import { schema, denormalize, Schema } from 'normalizr';
import { EntitySchema } from './entity-factory';

interface IFlatTree {
  [entityKey: string]: Set<string>;
}
type TEntityIds = Set<string>;
export class EntitySchemaTreeBuilder {
  public getFlatTree(treeDefinition: RecursiveDelete, state: Partial<IRequestDataState>): IFlatTree {
    const { schema, guid } = treeDefinition;
    const denormed = denormalize(guid, schema, state);
    return this.build(schema, denormed);
  }

  private build(schema: EntitySchema, entity: any, flatTree: IFlatTree = {}): IFlatTree {
    const keys = schema.definition ? Object.keys(schema.definition) : null;
    if (Array.isArray(entity)) {
      return entity.reduce((newflatTree, newEntity) => {
        return this.applySchemaToTree(keys, schema, newEntity, newflatTree);
      }, flatTree);
    }
    return this.applySchemaToTree(keys, schema, entity, flatTree);
  }
  private applySchemaToTree(keys: string[], schema: EntitySchema, entity: any, flatTree: IFlatTree = {}) {
    if (!entity) {
      return flatTree;
    }
    const { definition } = schema;
    flatTree[schema.key] = this.addIdToTree(flatTree[schema.key], schema.getId(entity));
    if (!keys) {
      return flatTree;
    }
    return keys.reduce((fullFlatTree, key) => {
      const newEntity = entity[key];
      const entityDefinition = this.getDefinition(definition[key]);
      if (Array.isArray(newEntity)) {
        return this.build(entityDefinition, newEntity, fullFlatTree);
      }
      return this.handleSingleChildEntity(entityDefinition, newEntity, fullFlatTree, key);
    }, flatTree);
  }

  private addIdToTree(ids: TEntityIds, newId: string) {
    if (!ids) {
      ids = new Set<string>();
    }
    return ids.add(newId);
  }

  private getDefinition(definition) {
    if (Array.isArray(definition)) {
      return definition[0];
    }
    return definition;
  }

  private handleSingleChildEntity(entityDefinition, entity, flatTree: IFlatTree, key: string) {
    const id = entityDefinition.getId(entity);
    const entityKeys = flatTree[key];
    if (!id || !entity || (entityKeys && entityKeys.has(id))) {
      return flatTree;
    }
    flatTree[key] = this.addIdToTree(flatTree[key], id);
    const subKeys = Object.keys(entityDefinition);
    if (subKeys.length > 0) {
      return this.build(entityDefinition, entity, flatTree);
    }
    return flatTree;
  }
}
