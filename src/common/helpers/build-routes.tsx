import type { RouteObject } from 'react-router-dom';
import AuthGateway from '@components/auth-gateway';
import Layout from '@components/layout';

const buildRoutes = (routes: any[]): RouteObject[] | undefined =>
  routes?.map((route) => {
    const {
      isPrivate = true,
      isOnlyGuest = false,
      element,
      layoutProps,
      ...rest
    } = route;

    return {
      ...rest,
      element: (
        <Layout {...layoutProps}>
          {isPrivate || isOnlyGuest ? (
            <AuthGateway children={element} isOnlyGuest={isOnlyGuest} />
          ) : (
            element
          )}
        </Layout>
      ),
    };
  });

export default buildRoutes;
