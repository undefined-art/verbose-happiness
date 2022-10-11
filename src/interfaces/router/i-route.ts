import type { RouteObject } from 'react-router-dom';
import type { ILayout } from '../../common/components/layout';
import type ROUTE from '../../constants/routes';

export type RouteKeys = keyof typeof ROUTE;

type IRouteParams<TKey extends RouteKeys> = typeof ROUTE[TKey] extends {
  PARAMS: Record<string, any>;
}
  ? typeof ROUTE[TKey]['PARAMS']
  : undefined;

type RequiredFieldsOnly<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type OptionalFieldsOnly<T> = {
  [K in keyof T as T[K] extends undefined ? never : K]: T[K];
};

type EnumsFieldsOnly<T> = {
  [K in keyof T as T[K] extends object ? K : never]: T[K];
};

export type IParams<TRouteKey extends RouteKeys> = {
  [field in keyof RequiredFieldsOnly<IRouteParams<TRouteKey>>]: string;
} & {
  [field in keyof OptionalFieldsOnly<IRouteParams<TRouteKey>>]?: string;
} & {
  [field in keyof EnumsFieldsOnly<
    IRouteParams<TRouteKey>
  >]: IRouteParams<TRouteKey>[field][keyof IRouteParams<TRouteKey>[field]];
};

export interface IRoute extends RouteObject {
  isPrivate?: boolean;
  isOnlyGuest?: boolean;
  layoutProps?: ILayout;
}
